import style from "../styles/ButtonComp.module.css";
let ButtonComp = ({
  ButtonClickset,
  ButtonData,
  Calculator,
  setRessult,
  result,
}) => {
  let ButtonElem = [
    "Ac",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "1",
    "2",
    "3",
    "/",
    "0",
    "*",
    ".",
    "=",
  ];
  let InputHandler = (item) => {
    if (item === "Ac") {
      ButtonClickset("");
      setRessult("");
    } else if (result) {
      ButtonClickset("");
      setRessult("");
    } else if (item === "=") {
      if (
        ButtonData === "+" ||
        ButtonData === "-" ||
        ButtonData === "*" ||
        ButtonData === "/"
      ) {
        setRessult("Give Me Valid Data");
      } else {
        Calculator(ButtonData);
      }
    } else {
      ButtonClickset(ButtonData + item);
    }
  };

  return ButtonElem.map((item) => (
    <button
      key={item}
      className={style.ButtonComp}
      onClick={() => InputHandler(item)}
    >
      {item}
    </button>
  ));
  // ButtonElem.map((item) => <button className={style.ButtonComp}>{item}</button>;
};

export default ButtonComp;
