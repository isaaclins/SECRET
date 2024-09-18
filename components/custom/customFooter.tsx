import React from 'react';
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomFooterProps {
    Lastpage: string;
    Nextpage: string;
    Feedback: boolean;
}

const CustomFooter: React.FC<CustomFooterProps> = ({ Lastpage, Nextpage, Feedback }) => {
    return (
        <footer className="footer border p-5 backdrop-blur-sm flex justify-center bottom-10 left-20 right-20 z-10">
            <div className="flex space-x-16">
                <a href={Lastpage}>
                    <Button variant="outline" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </a>
                {Feedback && (
                    <a href="/SECRET/feedback">
                        <Button variant="outline">Leave Feedback</Button>
                    </a>
                )}
                <a href={Nextpage}>
                    <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </a>
            </div>
        </footer>
    );
};

export default CustomFooter;
