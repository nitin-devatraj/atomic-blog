import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined)
    throw new Error("BlogContext was read/used outside of BlogContextProvider");
  else return context;
}
