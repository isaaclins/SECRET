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

export default function Templatesite() {
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
      <header className="sticky top-10 mt-2 z-10 m-10 border p-5 backdrop-blur-sm">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="font-thin text-white"
                href="/navigation"
              >
                My Story
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-bold text-white" href="/TEMPLATE">
                TEMPLATE
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="mt-4">
        <h1 className="text-4xl flex justify-center items-start">TEMPLATE</h1>
        <div className="mt-2 p-4 border rounded-md shadow-md">
          <p className="text-lg text-center"></p>
          <h2 className="text-2xl font-bold">HTML Features</h2>
          <p>
            This is an example of <strong>strong text</strong> and{" "}
            <em>italic text</em>. You can also create{" "}
            <a href="#" className="text-blue-500">
              links
            </a>{" "}
            to other pages.
          </p>
          <ul className="list-disc list-inside">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <blockquote className="border-l-4 pl-4 italic">
            This is a blockquote for highlighting important information.
          </blockquote>
          <p>
            Here is a <code>code snippet</code> for reference.
          </p>
          <hr className="my-4" />
          <p>
            You can also use <mark>highlighted text</mark> to emphasize certain
            parts.
          </p>
          <p>
            <small>This is small text.</small>
          </p>
          <p>
            <del>This text is deleted.</del>
          </p>
          <p>
            <ins>This text is inserted.</ins>
          </p>
          <p>
            <abbr title="Abbreviation">HTML</abbr> is the standard markup
            language for creating web pages.
          </p>
          <p>
            <b>This is bold text.</b>
          </p>
          <p>
            <cite>This is a citation.</cite>
          </p>
          <p>
            <dfn>This is a definition.</dfn>
          </p>
          <p>
            <kbd>Ctrl+C</kbd> is the keyboard shortcut for copying text.
          </p>
          <p>
            <q>This is a short quotation.</q>
          </p>
          <p>
            <s>This text is no longer accurate.</s>
          </p>
          <p>
            <samp>This is sample output from a computer program.</samp>
          </p>
          <p>
            <sub>This is subscript text.</sub>
          </p>
          <p>
            <sup>This is superscript text.</sup>
          </p>
          <p>
            <time dateTime="2022-01-01">January 1, 2022</time> is the start of
            the new year.
          </p>
          <p>
            <u>This is underlined text.</u>
          </p>
          <p>
            <var>x</var> is a variable in mathematics.
          </p>
          <h2 className="text-2xl font-bold">CSS Features</h2>
          <p>
            You can also use{" "}
            <span className="text-blue-500 hover:underline">inline styles</span>{" "}
            to customize the appearance of text.
          </p>
          <p className="text-red-500">This text is red.</p>
          <p className="text-green-500">This text is green.</p>
          <p className="text-blue-500">This text is blue.</p>
          <p className="text-yellow-500">This text is yellow.</p>
          <p className="text-purple-500">This text is purple.</p>
          <p className="text-pink-500">This text is pink.</p>
          <p className="text-gray-500">This text is gray.</p>
          <p className="text-white bg-black">This text is white on black.</p>
          <p className="text-black bg-white">This text is black on white.</p>
          <p className="text-center">This text is centered.</p>
          <p className="text-right">This text is right-aligned.</p>
          <p className="text-left">This text is left-aligned.</p>
          <p className="text-justify">
            This text is justified to fill the entire width of the container.
          </p>
          <p className="font-thin">This text is thin.</p>
          <p className="font-light">This text is light.</p>
          <p className="font-normal">This text is normal.</p>
          <p className="font-medium">This text is medium.</p>
          <p className="font-semibold">This text is semibold.</p>
          <p className="font-bold">This text is bold.</p>
          <p className="font-extrabold">This text is extrabold.</p>
          <p className="font-black">This text is black.</p>
          <p className="font-mono">This text is monospace.</p>
          <p className="font-serif">This text is serif.</p>
          <p className="font-sans">This text is sans-serif.</p>
          <p className="font-heading">This text is a heading font.</p>
          <p className="font-body">This text is a body font.</p>
          <h1>This text is in h1</h1>
          <h2>This text is in h2</h2>
          <h3>This text is in h3</h3>
          <h4>This text is in h4</h4>

          <p className="text-2xl font-bold">JavaScript Features</p>
          <p>
            You can also use JavaScript to create interactive elements on the
            page.
          </p>
          <button className="bg-blue-500 text-white p-2 rounded-md shadow-md">
            Click Me
          </button>
          <p className="mt-2">
            <input
              type="text"
              placeholder="Type something..."
              className="border p-2 rounded-md shadow-md"
            />
          </p>
          <p className="mt-2">
            <textarea
              placeholder="Type something..."
              className="border p-2 rounded-md shadow-md"
            ></textarea>
          </p>
          <p className="mt-2">
            <select className="border p-2 rounded-md shadow-md">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Checkbox
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="radio" className="mr-2" />
              Radio
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="range" className="mr-2" />
              Range
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="file" className="mr-2" />
              File
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="date" className="mr-2" />
              Date
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="time" className="mr-2" />
              Time
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="datetime-local" className="mr-2" />
              Date and Time
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="color" className="mr-2" />
              Color
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="email" className="mr-2" />
              Email
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="tel" className="mr-2" />
              Phone Number
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="url" className="mr-2" />
              URL
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="password" className="mr-2" />
              Password
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="number" className="mr-2" />
              Number
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input type="search" className="mr-2" />
              Search
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md shadow-md"
              />
            </label>
          </p>
          <p className="mt-2">
            <label className="flex items-center">
              <input
                type="reset"
                className="bg-red-500 text-white p-2 rounded-md shadow-md"
              />
            </label>
          </p>

          <div className="mt-4">
            <h2 className="text-2xl font-bold">Image Example</h2>
            <img
              src="../favicon.png"
              alt="Description of the image"
              className="mt-2 rounded-md shadow-md"
            />
          </div>
        </div>

        <footer className="border p-5 backdrop-blur-sm flex justify-center bottom-10 left-20 right-20 z-10">
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
    </div>
  );
}
