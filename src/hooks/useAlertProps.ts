const useAlertProps = <T>() => {
  const replacer = (key: string, value: any) => {
    if (typeof value === "function") {
      return "function() { ... }";
    }
    return value;
  };

  const alertProps = (props: T) => {
    alert(JSON.stringify(props, replacer, 2));
    console.log("- - - - -", JSON.stringify(props, replacer, 2));
  };

  return alertProps;
};

export default useAlertProps;
