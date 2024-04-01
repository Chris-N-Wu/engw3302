import {Carousel, Typography, Button} from "@material-tailwind/react";
import polarizedBH from "../assets/polarizedBlackHole.png"

export default function CarouselDefault() {
    return (
        <Carousel className="rounded-xl"
            // autoplay={true}
                  loop={true}
                  autoplayDelay={10000}
                  navigation={({setActiveIndex, activeIndex, length}) => (
                      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                          {new Array(length).fill("").map((_, i) => (
                              <span
                                  key={i}
                                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                  }`}
                                  onClick={() => setActiveIndex(i)}
                              />
                          ))}
                      </div>
                  )}>
            <div className="relative h-full w-full">
                <img
                    src={polarizedBH}
                    alt="image1"
                    className="w-full max-h-[856px] overflow-y-clip object-center object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/55">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Polarized Image of A Black Hole (2024)
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            After releasing the first image of a black hole in 2019, the Event Horizon Telescope team
                            have now come out with an image of our black hole, Sagittarius A* (the one at the center of
                            our Milky Way galaxy!), in polarized light. This polarization tells us much about the
                            magnetic field of a black hole, which gives us so much more observational data to prove our
                            theories with!
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <a href={"https://eventhorizontelescope.org/blog/astronomers-unveil-strong-magnetic-fields-spiraling-edge-milky-way%E2%80%99s-central-black-hole"}
                               target={"_blank"} rel="noreferrer">
                                <Button size="lg" color="white">
                                    Read More
                                </Button>
                            </a>
                            <a href={"https://www.reddit.com/r/spaceporn/comments/1bp3t0b/the_event_horizon_telescope_eht_has_released_the/"}
                               target={"_blank"} rel={"noreferrer"}>
                                <Button size="lg" color="white" variant="text">
                                    Reddit Post From the Team
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Giant_Magellan_Telescope_Exterior_Rendering_at_Night.jpg"
                    alt="image2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
                    <div className="w-3/4 pl-12 md:w-[70%] md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            The Extremely Large Telescope Program
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Proposed by the Astronomy and Astrophysics Decadal Survey 2020, the Extremely Large
                            Telescope Program (<i>very creative name</i>) would pair the Giant Magellan Telescope and
                            Thirty Meter Telescope into a single system. This will provide unparalleled observations of
                            the night sky in both the Northern and Southern hemispheres.
                        </Typography>
                        <div className="flex gap-2">
                            <a href={"https://useltp.org"} target={"_blank"} rel="noreferrer">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                            </a>
                            {/*<Button size="lg" color="white" variant="text">*/}
                            {/*    Gallery*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Niac2020_bandyopadhyay.jpg/1920px-Niac2020_bandyopadhyay.jpg"
                    alt="image3"
                    className="w-full max-h-[856px] overflow-y-clip object-left object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/65">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Lunar Crater Radio Telescope
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Proposed by the NASA Institute for Advanced Concepts, the Lunar Crater Radio Telescope will
                            (ideally) be a ultra-long-wavelength telescope inside a lunar crater on the far side of the
                            moon. The primary reason for building on the moon is to avoid radio interference from Earth.
                        </Typography>
                        <div className="flex gap-2">
                            <a href={"https://www.nasa.gov/solar-system/lunar-crater-radio-telescope-illuminating-the-cosmic-dark-ages/"}
                               target={"_blank"} rel={"noreferrer"}>
                                <Button size="lg" color="white">
                                    Read More
                                </Button>
                            </a>
                            {/*<Button size="lg" color="white" variant="text">*/}
                            {/*    Gallery*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}