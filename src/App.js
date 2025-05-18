import "./App.css";
import Top from "./component/Top.jsx";
import Down from "./component/Down.jsx";
import "./index.css";
import ChangeTheme from "./component/ChangeTheme.jsx";
import { ThemeProvider } from "./component/ThemeContext.jsx";
function App() {
  return (
    <>
      <ThemeProvider>
        <Top />

        <ChangeTheme />
        <Down />
      </ThemeProvider>
    </>
  );
}

export default App;
