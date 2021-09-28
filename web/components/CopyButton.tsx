import { useState } from "react";
import Copy from "react-copy-to-clipboard";
import styled from "styled-components";

const Btn = styled.button`
  position: absolute;
  top: 16px;
  right: 107px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ theme }) => theme.layoutDarkest};
  color: ${({ theme }) => theme.textDarker};
  box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 16%);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 12px 0px rgb(0 0 0 / 30%);
    color: ${({ theme }) => theme.textLight};
  }
`;

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <Copy
      text={text}
      onCopy={() => {
        setCopied(true);

        setTimeout(() => setCopied(false), 5000);
      }}
    >
      <Btn>{!copied ? "Copy" : "Copied!"}</Btn>
    </Copy>
  );
};
