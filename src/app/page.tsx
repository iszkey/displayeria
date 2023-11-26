"use client";

import { Character } from "@/types/character";
import { useEffect, useState } from "react";

// キャラクター情報を入力して、その情報を表示するコンポーネント
export default function Home() {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    // ペーストされたデータを処理するハンドラ
    const handlePaste = (e: ClipboardEvent) => {
      const text = e.clipboardData?.getData("text");
      if (text) {
        try {
          const characterData: Character = JSON.parse(text);
          setCharacter(characterData);
        } catch (error) {
          alert("入力データのフォーマットが不正です");
        }
      }
    };

    // ページ全体でのペーストイベントをリスン
    document.addEventListener("paste", handlePaste);

    // クリーンアップ関数
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return <div>好きなところにペーストしてね</div>;
}
