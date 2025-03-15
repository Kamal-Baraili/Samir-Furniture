interface Props {
  buttonTitle: string;
  bgColor: string;
}

const AddToCartButton = ({ buttonTitle, bgColor }: Props) => {
  return (
    <>
      <div className={`px-6 py-3 ${bgColor} rounded-4xl`}>
        {buttonTitle}
      </div>
    </>
  );
};

export default AddToCartButton;
