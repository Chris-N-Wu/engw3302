import React, {useEffect, useRef} from 'react';
import './App.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarouselDefault from "./components/CarouselDefault";

import galileo from './assets/1609-Galileo.jpg';
import newtonian from './assets/1668-Newtonian.jpg'
import yerkes from './assets/1897-Yerkes Observatory.jpg';
import spitzer from './assets/1946-LymanSpitzer.jpg';
import wavelengths from './assets/1946-wavelengths.jpg';
import stargazer from './assets/1968-Stargazer.webp';
import iras from './assets/1983-IRAS.jpg';
import hubble from './assets/1990-Hubble.webp';
import eht from './assets/2017-EventHorizonTelescope.png'
import jwst from './assets/2021-JamesWebb.webp';

const x = 500;

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

    const timelineSection = useRef(null);
    const linkSection = useRef(null);

    const scrollToTimeline = () => { // @ts-ignore
        window.scrollTo({top: timelineSection.current.offsetTop, behavior: 'smooth',});
    }
    const scrollToLinkSection = () => { // @ts-ignore
        window.scrollTo({top: linkSection.current.offsetTop, behavior: 'smooth',});
    }

    return (
        <div className={"bg-gray-300"}>

            <div className={"landing"}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl tracking-wider">
                    <strong><i> Evelyn </i></strong> Will You...
                </h1>
                <div className={"flex mb-10 absolute w-full bottom-0 content-center justify-center"}>
                    <button className={"ripple rounded-full animate-bounce border-blue-600 border-2"}
                            onClick={scrollToTimeline}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="w-12 h-12 rounded-full icon icon-tabler icons-tabler-outline icon-tabler-arrow-down">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 5l0 14"/>
                            <path d="M18 13l-6 6"/>
                            <path d="M6 13l6 6"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div ref={timelineSection}>
                {/*<ul className={"z-50 sticky top-0 bg-gradient-to-l from-amber-500 flex px-8 gap-4 space-x-6 justify-end text-white text-3xl alumniPin "}>*/}
                {/*    <li className={"hover:font-bold"}>*/}
                {/*        <button onClick={scrollToTimeline}>*/}
                {/*            <span className={"hover:tracking-wider"}>Europe 2024</span>*/}
                {/*        </button>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <div className={'evelynsshit'}>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl tracking-wider">
                        Bring us to a 3 Star Michelin Restaurant?
                        <div className={"flex mb-10 bottom-0 content-center justify-center"}>
                            <button className={"ripple rounded-full animate-bounce border-blue-600 border-2"}
                                    onClick={scrollToLinkSection}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="w-12 h-12 rounded-full icon icon-tabler icons-tabler-outline icon-tabler-arrow-down">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 5l0 14"/>
                                    <path d="M18 13l-6 6"/>
                                    <path d="M6 13l6 6"/>
                                </svg>
                            </button>
                        </div>
                    </h1>
                    <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-7xl tracking-wider">
                        (And pay)
                    </h2>
                </div>
            </div>
            <div className={'evelynsshit2'} ref={linkSection}>
                <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl tracking-wider text-amber-500 hover:bg-amber-300/70 hover:text-amber-800">
                    <a href="https://www.chevalblancbasel.com/en/reservation" target="_blank" rel="noopener noreferrer"><strong><u>Cheval Blanc by Peter Knogl</u></strong></a>
                </h1>
            </div>
        </div>
    );
}

export default App;
