import { motion } from "framer-motion";
import Image from "next/image";
// Import necessary shadcn/ui components
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

function About_Section() {
  return (
    <>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 hover:bg-purple-600/20">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who I Am
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* ye image section hai */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur-lg opacity-30"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/picture/image_2.png"
                    alt="Profile"
                    className="w-full"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </motion.div>

            {/* ye discrition section hai */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/2 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Full Stack Developer with a Passion for Interactive AI-Powered 
                Web Experiences
              </h3>
              <p className="text-gray-400">
                I am a Full Stack Developer skilled in TypeScript, HTML, CSS, Tailwind CSS, Figma, 
                and Next.js for frontend development. On the backend, I work with Python, FastAPI, 
                and integrate intelligent features using the OpenAI Agent SDK.
              </p>
              <p className="text-gray-400">
                As a student at GIAIC, I’m passionate about building responsive, interactive web 
                applications and exploring the potential of AI-powered solutions like chatbots 
                and smart assistants.
              </p>
              <p className="text-gray-400">
                Im deeply interested in modern web technologies, performance optimization, and 
                clean code practices. My goal is to continuously grow in the field of AI and 
                full-stack development, delivering high-quality, intelligent web experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gray-800 text-gray-300">Html</Badge>
                <Badge className="bg-gray-800 text-gray-300">Css</Badge>
                <Badge className="bg-gray-800 text-gray-300">Next.js</Badge>
                <Badge className="bg-gray-800 text-gray-300">
                  Tailwind CSS
                </Badge>
                <Badge className="bg-gray-800 text-gray-300">Typescript</Badge>
                <Badge className="bg-gray-800 text-gray-300">Shadcn</Badge>
                <Badge className="bg-gray-800 text-gray-300">Sanity</Badge>
                <Badge className="bg-gray-800 text-gray-300">Python</Badge>
                <Badge className="bg-gray-800 text-gray-300">OpenAI Agent SDK</Badge>
                <Badge className="bg-gray-800 text-gray-300">FastAPI</Badge>
                <Badge className="bg-gray-800 text-gray-300">MongoDB</Badge>
                <Badge className="bg-gray-800 text-gray-300">UV</Badge>
                <Badge className="bg-gray-800 text-gray-300">Streamlit</Badge>
              </div>
              <Alert className="bg-purple-600/10 border-purple-600/30 text-purple-300">
                <AlertDescription>
                  Currently open to freelance projects and full-time
                  opportunities.
                </AlertDescription>
              </Alert>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About_Section;
