import CalculatorApp from "./components/templates/Calculator";
import Container from "./components/templates/Container";
import style from "./components/styles/Container.module.css";
let App = () => {
  return (
    <>
      <Container className2={style.textConatiner}>
        <h1>Free Calculator to Use</h1>
      </Container>
      <Container className={style.CalContainer}>
        <CalculatorApp />
      </Container>
    </>
  );
};

export default App;
