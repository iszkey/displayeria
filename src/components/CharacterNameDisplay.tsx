import React from "react";
import { Character } from "@/types/character";

type CharacterNameDisplayProps = {
  character: Character;
};

const CharacterNameDisplay: React.FC<CharacterNameDisplayProps> = ({
  character,
}) => {
  return (
    <div className="text-white text-6xl font-hinaMincho">{character.name}</div>
  );
};

export default CharacterNameDisplay;
