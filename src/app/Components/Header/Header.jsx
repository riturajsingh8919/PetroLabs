"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaAnglesRight, FaPhone, FaXTwitter } from "react-icons/fa6";

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const menu = {
    email: "sales@petrolabsindia.com",
    location: "040-23156400",
    logoUrl: "/assets/img/logo.png",
    logoLink: "/",
    navItems: [
      {
        label: "Home",
        href: "/",
      },

      {
        label: "About Us",
        href: "#",
      },

      {
        label: "Products",
        href: "#",
        subItems: [
          {
            label: "Spectro Scientific USA",
            href: "https://www.spectrosci.com/",
          },
          {
            label: "Biolab Viscometer",
            href: "https://biolab.com.tr/en/kinematic-viscometer/",
          },
          {
            label: "Filtertechnik UK",
            href: "https://www.filtertechnik.co.uk/particle-pal-range",
          },
          {
            label: "FTIR Spectrometers and Accessories",
            href: "#", // no URL provided
          },
          {
            label: "XRF Analyzers & Spectrometers",
            href: "https://spectronxray.ru/en/",
          },
          {
            label: "Oil Monitoring Sensors",
            href: "https://www.tandeltasystems.com/",
          },
          {
            label: "Triple R Japan Oil Filtration",
            href: "https://petrolabsindia.com/products/triple-r-japan/",
          },
          {
            label: "Industrial Lubricants",
            href: "#", // no link provided
          },
        ],
      },
      {
        label: "Services",
        href: "#",
        subItems: [
          {
            label: "Petroleum & Lubricant Testing",
            href: "#",
          },
          {
            label: "Transformer Oil Testing",
            href: "#",
          },
          { label: "Water Testing Services", href: "#" },
          {
            label: "Coolant & DEF Testing",
            href: "#",
          },
          {
            label: "RoHS & ELC Certification",
            href: "#",
          },
          {
            label: "Chemical & Mechanical Testing",
            href: "#",
          },
          {
            label: "Metallography Testing",
            href: "#",
          },
          {
            label: "Food & Agriculture Testing",
            href: "#",
          },
          {
            label: "Environmental Testing",
            href: "#",
          },
        ],
      },

      {
        label: "Training",
        href: "#",
        subItems: [
          {
            label: "Analytical Chemistry Training",
            href: "#",
            subItems: [
              {
                label: "GC-MS/MS Training",
                href: "#",
              },
              {
                label: "ICP-OES Training",
                href: "#",
              },
              {
                label: "HPLC Training",
                href: "#",
              },
              {
                label: "AAS Training",
                href: "#",
              },
              {
                label: "GC Training",
                href: "#",
              },
              {
                label: "Analytical / Organic / Industrial Chemistry",
                href: "#",
              },
            ],
          },

          {
            label: "Lubrication & Reliability Training",
            href: "#",
            subItems: [
              {
                label: "Oil Analysis & Ferrography",
                href: "#",
              },
              {
                label: "Condition-Based Maintenance",
                href: "#",
              },
              {
                label: "Machinery Lubrication I (MLT I / MLA I)",
                href: "#",
              },
              {
                label: "Machinery Lubrication II (MLT II)",
                href: "#",
              },
              {
                label: "Machinery Lubrication Engineer (MLE)",
                href: "#",
              },
              {
                label: "Machine Lubricant Analyst II (MLA II)",
                href: "#",
              },
              {
                label: "Machine Lubricant Analyst III (MLA III)",
                href: "#",
              },
            ],
          },
        ],
      },

      {
        label: "Resources",
        href: "#",
      },

      {
        label: "Careers",
        href: "#",
      },

      {
        label: "Contact Us",
        href: "#",
      },
    ],

    // btnUrl: "#",
    // btnText: "Contact Now",
  };

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs_gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs_gescout_sticky cs_gescout_show"); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ""
        } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ""}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaPhone />
                      </i>
                      <Link href={`tel:${menu.location}`}>{menu.location}</Link>
                    </li>
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <Link href={`mailto:${menu.email}`}>{menu.email}</Link>
                    </li>
                  </ul>
                </div>
                <div className="cs_top_header_right">
                  <div className="cs_social_btns cs_style_1">
                    <Link href="/" className="cs_center">
                      <i>
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link href="/" className="cs_center">
                      <i>
                        <FaLinkedin />
                      </i>
                    </Link>
                    <Link href="/" className="cs_center">
                      <i>
                        <FaXTwitter />
                      </i>
                    </Link>
                    <Link href="/" className="cs_center">
                      <i>
                        <FaInstagram />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href={menu.logoLink}>
                  <Image src={menu.logoUrl} alt="img" width={180} height={53} />
                </Link>
              </div>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul
                    className={`cs_nav_list ${isShowMobileMenu && "cs_active"}`}
                  >
                    {menu.navItems.map((item, index) => (
                      <li
                        className={
                          item.subItems ? "menu-item-has-children" : ""
                        }
                        key={index}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                        >
                          {item.label}
                        </Link>
                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? "block"
                                : "none",
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  onClick={() =>
                                    setIsShowMobileMenu(!isShowMobileMenu)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.subItems?.length && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && "cs_toggle_active"
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {variant == "cs_type_1" && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#2EA6F7"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
