import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ea error vitae sint earum enim obcaecati, reprehenderit neque quo! Sapiente ipsam placeat perferendis ab hic magni modi possimus laborum nobis.",
        href: ""
    },
    {
        num: '02',
        title: 'UI/UX development',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ea error vitae sint earum enim obcaecati, reprehenderit neque quo! Sapiente ipsam placeat perferendis ab hic magni modi possimus laborum nobis.",
        href: ""
    },
    {
        num: '03',
        title: 'Full stack Integration',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ea error vitae sint earum enim obcaecati, reprehenderit neque quo! Sapiente ipsam placeat perferendis ab hic magni modi possimus laborum nobis.",
        href: ""
    },
    {
        num: '04',
        title: 'Research Assistance',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ea error vitae sint earum enim obcaecati, reprehenderit neque quo! Sapiente ipsam placeat perferendis ab hic magni modi possimus laborum nobis.",
        href: ""
    },
]

export default function Home() {
  return (
    <main className="h-full container">
        <div className="flex items-center justify-center">
          {/* intro text */}
          <div className="text-center">
            <span className="text-xl">Web Developer, Research Assistant</span>
            <h1 className="h1">
              <span className="h2 text-white/60">Hello I'm </span> <br/> 
              <span className="text-accent">Hiren M. Maddara</span> 
            </h1>

            <p className="max-w-[75vw] mx-auto mb-9 mt-4 text-white/80">
              I love a multifacated approach to problem-solving, integrating science and technology, the humanities and philosophy.
              Welcome to my site. Explore and learn more about my work. I’m excited to connect, collaborate, and grow together through ideas. 
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
              
              <Link href="assets/resume/HrnMddrCV.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  View CV
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              {/* socials */}
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>

            </div>

          </div>
        </div>      
    </main>
  );
}
