import React from "react";
import { File } from "lucide-react";
import { Star } from "lucide-react";
import { MoonStar } from "lucide-react";
import { CircleX } from "lucide-react";
import { motion } from "motion/react";
const Card = ({ data, reference}) => {
  return (
    <div>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{bounceStiffness:600, bounceDamping:10}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-400 px-8 py-10 overflow-hidden">
        <File />
        <p className="text-[15px] mt-3 leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full  left-0">
          <div className="flex items-center px-8 justify-between">
            <Star />
            {data.close ? <CircleX /> : <MoonStar />}
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-300" : "bg-pink-200"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm">{data.tag.tagTile}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
