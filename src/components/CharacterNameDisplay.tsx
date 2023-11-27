import React from "react";
import { Character } from "@/types/character";

type CharacterNameDisplayProps = {
  character: Character;
};

const CharacterNameDisplay: React.FC<CharacterNameDisplayProps> = ({
  character,
}) => {
  return <div className="text-white text-xl">{character.name}</div>;
};

export default CharacterNameDisplay;
