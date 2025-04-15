import { navMenu, categoryMenu } from "../../db/mockdata";

const Nav = () => {
  return (
    <>
      <div className="w-full bg-amber-50 fixed z-50">
        <nav className="w-10/11 mx-auto py-4 flex justify-between">
          <div>
            <img className="w-35 h-9" src="/samir-logo.png" alt="logo-img" />
          </div>
          <div className="hidden lg:flex gap-30 items-center">
            {navMenu.map((k, i) => (
              <ul key={i}>
                <li className="text-lg hover:text-primary hover:underline underline-offset-8 cursor-pointer">
                  {k}
                </li>
              </ul>
            ))}
          </div>
          <div className="hidden px-4 py-2 bg-[#0CC143] lg:flex items-center gap-3 rounded-4xl cursor-pointer text-white hover:text-[#000000] border border-[#02220c] hover:border-[primary] hover:scale-[1.1] transition-all ease-in-out">
            <span className="">Whatsapp</span>
            <img
              className="animate-bounce"
              src="/homepage/whatsapp-icon.svg"
              alt=""
            />
          </div>
        </nav>
      </div>

      <div className="pb-4 pt-23 bg-zinc-800">
        <div className="w-10/11 mx-auto hidden lg:flex justify-between">
          {categoryMenu.map((k, i) => (
            <ul key={i}>
              <li className="text-lg text-primary hover:text-secondary hover:scale-[1.1] transition cursor-pointer">
                {k}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
