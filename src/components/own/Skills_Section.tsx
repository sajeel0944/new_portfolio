import { motion } from "framer-motion";
import { Code, Smartphone, Server } from "lucide-react";

// Import necessary shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Skills_Section() {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      items: [
        "Next.js",
        "Shadcn",
        "Tailwind CSS",
        "Css",
        "Html",
        "JavaScript",
        "TypeScript",
        "Clerk.js",
        "Figma",
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      items: ["Sanity", "Python", "FastAPI", "MongoDB", "OpenAI Agent SDK", "UV"],
    },
    {
      name: "Learing",
      icon: <Smartphone className="h-6 w-6" />,
      items: ["OpenAI Agent SDK"],
    },
  ];
  return (
    <>
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 hover:bg-purple-600/20">
              My Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-gray-400">
              Technologies and tools I work with on a daily basis
            </p>
            <div className="h-1 w-20 bg-purple-500 mx-auto mt-6"></div>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 md:grid-cols-3 bg-gray-800 ">
              <TabsTrigger
                value="frontend"
                className="text-gray-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white cursor-pointer"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="text-gray-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white cursor-pointer"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="learing"
                className="text-gray-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white cursor-pointer"
              >
                Learing
              </TabsTrigger>
            </TabsList>
            {skills.map((category, index) => (
              <TabsContent
                key={index}
                value={category.name.toLowerCase().split(" ")[0]}
                className="mt-8"
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-purple-600/20 text-purple-400">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl text-white">
                        {category.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.items.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-purple-500/30 transition-colors"
                        >
                          <span className="text-gray-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Skills_Section;
