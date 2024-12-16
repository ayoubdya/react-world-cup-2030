import Wave from "@/components/Wave";
import stadiums from "@lib/stadiums.json";

import { useParams } from "react-router-dom";

const StadiumId = () => {
  const { id } = useParams();
  const stadium = stadiums.find((stadium) => stadium.id === Number(id));
  if (!stadium) return null;

  return (
    <div className="w-full bg-gray-50 flex flex-col justify-center items-center text-left gap-4 relative p-4 pb-[100px]">
      <img
        src={stadium.image}
        alt={stadium.image}
        className="rounded-md object-cover w-full h-[500px]"
      />
      <div className="max-w-7xl w-full flex flex-col gap-2">
        <h1 className="text-5xl font-bold">{stadium.name}</h1>
        <p className="text-md font-light">{stadium.description}</p>
        <p className="text-lg">
          <span className="font-extralight">Location:</span> {stadium.location},{" "}
          {stadium.country}
        </p>
        <p className="text-lg">
          <span className="font-extralight">Capacity:</span> {stadium.capacity}
        </p>
        <p className="text-lg">
          <span className="font-extralight">Opened:</span> {stadium.opened}
        </p>
        {!!stadium.closed && (
          <p>
            <span className="font-extralight">Closed:</span> {stadium.closed}
          </p>
        )}
        <div className="rounded-lg p-3 bg-gray-200/40">
          <h2 className="text-xl font-bold text-center">Description</h2>
          <p className="text-lg font-light">{stadium.details}</p>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default StadiumId;
