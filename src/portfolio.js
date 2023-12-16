/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Sarfaraaz khan",
  logo_name: "codewithmrkhan",
  nickname: "Sarfaraaz khan",
  full_name: "Sarfaraaz khan",
  subTitle: "Front End Developer, Web Application Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1kJBnPZzFo4TEztDgtRpH3UG2tgWvhPty/view?usp=sharing ",
  mail: "mailto:sarfaraazkhan19@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sarfaraaz-khan",
  linkedin: "https://www.linkedin.com/in/sarfaraaz-khan/",
  gmail: "sarfaraazkhan19@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/codewithmrkhan/",
  youtube: "https://www.youtube.com/@codewithmrkhan",
};

const skills = {
  data: [
    {
      title: "Front End Developer",
      fileName: "FullStackImg",
      skills: [
        "❤️Crafting intuitive and dynamic websites with expertise in React.",
        "❤️Elevating applications with dynamic and efficient user interfaces",
        "❤️Front-end expertise for captivating and responsive web experiences",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   name: "Next js",
        //   iconifyClass: "logos-nextjs",
        //   style: {
        //     color: "#FFFFFF",
        //     backgroundColor: "#1D1D1D",
        //     borderRadius: "50%",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node js",
        //   style: {
        //     color: "#339933",
        //   },
        // },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "UI UX Designer",
      fileName: "CloudInfraImg",
      skills: [
        "Canva Expert:🚀 Seamlessly create captivating visuals with Canva's intuitive tools.",
        "Figma Pro:🚀 Translate concepts into interactive designs with finesse using Figma.",
        "Versatile Designer:🚀Proficient in Canva and Figma for visually stunning, user-friendly creations..",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Netlify",
        //   fontAwesomeClassname: "simple-icons:xd",
        //   style: {
        //     color: "#38AFBB",
        //   },
        // },
        // {
        //   skillName: "Heroku",
        //   fontAwesomeClassname: "simple-icons:heroku",
        //   style: {
        //     color: "#6863A6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Certifications by deeplearning.ai and Stanford Online",
    //     "⚡ Experience with 10+ Projects",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#6E6E6E",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gulberga University",
      subtitle: "Bachelors in Computer Application",
      logo_path: "Gulbarga_University_logo.png",
      alt_name: "DAL",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ How BCA Education Transformed My Understanding of Computer Science.!",
        "⚡ From Code to Concepts, Reflecting on the Valuable Lessons I've Gained.",
      ],
      website_link: "https://gug.ac.in/",
    },
    {
      title: "Pre universty",
      subtitle: "PUC Science",
      logo_path: "preUniversty.jpg",
      alt_name: "SETI",
      duration: "2013 - 2016",
      descriptions: [
        "🙌   Unveiling the Transformative Lessons That Molded My Academic Journey.!",
        " 🚀  A Reflection on the Invaluable Learnings From My PUC Science Education.",
        "👍 The Crucial Skills and Knowledge Acquired During My PUC Science Years. ",
      ],
      website_link: "https://dce.karnataka.gov.in/english",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work , Explore , Build",
  description:
    "I Have worked as a Full time employe and also as a freelancer but this all as a Front end developer",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Front End Developer",
          company: "Greet Labs Pvt Ltd",
          // company_url: "https://www.canada.ca/en/revenue-agency.html",
          logo_path: "greet labs.jpeg",
          duration: " 2020 - Dec",
          location: "Bangalore, India",
          description:
            "Greet Labs is the one-stop solution for all Web and Mobile Apps development",
          color: "#f10000",
        },
        {
          title: "Instructer",
          company: "HiCounselor",
          company_url: "https://hicounselor.com/",
          logo_path: "Hicouncler.png",
          duration: " 2022",
          location: "Bangalore, India",
          description:
            "HiCounselor is the next-generation, digital-first career accelerator that guarantees your dream job",
          color: "#f10000",
        },
        {
          title: "Mentor",
          company: "10x Acedmy",
          company_url: "https://www.the10xacademy.com/",
          logo_path: "10x Acedmy.png",
          duration: " 2022-Present",
          location: "Bangalore, India",
          description:
            "10x Academy places a strong emphasis on holistic career training and placement support, striving to provide high quality job market relevant education to students from all academic and socio economic backgrounds.",
          color: "#f10000",
        },
        // {
        //   title: "Front End Developer",
        //   company: "Quicko",
        //   company_url: "https://quicko.com/",
        //   logo_path: "quicko.jpg",
        //   duration: "June 2021 - October 2021",
        //   location: "Ahmedabad",
        //   description:
        //     "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
        //   color: "#2962FF",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Google Summer of Code",
    //       company: "Sugar Labs",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "May 2019 - Aug 2019",
    //       location: "Work From Home",
    //       description:
    //         "I worked on the Dashboard project which helps users track their activities while using Sugar OS. I also worked on making a Tamagotchi-like widget for Sugar's Home Screen",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Android App Developer Intern",
    //       company: "IAS4Sure",
    //       company_url: " ",
    //       logo_path: "buld.jpg",
    //       duration: "December 2019 - February 2020",
    //       location: "Work From Home",
    //       description:
    //         "Internship task was to make a native Android application. ",
    //       color: "#0071C5",
    //     },
    //     {
    //       title: "Web Developer",
    //       company: "Wrighter Writing Solutions",
    //       company_url: " ",
    //       logo_path: "wrighter.jpg",
    //       duration: "August 2020",
    //       location: "",
    //       description: "Develop a website using PHP and jQuery.",
    //       color: "#56A4D3",
    //     },
    //     {
    //       title: "Front-End Developer",
    //       company: "VJ TechServe",
    //       company_url: " ",
    //       logo_path: "vjt.png",
    //       duration: "September 2020",
    //       location: "",
    //       description: "Develop a portfolio website using ReactJS",
    //       color: "#800000",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Summer of Code Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Summer of 2017 / 18 / 20",
    //       location: " ",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Google Code-In Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Winter of 2017 / 18 / 19",
    //       location: " ",
    //       description:
    //         "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Board Member at Codeuino",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "codeuino.jpg",
    //       duration: "2018 - 2019",
    //       location: " ",
    //       description: "Previous Board during early days of Codeuino",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "BluWings Club",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "b.png",
    //       duration: "2018 - On Going",
    //       location: " ",
    //       description:
    //         "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
    //       color: "#D83B01",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Explore my diverse portfolio—from redefining education platforms to optimizing booking systems and implementing efficient POS solutions. Each project reflects my commitment to innovative, user-focused web development at the intersection of creativity and technology.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my1.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "geeger",
      // url: "https://github.com/Hrishi1999/CineScope",
      description:
        "An innovative platform seamlessly connecting skilled professionals with users in search of specialized services",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
        },
        {
          name: "material ui",
          iconifyClass: "logos-material-ui",
        },
      ],
    },
    {
      name: "AtoZ",
      url: "https://a2zpos.netlify.app/authentication",
      description: " POS system module for shopping Mall.",
      languages: [
        {
          name: "React js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Bootstrap",
          iconifyClass: "devicon-bootstrap",
        },
        {
          name: "material ui",
          iconifyClass: "logos-material-ui",
        },
      ],
    },
    {
      name: "Chaos Genius",
      url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
      description:
        "Business Observable Platform ,An open-source business observability platform",
      languages: [
        {
          name: "Next js",
          iconifyClass: "logos-nextjs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "redux",
          iconifyClass: "logos-redux",
        },
      ],
    },
    {
      name: "Sarfaraaz khan ( portfolio )",
      url: "https://portfolio-bad7e.firebaseapp.com/",
      description: "My personel portfolio which i have build for my self.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "material ui",
          iconifyClass: "logos-material-ui",
        },
      ],
    },
    {
      name: "Amazon clone",
      url: "https://amazing-amazo.web.app/",
      description: "It is amazon clone",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "mui",
          iconifyClass: "logos-material-ui",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      name: "Netflix Clone",
      url: "https://netflix-xlone-1b2f0.web.app/",
      description: "Netflix Clone it hasbeen build on react.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "material ui",
          iconifyClass: "logos-material-ui",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "AirBnb",
      url: "https://air-bnb-e8c26.web.app/",
      description:
        "Landing Page of AirBnb with static data and design with Sass.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "material ui",
          iconifyClass: "logos-material-ui",
        },
        {
          name: "Sass",
          iconifyClass: "logos-sass",
        },
      ],
    },
    {
      name: "Vivavoyage",
      url: "https://www.vivavoyage.com/",
      description:
        "Book the best discounted, cheap, luxury cruises, sail to the Med and the Caribbean with top cruise lines; Celebrity, Royal Caribbean, Norwegian .",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
