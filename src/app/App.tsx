import { useTheme } from "app/providers/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";

import { AppRouter } from "app/providers/router";

import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};
