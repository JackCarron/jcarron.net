const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Access AWS Access Keys from environment variables
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucketName = 'jacks-website';

// Local build directory
const localBuildDirectory = 'build/';

// Initialize AWS SDK with the credentials
AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

// Initialize S3 client
const s3 = new AWS.S3({});

// Function to delete all objects in an S3 bucket
async function deleteObjectsInDirectory(bucket, directoryPath) {
  const params = {
    Bucket: bucket,
    Prefix: directoryPath,
  };

  const objects = await s3.listObjectsV2(params).promise();

  if (objects.Contents && objects.Contents.length > 0) {
    const deleteParams = {
      Bucket: bucket,
      Delete: { Objects: [] },
    };

    objects.Contents.forEach((content) => {
      deleteParams.Delete.Objects.push({ Key: content.Key });
    });

    await s3.deleteObjects(deleteParams).promise();
    console.log(
      `Deleted ${objects.Contents.length} objects from S3 bucket ${bucket}`
    );
  } else {
    console.log(`No objects found in S3 bucket ${bucket}`);
  }
}

// Function to upload files to S3
const uploadFileToS3 = async (filePath, s3Bucket) => {
  await deleteObjectsInDirectory(s3Bucket, '');
  const fileStream = fs.createReadStream(filePath);
  const relativePath = path.relative(localBuildDirectory, filePath);
  const s3Path = path.join(relativePath).replace(/\\/g, '/'); // Normalize path for Windows

  // Upload the file to S3
  s3.upload({
    Bucket: bucketName,
    Key: s3Path,
    Body: fileStream,
  })
    .promise()
    .then(() => {
      console.log(
        `Uploaded ${filePath} to S3 bucket ${bucketName} as ${s3Path}`
      );
    })
    .catch((error) => {
      console.error(`Error uploading ${filePath}:`, error);
    });
};

function uploadFilesRecursively(directoryPath) {
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If it's a directory within localBuildDirectory, recursively traverse it
      if (filePath.startsWith(localBuildDirectory)) {
        uploadFilesRecursively(filePath);
      }
    } else if (stats.isFile()) {
      // If it's a file within localBuildDirectory, upload it to S3
      if (filePath.startsWith(localBuildDirectory)) {
        uploadFileToS3(filePath, bucketName);
      }
    }
  }
}

// Start the recursive upload from the local build directory
uploadFilesRecursively(localBuildDirectory);
