"use client";

import Image from "next/image";
import Head from "next/head";



// socialmedia icon
import { 
  AiOutlineGithub ,
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillFacebook, 
  AiOutlineWhatsApp, 
  AiFillTikTok } from "react-icons/ai";

// image
import profileImage from './assest/my.png';
import web from './assest/web.png';
import soft from './assest/soft.png';
import ui1 from './assest/ui2.png';
import ui2 from './assest/ui3.png'; 
import ui4 from './assest/ui4.png';

// hooks
import React , { useState }  from 'react';
// darkMode-icon
import {BsMoonStarsFill} from "react-icons/bs";
// frammer motion
import { motion }  from "framer-motion";



export default function Home() {
  const [darkMode , setDarkeMode] = useState (false);
  // darkmopde funtion
  return (
    <div className={darkMode? "dark" : ""}>
    {/* <div> */}
      <Head>
        <title>portfolio site</title>
        <style>
          @import 
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style> 
      </Head>

      <main className=" font-Poppins bg-green-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        {/* nav and hero */}
        <section>
          {/*nav */}
            <nav className="py-10 flex justify-between " >
              <h1 className=" text-sm md:text-xl dark:text-white">
                Ravindu Sithumina
              </h1>
              <ul className="flex items-center ">
                {/* icon */}
                <li>
                  <BsMoonStarsFill
                  onClick={()=>setDarkeMode(!darkMode)}
                  className="cursor-pointer text-xl mx-5 dark:text-white" />
                </li>
                <li>
                  <a 
                  href ="https://drive.google.com/file/d/1cWNt_Z9T_tCQ1wrfgws1no4_a_ZfOB6B/view?usp=sharing" 
                  className=" bg-green-400 text-black px-2 py-2 border-none rounded-md " 
                  download={"Resume"}>
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            {/* hero */}
            <div className="text-center p-10 ">
              <h1 className="text-5xl font-bold text-green-400 md:text-6xl lg:text-7xl lg:mb-4">
                Ravindu Sithumina
              </h1>
              <h3 className="text-2xl py-4 md:text-3xl dark:text-white">
                Softwear and Website Developer
              </h3>
              <p className="text-sm py-4 text-gray-500 max-w-xl mx-auto md:text-md dark:text-gray-400">
              Hello , welcome my parsonal website. I&apos;m Ravindu . 
              i&apos;m following Higher National Diploma in Information Technology.
              I&apos;m specialized training in Web developing , Application Developing and UI/UX.
              </p>
              {/* socialmedia */}
              <div className="flex text-5xl justify-center gap-16 text-gray-600">
                <a href="https://github.com/RavinduSithumina?tab=repositories"><AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/ravindu-sithumina-8a5410305/"><AiFillLinkedin /></a>
                <a href=""><AiFillTwitterCircle /></a> 
              </div>
              {/* profile image */}
              
              <motion.div
              initial={{opacity:0 , scale:0.5}}
              animate={{opacity:1 , scale:1}}
              transition={{duration:0.5}}
              >
              <div className="m-auto relative bg-gradient-to-b from-green-400 w-80 h-90 mt-20 rounded-full ">
                <Image src={profileImage} alt="profile image" width={400} height={200}/>
              </div>
              </motion.div>

            </div>
        </section>
        
          {/* services section */}
        <section>
          <div className=" p-5">
            <h2 className="text-2xl font-bold py-5 text-gray-400 leading-6 ">
              Services I offers
            </h2>
            <p className="text-sm py-2 text-gray-800 dark:text-gray-400">
            I am specialized training in HNDIT , 
            known for my strong teamwork and leadership skills.
            I can  working collaboratively with diverse teams to 
            achieve common objectives.As a team leader , 
            I can demonstrated the ability to take charge ,
            motivate other and guide teams toward achieving goals.
            </p>
          </div>
          {/* services card */}
          
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* web card */}
            <motion.div
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            >
            <div className="my-10 bg-green-400 text-center shadow-sm p-5 rounded-xl  ">
              <Image src={web} alt="web icon" width={200} height={100} className="inline"/>
              <h3 className="text-xl  font-bold py-2 ">Web Developer</h3>
              <p className="text-gray-700 leading-6 ">
                I can design web site and have skill use  HTML ,CSS ,
                JavaScript, react JS , Next JS , Thilwindcss , ..
                for a website  
              </p>
            </div>
            </motion.div>
            {/* soft card */}
            <motion.div
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            >
            <div className="bg-green-400 my-10 text-center shadow-sm p-5 rounded-xl">
            <Image src={soft} alt="web icon" width={200} height={100} className="inline"/>
              <h3 className="text-xl font-bold py-2 ">Software Developer</h3>
              <p className="text-gray-700 leading-6">
                I can develop application front and back end and have skill use  
                java, OOP , firebase , SQL ,... for a create application 
              </p>
            </div>
            </motion.div>
          </div>
        </section>
        {/* work section */}
        <section>
          <div>
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <p className="py-2 text-gray-700 leading-6 dark:text-gray-400">
              This is some of the Userinterface of my project . 
              I can design Userinterface for mobile application and 
              web application . 
              i design Userinterface with Figma
            </p>
            {/* work ui image */}
            <div className="flex flex-col gap-10 p-10 md:flex-row lg:flex-wrap">
              <motion.div
              whileHover={{scale:1.1 , rotate:2}}
              whileTap={{scale:0.9 , rotate:-10 , borderRadius:"100%"}}
              >
              <div className="basis-1/3 flex-1">
                {/* <h2 className="py-2 , text-center , font-bold , text-gray-900">Clothing shop website Userinterface</h2> */}
                <Image 
                src={ui1} 
                alt="web ui1" 
                layout="responsive" 
                className="rounded-xl object-cover "/>
              </div>
              </motion.div>

              <motion.div
              whileHover={{scale:1.1 , rotate:-2}}
              whileTap={{scale:0.9 , rotate:10 , borderRadius:"100%"}}
              >
              <div className="basis-1/3 flex-1">
                {/* <h2 className="py-2 , text-center , font-bold , text-gray-900">Vehical SpareParts shop website Userinterface</h2> */}
                <Image 
                src={ui2} 
                alt="web ui1" 
                layout="responsive" 
                className="rounded-xl object-cover "/>
              </div>
              </motion.div>

              <motion.div
              whileHover={{scale:1.1 , rotate:2}}
              whileTap={{scale:0.9 , rotate:-10 , borderRadius:"100%"}}
              >
              <div className="basis-1/3 flex-1">
                <Image src={ui4} 
                alt="web ui4" 
                layout="responsive" 
                className="rounded-xl object-cover"/>
              </div>
              </motion.div>
            </div>

          </div>
        </section>
        {/* footer */}
        <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 ">
        <div>
          <h3 className="text-base mb-2 md:text-xl dark:text-white">
            Contect me for more details
          </h3> 
          <p className="opacity-60 dark:text-white">
            If you want more details you can contect me ant 
            social account and you can download my CV 
            useing resume button
          </p>
        </div>
        {/* footer social */}
        <div>
        <div className="flex text-2xl justify-center gap-10 text-gray-600">
                <a href="https://github.com/RavinduSithumina?tab=repositories"><AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/ravindu-sithumina-8a5410305/"><AiFillLinkedin /></a>
                <a href=""><AiFillTwitterCircle /></a> 
                <a href="https://www.facebook.com/ravindu.sithumina?mibextid=ZbWKwL"><AiFillFacebook /></a>
                <a href="https://wa.me/qr/O5K7AT2AGVHEL1"><AiOutlineWhatsApp /></a>
                <a href="https://www.tiktok.com/@d_a_g_a_y_a_04?_t=8pd6M49uWud&_r=1"><AiFillTikTok /></a>
              </div>
        </div>
        </footer>
      </main>
    </div>
  );
}
