import React from "react";

interface Props {
  content: string;
}

export default function Title({ content }: Props) {
  return <h1 className="mb-4">{content}</h1>;
}
