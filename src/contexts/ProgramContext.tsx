import { createContext, useContext, useState, type ReactNode } from "react";

export type ProgramType = "tbm" | "ylc";

interface ProgramContextValue {
  program: ProgramType;
  setProgram: (p: ProgramType) => void;
  isTBM: boolean;
}

const ProgramContext = createContext<ProgramContextValue>({
  program: "tbm",
  setProgram: () => {},
  isTBM: true,
});

export const ProgramProvider = ({ children }: { children: ReactNode }) => {
  const [program, setProgram] = useState<ProgramType>("tbm");
  return (
    <ProgramContext.Provider value={{ program, setProgram, isTBM: program === "tbm" }}>
      {children}
    </ProgramContext.Provider>
  );
};

export const useProgram = () => useContext(ProgramContext);
