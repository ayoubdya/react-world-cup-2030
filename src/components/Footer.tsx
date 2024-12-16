import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      title: "Support",
      links: [
        {
          title: "Help",
        },
        {
          title: "Advisories",
        },
        {
          title: "Status",
        },
        {
          title: "Contact",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          title: "About",
        },
        {
          title: "Blog",
        },
        {
          title: "Press",
        },
      ],
    },
    {
      title: "Terms & Policies",
      links: [
        {
          title: "Policies",
        },
        {
          title: "Terms of Use",
        },
        {
          title: "Code of Conduct",
        },
        {
          title: "Privacy",
        },
      ],
    },
  ];

  return (
    <div className="flex relative justify-center items-center">
      <div
        id="footer"
        className="max-w-7xl w-full p-4 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <div className="">
          <img
            src="logo_title.png"
            alt="Logo"
            className="h-40 w-40 object-cover"
          />
        </div>
        <div className="text-sm flex flex-1 gap-4 justify-between flex-wrap sm:flex-row w-full">
          {links.map((category) => (
            <div className="flex flex-col gap-2" key={category.title}>
              <h3 id="support" className="font-bold">
                {category.title}
              </h3>
              <ul
                className="font-light flex flex-col gap-4"
                aria-labelledby="support"
              >
                {category.links.map((link) => (
                  <li key={link.title}>
                    <Link to="#">{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
