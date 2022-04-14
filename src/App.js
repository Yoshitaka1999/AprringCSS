import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlinStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyleJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlinStyle />
      <CssModules />
      <StyleJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
