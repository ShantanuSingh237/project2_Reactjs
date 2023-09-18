
import styles from "./Button.module.css"; // Make sure to use "./" for relative file paths

const Button = ({isOutline, icon,text , ...rest }) => {
  
  return (
    <button 
    {...rest}
    className= {isOutline ? styles.outline_btn :styles.primary_btn}>
      
      {icon}
      {text}
       
    </button>
  );
};

export default Button;








