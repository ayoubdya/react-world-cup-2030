import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {
  const currentPath = useLocation().pathname; // e.g. /stadiums

  const routes = [
    // { path: "/", label: "Home", active: currentPath === "/" },
    {
      path: "/stadiums",
      label: "Stadiums",
      active: currentPath === "/stadiums",
    },
    {
      path: "/translation",
      label: "Translation",
      active: currentPath === "/translation",
    },
    {
      path: "/convert",
      label: "Convert",
      active: currentPath === "/convert",
    },
    { path: "/map", label: "Maps", active: currentPath === "/map" },
    { path: "/contact", label: "Contact", active: currentPath === "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 drop-shadow-sm bg-white h-16 w-full flex justify-center items-center px-2 border-b-[1px]">
      <div className="max-w-7xl w-full flex items-center gap-8 px-2 h-full">
        <Link to={"/"}>
          <img src="logo.png" alt="" className="h-12" />
        </Link>
        <div className="sm:flex hidden ml-auto justify-between text-sm h-full">
          {routes.map((route) => (
            <div
              key={route.path}
              className="p-3 h-full flex items-center group hover:text-white text-muted-foreground hover:bg-morocco-red transition-all"
            >
              <Link
                to={route.path}
                className={twMerge(
                  route.active
                    ? "text-black group-hover:text-white font-bold"
                    : ""
                )}
              >
                {route.label}
              </Link>
            </div>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild className="sm:hidden ml-auto">
            <Button
              className="p-2 rounded-md hover:bg-gray-100"
              size="icon"
              variant="outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-0 py-4 ">
              {routes.map((route) => (
                <div
                  key={route.path}
                  className="p-2 py-4 h-full flex items-center group cursor-pointer hover:text-black text-muted-foreground hover:bg-gray-100"
                >
                  <SheetClose asChild>
                    <Link
                      to={route.path}
                      className={twMerge(
                        route.active ? "text-black font-bold" : ""
                      )}
                    >
                      {route.label}
                    </Link>
                  </SheetClose>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
