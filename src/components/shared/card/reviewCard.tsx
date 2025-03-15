const ReviewCard = (props: any) => {
  return (
    <>
      <div className="p-4 flex flex-col relative items-center text-ternary mb-10 overflow-hidden h-[70vh] ">
        <div className="">
          <img
            className="w-[10vw] md:w-[10vw] aspect-square object-cover object-top  rounded-full mb-3"
            src="/homepage/review_img.svg"
            alt="person"
          />
        </div>
        <div className="py-2 ">
          <p className="text-center text-sm md:text-xl w-[80vw] lg:w-3/7 mx-auto leading-6 text-gray-800 italic font-semibold">
            "{props.reviewDesc}"
          </p>
          <div className="w-1/2 mx-auto mt-4 border-b border-b-[#B0AFB1]"></div>
        </div>
        <div className="mt-3 md:mt-8">
          <h4 className="text-center text-xl font-bold">{props.reviewName}</h4>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
