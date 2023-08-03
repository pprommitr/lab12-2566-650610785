import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Controller() {
  const { toggleTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext);
  const { toggleLang } = useContext(LangContext);
  const { lang } = useContext(LangContext);
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme}>
        {lang.button.setLightTheme}
      </button>
      <button className="btn btn-dark" onClick={setDarkTheme}>
        {lang.button.setDarkTheme}
      </button>
      <button className="btn btn-primary" onClick={toggleTheme}>
        {lang.button.toggleTheme}
      </button>
      <button className="btn btn-danger" onClick={toggleLang}>
        {lang.button.toggleLang}
      </button>
    </div>
  );
}
