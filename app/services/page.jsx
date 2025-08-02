"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'

const services = [
    {
        num: '01',
        title: 'Frontend Development',
        description: "Crafting responsive and dynamic user interfaces that ensure seamless user experiences across devices. I specialise in translating design concepts into clean, efficient code using Javascript frameworks, React and Next.js",
        href: "/work"
    },
    {
        num: '02',
        title: 'Fullstack Integration',
        description: "Building robust applications by integrating frontend and backend systems. Connecting SQL and NoSQL databases and REST APIs to deliver complete solutions that power projects.",
        href: "/work"
    },
    {
        num: '03',
        title: 'UI/UX Design',
        description: "Designing intuitive and engaging interfaces with a focus on user-centered principles. I'm comfortable with pen and paper design, and technolgies like tailwindCSS, React.",
        href: "/work"
    },
    {
        num: '04',
        title: 'Research Assistance',
        description: "Providing thorough research support and project development, including literature review, critical analysis and synthesis of data. Fueled by my desire to learn and engage topics with depth. I'm comfortable with basic statistical methods, softwares like R, Jasp, Python.",
        href: "/work"
    },
]

function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <h3 className="text-4xl text-accent text-center mb-12"> 
                Here's what I do
            </h3>
            
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[60px] mb-8">
                    {services.map((service, index) => {
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            
                            {/* top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-transparent text-outline group-hover:!text-outline-hover transition-all duration-300'>
                                    {service.num}
                                </div>
                                <Link href={service.href} className='w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-primary text-3xl' />
                                </Link>
                            </div>

                            {/* heading */}
                            <h2
                                className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300'
                            >{service.title}</h2>

                            {/* description */}
                            <p>{service.description}</p>

                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>

                        </div>
                    })}
            </div>
        </section>
    )
}

export default Services
