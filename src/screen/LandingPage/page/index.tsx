import React from "react";
import { useState } from "react";
import './index.scss';

const LandingPage = () => {

  const [listData,setListData] = useState([
    {
      id : 1,
      stepName : "Get Started",
      title : "What level of  hiker are you?",
      content : "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
      imageLink : "./src/screen/LandingPage/assets/image1.png"
    },
    {
      id : 2,
      stepName : "Hiking Essentials",
      title : "Picking the right Hiking Gear!",
      content : "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet",
      imageLink : "./src/screen/LandingPage/assets/image2.png"
    },
    {
      id : 3,
      stepName : "where you go is the key",
      title : "Understand Your Map & Timing",
      content : "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
      imageLink : "./src/screen/LandingPage/assets/image3.png"
    }
  ]);

  return (
    <>
      <div className='relative overflow-auto bg-slate-900'>
          <div className="w-screen h-screen relative">
            <img className='absolute z-0 top-0 w-screen h-screen' src='./src/screen/LandingPage/assets/background.png'/>
            <img className='absolute z-10 top-0 w-screen h-screen' src='./src/screen/LandingPage/assets/background1.png'/>
            <img className='absolute z-20 top-2/4 w-screen h-screen' src='./src/screen/LandingPage/assets/background3.png'/>
            <img className='absolute z-30 cus-top-70 w-screen h-screen' src='./src/screen/LandingPage/assets/background2.png'/>
            <img className='absolute z-40 cus-top-80 w-screen h-screen' src='./src/screen/LandingPage/assets/background4.png'/>
          </div>
          <div className='content-page'>
            <div className='w-full h-screen flex flex-col py-16 px-16'>
              <div className='menu'>
                  <div className='flex gap-2 title-logo'>
                    MNTT
                  </div>
                  <div className='flex gap-4'>
                      <a className='title-item'>Equipment</a>
                      <a className='title-item'>About us</a>
                      <a className='title-item'>Blog</a>
                  </div>
                  <div className='flex gap-2 cursor-pointer'>
                    <img className='w-6 h-6' src="./src/screen/LandingPage/assets/icon/ico_account.svg" alt="Account"/>
                    <span className='title-item'>Account</span>
                  </div>
              </div>
              <div className='wrap-content'>
                <div className='flex gap-3 items-center'>
                  <div className='line'>
                  </div>
                  <span className='first-title text-lg font-bold'>
                    A Hiking guide
                  </span>
                </div>
                <span className='seccond-title text-7xl font-semibold'>
                  Be Prepared For The <br></br> Mountains And Beyond!
                </span>
                <div className='flex gap-4 items-center'>
                  <span className='third-title text-lg font-bold'>
                    scroll down
                  </span>
                  <img className='w-6 h-6 cursor-pointer' src="./src/screen/LandingPage/assets/icon/ico_arrow.svg" alt="scroll down"/>
                </div>
              </div>
            </div>
            <div className='wrap-new'>
              {
                listData.map((item : any,index : number) => {
                  const classStyle = index % 2 === 0 ? 'flex-row-reverse' : '';
                  return (
                    <div key={index} className={`flex gap-4 ${classStyle}`}>
                      <div className="wrap-new-content w-full h-full flex items-center">
                        <div className="new-content">
                          <div className='flex gap-3 items-center'>
                            <div className='line'>
                            </div>
                            <span className='name-new text-lg font-bold'>
                              {item.stepName}
                            </span>
                          </div>
                          <span className="title-new">
                            {item.title}
                          </span>
                          <span className="content-new">
                            {item.content}
                          </span>
                        </div>
                      </div>
                      <img className='new-image' src={item.imageLink}/>
                    </div>
                  )
                })
              }
            </div>
            <div className="footer flex items-start justify-around">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                  <span>MNTN</span>
                  <span>Get out there & discover your next slope, mountain & destination!</span>
                </div>
                <span>Copyright 2023 MNTN, Inc. Terms & Privacy</span>
              </div>
              <div className="flex flex-row gap-64">
                <div className="flex flex-col gap-2">
                  <span>More on The Blog</span>
                  <span>About us</span>
                  <span>Write for us</span>
                  <span>Contact Us</span>
                  <span>Write for us</span>
                  <span>Contact Us</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span>More on MNTN</span>
                  <span>The team</span>
                  <span>Jobs</span>
                  <span>Press</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default LandingPage
