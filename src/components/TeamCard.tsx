import { useState } from "react";

const TeamCard = ({ member } : {member:{name: string, position: string, bio: string, image: string}}) => {
  return (
    <div className=" p-8 rounded-lg  flex w-full h-full">
      <div className="">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 md:w-64 md:h-64 object-cover rounded-full"
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold ">{member.name}</h3>
        <p className="text-gray-500 text-lg mt-1">{member.position}</p>
        <p className="mt-4 text-base text-gray-700">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
