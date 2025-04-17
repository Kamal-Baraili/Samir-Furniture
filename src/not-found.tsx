import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <>
      <div className="w-full h-screen bg-[url('/not-found.gif')] bg-cover bg-no-repeat z-60 fixed top-0 flex justify-center items-center"></div>
      <div className="w-full h-[35vh] flex justify-center items-center">
        <div className="flex flex-col gap-5 items-center leading-none absolute z-80">
          <h2 className="text-center text-[200px] mt-20">404</h2>
          <h3 className="text-center text-xl">Page Not Found!</h3>
          <Link className="" to="/">
            <button className="cursor-pointer bg-zinc-300 p-4 rounded-md hover:bg-zinc-200">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
