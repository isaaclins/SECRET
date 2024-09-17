import React from 'react';
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomFooter: React.FC = () => {
    return (
        <footer className="footer border p-5 backdrop-blur-sm flex justify-center bottom-10 left-20 right-20 z-10">
            <div className="flex space-x-16">
                <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <a href="/SECRET/feedback">
                    <Button variant="outline">Leave Feedback</Button>
                </a>
                <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </footer>
    );
};

export default CustomFooter;