"use client"

import { Description } from '@radix-ui/react-dialog'
import {
    FaHtml5, FaCss3, FaJs, FaPython, FaGit
} from 'react-icons/fa'

import {SiNextdotjs, SiTailwindcss, SiNetlify, SiSupabase, SiMysql, SiElectron, SiNodedotjs, } from 'react-icons/si'

// about data
const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi? Totam magnam recusandae accusamus. Iure, quo non! Blanditiis, eos qui ea accusantium ab magnam repellendus, nostrum voluptas impedit reiciendis error!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Hiren Maddara"
        },
        
        {
            fieldName: "Phone",
            fieldValue: "(+39) 351 852 4187"
        },
        {
            fieldName: "Programming",
            fieldValue: "Since 2019"
        },
        {
            fieldName: "Email",
            fieldValue: "hiren.maddara@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English (C2), Italian (A2)"
        },
        {
            fieldName: "Hobbies",
            fieldValue: "Coding, Research/Learning, Writing, Reading, Guitar Jamming"
        },
    ]
}

//experience data
const experience = {
    icon: "/assets/resume/file.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi? Totam magnam recusandae accusamus. Iure, quo non! Blanditiis, ",
    items: [
        {
            company: "Freelance",
            position: "Full stack developer",
            duration: "2022 - present"
        },
        {
            company: "UNIPD CARS python data analysis",
            position: "Participant",
            duration: "Fall 2024"
        },
        {
            company: "Freelance",
            position: "Web developer",
            duration: "2022 - present"
        },
        
    ]
}

// education data
const education = {
    icon: "/assets/resume/file.svg",
    title: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi? Totam magnam recusandae accusamus. Iure, quo non! Blanditiis, ",
    items: [
        {
            institution: "Makere university",
            qualification: "Bachelor of Pharmacy",
            duration: "2020 - 2023, Unfinished"
        },
        {
            institution: "University of padova",
            qualification: "Bachelor of Psychological Science",
            duration: "2023 - 2026, Continuing"
        },
        {
            institution: "Ultimate guide to react, next - Jonas Schmedtman",
            qualification: "Full stack React, Next web development",
            duration: "2023"
        },
        {
            institution: "Jonas Schmedtman",
            qualification: "Javascript, HTML, CSS web development",
            duration: "2022"
        },
        {
            institution: "Self Taught",
            qualification: "Javascript",
            duration: "2019 - 2023"
        },
        {
            institution: "Self Taught",
            qualification: "SQL(MySQL, SQLite) and NoSQL (supabase, mongoDB)",
            duration: "2022 - 2024"
        },
        {
            institution: "UNIPD CARS python data analysis and coursework",
            qualification: "Python data analysis and visualisation, AI concepts, basic statistical analysis",
            duration: "2024"
        },
    ]
}

// skills data
const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi? Totam magnam recusandae accusamus. Iure, quo non! Blanditiis, eos qui ea accusantium ab magnam repellendus, ",
    skillSet: [
        {icon: <FaHtml5/>, name: "html 5"},
        {icon: <FaCss3/>, name: "html 3"},
        {icon: <FaJs/>, name: "Javascript"},
        {icon: <SiNextdotjs/>, name: "Next.js"},
        {icon: <SiTailwindcss/>, name: "TailwindCSS"},
        {icon: <SiNodedotjs/>, name: "Node.js"},
        {icon: <FaPython/>, name: "Python"},
        {icon: <FaGit/>, name: "Git"},
        {icon: <SiElectron/>, name: "Electron.js"},
        {icon: <SiMysql/>, name: "MySQL"},
        {icon: <SiNetlify/>, name: "Netlify"},
        {icon: <SiSupabase/>, name: "Supabase"},
    ]

}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip' 
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

function Resume() {
    return (
        <section className='min-h-[80vh] flex items-center
            justify-center xl:py-0'
        >

            <div className="container mx-auto">
                <Tabs defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] lg:max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                            </div>

                            <ScrollArea className="h-[400px]">
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {experience.items.map((item, i) => (
                                        <li key={i} className='bg-primary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>

                                            <div className='flex items-center gap-3'>
                                                {/* dot */}
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>

                                                <p>{item.company}</p>
                                            </div>
                                        

                                        </li>
                                    )) }
                                </ul>
                            </ScrollArea>
                        </TabsContent>


                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                            </div>

                            <ScrollArea className="h-[400px]">
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {education.items.map((item, i) => (
                                        <li key={i} className='bg-primary h-[184px] min-h-fit py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2'>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.qualification}</h3>

                                            <div className='flex items-center gap-3'>
                                                {/* dot */}
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>

                                                <p>{item.institution}</p>
                                            </div>
                                        

                                        </li>
                                    )) }
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                                    {skills.skillSet.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className='text-6xl group-hover:text-accent'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px] items-start'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-6'>
                                    {about.info.map((item, i) => (
                                        <li key={i} className='flex gap-4'>
                                            <span className='text-white/60 '>{item.fieldName}</span>
                                            <span className='text-xl text-left'>{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

        </section>
    )
}

export default Resume
