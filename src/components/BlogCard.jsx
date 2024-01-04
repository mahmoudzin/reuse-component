import React from "react";
const BlogCard = ({ src, title, desc, date }) => {
  return (
    <div className="max-h-[553px] w-1/3">
      <div className="border border-solid border-green-500 rounded-lg px-4 py-3">
        <div className="w-full h-[269px]">
          {/* <img className="w-full h-[269px]" src={src} alt="" /> */}
          Image
        </div>
        <div className="">
          <h3 className="text-white font-semibold text-20 leading-6 mb-3">
            {title}
          </h3>
          <p className="text-gray-400  font-semibold text-base leading-6">
            {desc}
          </p>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 ">
              <div className="">lgog</div>
              <div className="">DeepStark</div>
            </div>
            <span> | </span>
            <div className="text-gray-400 font-Montserrat-Arabic font-semibold text-base leading-[1.22]">
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
