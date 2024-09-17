import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from 'lucide-react';

interface CustomBreadCrumbProps {
    main: boolean;
    parents: string[];
    child: string;
}

const CustomBreadCrumb: React.FC<CustomBreadCrumbProps> = ({ main, parents, child }) => {
    const parentPath = parents.join('/');

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {parents.map((parent, index) => (
                    <React.Fragment key={parent}>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                className={`${main ? 'font-bold' : 'font-thin'} text-white`}
                                href={`/${parents.slice(0, index + 1).join('/')}`}
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
    );
};

export default CustomBreadCrumb;