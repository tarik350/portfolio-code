import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  eneblaRestaurant,
  eneblaUser,
  carrent,
  jobit,
  medicineApp,
  meetupApp,
  tripguide,
  threejs,
  flutter,
  backendDev,
  olyad,
  teddy,
  webDev,
  firebase,
  express,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Backend Developer",
    icon: backendDev,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",

    icon: flutter,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Developing a full stack app for android and ios platfroms with flutter technology",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Backend  Developer",
    icon: backendDev,

    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Develop an api with rest or graphQl",
      "Developing a database with sql and nosql",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have worked with Tarik on many projects and I can confirm that he has an expert level skill in flutter ",
    name: "olyad mulugeta",
    designation: "student at bit and freelancer",
    company: "Bit",

    image: olyad,
  },
  {
    testimonial:
      "I know Tarik since fresh man he is a dedicated person that won't stop until he finishes a given task.from what i seen in his projects he has an excellent skill in web and mobile app development.",
    name: "Thedron Berhanu",
    designation: "student at Bit and freelancer",
    company: "Bit",
    image: teddy,
  },
];

const projects = [
  {
    name: "Flutter app for Resturant users",
    description:
      "flutter based mobile application for android and ios platform that allows users to subscribe to a resturant they prefer, to make order, to make payment and so on",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: eneblaUser,
    source_code_link: "https://github.com/Zagwe/enebla_user_app.git",
  },

  {
    name: "Flutter app for restaurant owners",
    description:
      "Flutter based app that allows resturant owners to register and show case their menus and subscription plans and  manage information related to their subscribed users like balance , order and soon ",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: eneblaRestaurant,
    source_code_link: "https://github.com/Zagwe/enebla_customer.git",
  },
  {
    name: "Ai based medicine description app",
    description:
      "An ai based medicine description app that allow users to scan a prescription and get medicine description.it also allows to save those identified medicine for offline use",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: medicineApp,
    source_code_link: "https://github.com/pegasuse-x/Project-Samaritan.git",
  },
  {
    name: "Meetup Tracker React app",
    description:
      "React app that allow users to track their meetuings by setting meetup time and place",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: meetupApp,
    source_code_link: "https://github.com/tarik350/react-meetup.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
