"use client";
import React from "react";
import HeroSection from "../Components/HeroSection";
import Section from "../Components/Section";
import CtaSection from "../Components/CtaSection";
import About from "../Components/About";
import CounterSection from "../Components/FunSection/CounterSection";
import ChooseUs from "../Components/ChooseUs";
import ContactSection2 from "../Components/ContactSection/ContactSection2";
import BlogSection from "../Components/BlogsSection";
import {
  FaOilCan,
  FaBolt,
  FaWater,
  FaLeaf,
  FaFlask,
  FaMicroscope,
  FaVial,
  FaFilter,
  FaXRay,
  FaSatelliteDish,
  FaTools,
  FaCertificate,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";
import { FaWaveSquare } from "react-icons/fa6";
import {
  GiChemicalDrop,
  GiMetalBar,
  GiBarrel,
  GiOilDrum,
} from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import ServiceSection3 from "../Components/Service/ServiceSection3";
import ServiceSection2 from "../Components/Service/ServiceSection2";
import ProjectsSection2 from "../Components/ProjectSection/ProjectsSection2";
import DentalSolution from "../Components/DentalSolution";

const heroData = {
  primarySlider: [
    {
      bgImageUrl: "/slider/02.png",
      title: "Precision Testing for Lubricants & <span>Chemicals.</span>",
      contactSubtitle:
        "Accurate testing for petroleum, lubricants, and transformer oils — ensuring compliance, consistency, and quality.",
      contactTitle: "Request Testing Support.",
      contact: "Call Us at: 040-23156400",
      btnText1: "Contact Now",
      link: "#",
      btnText2: "Discover More",
      link2: "#",
      iconImgUrl: "/assets/img/icons/hero_icon.png",
    },
    {
      bgImageUrl: "/slider/03.png",
      title: "Empowering Excellence Through <span>Training.</span>",
      contactSubtitle:
        "Hands-on analytical training in GC-MS, HPLC, ICP-OES, and oil analysis led by industry-certified professionals.",
      contactTitle: "Enroll for Training.",
      contact: "Call Us at: 040-23156400",
      btnText1: "Contact Now",
      link: "#",
      btnText2: "Discover More",
      link2: "#",
      iconImgUrl: "/assets/img/icons/hero_icon.png",
    },
    {
      bgImageUrl: "/slider/04.png",
      title: "Trusted Global Partnerships in <span>Reliability.</span>",
      contactSubtitle:
        "Delivering world-class filtration, monitoring, and analytical solutions with global leaders in fluid technology.",
      contactTitle: "Explore Reliability Solutions.",
      contact: "Call Us at: 040-23156400",
      btnText1: "Contact Now",
      link: "#",
      btnText2: "Discover More",
      link2: "#",
      iconImgUrl: "/assets/img/icons/hero_icon.png",
    },
  ],
  secondarySlider: ["/02.png", "/03.png", "/04.png"],
};

const ctaData = {
  imageUrl: "/assets/img/cta_img_1.jpg",
  title: "Training Excellence, Delivered by Experts",
  subtitle:
    "Our certified experts ensure every participant gains the skills needed to achieve international certifications.",
  buttonUrl: "#",
  buttonText: "Connect Now",
};

const aboutData = {
  sectionSubtitle: "ABOUT PETROLABS",
  sectionTitle:
    "Leading the Industry in Oil Analysis, Lubrication & Reliability Solutions",
  aboutText:
    "Petrolabs India Pvt. Ltd. delivers world-class oil analysis, filtration, training, and condition monitoring solutions in partnership with global leaders like Spectro Scientific USA. With ISO-certified systems and NABL-accredited laboratories, we ensure precision, reliability, and excellence in every service.",

  service:
    "We provide complete lubricant testing, onsite labs, reliability training, and turnkey oil analysis solutions across India and the Middle East. <a href='#'>READ MORE +</a>",

  experienceYears: "15+",
  experienceTitle: "Years of Excellence",

  videoUrl: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoText: "How We Work",

  iconboxes: [
    {
      imgUrl: "/assets/img/icons/about_icon_1.png",
      title: "Technical Expertise",
      subtitle:
        "Certified specialists delivering accurate testing, diagnostics, and reliability insights.",
    },
    {
      imgUrl: "/assets/img/icons/about_icon_2.png",
      title: "Training & Support",
      subtitle:
        "Internationally aligned training in lubrication, oil analysis, chemistry, and reliability.",
    },
  ],
  headImgUrl: "/assets/img/about_img_1.jpg",
};

const countersData = [
  {
    iconUrl: "/assets/img/icons/counter_icon_1.png",
    number: "999+",
    title: "Happy Customers",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_2.png",
    number: "30+",
    title: "Professional Contractors",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_3.png",
    number: "99+",
    title: "Projects Complete",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_4.png",
    number: "27+",
    title: "Industries We Served",
  },
];

const serviceSectionData = {
  sectionTitle: "High-Quality Testing & Reliability Services",
  sectionSubtitle: "OUR BEST SERVICES",
  description:
    "We support industries with world-class oil analysis, laboratory testing, reliability services, and advanced condition monitoring powered by global technology partners.",

  slides: [
    {
      imageUrl: "/services/1.jpg",
      icon: FaOilCan,
      title: "Petroleum Products & Lubricant Testing",
      subtitle:
        "Comprehensive testing of fuels and lubricants to assess quality, performance, and contamination.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/2.jpg",
      icon: FaBolt,
      title: "Transformer Oil Testing",
      subtitle:
        "Evaluation of transformer oil integrity to ensure insulation reliability and operational safety.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/3.jpg",
      icon: FaWater,
      title: "Water Testing Services",
      subtitle:
        "Chemical, physical, and microbiological analysis for industrial and domestic water quality.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/4.jpg",
      icon: GiBarrel,
      title: "Coolant & DEF Testing",
      subtitle:
        "Quality testing of coolant and DEF fluids to maintain engine efficiency and emission control.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/5.jpg",
      icon: MdVerified,
      title: "RoHS & ELC Certification Testing",
      subtitle:
        "Regulatory compliance testing for hazardous substances and environmental standards.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/6.jpg",
      icon: GiChemicalDrop,
      title: "Chemical & Mechanical Testing",
      subtitle:
        "Advanced evaluation of material properties using chemical, mechanical, and physical methods.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/7.jpg",
      icon: GiMetalBar,
      title: "Metallography Testing",
      subtitle:
        "Microscopic metal structure analysis to identify defects, grain size, and manufacturing quality.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/8.jpg",
      icon: FaBowlFood,
      title: "Food & Agriculture Product Testing",
      subtitle:
        "Quality, safety, and regulatory assessment for food and agricultural products.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
    {
      imageUrl: "/services/9.jpg",
      icon: IoEarthOutline,
      title: "Environmental Testing",
      subtitle:
        "Air, water, soil, and waste analysis to ensure environmental safety and compliance.",
      detailsLink: "#",
      detailsText: "Read More",
      bgImagUrl: "/assets/img/service_bg_4.jpg",
    },
  ],
};

const productsData = {
  subtitle: "OUR PRODUCTS",
  title: "High-Quality Products for Oil Analysis & Reliability",
  description:
    "We provide world-class oil analysis instruments and industrial solutions from globally trusted technology partners, supporting advanced reliability and maintenance programs.",

  services: [
    {
      icon: FaMicroscope,
      title: "Spectro Scientific USA",
      subtitle:
        "Oil, fuel, and fluid analysis instruments including spectrometers, <br>particle analyzers, and turnkey lab systems.",
      link: "https://www.spectrosci.com",
      imageSrc: "/assets/img/service_1.png",
    },
    {
      icon: FaVial,
      title: "Biolab Viscometers",
      subtitle:
        "High-precision kinematic viscometers designed for accurate viscosity <br>measurements in oils and fluids.",
      link: "https://biolab.com.tr/en/kinematic-viscometer/",
      imageSrc: "/assets/img/service_1.png",
    },
    {
      icon: FaFilter,
      title: "Filtertechnik UK",
      subtitle:
        "Portable particle counters and contamination testing systems for <br>real-time oil cleanliness monitoring.",
      link: "https://www.filtertechnik.co.uk/particle-pal-range",
      imageSrc: "/assets/img/service_1.png",
    },
    {
      icon: FaWaveSquare,
      title: "FTIR Spectrometers & Accessories",
      subtitle:
        "Infrared spectrometers for oil chemistry, degradation, <br>and contamination analysis.",
      link: "#", // no direct URL provided
      imageSrc: "/assets/img/service_1.png",
    },
    {
      icon: FaXRay,
      title: "XRF Analyzers & Spectrometers",
      subtitle:
        "Advanced X-ray fluorescence systems for elemental analysis of <br>oils, metals, and industrial samples.",
      link: "https://spectronxray.ru/en/",
      imageSrc: "/assets/img/service_1.png",
    },
    {
      icon: FaSatelliteDish,
      title: "Oil Monitoring Sensors",
      subtitle:
        "Real-time online condition monitoring sensors for <br>industrial lubrication systems.",
      link: "https://www.tandeltasystems.com/",
      imageSrc: "/assets/img/service_1.png",
    },
    {
      icon: GiOilDrum,
      title: "Triple R Japan Oil Filtration",
      subtitle:
        "High-efficiency depth filtration systems that remove sludge, <br>varnish, moisture, and fine particles.",
      link: "https://petrolabsindia.com/products/triple-r-japan/",
      imageSrc: "/assets/img/service_1.png",
    },
    {
      icon: FaOilCan,
      title: "Industrial Lubricants",
      subtitle:
        "Premium-grade industrial lubricants engineered for reliable <br>performance in critical machinery.",
      link: "#",
      imageSrc: "/assets/img/service_1.png",
    },
  ],
};

const projectSectionData = {
  heading: {
    subtitle: "OUR TRAINING",
    title: "Industry-Leading Training & Certification Programs",
    description:
      "Petrolabs delivers hands-on, standards-aligned training in analytical chemistry, lubrication, oil analysis, vibration, and reliability engineering — designed for working professionals and certification aspirants.",
    variant: "cs_type_1",
  },

  projects: [
    {
      index: "01",
      title: "Analytical Chemistry Training",
      subtitle: "GC, HPLC, AAS & ICP training for lab professionals.",
      overlayImage: "/analytical.png",
      thumbnailImage: "/chemistry-training.png",
      thumbnailShape: "/assets/img/project_thumb_shape.png",
      link: "#",
    },
    {
      index: "02",
      title: "Lubrication & Reliability Training",
      subtitle: "MLT, MLA, CBM & reliability skills for industry teams.",
      overlayImage: "/lubrication.png",
      thumbnailImage: "/lubrication-icon.png",
      thumbnailShape: "/assets/img/project_thumb_shape.png",
      link: "#",
    },
  ],
};

const sectionData = {
  subtitle: "WHY CHOOSE US",
  title: "Trusted Excellence in Oil Analysis, Lubrication & Reliability",
  services: [
    {
      icon: FaMicroscope,
      title: "Advanced Laboratory Expertise",
      subtitle:
        "NABL-accredited testing with ISO-compliant methods for accurate results.",
    },
    {
      icon: FaTools,
      title: "Onsite Systems & Technical Support",
      subtitle:
        "Factory-trained engineers offering reliable installation, service and maintenance.",
    },
    {
      icon: FaCertificate,
      title: "Certified Professionals",
      subtitle:
        "ICML, STLE & SMRP-certified specialists ensuring global-standard reliability.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Industry Training Programs",
      subtitle:
        "Globally aligned training in lubrication, oil analysis, CBM & analytical chemistry.",
    },
    {
      icon: FaFilter,
      title: "Precision Oil Filtration",
      subtitle:
        "High-efficiency filtration systems for cleaner oil and extended equipment life.",
    },
    {
      icon: FaHandshake,
      title: "Trusted by Leading Industries",
      subtitle:
        "Proven expertise delivering solutions across India & the Middle East.",
    },
  ],
};

const dentalSolutionData = {
  backgroundClass: "cs_blue_bg",
  wrapperClass: "cs_blue_bg",

  subtitle: "OUR CLIENT REVIEWS",
  title: "What Our Customers Say About Our Services",

  slides: [
    {
      heading: "Reviews",
      subtitle:
        "Petrolabs has been an exceptional partner for our oil analysis and reliability programs. Their quick turnaround and accurate reports have significantly improved our maintenance decisions.",
      avatarImage: "/assets/img/avatar_1.png",
      avatarAlt: "Avatar",
      avatarName: "Rahul Sharma",
      avatarTitle: "Maintenance Head, Manufacturing Unit",
      rating: 5,
    },
    {
      heading: "Reviews",
      subtitle:
        "Their lubrication and reliability training programs provided our team with practical knowledge aligned to global standards. Highly recommended for upskilling technical staff.",
      avatarImage: "/assets/img/avatar_1.png",
      avatarAlt: "Avatar",
      avatarName: "Anita Verma",
      avatarTitle: "Reliability Engineer",
      rating: 4,
    },
    {
      heading: "Reviews",
      subtitle:
        "The onsite oil analysis solutions by Petrolabs have helped us reduce downtime and improve equipment health dramatically. Professional team and excellent support.",
      avatarImage: "/assets/img/avatar_1.png",
      avatarAlt: "Avatar",
      avatarName: "Vikram Patel",
      avatarTitle: "Plant Operations Manager",
      rating: 5,
    },
  ],

  shapeImage: "/assets/img/msg_quote_1.png",
};

const blogsData = {
  sectionTitle: "OUR LATEST BLOGS",
  sectionSubtitle: "Latest Posts & Articles",

  postsData: [
    {
      title: "Why Oil Analysis Is Essential for Modern Industries",
      subtitle:
        "A quick overview of how oil analysis helps reduce breakdowns, extend equipment life, and improve reliability.",
      date: "May 02",
      category: "Oil Analysis",
      author: "Admin",
      thumbnail: "/blog1.jpg",
      btnText: "Read More",
      postLink: "#",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Understanding Viscosity: The Key to Lubricant Performance",
      subtitle:
        "Learn how viscosity affects lubrication efficiency, equipment protection, and oil health monitoring.",
      date: "May 02",
      category: "Lubrication",
      author: "Admin",
      thumbnail: "/blog2.jpg",
      btnText: "Read More",
      postLink: "#",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Condition-Based Maintenance: The Future of Reliability",
      subtitle:
        "Explore how CBM strategies help industries shift from reactive to predictive maintenance.",
      date: "May 02",
      category: "Reliability",
      author: "Admin",
      thumbnail: "/blog3.jpg",
      btnText: "Read More",
      postLink: "#",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Top Benefits of Transformer Oil Testing",
      subtitle:
        "A brief guide on why transformer oil testing is critical for safety, reliability, and power system health.",
      date: "May 02",
      category: "Testing",
      author: "Admin",
      thumbnail: "/blog4.jpg",
      btnText: "Read More",
      postLink: "#",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
  ],
};

const page = () => {
  return (
    <div>
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>
      {/* End Counter */}

      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg"
      >
        <ServiceSection3 data={serviceSectionData} />
      </Section>
      {/* End Service Section */}

      {/* Start Products Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="/01.jpg"
      >
        <ServiceSection2 data={productsData} />
      </Section>
      {/* End Products Section */}

      {/* Start Projects Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_white_bg"}
      >
        <ProjectsSection2 data={projectSectionData} />
      </Section>
      {/* End Projects Section */}

      {/* Start Why Choose Us Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>
      {/* End Why Choose Us Section */}

      {/* Start Dental Solution Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="76"
        bottomSpaceLg="70"
        bottomSpaceMd="76"
        className={"cs_bg_filed"}
        backgroundImage="/assets/img/medical_solution_bg_2.jpg"
      >
        <DentalSolution data={dentalSolutionData} />
      </Section>
      {/* End Dental Solution Section */}

      {/* Start Contact Solution */}
      <ContactSection2></ContactSection2>
      {/* End Contact Solution */}

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
      {/* End Blog Solution */}
    </div>
  );
};

export default page;
