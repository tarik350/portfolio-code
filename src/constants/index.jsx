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
  fenanpay,
  toto,
  byfluence,
  ethrons,
  tinamart,
  edr,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
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
    title: "Full Stack Developer",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      // Frontend
      "Frontend: Next.js + Tailwind CSS with scalable, feature‑oriented architecture (modular folders, reusable UI primitives, strict typing where applicable).",
      "Networking & Data: robust HTTP layers using built‑in fetch/axios, React Query for server‑state caching and mutations, and RTK Query when Redux is in scope.",
      "State Management: Redux Toolkit for app‑wide state, Zustand for lightweight/local state, and clean separation of server vs client state.",
      "UX & Performance: code‑splitting, route‑level data prefetch, memoization, and accessibility best practices.",
      // Backend
      "Backend: Laravel, NestJS, and Express.js following clean layering (controllers/services/repositories) and DTO validation.",
      "Security: CORS/CSRF hardening, JWT with refresh & token rotation, input validation/sanitization, and secure headers.",
      "Data & Performance: optimized queries and indexes, careful pagination strategies, background jobs/queues, and comprehensive logging/observability.",
      "Codebase Hygiene: clear file organization, environment segregation, and carefully managed database migrations.",
    ],
  },
  {
    title: "Flutter Developer",
    icon: flutter,
    iconBg: "#E6DEDD",
    points: [
      "Production Flutter apps for Android & iOS with clean, testable architecture (presentation/domain/data layers).",
      "State & DI: BLoC for predictable state, get_it for dependency injection/service location, and dartz for functional constructs (Either/Option).",
      "Packages I commonly use: freezed/json_serializable, dio, flutter_form_builder, firebase_* (auth, messaging, analytics), hive/shared_preferences, intl, url_launcher, and more.",
      "Release Experience: multiple submissions and approvals on both the Apple App Store and Google Play Store (signing, build flavors, CI, crash monitoring).",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: backendDev,
    iconBg: "#E6DEDD",
    points: [
      "CI/CD: GitHub Actions and Jenkins pipelines for automated test, build, and deploy across dev/staging/prod.",
      "Containers: Docker & Docker Compose for reproducible environments and multi‑service orchestration.",
      "Ingress & Proxy: Nginx and Nginx Proxy Manager for reverse proxy, SSL termination, rate limiting, and blue/green rollouts.",
      "AWS: EC2 for hosting, ECR for image registry, S3/CloudFront as needed; environment secrets and IAM roles managed carefully.",
      "Ops: health checks, log aggregation, alerting, and rollback strategies; infrastructure as code where applicable.",
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
    name: "FenanPay – Payment Gateway",
    platform: "web",
    id: "fenanpay",
    link: "https://dashboard.fenanpay.com/login",
    description:
      "A modern payment gateway similar to Chapa, featuring secure merchant onboarding, transaction monitoring, settlements, and role‑based dashboards. Built with a strong focus on UX, performance, and security best practices.",
    tags: [
      { name: "next-js", color: "blue-text-gradient" },
      { name: "tailwind-css", color: "green-text-gradient" },
      { name: "redux-rtk-query", color: "orange-text-gradient" },
      { name: "security", color: "blue-text-gradient" },
    ],
    image: fenanpay,
    source_code_link: "",
  },
  {
    name: "Tina Mart – E‑commerce Super App",
    platform: "web+mobile",
    id: "tinamart",
    link: "https://tinamart.com/",
    description:
      "A leading e‑commerce platform in Ethiopia delivering a seamless buyer/seller experience across web and mobile. Work spans marketplace flows, wallet & payments, logistics, and scalable infra with automated CI/CD and store deployments.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "ci-cd", color: "orange-text-gradient" },
      { name: "github-actions", color: "blue-text-gradient" },
      { name: "ecr", color: "green-text-gradient" },
      { name: "app-store-deployment", color: "orange-text-gradient" },
      { name: "play-store-deployment", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "flutter", color: "orange-text-gradient" },
    ],
    image: tinamart,
    source_code_link: "",
    extraLinks: [
      "https://apps.apple.com/us/app/tina-mart/id6746816705",
      "https://apps.apple.com/az/app/tinamart-seller/id6746981487?uo=2",
    ],
  },
  {
    name: "Ethirons – Books & Audiobooks",
    platform: "mobile",
    id: "ethirons",
    link: "https://play.google.com/store/apps/details?id=com.aquila.ethrons&pcampaignid=web_share",
    description:
      "A mobile marketplace for buying and selling books and audiobooks with category discovery, secure checkout, and library management.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
    ],
    image: ethrons,
    source_code_link: "",
  },
  {
    name: "Byfluence – Multi‑Vendor Digital & Physical Commerce",
    platform: "web",
    id: "byfluence",
    link: "https://byfluence.com/",
    description:
      "A rich multi‑vendor e‑commerce platform where creators sell physical goods, consultations, and digital products. Includes wallets, payouts, dynamic pricing, and an admin suite.",
    tags: [
      { name: "jenkins", color: "blue-text-gradient" },
      { name: "nginx-proxy-manager", color: "green-text-gradient" },
      { name: "aws-ec2", color: "orange-text-gradient" },
      { name: "ci-cd", color: "blue-text-gradient" },
      { name: "express-js", color: "green-text-gradient" },
      { name: "next-js", color: "orange-text-gradient" },
      { name: "tailwind-css", color: "blue-text-gradient" },
    ],
    image: byfluence,
    source_code_link: "",
  },
  {
    name: "EDR Freight Booking – Ethio‑Djibouti Railway",
    platform: "web",
    id: "edr-freight",
    link: "https://freight.bookingedr.et/",
    description:
      "A government‑grade freight booking portal for Ethio‑Djibouti Railway with comprehensive customer and admin dashboards, shipment scheduling, and status tracking.",
    tags: [
      { name: "next-js", color: "blue-text-gradient" },
      { name: "nest-js", color: "green-text-gradient" },
      { name: "node-js", color: "orange-text-gradient" },
      { name: "tailwind-css", color: "blue-text-gradient" },
    ],
    image: edr,
    source_code_link: "",
  },
  {
    name: "Totosport – Online Betting",
    platform: "web",
    id: "totosport",
    link: "https://totosport.com",
    description:
      "An online betting website with custom skinning, responsive components, and performance‑tuned UI for high‑traffic match days.",
    tags: [
      { name: "css", color: "blue-text-gradient" },
      { name: "tailwind-css", color: "green-text-gradient" },
    ],
    image: toto,
    source_code_link: "",
  },
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
