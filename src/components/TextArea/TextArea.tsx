import React from "react";
import styles from "./TextArea.module.css";
import useAlertProps from "../../hooks/useAlertProps";

// Define the props type for TextArea
type TextAreaProps = {
  value: string;
  backgroundColor?: string;
  width?: string;
  id?: string;
  onClick: (props: TextAreaProps) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { value, onClick, onChange, backgroundColor, width, id } = props;
  const alertProps = useAlertProps<TextAreaProps>();
  return (
    <textarea
      id={id}
      className={styles.textArea}
      value={value}
      onClick={() => {
        onClick(props);
        alertProps(props);
      }}
      onChange={onChange}
      style={{ backgroundColor, width }}
    />
  );
};

export default TextArea;
