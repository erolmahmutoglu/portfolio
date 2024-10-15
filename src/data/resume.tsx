import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Erol Mahmutoğlu",
  initials: "EM",
  url: "https://erol-mahmutoglu.vercel.app/",
  location: "İzmir, Turkey",
  locationLink: "https://www.google.com/maps/place/Izmir",
  description:
    "I am a frontend developer with a passion for building beautiful and functional user interfaces. I have experience working with React, Next.js, TypeScript, and TailwindCSS. I am currently working at İdeal Tur as a Frontend Developer.",

  summary: `A front-end developer with a passion for creating modern, user-friendly web experiences. I have 3 years of experience working in the industry and am always excited to learn about the latest tools and techniques. My main expertise is in HTML, CSS, JavaScript, TypeScript and I am experienced in working with frontend frameworks like React, React Native and Next.js. I am also familiar with responsive design and UI/UX principles, which allow me to create websites that look great and function seamlessly on any device. In addition to my technical skills, I am also experienced in collaborating with designers, project managers, and other stakeholders to deliver high-quality projects on time and within budget. I am comfortable working in an agile environment and can adapt to changing requirements as needed. As a front-end developer, I am always looking for ways to improve my skills and stay up-to-date with the latest trends and technologies. I regularly participate in online courses and webinars, attend tech conferences and meetups, and read industry blogs to stay informed.`,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Python",
    "Django",
    "TailwindCSS",
    "Bootstrap",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "erol.mahmutoglu@outlook.com",
    tel: "+905425891098",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/erol1098",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/erol-mahmutoglu/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:erol.mahmutoglu@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "İdeal Tur",
      href: "https://www.otelfiyat.com/",
      badges: [],
      location: "Hybrid",
      title: "Frontend Developer",
      logoUrl: "/otelfiyat-buyuk-logo.png",
      start: "March 2024",
      end: "Present",
      description:
        "Developed and maintained the frontend of the company's website using React, Next.js, and TailwindCSS. Worked closely with the design team to implement new features and improve the user experience. Collaborated with the backend team to integrate APIs and ensure data consistency. Implemented responsive design and cross-browser compatibility to ensure a seamless experience for all users.",
    },
    {
      company: "İlgilen Bakım Hizmetleri",
      badges: [],
      href: "https://www.ilgilen.com.tr/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/ilgilen.svg",
      start: "August 2022",
      end: "January 2024",
      description:
        "As a front-end developer in the ilgilen.com.tr website project, I had the opportunity to contribute to the development of a modern and user-friendly website that connects elderly care professionals with customers in Turkey. My responsibilities included collaborating with the project team to develop website features, designing and implementing website layouts, and ensuring website performance optimization.",
    },
    {
      company: "Turkish Air Force",
      href: "https://www.hvkk.tsk.tr/",
      badges: [],
      location: "Ankara, Turkey",
      title: "UAV Instructor Pilot",
      logoUrl: "/hvkk.png",
      start: "August 2010",
      end: "August 2020",
      description:
        "As a UAV Instructor Pilot in the Turkish Air Force, I was responsible for training new pilots on how to operate unmanned aerial vehicles (UAVs) and ensuring that they were proficient in all aspects of UAV flight. I also conducted flight tests, evaluated pilot performance, and provided feedback to help pilots improve their skills. In addition to my flight training duties, I also worked on developing new training programs and procedures to improve the overall effectiveness of the UAV training program.",
    },
  ],
  education: [
    {
      school: "Kodluyoruz.org",
      href: "https://buildspace.so",
      degree: "Front-End Web Development Bootcamp",
      logoUrl: "/kodluyoruz.jpeg",
      start: "2022",
      end: "2022",
    },
    {
      school: "Clarusway",
      href: "ttps://clarusway.com/",
      degree: "Full-Stack Web Development Bootcamp",
      logoUrl: "/clarusway.jpeg",
      start: "2022",
      end: "2022",
    },
    {
      school: "Turkish Air Force Academy",
      href: "https://hho.msu.edu.tr/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/hho.jpg",
      start: "2006",
      end: "2010",
    },
  ],
  projects: [
    {
      title: "İdeal Tur Temax",
      href: "https://premium-temax.vercel.app/",
      dates: "Apr 2024 - Jun 2024",
      active: true,
      description:
        "Developed a landing page for the company's new product, Temax. The company give this product to approximately 50 hotels as a service. The website allows hotels to get reservations. The website was built using Next.js, React, and Bootstrap.",
      technologies: ["Next.js", "React", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "https://thesignsile.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://sentinusotel.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/temax.webm",
    },
    {
      title: "İlgilen Bakım Hizmetleri",
      href: "https://www.ilgilen.com.tr/",
      dates: "Aug 2022 - Aug 2023",
      active: true,
      description:
        "Developed a website for a company that connects elderly care professionals with customers in Turkey. The website allows customers to search for and book care services, and professionals to create profiles and list their services. The website was built using Next.js, React, and Bootstrap.",
      technologies: ["Next.js", "React", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "https://www.ilgilen.com.tr/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ilgilen.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hotel Reservation App",
      description:
        " This app is a landing Page For hotel. Users can search for reservation by entering the check-in and check-out dates, the number of guests, and the number of rooms. The app displays the available rooms and their prices. Users can select a room and make a reservation. The app also displays the hotel's amenities and location on a map.",

      technologies: ["React", "Next.js", "TailwindCSS"],
      image: "/hotel.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://inn-bodrum.vercel.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/erolmahmutoglu/hotel-reservation-app",
        },
      ],
    },
    {
      title: "Meteoweather",
      description:
        "This app showed the weather of the searched city using two different weather APIs. By clicking on the current weather card on the main page, detailed information about the current weather conditions and the 10-day weather forecast of that city can be accessed. In addition, the last four cities were searched before being listed on the main page. Likewise, by clicking on the cities in this list, the current weather conditions of that city can be accessed. In addition, Firebase was used for login and authorization processes",
      technologies: ["React", "Firebase", "Styled Components", "Weather API"],
      image: "/meteoweather.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://meteoweather.vercel.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/erol1098/meteoweather",
        },
      ],
    },
    {
      title: "Blogger",
      description:
        "In this project, it is aimed to create blog posts using Firestore database and display them on the dashboard. Adding, deleting and updating blog posts can be done. Blog posts can be liked by users. In addition, Firebase was used for login and authorization processes.",
      technologies: ["React", "Redux", "Material UI", "Firebase"],
      image: "/blogger.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://blogger1098.vercel.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/erol1098/blog-app-react",
        },
      ],
    },
    {
      title: "MeteoApp Türkiye",
      description:
        "This app show the weather of the city selected from the Turkey map. By clicking a city on the map, information about the current weather of that city displayed on sidebar.",
      technologies: ["React", "Next.js", "TailwindCSS", "Weather API"],
      image: "/meteomap.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://meteo-map-turkiye.vercel.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/erol1098/turkey-weather-map",
        },
      ],
    },
    {
      title: "Star Wars",
      description:
        "You can reach Star Wars characters some information via this app. May the force be with you!",
      technologies: ["React", "Styled Components", "SWAPI"],
      image: "/starwars.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://star-wars-1098.vercel.app/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/erol1098/star-wars",
        },
      ],
    },
  ],
} as const;
