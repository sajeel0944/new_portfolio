"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//  ye interface sanity ka data schema hai
interface Project_type {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

function Projects_Section() {
  const [show_all_project, set_show_all_project] = useState<boolean>(false); // jab user nichy waly button par click kary ga to is true ho gaye ga
  const [projects, setProjects] = useState<Project_type[]>([]); // is main sanity ka project ka sara data is main aye ga
  const [selectFilter, setselectFilter] = useState("All"); // is main sanity ka data filter ho ky araha hai

  // is main sanity ka data filter ho raha hai
  const filter_project =
    selectFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some(
            (value) => value.toLowerCase() == selectFilter.toLowerCase()
          )
        );

  // is main sanity ka data projects ky andar ja raha hai
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const query = show_all_project
          ? `*[_type=="project"] | order(_createdAt desc)`
          : `*[_type=="project"] | order(_createdAt desc)[0...3]`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("This is error to fetch sanity data", error);
      }
    };

    fetch_data();
  }, [show_all_project]); // Run again when show_all_project changes

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <Badge className="mb-4 bg-purple-600/20 text-purple-400 hover:bg-purple-600/20">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400">
            Check out some of my recent projects and collaborations
          </p>
          <div className="h-1 w-20 bg-purple-500 mx-auto mt-6"></div>
        </motion.div>


        {/* is filter wala section hai */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex sm:justify-end"
          >
          {/* ye shadcn ky components hai */}
          <Select onValueChange={(Value:string)=>{setselectFilter(Value)}}> {/*is ki value selectFilter ky andar ja rahe hai  */}
            <SelectTrigger className="w-72 mb-5 cursor-pointer">
              <SelectValue placeholder="Select a Option" className=" text-red-500" />
            </SelectTrigger>
            <SelectContent className="bg-gray-950">
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                <SelectItem className="text-white cursor-pointer" value="All" >All</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Typescript" >Typescript</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Python">Python</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Next.js">Next.js</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Shadcn">Shadcn</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Sanity">Sanity</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Streamlit">Streamlit</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Html">Html</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Css">Css</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="Taliwind Css">Taliwind Css</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="OpenAI Agent SDK">OpenAI Agent SDK</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="FastAPI">FastAPI</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="MongoDB">MongoDB</SelectItem>
                <SelectItem className="text-white cursor-pointer" value="UV">UV</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </motion.div>

        {/*         is main sary project show ho rahy hai  */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filter_project.map((project: Project_type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-purple-900/10 transition-all md:h-[29.8rem]">
                <div className="overflow-hidden">
                  <Image
                    src={`${urlFor(project.image.asset._ref)}`}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                    width={400}
                    height={400}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i: number) => (
                      <Badge key={i} className="bg-gray-800 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <Link href={project.link} target="_blank">
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 cursor-pointer"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button /* jab user is button par click karry ga to sary project show ho jaye gy*/
            className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
            onClick={() => set_show_all_project(!show_all_project)}
          >
            {show_all_project ? "Show Less" : "View All Projects"}
            {show_all_project ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : (
              <ArrowRight className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Projects_Section;
