"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Define state to hold the password
  const [password, setPassword] = useState("");

  return (
    <form method="post" action="http://localhost:8000/submit">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 row-start-2 items-center justify-center text-center">
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Handle input change
            name="password"  // Name is important to submit the value
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
