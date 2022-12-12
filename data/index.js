import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo2.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark,
};

export const NavLinks = [
  {
    name: "Home",
    url: "/",
    // subItems: [
    //   {
    //     name: "Home 01",
    //     url: "/"
    //   },
    //   {
    //     name: "Home 02",
    //     url: "/index-2"
    //   },
    //   {
    //     name: "Home 03",
    //     url: "/index-3"
    //   }
    // ]
  },
  {
    name: "About",
    url: "/about",
  },
  
  {
    name: "Services",
    url: "/service",
    subItems: [
      {
        name: "Web Development",
        url: "/service",
      },
      {
        name: "App Development",
        url: "/service",
      },
      {
        name: "E-mail Marketing",
        url: "/service",
      },
      {
        name: "Paid Marketing",
        url: "/service",
      },
      {
        name: "Graphic Designing",
        url: "/service",
      },
      {
        name: "SMM",
        url: "/service",
      },
      {
        name: "SEO",
        url: "/service",
      },
      // {
      //   name: "Service Details",
      //   url: "/service-details",
      // },
    ],
  },
  {
    name: "Portfolio",
    url: "/portfolio",
    // subItems: [
    //   {
    //     name: "Portfolio 01",
    //     url: "/portfolio",
    //   },
    //   {
    //     name: "Portfolio Details",
    //     url: "/portfolio-details",
    //   },
    // ],
  },
  {
    name: "Blog",
    url: "/blog",
    // subItems: [
    //   {
    //     name: "Blog 01",
    //     url: "/blog",
    //   },
    //   {
    //     name: "Blog 02",
    //     url: "/blog-2",
    //   },
    //   {
    //     name: "Blog 03",
    //     url: "/blog-3",
    //   },
    //   {
    //     name: "Blog Details",
    //     url: "/blog-single",
    //   },
    // ],
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";
import sliderOne03 from "@/images/slider/2_1.jpg";
import sliderOne04 from "@/images/slider/2_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "WELCOME TO AttheTech AGENCY",
    title: "SMART WEB \n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      name: "",
      url: "/service-details?title=Web+Development",
    },
  },
  {
    image: sliderOne02,
    subTitle: "WELCOME TO AttheTech AGENCY",
    title: "SMART APP \n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "service-details?title=App+Development",
    },
  },
  {
    image: sliderOne03,
    subTitle: "SEO & SMM ",
    title: "SEO AND SMM\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/service-details?title=SMM",
    },
  },
  {
    image: sliderOne04,
    subTitle: "DIGITAL MARKETING ",
    title: "DIGITAL MARKETING\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/service-details?title=Paid+Marketing",
    },
  },
];

import sliderTwo01 from "@/images/slider/2_1.jpg";
import sliderTwo02 from "@/images/slider/2_2.jpg";
import sliderTwo03 from "@/images/slider/2_3.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "WELCOME TO AttheTech AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderTwo02,
    subTitle: "WELCOME TO AttheTech AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderTwo03,
    subTitle: "WELCOME TO AttheTech AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO AttheTech AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO AttheTech AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },
];

export const ContactInfosBlock = {
  subTitle: "our offices",
  title: "offices near you",
  description:
    "We are committed to providing our customers with exceptional service while \n offering our employees the best training.",
};

export const ContactInfosList = [
  {
    title: "United Kingdom",
    infos: [
      {
        name: "Flat 3, Sycamore Court,12 Bowlas Avenue ,",
      },
      {
        name: "Sutton Coldfield, B74 2TT,",
      },
      {
        name: " United Kingdom",
      },
      {
        name: "info@atthetech.com",
      },
      {
        name: "+44 (121) 318-5609",
      },
    ],
  },
  // {
  //   title: "KSA",
  //   infos: [
  //     {
  //       name: "Al Khubub - An Nahdah PO Box 2281 ",
  //     },
  //     {
  //       name: " Postal Code 13222 Riyadh - KSA ",
  //     },
  //     {
  //       name: "info@atthetech.com",
  //     },
  //     {
  //       name: "+1 510 470-6555",
  //     },
  //   ],
  // },
  {
    title: "united states",
    infos: [
      {
        name: "852 Cowell St #A1342 box 30",
      },
      {
        name: "Quartzite Arizona",
      },
      {
        name: "United States",
      },
      {
        name: "info@atthetech.com",
      },
      {
        name: "+1 (510) 470-6555",
      },
    ],
  },
  // {
  //   title: "baltimore",
  //   infos: [
  //     {
  //       name: "3 Lombabr 50 baltimore",
  //     },
  //     {
  //       name: "needhelp@meipaly.com",
  //     },
  //     {
  //       name: "666 888 000",
  //     },
  //   ],
  // },
];

