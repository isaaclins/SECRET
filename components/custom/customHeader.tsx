import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import React from "react";

interface CustomHeaderProps {
  main: boolean;
  parents: string[];
  child: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  main,
  parents,
  child,
}) => {
  const parentPath = parents.join("/");

  return (
    <header className="header sticky top-10 mt-2 z-10 m-10 border p-5 backdrop-blur-md">
      <Breadcrumb>
        <BreadcrumbList>
          {parents.map((parent, index) => (
            <React.Fragment key={parent}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className={`${main ? "font-bold" : "font-thin"} text-white`}
                  href={`/${parents.slice(0, index + 1).join("/")}`}
                >
                  {parent}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < parents.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
          <Slash />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="font-bold text-white"
              href={`/${parentPath}/${child}`}
            >
              {child}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default CustomHeader;
