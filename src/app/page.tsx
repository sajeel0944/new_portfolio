// pages/index.js
"use client";

import React, { useState, useEffect } from "react";
import Navber from "@/components/own/navbar";
import Hero_Section from "@/components/own/Hero_Section";
import About_Section from "@/components/own/About_Section";
import Projects_Section from "@/components/own/Projects_Section";
import Skills_Section from "@/components/own/Skills_Section";
import Contact_Section from "@/components/own/Contact_Section";
import Footer from "@/components/own/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // For demonstration - simulate loading state
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">

      {/* own navbar */}
      <Navber />

      {/* Hero Section */}
      <Hero_Section />

      {/* About Section */}
      <About_Section />

      {/* Projects Section */}
      <Projects_Section />

      {/* Skills Section */}
      <Skills_Section />

      {/* Contact Section */}
      <Contact_Section />

      {/* Footer */}
      <Footer />
    </div>
  );
}