export const ContactFormTitle = {
  subTitle: "Contact with us",
  title: "write us a message",
  description:
    "We are committed to providing our customers with exceptional service while \n      offering our employees the best training. ",
};

import blogImage1 from "@/images/blog/1.jpg";
import blogImage2 from "@/images/blog/2.jpg";
import blogImage3 from "@/images/blog/3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "basic rules of running web agency business",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];

export const BlogHomeSection = {
  subTitle: "our news & articles",
  title: "latest blog posts",
  text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
};

import blogS1 from "@/images/blog/11.jpg";
import blogS2 from "@/images/blog/12.jpg";
import blogS3 from "@/images/blog/13.jpg";

export const BlogSidebarPost = [
  {
    title: "basic rules of running web agency",
    image: blogS1,
    url: "/blog-single",
  },
  {
    title: "basic rules of running web agency",
    image: blogS2,
    url: "/blog-single",
  },
  {
    title: "basic rules of running web agency",
    image: blogS3,
    url: "/blog-single",
  },
];

import commentImage1 from "@/images/blog/9.jpg";
import commentImage2 from "@/images/blog/10.jpg";

export const BlogComments = [
  {
    image: commentImage1,
    name: "David Martin",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
  {
    image: commentImage2,
    name: "Jessica Brown",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.",
  },
];

import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";
import portfolio06 from "@/images/portfolio/6.jpg";
import portfolio10 from "@/images/portfolio/10.jpg";

export const PortfolioData = [
  {
    title: "Ecommerce Mobile App",
    categories: ["React", "Application"],
    image: portfolio01,
    url: "/portfolio-details",
    name:"APP DEVELOPMENT"
  },
  {
    title: "Website Design and Development",
    categories: ["all", "Website"],
    image: portfolio02,
    url: "/portfolio-details",
    name:'WEB DEVELOPMENT'
  },
  {
    title: "Tracking App",
    categories: ["all", "Application"],
    image: portfolio03,
    url: "/portfolio-details",
    name:"APP DEVELOPMENT"

  },
  {
    title: "search engine optimization",
    categories: ["all", "SEO"],
    image: portfolio04,
    url: "/portfolio-details",
    name:'SEO'
  },
  {
    title: "Web designing",
    categories: ["all", "graphic designing"],
    image: portfolio10,
    url: "/portfolio-details",
    name:'GRAPHIC DESIGNING'
  },
  {
    title: "ecommerce website",
    categories: ["all", "ecommerce"],
    image: portfolio06,
    url: "/portfolio-details",
    name:'WEB DEVELOPMENT'

  },
];

export const PortfolioButtons = [
  {
    name: "APP DEVELOPMENT",
    services: "app development",
  },
  {
    name: "WEB DEVELOPMENT",
    services: "web development",
  },
  {
    name: "PAID MARKETING",
    services: " paid marketing",
  },
  {
    name: "GRAPHIC DESIGNING",
    services: "graphic designing",
  },
  {
    name: "SMM",
    services: "smm",
  },
  {
    name: "SEO",
    services: " seo",
  },
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" },
];

import portfolioD01 from "@/images/portfolio/1.jpg";
import portfolioD02 from "@/images/portfolio/2.jpg";
import portfolioD03 from "@/images/portfolio/3.jpg";
import portfolioD04 from "@/images/portfolio/4.jpg";
import portfolioD05 from "@/images/portfolio/5.jpg";
import portfolioD06 from "@/images/portfolio/6.jpg";

export const PortfolioDetailsData = [
  {
    gallery: [{ image: portfolioD01 }],
    title: "Ecommerce Mobile App",
    text: " This is the Ecommerce Clothing Mobile App of USA Client  ",
    client: "Jessica Brown",
    categories: [
      {
        name: "App Development,",
        url: "#",
      },
      {
        name: "React Native App,",
        url: "#",
      },
    ],
    date: "8 Nov, 2018",
    socials: [
      {
        name: "Facebook",
        url: "#",
      },
      {
        name: "Twitter",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    gallery: [{ image: portfolioD02 }],
    title: "Website Design and Development",
    text: " Website Designing of Custom theme in React ",
    client: "Wilson Mike",
    categories: [
      {
        name: "Web Development",
        url: "#",
      },
      {
        name: "",
        url: "#",
      },
    ],
    date: "16 Jun, 2019",
    socials: [
      {
        name: "Facebook",
        url: "#",
      },
      {
        name: "Twitter",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    gallery: [{ image: portfolioD03 }],
    title: "Tracking App",
    text: " This is the clone app of Uber And Creeam based Germany client ",
    client: "Marian Kills",
    categories: [
      {
        name: "React App",
        url: "#",
      },
    ],
    date: "7 Apr, 2019",
    socials: [
      {
        name: "Facebook",
        url: "#",
      },
      {
        name: "Twitter",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    gallery: [{ image: portfolioD04 }],
    title: "search engine optimization",
    text: "A complete SEO contract report after 6 Months",
    client: "Jessica Brown",
    categories: [
      {
        name: "SEO",
        url: "#",
      },
    ],
    date: "10 May, 2022",
    socials: [
      {
        name: "Facebook",
        url: "#",
      },
      {
        name: "Twitter",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    gallery: [{ image: portfolioD05 }],
    title: "graphic designing",
    text: " Logo Post Brochure Designing Web Designing UI and Interactive Advertising and Marketing Design and Publication and Typographic Design.",
    client: "Morlien",
    categories: [
      {
        name: "Graphic,",
        url: "#",
      },
      {
        name: "Illustrations,",
        url: "#",
      },
    ],
    date: "8 Nov, 2018",
    socials: [
      {
        name: "Facebook",
        url: "#",
      },
      {
        name: "Twitter",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
  {
    gallery: [{ image: portfolioD06 }],
    title: "ecommerce website",
    text: " This Is the Dubai Based ecommerce Food Salling Store.",
    categories: [
      {
        name: "Shopify",
        url: "#",
      },
    ],
    date: "8 Desember, 2020",
    socials: [
      {
        name: "Facebook",
        url: "#",
      },
      {
        name: "Twitter",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
    ],
  },
];

import webser from "@/images/bon.jpg";
import Appser from "@/images/appser.jpg";
import emailser from "@/images/emailser.jpg";
import adsser from "@/images/adsser.jpg";
import garser from "@/images/garser.jpg";
import smmser from "@/images/smmser.jpg";
import seoser from "@/images/seoser.jpg";

export const ServicePostData = [
  {
    title: "Web Development",
    text: "If you're looking for a web developer who can create beautiful, functional websites, then you need Atthetech. We have years of experience in various web development platforms and technologies, so we know how to create precisely what you need. We can do it all if you're looking for a simple website or a complex eCommerce solution.",
    iconName: "mei-web-design",
    url: "/service-details",
    image: webser,
    heading: "Types of Websites",
    paragraph:
      "Atthetech team professionals can help you create a user-friendly Web Development  that is  engaging and persuasive.",
    serviceTypes: [
      "Business Websites",
      "Ecommerce Websites",
      "Classified Websites",
      "Personal Websites",
      "Others Websites",
    ],
    heading2: "Web Design Process",
    content:
      "At The Tech expert Team in web development, with more than 10 years of experience working On WordPress, Shopify, Wix, and with all popular CMS.  Full Stack Development Front End For Web React, HTML5, CSS3, Bootstrap & Antdesign, Next Js, Redux, Redux-saga, Back End Database Express Js, Postgresql, Nodejs, MongoDB, TypeScript. Cloud Platforms AWS, Firebase, Google Console, Linux Server & Heroku .  Atthetech has full potential to build mid-to-complex level tech and digital solutions for its clients worldwide. ",
    servicesTypes: [
      "Listen & Learn The first step is understanding your company, brand, and website's basic needs from the ground up.",
      "Website Workflow As clarity comes, we create our website Workflow roadmap to deliver the different phases of your Design & Build.",
      "UX & Design Working together ensures you better understand and validate your new website design.",
      "Code Website performance is critical. The website must be fast and easy to manage too.",
      "QA & Testing It must be perfect and also includes polishing before launch",
      "Launch! (And Optimize) After launch, we can work to optimize your website tied to essential metrics.",
    ],
  },
  {
    title: "App Development",
    text: "At the tech specialize in app development. Our team of experienced professionals can help you create a user-friendly Mobile IOS and Android Application that is both engaging and persuasive. A positive user experience matters when driving traffic to your website. Understanding these key components is essential to your brand’s digital marketing success.",
    iconName: "mei-app-development",
    url: "/service-details",
    image: Appser,
    heading: "Types of App",
    paragraph:
      "Atthetech team professionals can help you create a user-friendly App Development  that is  engaging and persuasive.",
    serviceTypes: [
      "Tracking Apps",
      "Ecommerce Apps",
      "Classified Apps",
      "Social Media Mobile Apps",
      "Others Apps",
    ],
    heading2: "App Development Process",
    content:
      "At the Tech Expertise App development Full Stack Development For App React-Native, Redux, Redux saga, React-Native-Paper, Back End Database Express Js, Postgresql, Nodejs, MongoDB, TypeScript.Cloud Platforms AWS, Firebase, Google Console, Linux Server & Heroku .",
    servicesTypes: [
      "Listen & Learn The first step is understanding your company, brand, and App's basic needs from the ground up.",
      "App Workflow As clarity comes, we create our App Workflow roadmap to deliver the different phases of your Design & Build.",
      "UX & Design Working together ensures you better understand and validate your new App design.",
      "Code App performance is critical. The App must be fast and easy to manage too.",
      "QA & Testing It must be perfect and also includes polishing before launch",
      "Launch! (And Optimize) After launch, we can work to optimize your website tied to essential metrics.",
    ],
  },
  {
    title: "SEO",
    text: "SEO has become one of the most important aspects of online marketing, and attheTech can help your business rank higher on Google and other search engines. We use High search keywords with low competition and key phrases that help generate new leads for your company or brand. We have significant experience in SEO, content writing, and link building, authority building,and our services are designed to increase traffic to your website and improve your online visibility.",
    iconName: "mei-development",
    url: "/service-details",
    image: seoser,
    heading: "Planning & Strategy",
    paragraph:
      "Some companies might not even understand they need Search Engine Optimization or need to be positioned competitively so that their competitors aren't stealing all their audience and customers.",
    content:
      "We use High search keywords with low competition and key phrases that help generate new leads for your company or brand. We have significant experience in SEO, content writing, and link building, authority building, and our services are designed to increase traffic to your website and improve your online visibility.Some companies might not even understand they need Search Engine Optimization or need to be positioned competitively so that their competitors aren't stealing all their audience and customers. Either challenge you might face, let's chat about a B2B SEO strategy that will rank your company & brand in search engines so that your future clients will find you.",
    serviceTypes: [
      "SEO Strategy",
      "Keyword & Topic Research",
      "Technical SEO",
      "Core Web importance",
      "Backlinking Strategy",
    ],
    servicesTypes: [
      "SEO Strategy A clear SEO plan comes from thorough research, then is presented for stakeholder buy-in and delivered.",
      "Keyword & Topic Research Keyword strategy, research, and volume of keywords can drive audience and customers.",
      "Technical SEO is your website baseline that you should be working on and keeping clean for your website scorecard and ongoing rank.",
      "Core Web importance  Google wants to recommend fast websites. SEO isn't just about keywords and links. Your site needs to perform well and with speed. Ongoing testing and site and page optimization are part of the plan.",
      "Backlinking Strategy we need to position you as the authority in your field, industry, or service you are offering so that you will outrank your organic competition. Looking for an SEO agency,",
    ],
  },
  {
    title: "SMM",
    text: "Social Media has changed how brands communicate with their audiences forever. Whether your business is a B2B or B2C brand, social media is a powerful way to build brand awareness, build a positive image, and drive lead generation. Atthetech specialize in strategic social media campaigns that focus on building and protecting a positive brand image, creating loyalty among fans, and driving new leads for your business.",
    iconName: "mei-iphone",
    url: "/service-details",
    image: smmser,
    heading: "Social Platforms",
    paragraph:
      "With new apps popping up every day, it can be a challenge to figure out which social media platforms will be most valuable for investing your time and money",
    content:
      "Social Media Marketing is the primary key to any business and is one of the best ways to engage more people with your business. With our strong expertise, Atthetech can bring more traffic to your business by using Facebook, Instagram, LinkedIn, Reddit, YouTube, and many more Social Media Platforms",
    serviceTypes: [
      "facebook",
      "Instagram",
      "LinkedIn",
      "Youtube",
      "Twitter",
      "TikTok",
    ],
    heading2: "Key Points",
    servicesTypes: [
      "Creating an audience persona",
      "Goal-setting and objectives",
      "Budgeting",
      "Resourcing/team building",
      "Research",
      "Choosing your platforms",
      "Producing content",
      "Integrating with the rest of your digital strategy",
      "Tracking analytics",
    ],
    paragraph2:
      "SEO has become one of the most important aspects of online marketing, and attheTech can help your business rank higher on Google and other search engines. We use High search keywords with low competition and key phrases that help generate new leads for your company or brand. We have significant experience in SEO, content writing, and link building, authority building, and our services are designed to increase traffic to your website and improve your online visibility.",
  },
  {
    title: "Graphic Designing",
    text: "Graphic design is the most powerful art that has breathed fresh life into digital marketing. This modern form of art has added a contemporary flair to the advertisement profile of every company. It also acts as one of the key components to build brand awareness and influence the customer’s decision-making process. Until the recent past, many entrepreneurs and decision -makers failed to understand the importance of graphic design. Now, there is a huge interest as the two industries are becoming inseparable.",
    iconName: "mei-computer-graphic",
    url: "/service-details",
    image: garser,
    heading: "Social Platforms",
    content:
      "So, let’s dive into the concept of graphic designing and the role it plays in the digital marketing world. Atthetech can create Creative and Eye-catching ideas to grab the audience's attention. And to give your Brand a perfect look requires perfect design, including Logo Design, Post Flyers, Brochures design, Web Design, UI and Interactive Design, Advertising and Marketing Design, Motion Graphics and Animation, and Packaging Design. ",
    serviceTypes: [
      "Brochure Designing",
      "Web Designing",
      "UI and Interactive",
      "Advertising and Marketing Design",
      "Publication and Typographic Design",
      "Illustration",
    ],
  },
  {
    title: "Paid Marketing",
    text: "Atthetech specialize in Paid Marketing. Reaching more audiences in a limited time is possible through Paid Marketing on Google Ads, Facebook Ads, Instagram Ads, and YouTube Ads.To create perfect Camping, choose the right audience and keywords that should be low competition and high search volume with Minimum PPC (Pay per Click) is the need of any ads.",
    iconName: "mei-pie",
    url: "/service-details",
    image: adsser,
    heading: "Social Platforms",
    content:
      "At the tech Team is expert in running Google, Bing, Facebook, Amazon, Snapchat, Reddit, Pinterest, TikTok, and LinkedIn Ads campaigns, creating efficient PPC strategies, and managing complex accounts we are passionate about helping businesses succeed online.",
    serviceTypes: [
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Youtube Ads",
      "Tiktok Ads",
      "linkedin ads",
      "Twiiter ads",
    ],
    heading4: "AdWords and Bing",
    servicesTypes1: [
      "Google Ads and Bing Ads Certified",
      "Search Campaigns",
      "Display Campaigns (including remarketing)",
      "Shopping Campaigns",
      "Gmail Ads Campaigns",
      "YouTube Campaigns",
      "Google Analytics Setup",
      "Conversion Tracking",
    ],
    heading41: "Facebook Ads",
    servicesTypes2: [
      "Lead Generation Campaigns",
      "App Installs Campaigns",
      "Brand Awareness Campaigns",
      "Website Conversion Campaigns",
      "Offer Claim Campaigns",
    ],
    heading42: "LinkedIn Ads",
    servicesTypes3: [
      "InMail Campaigns",
      "Sponsored Content Campaigns",
      "Dynamic Text Ads Campaigns",
    ],
  },
  {
    title: "E-mail Marketing",
    text: "The use of email within your marketing efforts to promote a business’s products and services, as well as incentivize customer loyalty.",
    iconName: "mei-pie",
    url: "/service-details",
    image: emailser,
    heading: "planning & strategy",
    paragraph:
      "Atthetech can help you design, build, and optimize your email marketing to get the best ROI (Return on Investment) in your marketing program.",
    content:
      "Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services. It can also be a softer sell to educate your audience on the value of your brand or keep them engaged between purchases. It can also be anything in between. Atthetech can help you design, build, and optimize your email marketing to get the best ROI (Return on Investment) in your marketing program.",
    serviceTypes: [
      "Content Creating",
      "Data Scratching",
      "List Building",
      "Custom Landing Page",
    ],
  },
];

export const ServiceHomeTwoData = {
  subTitle: "welcome to smart meipaly web agency",
  title: "We design digital products that \n help grow businesses.",
  text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
};

export const ServiceHomeThreeData = {
  subTitle: "Services we are offering",
  title: "Our Services",
  text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "We design digital products that \n help grow businesses.",
    subTitle: "Services we are offering",
    text: "We are committed to providing our customers with exceptional service \n while offering our employees the best training.",
  },
  posts: [
    {
      title: "Web Development",
      iconName: "mei-web-design",
      url: "/service-details",
    },
    {
      title: "App Development",
      iconName: "mei-app-development",
      url: "/service-details",
    },
    {
      title: "Graphic Designing",
      iconName: "mei-computer-graphic",
      url: "/service-details",
    },
    {
      title: "Digital Marketing",
      iconName: "mei-development-1",
      url: "/service-details",
    },
    {
      title: "SEO",
      iconName: "mei-development",
      url: "/service-details",
    },
  ],
};

import serviceOne01 from "@/images/home_1/6.jpg";
import serviceOne02 from "@/images/home_1/7.jpg";
import serviceOne03 from "@/images/home_1/8.jpg";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Let’s create something",
    subTitle: "what we do",
    text: "We are committed to providing our customers with exceptional service \n while offering our employees the best training.",
  },
  posts: [
    {
      title: "web development",
      image: serviceOne01,
      url: "/service-details",
    },
    {
      title: "digital marketing",
      image: serviceOne02,
      url: "/service-details",
    },
    {
      title: "product branding",
      image: serviceOne03,
      url: "/service-details",
    },
  ],
};

export const FunfactData = [
  {
    title: "Projects Completed",
    countNumber: 705,
  },
  {
    title: "Active Clients",
    countNumber: 480,
  },
  {
    title: "Cups of Coffee",
    countNumber: 626,
  },
  {
    title: "Happy Clients",
    countNumber: 774,
  },
];

import trustClient01 from "@/images/home_1/2.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "We are trusted by more than 100 clients",
  text: "At the Tech Services and Management of the online business presence. Ensuring continuity of your firm's Digital Presence Uninterrupted and seamlessly 24/7. Supporting many different types of industries, At Atthetech, we measure our success with the success of our clients. Our objective is to be the 1st option for our clients.",
  url: "/about",
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel05 from "@/images/client/5.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "they trust us",
    subTitle: "our clients",
    text: "We are committed to providing our customers with exceptional service \n while offering our employees the best training.",
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01,
    },
    {
      url: "#",
      image: ClientCarousel02,
    },
    {
      url: "#",
      image: ClientCarousel03,
    },
    {
      url: "#",
      image: ClientCarousel04,
    },
    {
      url: "#",
      image: ClientCarousel05,
    },
  ],
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "build better website alot quicker with Atthetech",
    subTitle: "get to know us",
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Company Started",
    number: 1990,
  },
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";
import team06 from "@/images/team/6.jpg";
import team07 from "@/images/team/3.jpg";
import team10 from "@/images/team/10.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "expert people",
    subTitle: "meet the team",
    text: "We are committed to providing our customers with exceptional service \n while offering our employees the best training.",
  },
  posts: [
    // {
    //   image: team01,
    //   name: "ZAIN UL MAAB",
    //   designation: "Digital Marketing Strategist",
    //   url: "",
    //   socials: [
    //     {
    //       name: "Facebook",
    //       url: "https://www.facebook.com/atthetec",
    //     },
    //     {
    //       name: "Twitter",
    //       url: "https://twitter.com/TechAtthe",
    //     },
    //     {
    //       name: "Linkedin",
    //       url: "https://www.linkedin.com/company/atthetech/",
    //     },
    //   ],
    // },
    {
      image: team05,
      name: "HUZAIFA NABIGH",
      designation: "Development & SEO Strategist",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/zafi9091",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/huzaifa-nabigh-211b55199/",
        },
      ],
    },
    {
      image: team02,
      name: "Sohaib Hameed",
      designation: "Marketing Director UK",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/atthetec",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/TechAtthe",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/company/atthetech/",
        },
      ],
    },
    {
      image: team07,
      name: "Stevan Headrick",
      designation: "Marketing Director US",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/atthetec",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/TechAtthe",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/company/atthetech/",
        },
      ],
    },
    {
      image: team10,
      name: "Katarina",
      designation: "Design & Development",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/atthetec",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/TechAtthe",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/company/atthetech/",
        },
      ],
    },
    {
      image: team04,
      name: "Muhammad Talha",
      designation: "Full Stack Developer",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/atthetec",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/TechAtthe",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/company/atthetech/",
        },
      ],
    },
    {
      image: team06,
      name: "Tasneem Ghutass",
      designation: "Marketing Strategist",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/atthetec",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/TechAtthe",
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/company/atthetech/",
        },
      ],
    },
  ],
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "We design digital products",
    subTitle: "the only design you need",
    text: "We are committed to providing our customers with exceptional service while offering our employees the best training.At the tech experienced in Web development, App development, SEO, SMM, Graphic Designing, and Digital Marketing.",
  },
  video: {
    image: video01,
    ID: "AYoq50nNmF4",
    title: "Watch Video",
  },
};

