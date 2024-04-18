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
    const whatsNextSection = useRef(null);
    const attributionsSection = useRef(null);
    const scrollToTimeline = () => { // @ts-ignore
        window.scrollTo({top: timelineSection.current.offsetTop, behavior: 'smooth',});
    }
    const scrollToNext = () => { // @ts-ignore
        window.scrollTo({top: whatsNextSection.current.offsetTop, behavior: 'smooth',});
    }
    const scrollToAttribution = () => { // @ts-ignore
        window.scrollTo({top: attributionsSection.current.offsetTop, behavior: 'smooth',});
    }

    return (
        <div className={"bg-gray-300"}>

            <div className={"landing"}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl tracking-wider">
                    <strong><i> Telescopes </i></strong> Throughout The Ages
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
            <nav ref={timelineSection}>
                <ul className={"z-50 sticky top-0 bg-gradient-to-l from-amber-500 flex px-8 gap-4 space-x-6 justify-end text-white text-3xl alumniPin "}>
                    <li className={"hover:font-bold"}>
                        <button onClick={scrollToTimeline}>
                            <span className={"hover:tracking-wider"}>Timeline</span>
                        </button>
                    </li>
                    <li className={"hover:font-bold"}>
                        <button onClick={scrollToNext}>
                            <span className={"hover:tracking-wider"}>What's Next</span>

                        </button>
                    </li>
                    <li className={"hover:font-bold"}>
                        <button onClick={scrollToAttribution}>
                            <span className={"hover:tracking-wider"}>Attributions</span>

                        </button>
                    </li>
                </ul>

                <div className={"bg-gradient-to-t via-blue-700 from-indigo-900"}>
                    <VerticalTimeline lineColor={"gray"} animate={true}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date="1609"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Galileo Galilei</h3>
                            <h4 className="vertical-timeline-element-subtitle">1609</h4>
                            <p>
                                In 1608, two lens makers in the Netherlands had independently created telescope
                                designs that relied upon glass lenses, typically using two convex lenses. By 1609,
                                Galileo Galilei had improved upon this design and applied it to observing the stars. His
                                new telescope had a magnifying power of ~30, which allowed him to become the first
                                person to observe four of the moons of Jupiter, the phases of Venus, etc. His
                                observations would further reinforce Copernicus' sun-centered system.
                            </p>

                            <img src={galileo} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1668"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Newtonian Telescope</h3>
                            <h4 className="vertical-timeline-element-subtitle">1668</h4>
                            <p>
                                One of the first successful reflecting telescopes. Reflecting mirrors provide a few
                                advantages over refractive mirrors. Reflecting mirrors are typically easier to produce
                                as they don’t need nearly the same level of curvature as refracting mirrors. Refracting
                                mirrors are also known to cause some chromatic aberrations, which are not present with
                                mirrors. Reflecting mirrors were also easier to manufacture and thus allowed for larger
                                sizes, while refracting telescopes are limited to about 1 meter in width. This marked
                                the point where reflecting telescopes would begin to overtake refracting telescopes.
                            </p>
                            <img src={newtonian} alt={"alt"} data-aos={"zoom-in-left"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1946"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Yerkes Observatory</h3>
                            <h4 className="vertical-timeline-element-subtitle">1897</h4>
                            <p>
                                The Great Refractor. Sometimes called the “birthplace of modern astrophysics,” the
                                Yerkes Observatory has hosted many of the great names in astronomy: George Hale, Edwin
                                Hubble, and Carl Sagan. The telescope housed here was and still is the largest
                                refracting telescope ever built. Shortly after its construction, most astronomers
                                switched to reflecting telescopes.
                            </p>
                            <img src={yerkes} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1946"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Lyman Spitzer</h3>
                            <h4 className="vertical-timeline-element-subtitle">1946</h4>
                            <p>
                                In 1946, Yale University astrophysicist Lyman Spitzer Jr. published one of the first
                                papers detailing the advantages of a space based telescope. Some of the many advantages
                                of a space based telescopes are that they avoid much of the interference caused by the
                                Earth’s atmosphere. Space telescopes are also able to observe wavelengths that are
                                blocked by Earth’s atmosphere, such as x-ray and infrared. And of course, if placed
                                properly, they can avoid nearly all forms of light pollution.
                            </p>
                            <img src={spitzer} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                            <img src={wavelengths} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1968"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Stargazer (OAO-2)</h3>
                            <h4 className="vertical-timeline-element-subtitle">1968</h4>
                            <p>
                                One of the first orbiting space telescope launched. First telescope to observe
                                ultraviolet light.
                            </p>
                            <img src={stargazer} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1968"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Infrared Astronomical Satellite</h3>
                            <h4 className="vertical-timeline-element-subtitle">1983</h4>
                            <p>
                                First infrared space observatory. Previously, infrared telescopes were impossible here
                                on Earth due to interference from Earth’s atmosphere. One of the key advantages of
                                infrared wavelengths is the ability to observe light emitted inside a dusty cloud (think
                                stellar nebula) as light at these wavelengths are not as easily absorbed or blocked by
                                gasses or dust.
                            </p>
                            <img src={iras} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1990"
                            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Hubble Space Telescope</h3>
                            <h4 className="vertical-timeline-element-subtitle">1990</h4>
                            <p>
                                The Hubble Space Telescope needs no introduction. Overcoming a plethora of challenges,
                                including a mirror aberration that resulted in multiple focal points which led to blurry
                                images, Hubble has been able to make some of the most important discoveries in
                                astronomy. Everything from key discoveries that characterizes the structure and
                                evolution of the universe, galaxies, nebulae, stars, etc. This also includes proving
                                that super massive black holes are most likely at the centers of most, if not all, large
                                galaxies.
                            </p>
                            <img src={hubble} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2017"
                            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Event Horizon Telescope</h3>
                            <h4 className="vertical-timeline-element-subtitle">2017</h4>
                            <p>
                                Through an international collaboration of eight ground based radio telescopes,
                                scientists were able to capture the first image of a black hole. Using a technique
                                called Very Long Baseline Interferometry, researchers were able to combine images from
                                the 8 telescopes into a single image.
                            </p>
                            <img src={eht} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2021"
                            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                            // icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">James Webb Space Telescope</h3>
                            <h4 className="vertical-timeline-element-subtitle">2021</h4>
                            <p>
                                Being the most recent advanced telescope, the James Webb Space Telescope needs no
                                introduction. The JWST can observe objects almost nine times fainter than Hubble and can
                                peer as far back as just a few hundred million years after the big bang, further than
                                any other telescope ever built. To make its engineering even more impressive, the JWST
                                is positioned at Lagrangian Point 2, approximately 1 million miles away. This allows the
                                JWST to stay in constant communication with the Earth while also not sitting in its
                                shadow, which hampers stellar observations.
                            </p>
                            <img src={jwst} alt={"alt"} data-aos={"zoom-in-right"}
                                 data-aos-duration={x}/>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                            // icon={<StarIcon />}
                        />
                    </VerticalTimeline>
                </div>
                <div className={"bg-white"}>
                    <div ref={whatsNextSection}>
                        <h1 className="pt-10 mx-52 text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-wider alumniPin ">
                            What's Next?
                        </h1>
                        <div className={"flex bg-white justify-center align-middle content-center"}>
                            {/*<div className={"rounded p-6 mb-4 border-2 border-amber-500"}>*/}
                            {/*    Hello*/}
                            {/*</div>*/}
                            <div
                                className={"grid min-h-[140px] w-[70%] place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible"}>
                                <CarouselDefault/>
                            </div>
                        </div>
                        <div className="mx-52 my-5 border-t border-gray-700"></div>
                    </div>
                    <div className={"bg-white"} ref={attributionsSection}>
                        <h1 className="py-5 mx-52 text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-wider alumniPin">
                            Attributions
                        </h1>
                        <div className={"rounded p-6 mx-52 mb-4 border-2 border-amber-500"}>
                            {/*<h1 className={"text-2xl tracking-wider text-red-600 font-extrabold border-2 rounded-md border-black inline-block"}>*/}
                            {/*    Under Construction*/}
                            {/*</h1>*/}
                            <p>
                                [1] A. V. Helden, “Galileo - Telescopic discoveries,” Encyclopædia Britannica. 2019. Available: https://www.britannica.com/biography/Galileo-Galilei/Telescopic-discoveries
                                <br/>
                                [2] CLEE25, “Wisconsin 101: Yerkes Telescope And The Birthplace Of Astrophysics,” Wisconsin Life, Nov. 23, 2023. https://wisconsinlife.org/story/wisconsin-101-yerkes-telescope-and-the-birthplace-of-astrophysics/ (accessed Apr. 16, 2024).
                                <br/>
                                [3] NASA, “Hubble Timeline - NASA Science,” science.nasa.gov. https://science.nasa.gov/mission/hubble/overview/hubble-timeline/
                                <br/>
                                [4]F. Summers, “Cosmic Concepts: Advantages of Space Telescopes,” NASA Hubblesite, Oct. 03, 2019. https://hubblesite.org/contents/media/videos/805-Video?keyword=Universe (accessed Apr. 16, 2024).
                                <br/>
                                [5] J. Lattis, “The World’s First Space Telescope,” Scientific American. https://www.scientificamerican.com/blog/observations/the-worlds-first-space-telescope/ (accessed Apr. 16, 2024).
                                <br/>
                                [6] “NASA’s First Stellar Observatory, OAO 2, Turns 50 - NASA,” Dec. 11, 2018. https://www.nasa.gov/solar-system/nasas-first-stellar-observatory-oao-2-turns-50/
                                <br/>
                                [7] https://jpl.nasa.gov, “IRAS - Universe Missions - NASA Jet Propulsion Laboratory,” NASA Jet Propulsion Laboratory (JPL). https://www.jpl.nasa.gov/missions/infrared-astronomical-satellite-iras
                                <br/>
                                [8]“Science Highlights - NASA Science,” science.nasa.gov. https://science.nasa.gov/mission/hubble/science/science-highlights/
                                <br/>
                                [9] NASA, “First Image of a Black Hole - NASA Science,” science.nasa.gov, Apr. 10, 2019. https://science.nasa.gov/resource/first-image-of-a-black-hole/
                                <br/>
                                [10] S. Magazine and E. Gamillo, “NASA’s James Webb Space Telescope Will Launch Into Orbit in December,” Smithsonian Magazine. https://www.smithsonianmag.com/smart-news/nasas-james-webb-space-telescope-will-launch-into-orbit-early-winter-180978727/
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default App;
