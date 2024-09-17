"use client";
import { useEffect, useState } from "react";
import { Slash, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function navigationsite() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto">
      <div
        className="fixed top-0 right-0 w-2 bg-white"
        style={{ height: `${scrollProgress}%` }}
      ></div>
      <header className="header sticky top-10 mt-2 z-10 m-10 border p-5 backdrop-blur-md">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="font-bold text-white"
                href="/SECRET/NAVIGATION"
              >
                Navigation
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="body">
        <div className="mt-4">
          <h1 className="text-4xl flex justify-center items-start">
            Navigation
          </h1>
          <div className="mt-2 p-4 border rounded-md shadow-md">
            <p className="text-lg text-center"></p>
            <h2 className="text-2xl font-bold">What is this about?</h2>
            <hr className="my-4" />
            <p>
              This is not just a story about physical recovery; it&apos;s a
              journey through the darkest corners of the human psyche, a battle
              against the demons of despair and loneliness. It&apos;s about
              finding light in the darkest of places, and finding strength in
              the most unlikely of places.
            </p>
            <hr className="my-4" />
            <ol>
              <li>Read more</li>
              <li>About</li>
              <li>Contact</li>
            </ol>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <footer className="footer border p-5 backdrop-blur-sm flex justify-center bottom-10 left-20 right-20 z-10">
        <div className="flex space-x-16">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <a href="/feedback">
            <Button variant="outline">Leave Feedback</Button>
          </a>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
