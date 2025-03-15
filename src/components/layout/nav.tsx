import { headerMenu, navMenu } from "../../db/mockdata";

const Nav = () => {
  return (
    <>
      <div className="w-full bg-amber-50 fixed z-50">
        <header className="w-10/11 mx-auto py-5 flex justify-between">
          <div>
            <img className="h-14" src="/samir-logo.png" alt="logo-img" />
          </div>
          <div className="flex gap-30 items-center">
            {headerMenu.map((k, i) => (
              <ul key={i}>
                <li className="text-xl hover:text-primary cursor-pointer">
                  {k}
                </li>
              </ul>
            ))}
          </div>
          <div className="px-4 py-2 bg-[#0CC143] flex items-center gap-3 rounded-4xl cursor-pointer text-white hover:text-[#000000] border border-[#02220c] hover:border-[primary]">
            <span className="">Whatsapp</span>
            <img
              className="animate-bounce"
              src="/homepage/whatsapp-icon.svg"
              alt=""
            />
          </div>
        </header>
      </div>

      <nav className="px-30 pb-4 pt-28 bg-zinc-800 flex justify-between">
        {navMenu.map((k, i) => (
          <ul key={i}>
            <li className="text-xl text-primary hover:text-secondary hover:scale-[1.1] transition cursor-pointer">
              {k}
            </li>
          </ul>
        ))}
      </nav>
    </>
  );
};

export default Nav;
