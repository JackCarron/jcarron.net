import { useLocation } from "react-router-dom";
import CleanedUpAdhesive from "../assets/pictures/macbook_learning_photos/Cleaned-Up-Adhesive-01.jpg";
import MacbookProDisassembly from "../assets/pictures/macbook_learning_photos/Macbook-Pro-Disasssembly-01.jpg";
import NewBattery01 from "../assets/pictures/macbook_learning_photos/New-Battery-01.jpg";
import { Logo } from "../components/logo";

import ErrorPage from "../error-page";

import './blog.css'

const AVAILABLE_BLOGS = ['a_framework_of_problem_solving'];

export default function Blog() {
    document.title = "Jack Carron | Blog"
    const location = useLocation(); 
    if (AVAILABLE_BLOGS.includes(location.pathname.split('/')[2])) {
        return (
            <div className='container'>
                <div className='header'>
                <Logo />
                <p className='padding-left'>Sunday Dec 4</p>
                <p className='padding-left'>Author: Jack Carron</p>
                <h3 className='title'><u>A Framework of Problem Solving</u></h3>
                </div>
            <div className='content'>
                <p>Innovation on a macro scale starts with an individual’s everyday problem solving. The process begins with curiosity, followed by asking questions, and finally learning. In order to make myself a better innovator, I began with introspection. Starting small, I looked at the dusty inoperable 2015 Macbook Pro on my desk. During my problem solving, I had the thought that consistent learning provides opportunity for inspiration and innovation.</p>
                <img className='blog-photos float-left' src={MacbookProDisassembly} alt='Macbook Pro Disassembly'></img>
                <p>I am well-versed in the field of software engineering. However, I am not as experienced with Apple laptop repairs. When looking at my old laptop that wouldn’t turn on, I was quite challenged. Although I didn’t have the knowledge of what was wrong, I was curious to figure that out. As a result, I started the debugging process. First, I tried to power on the laptop with the power button. The result, a black screen. Next, I plugged in the computer power source and I tried to turn it on. The result, once again, a black screen. However, I was left with a hint, the power input light turned orange. This gave me some hope that the computer was salvageable. But, I still didn’t have much information. It was possible the computer needed to be charged more, so I left it plugged in for 24 hours. After the time elapsed, I opened the laptop and held the power button. The result, yet again, a black screen. However, I was left with another hint! The power input light was still orange, usually a fully charged battery shows a green light after 24 hours of charging. Consequently, I had the suspicion the issue was the battery's ability to hold a charge.</p>
                <img className='blog-photos float-right' src={CleanedUpAdhesive} alt='Cleaned Up Adhesive'></img>
                <p>Since I was curious and frugally minded about the repair cost, I mustered up the courage to tackle this repair myself. I ordered a replacement battery and tool kit for under $100 online. When the package arrived, I jumped for joy and rapidly unboxed it. I followed the battery replacement guide I found online and continued the process of learning. I became familiar with the layout of the inside of the laptop. The most difficult part of this replacement was removing the adhesive Apple uses to mount the battery to the laptop case. After a few hours of applying “elbow grease” towards this adhesive, the old battery was removed. Then it was time to add the new battery and reconstruct the computer.</p>
                <p>The reassembly of the laptop was fairly straightforward, as it was just reversing the steps I made during the disassembly. Finally, it was time to see the finished product. I plugged in the computer, and an orange light on the power input appeared. <i>Phew, I didn’t destroy the computer.</i> Lastly, I held the power button… Success came in the form of an Apple logo and a loading screen.</p>
                <p>I could have merely interpreted this experience as fixing my laptop to save a few dollars. Instead it represented a gateway for tackling more difficult problems. The first step was curiosity, the second step was learning, and the last step was using that knowledge to solve the issue. This triumph has fueled my ambition to provide modern day solutions to modern day problems.</p>
                <img className='blog-photos' src={NewBattery01} alt='New Battery'></img>
            </div>
            </div>
        );
    } else {
        return  <ErrorPage />
    }
    
}
