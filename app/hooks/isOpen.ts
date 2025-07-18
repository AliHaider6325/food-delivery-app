// /hooks/useToggle.ts
import { useState } from "react";

export default function useToggle(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
//   const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, open, close, setIsOpen };
}
