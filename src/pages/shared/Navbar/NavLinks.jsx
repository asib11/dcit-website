import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = ({closeMobileMenu}) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h2
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group transition-all duration-300 hover:translate-x-1"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-base lg:text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h2>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-green-600 rotate-45"
                    ></div>
                  </div>
                  <div className="text-white bg-green-600 p-5 gap-10 ">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm my-2.5 transition-all duration-300 hover:translate-x-1">
                            <Link
                              to={`${slink.link}`}
                              className=""
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14 pr-4">
                        <Link to={`${slink.link}`} onClick={closeMobileMenu}>{slink.name}</Link>
                      </li>
                    ))}
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;