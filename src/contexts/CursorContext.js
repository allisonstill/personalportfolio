"use client";
import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export default function CursorProvider({ children }) {
  const [cursorScale, setCursorScale] = useState(1);

  return (
    <CursorContext.Provider value={{ cursorScale, setCursorScale }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);