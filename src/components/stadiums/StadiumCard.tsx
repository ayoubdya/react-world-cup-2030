import { useNavigate } from "react-router-dom";

interface Stadium {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
  capacity: number;
  country: string;
  opened?: string;
  closed?: string;
  scheduled_completion?: string;
}

interface Props {
  stadium: Stadium;
}

const StadiumCard: React.FC<Props> = ({ stadium }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col-span-1 aspect-square relative bg-cover rounded-lg overflow-hidden drop-shadow-lg text-white cursor-pointer hover:brightness-90 active:scale-95 transition-all"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 80%,rgba(0, 0, 0, 0.7)), url(${stadium.image})`,
      }}
      onClick={() => {
        navigate(`/stadiums/${stadium.id}`);
      }}
    >
      <div className="absolute bottom-1 inset-x-1 ">
        <span className=" font-light text-sm text-slate-200">
          {stadium.location}
        </span>
        <h1 className="font-medium truncate cursor-pointer leading-4">
          {stadium.name}
        </h1>
      </div>
    </div>
  );
};

export default StadiumCard;
