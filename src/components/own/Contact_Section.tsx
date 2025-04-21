"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram, CheckCircle2 } from "lucide-react";
// Import necessary shadcn/ui components
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { client } from "@/sanity/lib/client";

function Contact_Section() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const sanity_schema = {
      _type: "message",
      message: formData.message,
      email: formData.email,
      name: formData.name,
    };

    //  sanity ky nadar data jaraha hai
    try {
      const push_data = async () => {
        await client.create(sanity_schema);
      };
      push_data();
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // 3 sec baad message remove hoga
    } catch (error) {
      console.log(`Not able to push comment to Sanity, Error: ${error}`);
    }
    // Add form submit logic here (API, EmailJS, etc.)
  };
  return (
    <>
      <section id="contact" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 hover:bg-purple-600/20">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lets Work Together
            </h2>
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
            <div className="h-1 w-20 bg-purple-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Contact Information
                      </h3>
                      <p className="text-gray-400">
                        Fill out the form or contact me directly
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Link
                        target="_blank"
                        href={"https://mail.google.com/mail/u/1/?ogbl#inbox"}
                      >
                        <div className="flex items-center space-x-3 text-gray-300">
                          <Mail className="h-5 w-5 text-purple-400" />
                          <span>sajeelK4490@gmail.com</span>
                        </div>
                      </Link>
                      <Link
                        target="_blank"
                        href={"https://github.com/sajeel0944?tab=repositories"}
                      >
                        <div className="flex items-center space-x-3 text-gray-300">
                          <Github className="h-5 w-5 text-purple-400" />
                          <span>sajeel0944</span>
                        </div>
                      </Link>
                      <Link
                        target="_blank"
                        href={
                          "https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/"
                        }
                      >
                        <div className="flex items-center space-x-3 text-gray-300">
                          <Linkedin className="h-5 w-5 text-purple-400" />
                          <span>sajeel ullah khan</span>
                        </div>
                      </Link>
                      <Link target="_blank" href={"https://x.com/sajeel_khan_"}>
                        <div className="flex items-center space-x-3 text-gray-300">
                          <Twitter className="h-5 w-5 text-purple-400" />
                          <span>sajeel khan</span>
                        </div>
                      </Link>
                      <Link
                        target="_blank"
                        href={"https://www.instagram.com/sajeelullahkhan/"}
                      >
                        <div className="flex items-center space-x-3 text-gray-300">
                          <Instagram className="h-5 w-5 text-purple-400" />
                          <span>sajeel ullah khan</span>
                        </div>
                      </Link>
                    </div>

                    <div className="pt-6">
                      <Alert className="bg-purple-600/10 border-purple-600/30 text-purple-300">
                        <AlertDescription>
                          Currently available for freelance projects and
                          full-time positions.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-200"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-200"
                          placeholder="Your email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-200 min-h-32"
                          placeholder="Your message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Send Message
                    </Button>
                    {successMessage && (
                    <Alert className="bg-green-600/10 border-green-600/30 text-green-300 mt-4 w-full">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-400 mt-1" />
                        <AlertDescription className="flex-1 text-sm text-green-200 whitespace-nowrap text-ellipsis">
                          {successMessage}
                        </AlertDescription>
                      </div>
                    </Alert>
                    )} 

                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact_Section;
