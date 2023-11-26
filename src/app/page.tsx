"use client";

import { useState } from "react";

export default function Home() {
  const [character, setCharacter] = useState("");

  return (
    <div>
      <input
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        className="text-black"
      />
    </div>
  );
}
