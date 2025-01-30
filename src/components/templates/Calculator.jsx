import InputComp from "./InputComp";
import OutputComp from "./OutputComp";
import ButtonComp from "./ButtonComp";
import Container from "./Container";
import ButtonContainer from "./ButtonContainer";

import { useState } from "react";

let CalculatorApp = () => {
  let [ButtonData, setButtonData] = useState("");
  let [result, setRessult] = useState();
  let Calculator = (ButtonData) => {
    setRessult(eval(ButtonData));
    // setButtonData("");
  };
  return (
    <Container>
      <InputComp ButtonData={ButtonData}></InputComp>
      <OutputComp result={result}></OutputComp>
      <ButtonContainer>
        <ButtonComp
          ButtonClickset={setButtonData}
          ButtonData={ButtonData}
          Calculator={Calculator}
          setRessult={setRessult}
          result={result}
        ></ButtonComp>
      </ButtonContainer>
    </Container>
  );
};

export default CalculatorApp;
