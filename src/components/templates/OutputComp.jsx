import style from "../styles/OutputComp.module.css";
let OutputComp = ({ result }) => {
  return <h2 className={style.OutputComp}>{result}</h2>;
};

export default OutputComp;
