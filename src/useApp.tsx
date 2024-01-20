import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useApp(){
  const context = useContext(AppContext);
  return context;
}