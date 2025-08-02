"use client"

import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Select, SelectLabel, SelectTrigger, SelectContent, SelectValue, SelectGroup, SelectItem} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />, title: "Phone",
        description: "(+39) 351 852 4187",
    },
    {
        icon: <FaEnvelope />, title: "Email",
        description: "hiren.maddara@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />, title: "Location",
        description: "Via Natisone, Padova, IT",
    },
]

function Contact() {
    return (
        <section className="container mx-auto">
                    {/* form */}

                    {/* info */}
                    <div className="flex flex-col gap-[30px] items-center xl:justify-end mb-8 xl:mb-0">
                        <h3 className="text-4xl text-accent">Get In Touch</h3>
                        <p className="text-white/60"></p>
                        
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>

        </section>
    )
}

export default Contact

{/* <div className="xl:h-[54%] order-2 xl:order-none"> 
    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
        <h3 className="text-4xl text-accent">Let's work together</h3>
        <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, modi.</p>
    
    
    <div className="grid gricol1 md:grid-cols-2 gap-6">
        <Input type="firstname" placeholder="Firstname" />
        <Input type="lastname" placeholder="Lastname" />
        <Input type="email" placeholder="Email Address" />
        <Input type="phone" placeholder="Phone number" />
    </div>

    <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="est">Web Development</SelectItem>
                <SelectItem value="cst">UI/UX Design</SelectItem>
                <SelectItem value="mst">Backend Development</SelectItem>
            </SelectGroup>

        </SelectContent>
    </Select>

    
    <Textarea className="h-[200px]" placeholder="Type your message here." />


    <Button size="md" className="max-w-40">Send message</Button>
    </form>
</div> */}