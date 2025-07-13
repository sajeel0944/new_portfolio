import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Instagram,
} from "lucide-react";
// Import necessary shadcn/ui components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero_Section() {
  return (
    <>
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <Badge className="mb-4 bg-purple-600/20 text-purple-400 hover:bg-purple-600/20">
                Available for Work
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Building Digital{" "}
                <span className="text-purple-400">Experiences</span> that Users
                Love
              </h1>
              <p className="text-gray-400 text-lg mb-8 pr-9 text-justify">
                I am a Full Stack Developer skilled in TypeScript, HTML, CSS, Tailwind CSS, Figma, 
                and Next.js for frontend development. On the backend, I work with Python and FastAPI,
                and I also build intelligent systems using the OpenAI Agent SDK. As a student at GIAIC, 
                I am passionate about creating interactive web applications and developing real-world 
                AI-powered solutions. I enjoy exploring full-stack architecture and integrating advanced 
                AI capabilities into modern web platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={"#projects"}>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={"#contact"}>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-900 cursor-pointer hover:text-white hover:bg-gray-800"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex space-x-4 mt-8">
                <Link
                  href="https://github.com/sajeel0944?tab=repositories"
                  target="_blank"
                >
                  <motion.span
                    whileHover={{ y: -6 }}
                    className="text-gray-400 hover:text-purple-400"
                  >
                    <Github className="h-6 w-6" />
                  </motion.span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/"
                  target="_blank"
                >
                  <motion.span
                    whileHover={{ y: -6 }}
                    className="text-gray-400 hover:text-purple-400"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.span>
                </Link>
                <Link href="https://x.com/sajeel_khan_" target="_blank">
                  <motion.span
                    whileHover={{ y: -6 }}
                    className="text-gray-400 hover:text-purple-400"
                  >
                    <Twitter className="h-6 w-6" />
                  </motion.span>
                </Link>
                <Link
                  href="https://mail.google.com/mail/u/1/?ogbl#inbox"
                  target="_blank"
                >
                  <motion.span
                    whileHover={{ y: -6 }}
                    className="text-gray-400 hover:text-purple-400"
                  >
                    <Mail className="h-6 w-6" />
                  </motion.span>
                </Link>
                <Link
                  href="https://www.instagram.com/sajeelullahkhan/"
                  target="_blank"
                >
                  <motion.span
                    whileHover={{ y: -6 }}
                    className="text-gray-400 hover:text-purple-400"
                  >
                    <Instagram className="h-6 w-6" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 mt-10 md:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur-lg opacity-30"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/picture/Untitled design (6).png"
                    alt="Developer"
                    className="w-full sm:h-[450px]"
                    width={1000}
                    height={100}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero_Section;
