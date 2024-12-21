import {
  Briefcase,
  Code2,
  GraduationCap,
  User,
  Github,
  Linkedin,
  Phone,
  Mail,
  MapPinCheck,
} from "lucide-react";
import ReachSpanImg from "../../public/images/project-images/reachspan.png";
import TaskPadImg from "../../public/images/project-images/taskpad.png";

export const headerData = {
  logoData: {
    title: {
      en: "GGNC",
      tr: "GGNC",
    },
    subtitle: "_",
  },
  linkData: [
    {
      title: {
        en: "Home",
        tr: "Anasayfa",
      },
      href: "/",
    },
    {
      title: {
        en: "Projects",
        tr: "Projeler",
      },
      href: "/projects",
    },
    {
      title: {
        en: "Resume",
        tr: "Özgeçmiş",
      },
      href: "/resume",
    },
    {
      title: {
        en: "Contact",
        tr: "İletişime Geçin",
      },
      href: "/contact",
    },
  ],
  hireMeData: {
    title: {
      en: "Hire me",
      tr: "Benimle Calisin",
    },
    href: "/resume.pdf",
  },
  socialLinkData: [
    {
      title: "GitHub",
      href: "https://github.com/GGNC",
      icon: Github,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ggnc",
      icon: Linkedin,
    },
  ],
};
export const homeData = {
  jobTitle: "Front-End Developer",
  title: {
    en: "Hello I'm",
    tr: "Merhaba Ben",
  },
  name: "Gökhan GENÇ",
  description: {
    en: "I'm a Front-End Developer. I have been developing web applications for 2 years. I am a person who loves to learn and develop myself.",
    tr: "Ben bir Front-End Developer'ım. 2 yıldır web uygulamaları geliştiriyorum. Öğrenmeyi ve kendimi geliştirmeyi seven biriyim.",
  },
  downloadCV: {
    en: "Download CV",
    tr: "CV İndir",
  },
  statistics: [
    {
      num: 2,
      title: {
        en: "Years of Experience",
        tr: "Yıl Deneyim",
      },
    },
    {
      num: 5,
      title: {
        en: "Projects Completed",
        tr: "Proje Tamamlandı",
      },
    },
    {
      num: 99,
      title: {
        en: "Code Commits",
        tr: "Kod Commitleri",
      },
    },
    {
      num: 99,
      title: {
        en: "Cup of Coffee",
        tr: "Bardak Kahve",
      },
    },
  ],
};
export const projectData = {
  projects: [
    {
      id: "01",
      title: "ReachSpan",
      category: "Front-End Project",
      description: {
        en: "Reachspan is a one page TTRPG where you play as a crew of skilled spacefarers exploring the fractured galaxy. Trade, scavenge, and battle your way through uncharted sectors, shaping the world as you go. With flexible rules and a simple dice system, the possibilities are endless. Are you ready to embark on this interstellar adventure?",
        tr: "Reachspan, parçalanmış galaksiyi keşfeden yetenekli uzay yolcuları ekibi olarak oynadığınız tek sayfalık bir TTRPG'dir. Yolunuzu çizerek, keşfederek ve savaşarak keşfedin. Esnek kurallar ve basit bir zar sistemi ile, olanaklar sonsuzdur. Bu yıldızlararası maceraya hazır mısınız?",
      },
      stack: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://reachspan.vercel.app/",
      githubUrl: "https://github.com/GGNC/ReachSpan",
      image: {
        src: ReachSpanImg,
        alt: {
          en: "ReachSpan Project Image",
          tr: "ReachSpan Proje Görseli",
        },
      },
    },
    {
      id: "02",
      title: "TaskPad",
      category: "Front-End Project",
      description: {
        en: "TaskPad is a lightweight task management application built with React, TypeScript, Vite, and Tailwind CSS. It emphasizes modern development practices, including fast builds, type safety, and utility-first styling. Designed for simplicity, it offers an intuitive interface for efficient task organization.",
        tr: "TaskPad, React, TypeScript, Vite ve Tailwind CSS ile oluşturulan basit bir görev yönetimi uygulamasıdır. Hızlı derlemeler, tip güvenliği ve yardımcı program odaklı stil gibi modern geliştirme uygulamalarına önem verir. Basitlik için tasarlanmış olup, verimli görev organizasyonu için sezgisel bir arayüz sunar.",
      },
      stack: ["React", "TypeScript", "HTML", "Tailwind CSS"],
      liveUrl: "https://github.com/GGNC/taskpad",
      githubUrl: "https://github.com/GGNC/taskpad",
      image: {
        src: TaskPadImg,
        alt: {
          en: "TaskPad Project Image",
          tr: "TaskPad Proje Görseli",
        },
      },
    },
  ],
};
export const resumeData = {
  tabMenuData: [
    {
      title: {
        en: "Experience",
        tr: "Deneyim",
      },
      value: "experience",
      icon: Briefcase,
    },
    {
      title: {
        en: "Education",
        tr: "Eğitim",
      },
      value: "education",
      icon: GraduationCap,
    },
    {
      title: {
        en: "Skills",
        tr: "Yetenekler",
      },
      value: "skills",
      icon: Code2,
    },
    {
      title: {
        en: "About Me",
        tr: "Hakkımda",
      },
      value: "about",
      icon: User,
    },
  ],
  tabContentData: {
    experince: {
      title: {
        en: "Personal Experience",
        tr: "Kişisel Deneyim",
      },
      items: [
        {
          role: {
            en: "Intern",
            tr: "Stajyer",
          },
          company: "Türk Standardları Enstitüsü",
          period: "Jul 2023 - Aug 2023",
          description: {
            en: "I worked as an intern in the software department. I developed web applications using React.",
            tr: "Yazılım departmanında stajyer olarak çalıştım. React kullanarak web uygulamaları geliştirdim.",
          },
          highlights: ["React", "TypeScript", "HTML", "Tailwind CSS"],
        },
        {
          role: {
            en: "Intern",
            tr: "Stajyer",
          },
          company: "imaginite Studios",
          period: "Jul 2022 - Aug 2022",
          description: {
            en: "I worked as an intern in the game development department. I developed games using Unity.",
            tr: "Oyun geliştirme departmanında stajyer olarak çalıştım. Unity kullanarak oyunlar geliştirdim.",
          },
          highlights: ["Unity", "C#"],
        },
      ],
    },
    education: {
      title: {
        en: "Educational Background",
        tr: "Eğitim Geçmişi",
      },
      items: [
        {
          degree: {
            en: "Computer Engineering",
            tr: "Bilgisayar Mühendisliği",
          },
          institution: {
            en: "Cukurova University",
            tr: "Çukurova Üniversitesi",
          },
          period: "2018 - 2023",
          description: {
            en: "I studied computer engineering at Cukurova University. I graduated in 2023.",
            tr: "Çukurova Üniversitesi'nde bilgisayar mühendisliği okudum. 2023 yılında mezun oldum.",
          },
          achiments: [],
        },
        {
          degree: {
            en: "High School",
            tr: "Lise",
          },
          institution: {
            en: "Bahcesehir Ataturk Anadolu High School",
            tr: "Bahçeşehir Atatürk Anadolu Lisesi",
          },
          period: "2014 - 2028",
          description: {
            en: "I studied at Bahcesehir Ataturk Anadolu High School. I graduated in 2018.",
            tr: "Liseyi Bahçeşehir Atatürk Anadolu Lisesi'nde okudum. 2018 yılında mezun oldum.",
          },
          achiments: [],
        },
      ],
    },
    skills: {
      title: {
        en: "Skills",
        tr: "Yetenekler",
      },
      categories: [
        {
          name: {
            en: "Front-End Development",
            tr: "Front-End Geliştirme",
          },
          description: {
            en: "I have been developing web applications for 2 years. I am experienced in React, TypeScript, HTML, CSS, and Tailwind CSS.",
            tr: "2 yıldır web uygulamaları geliştiriyorum. React, TypeScript, HTML, CSS ve Tailwind CSS konularında deneyimliyim.",
          },
          skills: [
            "React",
            "TypeScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "Next.js",
          ],
        },
        {
          name: {
            en: "Back-End Development",
            tr: "Back-End Geliştirme",
          },
          description: {
            en: "I have experience in developing back-end applications using Node.js and MongoDB.",
            tr: "Node.js ve MongoDB kullanarak back-end uygulamaları geliştirme konusunda deneyimim var.",
          },
          skills: ["Node.js", "MongoDB"],
        },
        {
          name: {
            en: "Tools & Technologies",
            tr: "Araçlar & Teknolojiler",
          },
          description: {
            en: "I am experienced in using Git, GitHub, and Visual Studio Code.",
            tr: "Git, GitHub ve Visual Studio Code kullanımında deneyimliyim.",
          },
          skills: ["Git", "GitHub", "Unity", "Visual Studio Code"],
        },
      ],
    },
    about: {
      title: {
        en: "About Me",
        tr: "Hakkımda",
      },
      bio: {
        en: "I'm a Front-End Developer. I have been developing web applications for 2 years. I am a person who loves to learn and develop myself.",
        tr: "Ben bir Front-End Developer'ım. 2 yıldır web uygulamaları geliştiriyorum. Öğrenmeyi ve kendimi geliştirmeyi seven biriyim.",
      },
      interests: {
        en: ["Basketball", "Video Games", "Car Races"],
        tr: ["Basketbol Oynamak", "Video Oyunları", "Araba Yarışları"],
      },
      languages: {
        en: ["Turkish (Native)", "English(Advanced)"],
        tr: ["Türkçe (Ana Dil)", "İngilizce (İleri)"],
      },
    },
  },
};
export const contactData = {
  formData: {
    title: {
      en: "Get in Touch",
      tr: "İletişime Geçin",
    },
    description: {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam quibusdam optio ipsam fugiat illo officiis eaque aliquam nisi ad minus officia, voluptas sed cumque! Explicabo odio a sequi reprehenderit?",
      tr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam quibusdam optio ipsam fugiat illo officiis eaque aliquam nisi ad minus officia, voluptas sed cumque! Explicabo odio a sequi reprehenderit?",
    },
    name: {
      en: "Your Name",
      tr: "Adınız",
    },
    email: {
      en: "Your E-mail",
      tr: "E-postanız",
    },
    message: {
      en: "Your Message",
      tr: "Mesajınız",
    },
    button: {
      en: "Send",
      tr: "Gönder",
    },
    formMessages: {
      name: {
        invalidNameLengthShort: {
          en: "Name should not be empty",
          tr: "Ad boş bırakılamaz",
        },
        invalidNameLengthLong: {
          en: "Name should not exceed 15 characters",
          tr: "Ad 15 karakteri geçmemelidir",
        },
      },
      email: {
        invalidEmail: {
          en: "Invalid e-mail",
          tr: "Geçersiz e-posta",
        },
      },
      message: {
        invalidMessageLengthShort: {
          en: "Message should be at least 20 characters",
          tr: "Mesaj en az 20 karakter icermelidir",
        },
        invalidMessageLengthLong: {
          en: "Message should not exceed 200 characters",
          tr: "Mesaj 200 karakteri geçmemelidir",
        },
      },
    },
    thanksMessage: {
      thankYou: {
        en: "Thank You!",
        tr: "Teşekkürler!",
      },
      getBack: {
        en: "I will get back to you as soon as possible.",
        tr: "En kısa sürede size geri döneceğim.",
      },
    },
  },
  detailsData: [
    {
      title: {
        en: "Phone",
        tr: "Telefon",
      },
      description: "(+90) 506 059 0068",
      icon: Phone,
    },
    {
      title: {
        en: "E-mail",
        tr: "E-posta",
      },
      description: "g@mail.com",
      icon: Mail,
    },
    {
      title: {
        en: "Address",
        tr: "Adres",
      },
      description: "Istanbul, Turkey",
      icon: MapPinCheck,
    },
  ],
};
