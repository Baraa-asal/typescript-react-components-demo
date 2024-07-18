import React from "react";
import styles from "./TextArea.module.css";
import useAlertProps from "../../hooks/useAlertProps";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  backgroundColor?: string;
  width?: string;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { onClick, id, width, backgroundColor, style, ...rest } = props;
  const handleClick = (event: React.MouseEvent<HTMLTextAreaElement>) => {
    alertProps(props); // Alert the props
    if (onClick) {
      onClick(event); // Call the original onClick if provided
    }
  };
  const alertProps = useAlertProps<TextAreaProps>();
  return (
    <textarea
      {...rest}
      className={styles.textArea}
      id={id}
      style={{ ...style, backgroundColor, width }}
      onClick={handleClick}
    />
  );
};

export default TextArea;