export const SubscribeFormData = {
  sectionContent: {
    title: "Subscribe us",
    subTitle: "don’t miss out our latest updates",
  },
};

import testimonial01 from "@/images/home_1/t1.jpg";
import testimonial02 from "@/images/home_1/t2.jpg";
import testimonial03 from "@/images/home_1/t3.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "our testimonials",
    title: "happy customers",
  },
  posts: [
    {
      name: "Stevan Headrick",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Whaja Ul Samad",
      designation: "Director",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
    {
      name: "Zain ul Maab",
      designation: "CEO",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018",
    },
  ],
};

import featureTab01 from "@/images/home_1/c1.jpg";
import featureTab02 from "@/images/home_1/c2.jpg";
import featureTab03 from "@/images/home_1/c3.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "why choose us",
    subTitle: "our benefits",
    text: "We are committed to providing our customers with exceptional service while\n offering our employees the best training.",
  },
  posts: [
    {
      title: "Latest technology",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab01,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "User Friendly",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab02,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
    {
      title: "Extra Level Security",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab03,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock",
        },
        {
          item: "Scalability of up to 500 employees per time clock",
        },
        {
          item: "The ability to connect up to 32 time clocks",
        },
        {
          item: "Employee self-enrollment",
        },
        {
          item: "Payroll integration",
        },
        {
          item: "Built-in backup camera to verify failed punches",
        },
      ],
    },
  ],
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "Great things in business are never done by one person.",
  specialText: "They’re done by a team of people.",
  text: "At Atthetech, we measure our success with the success of our clients. Our objective is to be the 1st option for our clients.",
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "work showcase",
    subTitle: "our portfolio",
    text: "Have a look On our company portfolio",
  },
};

