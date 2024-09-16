"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import 'animate.css';

export default function Home() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission

    const encodedPassword = btoa(password); // Encode the password in base64

    if (encodedPassword === "VGhlIE15dGggb2YgU2lzeXBodXM=") {
      router.push("/chapter0");
    } else {
      console.log("Password is incorrect!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="animate__animated animate__fadeInDown grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 row-start-2 items-center justify-center text-center">
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter your password"
          />
          <Button variant="outline" type="submit">
            SUBMIT
          </Button>
        </main>
      </div>
    </form>
  );
}