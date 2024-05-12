import React from 'react'
import Aimainimg from "../Utilities/aimainimg.png";
import Sliderlogos from '../Components/Sliderlogos';
import CustomersSlider from '../Components/CustomersSlider';
import FrequentlyQuestion from '../Components/FrequentlyQuestion';
import Footer from '../Layouts/Footer';
import { Link } from "react-router-dom";
import WorkingAicara from "../Utilities/workingaicara.png";
import CaraAITitle from "../Components/CaraAiTitle";
import Heading1 from '../Components/Heading1';
import UserImg from "../Utilities/user-images.png";
import SearchEngine from "../Utilities/search-engine (2).png";
import Cara from "../Utilities/cara.png";
import Customers from "../Utilities/customers.png";
import Para1 from '../Components/Para1';
import { HiMiniCheckBadge } from "react-icons/hi2";
import MagnetSearch from "../Utilities/magnet-message.png";
import SearchMessage from "../Utilities/mesage-search.png";
import MesageSearch from "../Utilities/searchenginge-message.png";
import BoxText from '../Components/BoxText';
import DataAi from "../Utilities/data-ai.png";
import DatabaseIcon from "../Utilities/Icon awesome-database.png";
import YoutubeIcon from "../Utilities/Icon material-subscriptions.png";
import FaceAi from "../Utilities/Face-Ai.png"
import Button3 from '../Components/Button3';
import { FaCheckCircle } from "react-icons/fa";
import LinkedinImg from "../Utilities/Linkedin (1).png";
import ApolloImg from "../Utilities/apollo.png";
import ChatgptImg from "../Utilities/openai.png";
import GooglestoreImg from "../Utilities/google-chrome-store.png";
import GmailImg from "../Utilities/gmail.png";
export default function B2bdatabase() {
    let WorkingCara = [
        { img: UserImg, title: "Face Recognition", para: "Tell Cara About Your Business, Your Ideal Customer Profile, And Your Preferred Communication Style." },
        { img: SearchEngine, title: "Search Engine", para: "Work With Cara By Reviewing The Leads She Finds And The Outbound Messaging She Ghostwrites For You. Once You're On The Same Page, You Can Ask Her To Work Autonomously." },
        { img: Customers, title: "Technology For Generate Leads", para: "Cara Learns From Every Interaction, Making Your Campaigns Not Only Generate More Meetings, But Also The Right Ones, At Scale." },
    ]
    let DataConso = [
        { img: DatabaseIcon, title: "Data Aggregation", para: "Cara Works With Webtastic AI Nexus, Which Autonomously Indexes Web Data, Social Media, News, Interviews, And Podcasts, And Integrates With Over 50 B2B Data Providers, Including Linkedin, Apollo, And Google." },
        { img: YoutubeIcon, title: "Single Subscription", para: "With Cara Accessing The Precise Data You Need, There's No Need For Subscriptions To Multiple Costly Data Providers Or Worries About Missing Out On Any Other Tools." },
    ]
    let RightMessageAI = [
        { img: MagnetSearch, title: "Prospectiong", para: "Cara Scans Over 50 B2B Data Sources (Eg. Apollo, Hunter, Linkedin) To Help You Find ICP Leads In Buying Mode.", p1: "Web-, Social- And B2B Data", p2: "50+ B2B Data Sources", p3: "275M People" },
        { img: SearchMessage, title: "Research", para: "Next, Cara Conducts Detailed Research On Prospects She Found For You And Triple Verifies The Contact Details.", p1: "People & Company Research", p2: "Waterfall Lead Enrichment", p3: "Triple Verified Email Addresses" },
        { img: MesageSearch, title: "Search Engine", para: "Cara Ghostwrites 1:1 Hyper-Personalized Messages For Each Prospect And Sends Them At Most Likely To Engage.", p1: "1:1 Hyper Personalized Outreach", p2: "Messaging Based On Unique Hook", p3: "Sends At The Right Time" },
    ]
    return (
        <>
            <section className='bg-bgmain bg-no-repeat  bg-center bg-cover  '>
                <div className='salesai container flex flex-col md:flex-row gap-2 md:gap-3 py-10 md:py-0 h-auto md:h-screen'>
                    <div className='md:w-1/2 flex flex-col justify-center gap-3'>
                        <h3 className='text-[25px] md:text-[30px] lg:text-[33px] font-normal'>Hi, I'm Cara, <br/> Your <b>AI Sales Agent</b></h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex flex-wrap items-center gap-2 text-[12px] md:text-[14px]'> <FaCheckCircle className='text-[14px] md:text-[16px]'/> I Search 
                        <div className='flex items-center gap-1 font-normal text-[12px] md:text-[15px]'><img src={LinkedinImg} alt='my-img' />Linkedin</div>
                        <div className='flex items-center gap-1 font-normal text-[12px] md:text-[15px]'><img src={ApolloImg} alt='my-img' />Apollo</div>
                        and 50+ sources to find leads.
                        </li>
                        <li className='flex flex-wrap items-center gap-2 text-[12px] md:text-[14px]'><FaCheckCircle className='text-[14px] md:text-[16px]' /> Then I ghostwrite personalized emails using
                        <div className='flex items-center gap-1 font-normal text-[12px] md:text-[15px]'><img src={ChatgptImg} alt='my-img' />ChatGPT</div>
                        </li>
                        <li className='flex flex-wrap items-center gap-2 text-[12px] md:text-[14px]'><FaCheckCircle className='text-[14px] md:text-[16px]' /> Next, I'll send them with your
                        <div className='flex items-center gap-1 font-normal text-[12px] md:text-[15px]'><img src={GmailImg} alt='my-img' />Gmail Account</div>
                        </li>
                        <div className='rounded-md flex h-16 md:w-3/4 '>
          <input type="text" placeholder='' className='text-sm md:text-md outline-none p-2 bg-white h-10 w-full focus:ring-1 focus:border-black' />
            <Link to="/" className='bg-black text-white font-semibold text-sm md:text-md flex items-center justify-center w-48 h-10'>Start Trail</Link>
          </div>
          <li className='mt-[-10px] flex items-center gap-1 font-normal text-[12px] md:text-[15px]'><img src={GooglestoreImg} alt="" />4,8 / 5 In the Google Chrome Store</li>
                    </ul>
                    </div>
                    <div className='md:w-1/2 flex justify-end items-end'><img src={Aimainimg} alt="" /></div>
                </div>
            </section>
            {/* Slider logos here */}
            <section className='container my-10'>
                <Sliderlogos />
            </section>
            {/* working with cara in AI */}
            <section className='container flex gap-3 flex-col md:flex-row my-10 md:my-16'>
                <div className='md:w-1/2'><img src={WorkingAicara} alt="" /></div>
                <div className='md:w-1/2 md:px-7 flex flex-col gap-3'>
                    <CaraAITitle title="Let's Kick Off Our Collaboration, Here's How. " />
                  <div className='text-center sm:text-start'><Heading1 heading1="Start Working With Cara In Three Steps" /></div>
                    {
                        WorkingCara.map((val, id) => {
                            return (
                                <div className='flex flex-col md:flex-row gap-3 mt-3'>
                                    <img src={val.img} className='md:mb-auto mx-auto w-[20%] md:w-auto' alt="my-image" />
                                    <div className='text-center md:text-start'>
                                        <h4 className='text-[14px] md:text-[17px] font-medium'>{val.title}</h4>
                                        <p className='text-[12px] md:text-[15px] text-para'>{val.para}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
            {/* right message section starts here */}
            <section className='bg-[#ECFFF3]'>
                <div className='container py-16 flex flex-col gap-3'>
                    <div className='flex shadow-lg items-center rounded-full border mr-auto pr-3 text-[12px] md:text-[13px] text-[#8a8a8a] bg-white'><img src={Cara} alt="my-img" className='mr-1' />Here's Why You Should Hire Me Today.</div>
                    <div className='md:w-3/4'><Heading1 heading1="The Right Message, To The Right Person, At The Right Time, On Autopilot" /></div>
                    <div className='md:w-3/4'>  <Para1 para1="Cara Automates Your Outreach Process, From Researching And Identifying The Right People, To Ghostwriting The Highest-Converting 1:1 Personalized Outbound Messages, Sent At The Right Time." />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            RightMessageAI.map((val, id) => {
                                return (
                                    <div className='flex flex-col gap-1 text-center sm:text-start'>
                                        <img src={val.img} alt="my-img" className='m-auto sm:ml-0' />
                                        <h3 className='text-[15px] md:text-[17px] font-medium'>{val.title}</h3>
                                        <p className='text-[12px] md:text-[15px] text-para'>{val.para}</p>
                                        <ul className='flex flex-col '>
                                            <li className='flex mx-auto sm:mx-0 gap-1 text-[12px] md:text-[15px] font-normal text-para items-center'><HiMiniCheckBadge className='text-green' /> {val.p1}</li>
                                            <li className='flex mx-auto sm:mx-0 gap-1 text-[12px] md:text-[15px] font-normal text-para items-center'><HiMiniCheckBadge className='text-green' /> {val.p2}</li>
                                            <li className='flex mx-auto sm:mx-0 gap-1 text-[12px] md:text-[15px] font-normal text-para items-center'><HiMiniCheckBadge className='text-green' /> {val.p3}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            {/* elevate strategy box  */}
            <section className='container text-center my-5'>
                <BoxText heading1="Empower Your Future: Take Charge Today!" para="Seize the opportunity to transform your approach to success. Click now to unlock the full potential of our features and revolutionize your business strategy." btn1="Start to Free" />
            </section>
            {/* All the Data in AI */}
            <section className='container flex items-center gap-3 flex-col md:flex-row my-10 md:my-16'>
                <div className='md:w-1/2'><img src={DataAi} alt="" /></div>
                <div className='md:w-1/2 md:px-7 flex flex-col gap-3'>
                    <CaraAITitle title="No Longer Worry About Missing Out On Tools Or Data." />
                    <Heading1 heading1="All The Data, Consolidated In One Place." />
                    {
                        DataConso.map((val, id) => {
                            return (
                                <div className='flex flex-col md:flex-row gap-3 mt-3'>
                                    <img src={val.img} className='md:mb-auto mx-auto w-[20%] md:w-auto' alt="my-image" />
                                    <div className='text-center md:text-start'>
                                        <h4 className='text-[14px] md:text-[17px] font-medium'>{val.title}</h4>
                                        <p className='text-[12px] md:text-[15px] text-para'>{val.para}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Advance Face AI */}
            <section class="bg-FaceAibg container py-16 flex flex-col md:flex-row gap-3">
                <div className='md:w-1/2 text-white flex flex-col justify-center gap-3'>
                    <div className='flex shadow-lg items-center rounded-full  mr-auto pr-3 text-[12px] md:text-[13px] bg-[#24441F]'><img src={Cara} alt="my-img" className='mr-1' />Here's Why You Should Hire Me Today.</div>
                    <div className='md:w-2/4'> <Heading1 heading1="Advance Face Ai Recognition Algorithm" /></div>
                    <p className='text-[12px] md:text-[15px] font-normal md:w-3/4'>Cara Works With Webtastic AI Nexus,
                        Which Autonomously Indexes Web Data, Social Media, News,
                        Interviews, And Podcasts, And Integrates With Over 50 B2B Data
                        Providers, Including Linkedin, Apollo, And Google.</p>
                        <Link to="/" className='mr-auto text-black'><Button3 btn3="Start to Free"/></Link>
                </div>
                <div className='md:w-1/2'><img src={FaceAi} alt="my-img"  /></div>
            </section>
            <section className='container my-10 md:my-16'>
                <CustomersSlider />
            </section>
            <section className=' bg-[#F5F5F5]'>
                <div className='container py-10 md:py-16 flex flex-col text-center gap-3 md:gap-5'>
                    <FrequentlyQuestion />
                </div>
            </section>
            <Footer />

        </>

    )
}
