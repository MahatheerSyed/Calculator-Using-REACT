import style from "../styles/InputComp.module.css";

let InputComp = ({ ButtonData }) => {
  return (
    <>
      <input
        type="text"
        placeholder={ButtonData ? ButtonData : "Enter a value"}
        className={style.InputComp}
        readOnly
      />
    </>
  );
};

export default InputComp;
