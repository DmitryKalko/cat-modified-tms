const CustomButton = (props) => {
  console.log(props);
  return (
    <button
      onClick={() => {
        console.log("нажали на кнопку");
        props.onClick?.();
      }}
    >
      ПОДРОБНЕЕ
    </button>
  );
};

export default CustomButton;
