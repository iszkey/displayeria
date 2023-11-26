"use client";

import { Character } from "@/types/character";
import { useState } from "react";

// キャラクター情報を入力して、その情報を表示するコンポーネント
export default function Home() {
  const [character, setCharacter] = useState<Character | null>(null);

  // 入力フォームの変更を処理する関数
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    try {
      const characterData: Character = JSON.parse(inputValue);
      setCharacter(characterData);
    } catch (error) {
      alert("入力データのフォーマットが不正です");
    }
  };

  return (
    <div>
      <input onChange={handleInputChange} className="text-black" />
    </div>
  );
}
