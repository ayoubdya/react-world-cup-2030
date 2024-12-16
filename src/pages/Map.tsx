import Map, { type MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Search, Send } from "lucide-react";
import StadiumMarker from "@/components/map/StadiumMarker";
import MarkerDetails from "@/components/map/MarkerDetails";

export interface Feature {
  id: string;
  type: "Feature";
  place_type: string[];
  relevance: number;
  properties: {
    wikidata: string;
    landmark: boolean;
    address?: string;
    category: string;
  };
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: {
    type: "Point";
    coordinates: number[];
  };
  context: {
    id: string;
    wikidata: string;
    text: string;
    short_code: string;
  }[];
}

export interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}

const MapPage = () => {
  const stadiums = [
    {
      name: "Fez Stadium",
      coordinates: [-4.968851, 34.00283],
    },
    {
      name: "Stade de Marrakech",
      coordinates: [-7.980556, 31.706667],
    },
    {
      name: "Adrar Stadium",
      coordinates: [-9.5404, 30.4272],
    },
    {
      name: "Ibn Batouta Stadium",
      coordinates: [-5.858105, 35.741211],
    },
    {
      name: "Prince Moulay Abdellah Stadium",
      coordinates: [-6.888611, 33.959444],
    },
    {
      name: "Grand Stade de Casablanca",
      coordinates: [-7.264134, 33.677078],
    },
  ];

  const mapRef = useRef<MapRef>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<FeatureCollection>();

  async function onSearch() {
    const bounds = mapRef.current?.getBounds();
    const bbox = bounds?.toArray().flat().join(",");

    const search = searchRef.current?.value;

    console.log(bounds, bbox);

    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?types=poi&limit=10&bbox=${bbox}&access_token=${
        import.meta.env.VITE_MAPBOX_TOKEN
      }`
    );
    const data = await res.json();
    setData(data);
  }

  return (
    <div className="w-full relative">
      <div className="absolute drop-shadow-md inset-x-2 top-2 z-10 w-96 flex gap-0 items-center bg-white rounded-lg px-2">
        <Search className="h-5 w-5 opacity-50" />
        <Input
          type="text"
          placeholder="Search points of interest"
          className="outline-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          ref={searchRef}
        />
        <button
          onClick={onSearch}
          className="bg-morocco-light-green p-1 rounded-md hover:scale-110 hover:brightness-110 transition-all active:scale-95 active:brightness-95"
        >
          <Send className="h-5 w-5 ml-auto text-white" />
        </button>
      </div>

      <Map
        ref={mapRef}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -7.5898,
          latitude: 33.5731,
          zoom: 5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        maxBounds={[-17.2, 21, -0.9, 36]} // morocco bounds
      >
        {stadiums.map((stadium) => (
          <StadiumMarker stadium={stadium} key={stadium.name} />
        ))}
        {data?.features.map((feature) => (
          <MarkerDetails feature={feature} key={feature.id} />
        ))}
      </Map>
      {/* <Wave /> */}
    </div>
  );
};

export default MapPage;

//https://api.mapbox.com/geocoding/v5/mapbox.places/-9.5925,30.428.json?types=poi&country=ma&limit=2&access_token=pk.eyJ1Ijoiem90dGVyZGFzIiwiYSI6ImNrNzd2ZTZ6cTAyMTAzbG51eG41dDV5c2QifQ.Gt6NSuWV9kymSGDvs4VlMQ
