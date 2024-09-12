"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/auth", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      alert(password);
      alert("Correct password")
    } else {
      alert(password);
      alert("Incorrect password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 row-start-2 items-center justify-center text-center">
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline" type="submit">
            SUBMIT
          </Button>
        </main>
      </div>
    </form>
  );
}