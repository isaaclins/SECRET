// app/TEMPLATE/page.tsx

import { Slash } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Templatesite() {
  return (
    <div className="container mx-auto ">
      <header className="sticky top-10 mt-2 z-10 m-10 border p-5 backdrop-blur-sm">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="font-thin	text-white"
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
          <p className="text-lg text-center">
            This is a template for a site. You can use this to create a new
            site. I made this site to express my feelings and thoughts. its my
            safe space to share my thoughts and feelings. Also I need text to
            show how the site will look with different text forms.
          </p>
          <div className="mt-4">
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
              You can also use <mark>highlighted text</mark> to emphasize
              certain parts.
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
          </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Image Example</h2>
              <img
                src="/favicon.png"
                alt="Description of the image"
                className="mt-2 rounded-md shadow-md"
              />
            </div>
        </div>
      </div>
      <footer className="border p-5 backdrop-blur-sm flex justify-center bottom-10 left-20 right-20 z-10">
        <div className="flex space-x-16">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline">Leave a Feedback</Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
