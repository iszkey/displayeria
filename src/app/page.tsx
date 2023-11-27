"use client";

import CharacterNameDisplay from "@/components/CharacterNameDisplay";
import { Character } from "@/types/character";
import { PasteData } from "@/types/pasteData";
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
          const pasteData: PasteData = JSON.parse(text);
          setCharacter(pasteData.data);
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

  return (
    <div>
      {character ? (
        <CharacterNameDisplay character={character} />
      ) : (
        <p>好きなところにペーストしてね</p>
      )}
    </div>
  );
}
