import style from "../styles/Container.module.css";

let Container = ({ children, className, className2 }) => {
  return (
    <div
      className={`${style.Container} ${className || ""} ${className2 || ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
0;
