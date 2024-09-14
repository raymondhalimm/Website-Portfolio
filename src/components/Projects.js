import { Carousel } from "flowbite-react";

import blockscoutBackend from "../assets/blockscout/blockscoutBackend.png";
import blockscoutBackend2 from "../assets/blockscout/blockscoutBackend2.png";
import frontend from "../assets/blockscout/frontend.png";
import frontend2 from "../assets/blockscout/frontend2.png";
import frontend3 from "../assets/blockscout/frontend3.png";
import frontend4 from "../assets/blockscout/frontend4.png";
import frontend5 from "../assets/blockscout/frontend5.png";
import jenkinsBuild from "../assets/blockscout/jenkinsBuild.png";
import jenkinsCI from "../assets/blockscout/jenkinsCISystem.png";

import cl1Init from "../assets/ethPrivTestnet/cl1Init.png";
import cl2Init from "../assets/ethPrivTestnet/cl2Init.png";
import el1Init from "../assets/ethPrivTestnet/el1Init.png";
import el2Init from "../assets/ethPrivTestnet/el2Init.png";
import privTestnetKurtosis from "../assets/ethPrivTestnet/privTestnetKurtosis.png";

import erc20ContractSolidity from "../assets/ethContractIndex/erc20ContractSolidity.png";
import erc20TransferGrafana from "../assets/ethContractIndex/erc20TransferGrafana.png";
import erc721ContractSolidity from "../assets/ethContractIndex/erc721ContractSolidity.png";
import erc721MintingGrafana from "../assets/ethContractIndex/erc721MintingGrafana.png";
import prometheusScrape from "../assets/ethContractIndex/prometheusScrape.png";
import usdtIndexerGrafana from "../assets/ethContractIndex/usdtIndexerGrafana.png";

