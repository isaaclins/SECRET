"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomHeader from "@/components/custom/customHeader";
import CustomScrollBar from "@/components/custom/customScrollBar";
import { Textarea } from "@/components/ui/textarea";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userToSend = username.trim() === "" ? "Anonymous" : username;
    const WEBHOOKURL = process.env.WEBHOOKURL
      ? Buffer.from(process.env.WEBHOOKURL, "base64").toString("utf-8")
      : "";
    console.log(WEBHOOKURL);
    const response = await fetch(WEBHOOKURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: feedback,
        username: userToSend,
      }),
    });

    if (response.ok) {
      console.log("Feedback submitted to Discord:", feedback);
      setFeedback("");
    } else {
      console.error("Failed to send feedback to Discord");
    }
  };

  return (
    <div className="container mx-auto">
      <CustomScrollBar></CustomScrollBar>
      <CustomHeader main={true} parents={["SECRET"]} child="FEEDBACK" />
      <h1 className="flex text-4xl justify-center items-center">
        Thank you for your Feedback!
      </h1>
      <div className="flex justify-center items-center mt-10">
        <div className="mt-4 ">
          <form
            onSubmit={handleSubmit}
            className="mt-2 p-4 border rounded-md shadow-md flex flex-col items-center"
          >
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Name (optional)"
              className="mb-4"
            />
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="feedback"
              className="mb-4"
            />
            <Button variant="outline" type="submit">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
