import mapboxgl from "mapbox-gl";
import { useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import { Marker } from "react-map-gl";

interface Stadium {
  name: string;
  coordinates: number[];
}

const StadiumMarker = ({ stadium }: { stadium: Stadium }) => {
  const [longitude, latitude] = stadium.coordinates;

  const popup = useMemo(
    () =>
      new mapboxgl.Popup().setHTML(
        ReactDOMServer.renderToString(
          <h2 className="text-sm">{stadium.name}</h2>
        )
      ),
    [stadium.name]
  );

  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      key={stadium.name}
      popup={popup}
    >
      <svg
        className="w-6 h-6 text-morocco-light-green"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <path
            d="M2846 5109 c-81 -13 -157 -47 -226 -99 -36 -27 -320 -304 -633 -617
l-567 -568 319 -319 319 -319 59 39 c259 172 599 179 865 18 127 -77 252 -221
314 -359 107 -243 79 -543 -72 -770 l-37 -57 319 -319 319 -319 573 572 c316
315 594 601 619 636 69 96 96 184 96 312 0 190 -43 271 -259 490 l-143 145
-253 -252 -253 -252 -570 564 -570 563 255 257 255 256 -157 154 c-138 135
-167 158 -240 194 -113 55 -213 70 -332 50z"
          />
          <path
            d="M3507 4392 l-187 -187 443 -443 442 -442 190 190 190 190 -440 440
c-242 242 -442 440 -445 440 -3 0 -90 -84 -193 -188z"
          />
          <path
            d="M704 3108 c-342 -343 -604 -614 -621 -643 -98 -157 -106 -352 -22
-523 36 -73 59 -102 194 -240 l154 -157 253 252 253 253 568 -568 567 -567
-253 -253 -252 -253 145 -143 c219 -216 300 -259 490 -259 128 0 216 27 312
96 35 25 321 303 636 619 l572 573 -319 319 -319 319 -57 -37 c-227 -151 -527
-179 -770 -72 -138 62 -282 187 -359 314 -161 266 -154 606 18 865 l39 59
-319 319 -319 319 -591 -592z"
          />
          <path
            d="M2418 3165 c-67 -17 -184 -68 -211 -92 -17 -16 2 -37 415 -450 359
-359 434 -430 447 -420 25 21 80 147 97 225 25 112 15 253 -24 353 -69 178
-183 292 -362 362 -63 24 -93 29 -190 33 -79 2 -133 -1 -172 -11z"
          />
          <path
            d="M2036 2894 c-100 -152 -125 -384 -59 -554 70 -179 184 -293 362 -362
101 -40 241 -49 355 -24 71 16 236 89 236 104 0 4 -195 202 -434 441 l-434
434 -26 -39z"
          />
          <path
            d="M725 1610 l-190 -190 443 -443 442 -442 190 190 190 190 -443 443
-442 442 -190 -190z"
          />
        </g>
      </svg>
    </Marker>
  );
};

export default StadiumMarker;
