const Footer = () => {
  return (
    <>
      <div className=" bg-amber-50 w-full px-20 py-20 mx-auto h-auto grid lg:grid-cols-9">
        <div className="grid xl:gap-50  md:grid-cols-6 col-span-9 md:col-span-6">
          <div className="h-[200px] col-span-2">
            <img className="h-14" src="/samir-logo.png" alt="" />
          </div>
          <div className="flex col-span-4 gap-0 justify-between md:justify-start md:gap-50">
            {FooterTitles.map((key: any, index: any) => (
              <div key={index} className="h-[200px]">
                <h3 className="text-base text-center md:text-left">{key}</h3>
                <ul className="mt-6 text-center md:text-left">
                  {footerMenuItems[key].map((submenu: any, subIndex: any) => (
                    <li key={subIndex} className="text-base">
                      {submenu}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-9 lg:col-span-3 flex justify-center items-center lg:block">
          <div className="h-[200px] mt-10 md:mt-0">
            <h3 className="text-[22px] text-center md:text-left p-0 m-0">
              Join Our Newsletter
            </h3>

            <div className="mt-10 bg-[#13124F] rounded-4xl flex justify-between">
              <input
                className="w-[35%] lg:w-[32%] ml-5 bg-transparent outline-none text-sm lg:text-base"
                type="text"
                placeholder="Enter Email"
              />
              <button className="w-[50%] text-white text-[12px] lg:text-base px-[40px] py-[15px] bg-[#9090DB] rounded-4xl hover:bg-[#7777c8] hover:text-black hover:ease-in-out">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const FooterTitles: any = ["Links", "Contact"];

const footerMenuItems: any = {
  Links: ["Home", "About"],
  Contact: ["Email", "Facebook", "Instagram"],
};
