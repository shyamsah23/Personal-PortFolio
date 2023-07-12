import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    // bootsrap,
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
    carrent,
    jobit,
    tripguide,
    threejs,
    bootsrap,
    // nextJS,
    postman,
    firebase,
    Weather,
    Study,
    ChatAppUI,

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
      title: "Problem Solver",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Quick Learner",
      icon: creator,
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
      name: "Redux",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

    {
      name: "BootStrap",
      icon: bootsrap,
    },
 
    {
      name: "PostMan",
      icon: postman,
    },
    {
      name: "FireBase",
      icon: firebase,
    },
    
  ];
  
  const experiences = [
 
  ];
  
  const testimonials = [

  ];
  
  const projects = [
    {
      name: "StudyNotion",
      description:
        "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Study,
      source_code_link: "https://github.com/shyamsah23/StudyNotion-ETech-PLATFORM",
    },
    {
      name: "ChatiFy",
      description:
        " Full Stack private Chat application with latest version of Next.js, TailwindCss, and  Firebase. Features : Connect with different users and provide streamless one to one private conversation with images , emogies ,delete chat, edit Chats, Clear chats, block and unblock user  ",
      tags: [
        {
          name: "next js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: ChatAppUI,
      source_code_link: "https://github.com/shyamsah23/CHAT-APP",
    },
    {
      name: "Weather-APP",
      description:
        "The weather app is a simple and user-friendly application built using HTML, CSS, and JavaScript, OpenWeather API. Users can enter a location or allow the app to access their current location to retrieve the current weather conditions.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
        {
          name: "OpenWeather API",
          color: "blue-text-gradient",
        }
      ],
      image: Weather,
      source_code_link: "https://shyamsah23.github.io/Weather-App/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };