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
  tensorflow,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  eneblaRestaurant,
  eneblaUserProfile,
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

  //enebla resturant
  onBoarding,
  addFoodPage,
  addMenuPage,
  addedMenusPage,
  menuAddedSuccessfully,
  order,
  login,
  setting,
  eneblaResturantHome,
  changePassword,

  //samaritan
  medIdentifiedPage,
  medDescriptionPage,
  popularMedPage,
  samaritanHome,
  savedMed,

  //samaritan inventory
  samaritanInventory,

  //enebla user
  eneblaUserSettingPage,
  enblaUserHomePage,
  resturantHomePage,
  searchPage,
  commentPage,
  personIcon,
  samuel,
  ai,
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
  { title: "Machine Learning", icon: ai },
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
    name: "tensorflow",
    icon: tensorflow,
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
      "maintaining and debugging react website",
      "state managment with redux",
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
      "create and manage sql databases with graphql api using custom query and mutations provided",
      "design and implement a database schema with sql or nosql",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Machine Learning",
    icon: ai,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "develop and maintain an AI model",
      "Tensorflow,numpy",
      "took a coursera cource by Andrew Ng called machine learning specialization",
      "apply feature engineering concepts to filter features that will result in the best accuracy",
      "comfortable with python",
    ],
    flag: "ai",
  },
];

const testimonials = [
  {
    testimonial:
      "I know Tarik from his fluent time management and his capacity to pick up new technology. I have taught him 3 courses and he has performed outstandingly in all of them. I honestly believe that he will be somewhere good in the future.",
    name: "Mr. Samuel Ashagrre",
    designation:
      "Lecturer at Bahir Dar university and software engineering departement chair holder",
    company: "Bit",
    link: "https://www.linkedin.com/in/samuel-ashagrre-99882a111/",
    image: samuel,
  },
  {
    testimonial:
      "I know Tarik since fresh man he is a dedicated person that won't stop until he finishes a given task.from what i seen in his projects he has an excellent skill in web and mobile app development.",
    name: "Mr. Mentesnot",
    designation: "Lecturer at Bahir Dar university",
    company: "Bit",
    // link: "",
    image: personIcon,
    phone: "+25192393484",
  },
];

const projects = [
  {
    name: "Flutter app for Resturant users",
    platform: "mobile",
    id: "eneblaUser",
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
    image: eneblaUserProfile,
    source_code_link: "https://github.com/Zagwe/enebla_user_app.git",
  },

  {
    name: "Flutter app for restaurant owners",
    platform: "mobile",
    id: "eneblaResturant",
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
    platform: "mobile",
    id: "samaritan",
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
    platform: "web",
    id: "meetup tracker",
    link: "https://tarik350.github.io/react-task-tracker/",
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

  {
    name: "samaritan - pharamcy inventory react app",
    platform: "web",
    id: "samaritan-inventory",
    link: "https://tarik350.github.io/pharmacy-inventory-react-app/",
    description:
      "This is a fully functional pharmacy inventory React app I made from scratch. It contains a dashboard with great detail information for pharamcy owners. It allows you to perform all types of crud operations on medicines in stock, and on top of that, it provides authentication, stock analysis, and so on.",
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
    image: samaritanInventory,
    source_code_link:
      "https://github.com/tarik350/pharmacy-inventory-react-app",
  },
];

export const eneblaResturant = [
  {
    title: "Find me on Twitter",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: onBoarding,
  },
  {
    title: "Welcome to Ark Labs",
    link: "https://ark-labs.co.uk",
    imageUrl: login,
  },
  {
    title: "Some sort of third title",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: eneblaResturantHome,
  },
  {
    title: "A personal site perhaps?",
    link: "https://robkendal.co.uk",
    imageUrl: addMenuPage,
  },
  {
    title: "Super item number five",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: addFoodPage,
  },
  {
    title: "Super item number six",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: addedMenusPage,
  },
  {
    title: "Super item number seven",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: menuAddedSuccessfully,
  },
  {
    title: "Super item number eight",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: order,
  },
  {
    title: "Super item number eight",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: changePassword,
  },
  {
    title: "Super item number the last",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: setting,
  },
];

export const samaritan = [
  {
    title: "Find me on Twitter",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: samaritanHome,
  },
  {
    title: "Welcome to Ark Labs",
    link: "https://ark-labs.co.uk",
    imageUrl: medDescriptionPage,
  },
  {
    title: "Some sort of third title",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: savedMed,
  },
  {
    title: "A personal site perhaps?",
    link: "https://robkendal.co.uk",
    imageUrl: popularMedPage,
  },
  {
    title: "Super item number five",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: medIdentifiedPage,
  },
];

export const eneblaUser = [
  {
    title: "Find me on Twitter",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: enblaUserHomePage,
  },
  {
    title: "Welcome to Ark Labs",
    link: "https://ark-labs.co.uk",
    imageUrl: resturantHomePage,
  },
  {
    title: "Some sort of third title",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: searchPage,
  },
  {
    title: "A personal site perhaps?",
    link: "https://robkendal.co.uk",
    imageUrl: commentPage,
  },
  {
    title: "Super item number five",
    link: "https://twitter.com/kendalmintcode",
    imageUrl: eneblaUserSettingPage,
  },
];

export { services, technologies, experiences, testimonials, projects };
