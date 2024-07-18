import React from "react";
import styles from "./Button.module.css";
import useAlertProps from "../../hooks/useAlertProps";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  id?: string;
  onClick: (props: ButtonProps) => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick, disabled, id } = props;
  const alertProps = useAlertProps<ButtonProps>();

  return (
    <button
      id={id}
      className={styles.button}
      onClick={() => {
        onClick(props);
        alertProps(props);
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