import deployL1Contracts from "../assets/optimism/deployL1Contracts.png";
import metamask from "../assets/optimism/metamask.png";
import opRollupArch from "../assets/optimism/opRollupArch.png";

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

        <div id="projects" className="ml-20"> 
            <div className="text-cyan-500 underline-hover text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono bold lg:pl-28 xl:pl-0 pt-3">
                PROJECTS
            </div>

            <div className="flex flex-col justify-between my-10 lg:my-20 lg:mx-28 xl:mx-0 xl:my-10">
                <div className="flex flex-col w-full text-neutral-200 xl:w-1/2">
                    <span className="text-lg font-sans md:text-2xl xl:text-3xl bold">
                        Blockscout
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base py-3">
                        Deployed and managed a blockchain explorer, gaining in-depth knowledge of EVM chains and their interactions. 
                        Incorporated an indexer, scalable API server with Horizontal Pod Autoscaler (HPA) and Blockscout Web UI
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base">
                        Tech Stack :
                        <ul className="list-disc pl-5">
                            <li>AWS</li>
                            <li>Terraform</li>
                            <li>Kubernetes</li>
                            <li>Jenkins</li>
                        </ul>
                    </span>
                </div>

                <div className="w-5/6 sm:w-[500px] md:w-[650px] lg:w-[700px] xl:w-[1060px] 2xl:w-[1300px] pt-10 lg:pt-0 xl:pt-10 h-72 sm:h-[360px] md:h-[420px] lg:h-[440px] xl:h-[680px] 2xl:h-[800px]">
                    <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
                        <img src={frontend} alt="Frontend of Blockscout"/>
                        <img src={frontend2} alt="Frontend2 of Blockscout"/>
                        <img src={frontend3} alt="Frontend3 of Blockscout"/>
                        <img src={frontend4} alt="Frontend4 of Blockscout"/>
                        <img src={frontend5} alt="Frontend5 of Blockscout"/>
                        <img src={blockscoutBackend} alt="Backend of Blockscout"/>
                        <img src={blockscoutBackend2} alt="Backend2 of Blockscout"/>
                        <img src={jenkinsCI} alt="Jenkins CI System"/>
                        <img src={jenkinsBuild} alt="Jenkins Build Success"/>
                    </Carousel>
                </div>
            </div>
            

            <div className="flex flex-col justify-between lg:mx-28 xl:mx-0 mt-32 mb-20">
                <div className="flex flex-col w-full text-neutral-200 xl:w-1/2 ">
                    <span className="text-lg font-sans md:text-2xl xl:text-3xl bold">
                        Ethereum Private Testnet
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base py-3">
                        Deployed a private Ethereum network using Kurtosis, configuring multiple Geth nodes to simulate a controlled testing environment
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base">
                        Tech Stack :
                        <ul className="list-disc pl-5">
                            <li>Ethereum Blockchain</li>
                            <li>Kurtosis</li>
                            <li>Geth</li>
                        </ul>
                    </span>
                </div>

                <div className="w-5/6 sm:w-[520px] md:w-[650px] lg:w-[820px] xl:w-[1060px] 2xl:w-[1300px] pt-10 lg:pt-0 xl:pt-10 h-72 sm:h-[340px] md:h-[420px] xl:h-[680px] 2xl:h-[800px]">
                    <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
                        <img src={el1Init} alt="EL1 Init"/>
                        <img src={el2Init} alt="EL2 Init"/>
                        <img src={cl1Init} alt="CL1 Init"/>
                        <img src={cl2Init} alt="CL2 Init"/>
                        <img src={privTestnetKurtosis} alt="Private Testnet using Kurtosis"/>
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-col justify-between lg:mx-28 xl:mx-0 my-20">
                <div className="flex flex-col w-full text-neutral-200 xl:w-1/2 ">
                    <span className="text-lg font-sans md:text-2xl xl:text-3xl bold">
                        Ethereum Contract Deployment and Indexing
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base py-3">
                        Developed an ERC20 contract indexer to track USDT contract activities on Ethereum blockchain.
                        Created and deployed ERC20 and ERC721 contracts, and implemented stress test solution to evaluate impacts on network resources during ERC20 token transfers and NFT minting
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base">
                        Tech Stack :
                        <ul className="list-disc pl-5">
                            <li>Python</li>
                            <li>Solidity</li>
                            <li>Ethereum Blockchain</li>
                            <li>Prometheus</li>
                            <li>Grafana</li>
                        </ul>
                    </span>
                </div>

                <div className="w-5/6 sm:w-[500px] md:w-[650px] lg:w-[780px] xl:w-[1060px] 2xl:w-[1300px] pt-10 lg:pt-0 xl:pt-10 h-72 sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[680px] 2xl:h-[800px]">
                    <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
                        <img src={usdtIndexerGrafana} alt="USDT Indexer on Grafana"/>
                        <img src={erc20TransferGrafana} alt="ERC20 Transfer on Grafana"/>
                        <img src={erc721MintingGrafana} alt="ERC721 Minting on Grafana"/>
                        <img src={prometheusScrape} alt="Prometheus Scraping"/>
                        <img src={erc20ContractSolidity} alt="ERC20 Token Contract"/>
                        <img src={erc721ContractSolidity} alt="ERC721 NFT Contract"/>
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-col justify-between lg:mx-28 xl:mx-0 my-20">
                <div className="flex flex-col w-full text-neutral-200 xl:w-1/2 ">
                    <span className="text-lg font-sans md:text-2xl xl:text-3xl bold">
                        Optimism Stack Testnet Chain
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base py-3">
                        Established a local Ethereum Optimism stack to observe the deployment of a full operational L2 scaling technologies including its L1 and L2 network interactions
                    </span>
                </div>

                <div className="w-5/6 sm:w-[500px] md:w-[650px] lg:w-[780px] xl:w-[1060px] 2xl:w-[1300px] pt-10 lg:pt-0 xl:pt-10 h-72 sm:h-[360px] md:h-[420px] lg:h-[460px] xl:h-[680px] 2xl:h-[800px]">
                    <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
                        <img src={deployL1Contracts} alt="Deploying L1 Contracts"/>
                        <img src={opRollupArch} alt="Op-Geth, Op-Node, Op-Batcher, Op-Proposer"/>
                        <img src={metamask} alt="Metamask Wallet to Store Sepolia"/>
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-col justify-between lg:mx-28 xl:mx-0 my-20">
                <div className="flex flex-col w-full text-neutral-200 xl:w-1/2 ">
                    <span className="text-lg font-sans md:text-2xl xl:text-3xl bold">
                        DeepPurple
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base py-3">
                        A web application software that analyzed uploaded Customer Service audio recordings and generates real-time transcriptions using Google’s speech-to-text API. 
                        These transcriptions are then analyzed by the GPT-3 API to produce insights that are leveraged to enhance customer experience and agent performance.
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base">
                        Tech Stack :
                        <ul className="list-disc pl-5">
                            <li>Spring Boot</li>
                            <li>React.js</li>
                            <li>AWS RDS</li>
                            <li>AWS Amplify</li>
                            <li>AWS Elastic Beansalk</li>
                        </ul>
                    </span>
                </div>

                <div className="w-5/6 sm:w-[500px] md:w-[650px] lg:w-[800px] xl:w-[1060px] 2xl:w-[1300px] pt-10 lg:pt-0 xl:pt-10 h-72 sm:h-[340px] md:h-[420px] lg:h-[460px] xl:h-[600px] 2xl:h-[700px]">
                    <Carousel theme={customTheme} slideInterval={5000} pauseOnHover>
                        <img src={landingPage} alt="Landing Page of DeepPurple"/>
                        <img src={landingPage2} alt="Landing Page 2 of DeepPurple"/>
                        <img src={firstFunction} alt="First Function of DeepPurple"/>
                        <img src={func2Intro} alt="Second Function Introduction"/>
                        <img src={employeeList} alt="Employee List Page"/>
                        <img src={recList} alt="Recording List Page"/>
                        {/* <img src={uploadRecording} alt="Uploading Recording"/> */}
                        <img src={recAnalysis} alt="Recording Analysis Page 1"/>
                        <img src={recAnalysis2} alt="Recording Analysis Page 2"/>
                        <img src={sumAnalysis} alt="Summary Analysis Page 1"/>
                        <img src={sumAnalysis2} alt="Summary Analysis Page 2"/>
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-col justify-between lg:mx-28 xl:mx-0 my-20">
                <div className="flex flex-col w-full text-neutral-200 xl:w-1/2 ">
                    <span className="text-lg font-sans md:text-2xl xl:text-3xl bold">
                        Research Conference Management Application
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base py-3">
                        Research Conference Management System that supports four different user types, System Admins, Conference Chairs, Reviewers, and Authors with the purpose of supporting 
                        the submission of papers by Authors, the allocation of papers to Reviewers, and the acceptance and rejection of papers by Conference Chairs
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base">
                        Tech Stack :
                        <ul className="list-disc pl-5">
                            <li>PHP</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>MySQL</li>
                        </ul>
                    </span>
                </div>

                <div className="w-5/6 sm:w-[500px] md:w-[650px] lg:w-[750px] xl:w-[1060px] 2xl:w-[1300px] pt-10 lg:pt-0 xl:pt-10 h-72 sm:h-[340px] md:h-[420px] lg:h-[450px] xl:h-[600px] 2xl:h-[700px]">
                    <Carousel theme={customTheme} slideInterval={4500} pauseOnHover>
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

            <div className="flex flex-col  justify-between lg:mx-28 xl:mx-0 my-20">
                <div className="flex flex-col  w-full text-neutral-200 xl:w-1/2 ">
                    <span className="text-lg font-sans md:text-2xl xl:text-3xl bold">
                        Excel Product Search Tool
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base py-3">
                        A Python tool for efficiently searching specific product across multiple Excel sheets with uniform templates featuring distinct dataset  
                    </span>
                    <span className="text-xs font-serif md:text-sm xl:text-base">
                        Tech Stack :
                        <ul className="list-disc pl-5">
                            <li>Python</li>
                        </ul>
                    </span>
                </div>

                <div className="w-5/6 sm:w-[500px] md:w-[650px] lg:w-[760px] xl:w-[1000px] 2xl:w-[1200px]  pt-10 h-56 sm:h-[280px] md:h-80 lg:h-[400px] xl:h-[500px] 2xl:h-[550px] ">
                    <Carousel slideInterval={4000} pauseOnHover>
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