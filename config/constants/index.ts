import {
  Briefcase,
  Code2,
  GraduationCap,
  User,
  Github,
  Linkedin,
} from "lucide-react";

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
      num: 999,
      title: {
        en: "Coffee Cups",
        tr: "Bardak Kahve",
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
