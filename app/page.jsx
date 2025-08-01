import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="h-full">
      <section className="container mx-auto h-full">
        <div className="flex items-center justify-center">
          {/* intro text */}
          <div className="text-center">
            <span className="text-xl">Web Developer, Reaserch Assistant</span>
            <h1 className="h1">
              <span className="h2 text-white/60">Hello I'm </span> <br/> 
              <span className="text-accent">Hiren M. Maddara</span> 
            </h1>

            <p className="max-w-[500px] mx-auto mb-9 mt-4 text-white/80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus ad odit officia labore quia excepturi quaerat! Quas adipisci repellendus necessitatibus!
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
              
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>View CV</span>
                <FiDownload className="text-xl" />
              </Button>

              {/* socials */}
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
