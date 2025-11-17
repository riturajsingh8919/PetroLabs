import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPinterestP,
  FaRegClock,
} from "react-icons/fa6";

const Footer = () => {
  const data = {
    backgroundImage: "/assets/img/footer_bg.jpg",
    logo: "/assets/img/logo.png",
    contactText2:
      "Building No. 5-36/1/11-A, Plot No. 11-A, 3rd Floor, TSIIC, IALA, Prashanth Nagar, Kukatpally, Hyderabad, Telangana 500072.",
    contactText3: "76750 43138",
    facebookHref: "/",
    pinterestHref: "/",
    twitterHref: "/",
    instagramHref: "/",
    widgets: [
      {
        title: "Services",
        links: [
          {
            href: "#",
            text: "Petroleum & Lubricant Testing",
          },
          {
            href: "#",
            text: "Transformer Oil Testing",
          },
          { href: "#", text: "Water Testing Services" },
          {
            href: "#",
            text: "Coolant & DEF Testing",
          },
          {
            href: "#",
            text: "Chemical & Mechanical Testing",
          },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { href: "#", text: "About Us" },
          { href: "#", text: "Products" },
          { href: "#", text: "Training" },
          { href: "#", text: "Resources" },
          { href: "#", text: "Careers" },
          { href: "#", text: "Contact" },
        ],
      },
    ],

    recentPosts: [
      {
        href: "#",
        image: "/footer-blog-1.png",
        date: "23 Jun 2024",
        title: "Why Oil Analysis Matters for Industrial Reliability",
      },
      {
        href: "#",
        image: "/footer-blog-2.png",
        date: "20 Jun 2024",
        title: "Understanding Lubrication Health & Equipment Performance",
      },
    ],

    copyrightText:
      "Copyright © 2025 Petrolabs India Pvt. Ltd. All Rights Reserved.",

    footerMenu: [
      { href: "#", text: "Privacy Policy" },
      { href: "#", text: "Terms & Conditions" },
      { href: "#", text: "Disclaimer" },
    ],
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
                <Image src={data.logo} alt="img" width={205} height={53} />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  />
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link href={data.facebookHref} className="cs_center">
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link href={data.pinterestHref} className="cs_center">
                  <i>
                    <FaLinkedin />
                  </i>
                </Link>
                <Link href={data.twitterHref} className="cs_center">
                  <i>
                    <BsTwitterX />
                  </i>
                </Link>
                <Link href={data.instagramHref} className="cs_center">
                  <i>
                    <FaInstagram />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Recent Posts</h2>
              <ul className="cs_recent_post_list cs_mp_0">
                {data.recentPosts.map((post, index) => (
                  <li key={index}>
                    <div className="cs_recent_post">
                      <Link href={post.href} className="cs_recent_post_thumb">
                        <Image
                          src={post.image}
                          alt="img"
                          width={85}
                          height={85}
                        />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p>{post.date}</p>
                        <h3 className="cs_recent_post_title">
                          <Link href={post.href}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
