import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-purple-400 mb-4 md:mb-0">
              Dev<span className="text-white">.Sajeel</span>
            </div>


            <div className="flex space-x-4">
              <Link href="https://github.com/sajeel0944?tab=repositories" target="_blank" className="text-gray-400 hover:text-purple-400">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/sajeel-ullah-khan-b2b7502bb/" target="_blank" className="text-gray-400 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/sajeel_khan_" target="_blank" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://mail.google.com/mail/u/1/?ogbl#inbox" target="_blank" className="text-gray-400 hover:text-purple-400">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/sajeelullahkhan/" target="_blank" className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Dev.Sajeel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
