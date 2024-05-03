import React from "react";
import heart from "@assets/heart.png";
import sword from "@assets/swords.png";
import shield from "@assets/shield.png";
import shoe from "@assets/boot.png";
import star from "@assets/star.png";
import fire from "@assets/fire.png";
import { Skeleton } from "antd";
import { StatPokemon, TypePokemon, ColorPokemon } from "./Homepokemon";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type props = {
  name?: string;
  isLoading?: boolean;
  stats?: StatPokemon;
  type?: TypePokemon[];
  id?: string;
  index?: number;
};
/* 
const animationvarriants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.03,
    },
  }),
}; */

export const Cardpokemon: React.FC<props> = ({
  isLoading = false,
  name,
  stats,
  type,
  id = "000",
  index = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const fnCalDelay = ():number => {
    let delay = 0;
    if ((index+1) % 5 === 0) {
      delay = 5 / 20 + 0.1;
    } else {
      delay = ((index+1) % 5) / 20 + 0.1;
    }
    return delay
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      {!isLoading ? (
        <motion.div
          // key={id}
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            type: "opacity",
            // delay: 0.2,
            delay: fnCalDelay(),
          }}
          animate={mainControls}
          initial="hidden"
          /*    whileInView="animate" */
          viewport={{
            once: true,
          }}
          // custom={id}
        >
          <div className="select-none w-[220px] h-[285px] rounded-xl relative border-[8px] border-black box-border">
            <div>
              <img
                className="w-40 h-45 m-auto pt-5 absolute left-0 right-0 z-10"
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`}
              />

              <div
                className=" absolute right-[9px] top-3 p-1 rounded z-20"
                style={{ backgroundColor: "rgba(34, 34, 34,0.6)" }}
              >
                {type?.map((item) => {
                  return (
                    <div
                      className="typecir rounded-full p-[7px] my-1 mx-[2px]"
                      style={{ backgroundColor: ColorPokemon[item] }}
                    >
                      <img
                        className="w-4 h-4"
                        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.toLowerCase()}.png`}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-md absolute bottom-0 w-full h-[100px]">
                <p className="bg-slate-400 w-fit m-auto font-extrabold text-white px-3 my-3 rounded-md uppercase ">
                  {name}
                </p>

                <div className="flex flex-row justify-evenly mb-10 text-base font-semibold">
                  <div className="flex flex-col items-center ">
                    <img className="w-4 h-4 mb-1" src={heart}></img>
                    <p>{stats?.hp}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-4 h-4 mb-1" src={sword}></img>
                    <p>{stats?.attack}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-4 h-4 mb-1" src={shield}></img>
                    <p>{stats?.defense}</p>
                  </div>
                  <div className="flex flex-col items-center ">
                    <img className="w-4 h-4 mb-1" src={shoe}></img>
                    <p>{stats?.speed}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-4 h-4 mb-1" src={star}></img>
                    <p>{stats?.special}</p>
                  </div>
                  <div className="flex flex-col items-center ">
                    <img className="w-4 h-4 mb-1" src={fire}></img>
                    <p>{stats?.total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className=" flex flex-col w-[210px] h-[265px] rounded-md border-2 p-3 items-center">
          <Skeleton.Image
            active={true}
            style={{ width: "180px", height: "155px" }}
          />
          <Skeleton.Input
            className="mt-1"
            active={true}
            size="small"
            style={{ height: "20px" }}
          />
          <div className="flex flex-row justify-evenly mb-10 w-full mt-2">
            <div className="flex flex-col items-center ">
              <img className="w-4 h-4 mb-[6px]" src={heart}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center">
              <img className="w-4 h-4 mb-[6px]" src={sword}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center">
              <img className="w-4 h-4 mb-[6px]" src={shield}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center ">
              <img className="w-4 h-4 mb-[6px]" src={shoe}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center">
              <img className="w-4 h-4 mb-[6px]" src={star}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
            <div className="flex flex-col items-center ">
              <img className="w-4 h-4 mb-[6px]" src={fire}></img>
              <Skeleton.Avatar active={true} size="small" shape="square" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cardpokemon;
