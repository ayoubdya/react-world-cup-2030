import { type Feature } from "@/pages/Map";
import ReactDOMServer from "react-dom/server";
import mapboxgl from "mapbox-gl";
import { useMemo } from "react";
import { Marker } from "react-map-gl";

const MarkerDetails = ({ feature }: { feature: Feature }) => {
  const [longitude, latitude] = feature.center;

  const popup = useMemo(
    () =>
      new mapboxgl.Popup().setHTML(
        ReactDOMServer.renderToString(
          <div className="flex flex-col">
            <h2 className="text-sm">{feature.place_name}</h2>
            <p className="text-xs">{feature.properties.address}</p>
          </div>
        )
      ),
    [feature.place_name, feature.properties.address]
  );

  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      key={feature.id}
      popup={popup}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-red-600 w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clipRule="evenodd"
        />
      </svg>
    </Marker>
  );
};

export default MarkerDetails;