import video02 from "@/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "Digital Experience",
    subTitle: "how do we works",
    text: "We are committed to providing our customers with exceptional service \n Digital Marketing is the primary key to any business.",
  },
  video: {
    title: "Watch Video",
    ID: "AYoq50nNmF4",
    image: video02,
  },
};

import aboutTwo01 from "@/images/home_1/1.jpg";
import aboutTwo02 from "@/images/home_1/2.jpg";

export const AboutTwoData = {
  sectionContent: {
    title: "We are the Best Website agency For DEvelopment and Marketing",
    subTitle: "welcom to At the tech Digital agency",
    text: "We are committed to providing our customers with exceptional service while offering our employees the best training. We have 10 Years Plus experience  in Web development, App development, SEO, SMM, Graphic Designing, and Digital Marketing.",
  },
  button: {
    label: "Learn More",
    url: "#",
  },
  gallery: [aboutTwo01, aboutTwo02],
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "real experience",
    subTitle: "our core features",
    text: " We are committed to providing our customers with exceptional service while offering our employees the best training. ",
  },
  posts: [
    {
      title: "No Coding Skills Require",
      text: "There are many variations of passages of lorem ipsum available, but the majority have suffered.",
    },
    {
      title: "Online Documentation",
      text: "There are many variations of passages of lorem ipsum available, but the majority have suffered.",
    },
    {
      title: "SEO Optimized",
      text: "There are many variations of passages of lorem ipsum available, but the majority have suffered.",
    },
  ],
  image: {
    text: "Total design freedom \n for everyone.",
    path: featureTwo01,
  },
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
    url: "/portfolio",
  },
  {
    label: "Reqeust a free quote",
    url: "/contact",
  },
];
