import React from "react";

const Infoleft = () => {
  return (
    <div className="bg-black">
      <div className="bg-white w-[300px] h-fit">
        <p className="text-center font-bold">INFO.</p>
        <div className="flex flex-row justify-evenly ">
          <div className="bg-red-400 text-right mr-4">
            <p>No</p>
            <p>Name</p>
            <p>Species</p>
            <p>Type</p>
            <p>Abilities</p>
          </div>
          <div>
            <p>005</p>
            <p>Charmeleon</p>
            <p>Charmeleon</p>
            <p className="px-4 bg-slate-400 text-center rounded w-fit">Fire</p>
            <div className="flex flex-row flex-wrap">
              <p className="px-4 bg-slate-400 text-center rounded w-fit">
                Charmeleon
              </p>
              <p className="px-4 bg-slate-400 text-center rounded w-fit">
               leon
              </p>
              <p className="px-4 bg-slate-400 text-center rounded w-fit">
                Char
              </p>
              <p className="px-4 bg-slate-400 text-center rounded w-fit">
                Charmeleon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infoleft;
