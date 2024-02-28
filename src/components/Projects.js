import { Carousel } from "flowbite-react";

import authorPage from "../assets/314/author.png";
import authorSubmitPage from "../assets/314/authsubmit.png";
import confChairPage from "../assets/314/cchair.png";
import ccManageBidPage from "../assets/314/ccmanagebid.png";
import createAccPage from "../assets/314/createacc.png";
import loginPage from "../assets/314/login.png";
import reviewerPage from "../assets/314/review.png";
import submitReviewPage from "../assets/314/subreview.png";
import sysAdminPage from "../assets/314/sysad.png";

import landingPage from "../assets/fyp/landingPage.png";
import landingPage2 from "../assets/fyp/landingPage2.png";
import employeeList from "../assets/fyp/employeeLis.png";
import firstFunction from "../assets/fyp/firstFunction.png";
import func2Intro from "../assets/fyp/func2Intro.png";
import recAnalysis from "../assets/fyp/recAnalysis.png";
import recAnalysis2 from "../assets/fyp/recAnalysis2.png";
import recList from "../assets/fyp/recList.png";
import sumAnalysis from "../assets/fyp/sumAnalysis1.png";
import sumAnalysis2 from "../assets/fyp/sumAnalysis2.png";
import uploadRecording from "../assets/fyp/uploadRecord.png";

import year from "../assets/excel/year.png";
import month from "../assets/excel/month.png";
import month2 from "../assets/excel/month2.png";

import { CustomFlowbiteTheme } from "flowbite-react";

const customTheme : CustomFlowbiteTheme['carousel'] = {
    indicators: {
        active: {
          off: "bg-black/50 hover:bg-black dark:bg-gray-600/50 dark:hover:bg-gray-600",
          on: "bg-black dark:bg-gray-600"
        },
    },
    control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-black/50 dark:bg-gray-600/30 dark:group-hover:bg-gray600/60 dark:group-focus:ring-gray-600/70 sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-black/30 dark:text-gray-600 sm:h-6 sm:w-6"
    }
}

function Projects () {
    return (

        <div id="projects" className="mr-10"> 
            <div className="text-5xl font-mono bold pt-20">
                PROJECTS
            </div>

            <div className="flex flex-row border border-black justify-between my-40">
                <div className="flex flex-col border border-black w-1/2">
                    <span className="text-3xl bold">
                        DeepPurple
                    </span>
                    <span className="py-3">
                        A web application software that analyzed uploaded Customer Service audio recordings and generates real-time transcriptions using Google’s speech-to-text API. 
                        These transcriptions are then analyzed by the GPT-3 API to produce insights that are leveraged to enhance customer experience and agent performance.
                    </span>
                    <span>
                        Tools used :
                        <ul className="list-disc pl-5">
                            <li>Spring Boot</li>
                            <li>React.js</li>
                            <li>AWS RDS</li>
                            <li>AWS Amplify</li>
                            <li>AWS Elastic Beansalk</li>
                        </ul>
                    </span>
                </div>

                <div className="w-[600px] h-56 border border-black sm:h-72 xl:h-80 2xl:h-[332px]">
                    <Carousel theme={customTheme} slideInterval={2000}>
                        <img src={landingPage} alt="Landing Page of DeepPurple"/>
                        <img src={landingPage2} alt="Landing Page 2 of DeepPurple"/>
                        <img src={firstFunction} alt="First Function of DeepPurple"/>
                        <img src={func2Intro} alt="Second Function Introduction"/>
                        <img src={employeeList} alt="Employee List Page"/>
                        <img src={recList} alt="Recording List Page"/>
                        <img src={uploadRecording} alt="Uploading Recording"/>
                        <img src={recAnalysis} alt="Recording Analysis Page 1"/>
                        <img src={recAnalysis2} alt="Recording Analysis Page 2"/>
                        <img src={sumAnalysis} alt="Summary Analysis Page 1"/>
                        <img src={sumAnalysis2} alt="Summary Analysis Page 2"/>
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-row border border-black justify-between my-60">
                <div className="flex flex-col border border-black w-1/2 ">
                    <span className="text-3xl bold">
                        Research Conference Management Application
                    </span>
                    <span className="py-3">
                        Research Conference Management System that supports four different user types, System Admins, Conference Chairs, Reviewers, and Authors with the purpose of supporting 
                        the submission of papers by Authors, the allocation of papers to Reviewers, and the acceptance and rejection of papers by Conference Chairs
                </span>
                    <span>
                        Tools used :
                        <ul className="list-disc pl-5">
                            <li>PHP</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>MySQL</li>
                        </ul>
                    </span>
                </div>

                <div className="w-[600px] h-56 border border-black sm:h-72 xl:h-80 2xl:h-[332px]">
                    <Carousel theme={customTheme}>
                        <img src={createAccPage} alt="Create Account Page"/>
                        <img src={loginPage} alt="Login Page"/>
                        <img src={authorPage} alt="Author Page"/>
                        <img src={authorSubmitPage} alt="Author Submit Page"/>
                        <img src={reviewerPage} alt="Reviewer Page"/>
                        <img src={submitReviewPage} alt="Submit Review Page"/>
                        <img src={confChairPage} alt="Conference Chair Page"/>
                        <img src={ccManageBidPage} alt="Conference Chair Manage Bid Page"/>
                        <img src={sysAdminPage} alt="System Admin Page"/>
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-row border border-black justify-between my-60">
                <div className="flex flex-col border border-black w-1/2">
                    <span className="text-3xl bold">
                        Excel Product Search Tool
                    </span>
                    <span className="py-3">
                        A Python tool for efficiently searching specific product across multiple Excel sheets with uniform templates featuring distinct dataset  
                    </span>
                    <span>
                        Tools used :
                        <ul className="list-disc pl-5">
                            <li>Python</li>
                        </ul>
                    </span>
                </div>

                <div className="w-[600px] h-52 border border-black sm:h-64 xl:h-64 2xl:h-64">
                    <Carousel slideInterval={5000}>
                        <img src={year} alt="Year Test"/>
                        <img src={month} alt="Month Test"/>
                        <img src={month2} alt = "Month 2 Test"/>
                    </Carousel>
                </div>
            </div>

            

        </div>
    );
}

export default Projects;