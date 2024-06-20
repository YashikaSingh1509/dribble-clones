import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import img2 from'../img/img2.jpg';
import { EyeIcon } from "@heroicons/react/solid";
function Project(){
    return(
        <div className="relative right-[-100px]">
        <div className="w-[300px] h-[280px] rounded-xl mb-5 ">
            <img  className ="rounded-xl"src={img2} alt=""/>
            <div className="flex  justify-between p-2">
                <div className ="flex items-center">
                    <h3 className="font-bold text-black text-[15px]">name</h3>
                    <h3 className="bg-gray-300 text-white p-[2px] text-xs font-bold rounded-md ml-2">TEAM</h3>
                </div>
                <div className="flex space-x-2">
                    <div className="flex items-center">
                        <HeartIcon className="h-3 w-3 text-gray-500"/>
                    <h2 className="text-sm">61</h2>
                    </div>
                    <div className="flex iems-center">
                        <EyeIcon  className="h-3 w-3 text-gray-500"/>
                        <h2 className="text-sm">30.4k</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Project;
