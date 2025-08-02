"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent  } from "@radix-ui/react-tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderButtons from "@/components/ui/WorkSliderButtons"

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Peer2peer consorts",
        description: "Peer2peer Consorts is a modern and responsive site I designed for a money lending start up. It is complete with user-friendly and simple yet catchy graphics",
        stack: [
            {name: "JSX"},
            {name: "tailwindCSS"},
            {name: "Javascript"},
            {name: "Typescript"},
            {name: "Next"},
            {name: "React"},
        ],
        image: "/assets/work/peer2peerconsorts.png",
        live: "https://ptop-consorts.vercel.app/",
        github: "https://github.com/hiren-maddara/peer-consorts"
    },
    {
        num: "02",
        category: "Backend",
        title: "",
        description: "This includes python implementation of supervised and unsupervised Machine Learning algorithms, with extrapolation to real world datasets. It was a part of my AI university coursework",
        stack: [
            {name: "Python"},
            {name: "Jupyter"},
            {name: "SKLearn"},
        ],
        image: "/assets/work/AIML.png",
        live: "https://github.com/hiren-maddara/AI",
        github: "https://github.com/hiren-maddara/AI"
    },
    {
        num: "03",
        category: "Fullstack",
        title: "Case Cobra",
        description: "A fullstack project for a hypothetical custom phone case company, including a landing page, user authentication, authorisation and file upload and management with Kindle, Database integration with CRUD API operations using Prisma, and an admin dashboard",
        stack: [
            {name: "Next"},
            {name: "Kindle"},
            {name: "Prisma"},
            {name: "Javascript"},
            {name: "PostCSS"},
        ],
        image: "/assets/work/casecobra.png",
        live: "https://casecobra-shopdev.vercel.app/",
        github: "https://github.com/hiren-maddara/casecobra-shop"
    },
    {
        num: "04",
        category: "Backend",
        title: "Python data analysis",
        description: "This includes basics of Python for data manipulation, analysis and visualisation as part of the CARS University of padova course offered by PhD. Sina Shafiezadeh. Includes a certificate of completion",
        stack: [
            {name: "Python"},
            {name: "Jupyter"},
            {name: "Google Colab"},
            {name: ".csv"},
        ],
        image: "/assets/work/pydataanalysis.png",
        live: "https://github.com/hiren-maddara/py-data_analysis",
        github: "https://github.com/hiren-maddara/py-data_analysis"
    },
    {
        num: "05",
        category: "Fullstack Desktop",
        title: "Microsoft Parts Spares",
        description: "This is an intranet business management system for a workshop/spare company and vehicle technical services, to track their cash flow, vehicle services, spare flow and sales, plus managing the clients and employees. A fullstack project to run in the browser while connecting to a native SQLite database via Sequelize ORM for safety and full management, includes CRUD operations, Admin dashboard, User authentication, UI customization, Chart feedback and Spreadsheet-like data management",
        stack: [
            {name: "Next"},
            {name: "Sequelize"},
            {name: "SQLite3"},
            {name: "Node"},
        ],
        image: "/assets/work/mcparts.png",
        live: "https://github.com/hiren-maddara/mcparts",
        github: "https://github.com/hiren-maddara/mcparts"
    },
]

function Work() {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex
        //update project state based on current index
        setProject(projects[currentIndex])
    }

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none transition-all capitalize duration-500"> {project.category} project

                            </h2>
                            
                            {/* proj description */}
                            <p className="text-white/60">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-4 flex-wrap">
                                {project.stack.map((item, index) => (
                                    <li className="text-xl text-accent" key={index}>{item.name}
                                    
                                    {/* add commas excecpt last */}
                                    {index !== project.stack.length-1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live button */}
                                <Link href={project.live} target="_blank" rel="noopener noreferrer" >
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p>View Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>

                                {/* github button */}
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p>View Source code</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>

                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full max-w-full xl:max-w-[50%] xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 bg-black/10 z-10">

                                        </div>

                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} loading="lazy" fill className="object-top object-cover"
                                            alt={project.description} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* slider buttons */}
                            <WorkSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            iconStyles="" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
