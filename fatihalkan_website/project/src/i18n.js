// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Header
      darkMode: "DARK MODE",
      lightMode: "LIGHT MODE",
      switchTo: "Switch to",
      english: "English",
      turkish: "Turkish",
      skills: "Skills",
      project: "Project",
      hireMe: "Hire me",

      // Hero
      intro: "Hi, I’m Fatih. I’m a software engineer. If you are looking for a Developer who to craft solid and scalable FullStack products with great user experiences. Let’s shake hands with me.",
      innovative: "Innovative mind\nMinimalism lover",

      // Skills
      javascript: "JavaScript is a versatile language used for both frontend and backend web development across many platforms.",
      reactjs: "React builds fast, interactive user interfaces by creating reusable components and managing virtual DOM efficiently",
      nodejs: "Node.js allows JavaScript to run server-side, enabling scalable, event-driven applications with high performance",
      skills_desc: "Lorem ipsum style explanation for skills...",

      // Profile
      profile: "Profile",
      about: "About Me",
      dob: "Date of Birth:",
      address: "Address:",
      education: "Education:",
      edu: "Bulent Ecevit Universty - Computer Engineering",
      position: "Preffered Position:",
      posi: "FullStack Developer",
      profile_desc: "I am an aspiring full-stack developer with a growth mindset, eager to acquire new skills and constantly improve myself through new challenges. I graduated from Bülent Ecevit University with a degree in Computer Engineering. I aim to apply the theoretical knowledge I gained during my education into real-world projects.",
      profile_desc1: "Currently, I am participating in the Workintech Fullstack Development Program, where I was selected among 2400+ applicants. This program is helping me strengthen my skills in modern web technologies through hands-on learning and collaborative projects.",

      // Projects
      projects: "Projects",
      github: "Github",
      viewSite: "View Site",
      loading: "Loading...",
      fetchError: "Data could not be fetched.",

      // Footer
      letsWork: "Let’s work together on your next product.",
    },
  },
  tr: {
    translation: {
      // Header
      darkMode: "KARANLIK MOD",
      lightMode: "AYDINLIK MOD",
      switchTo: "'YE GEÇ",
      english: "İngilizce",
      turkish: "Türkçe",
      skills: "Yetenekler",
      project: "Projeler",
      hireMe: "Beni işe al",

      // Hero
      intro: "Merhaba, ben Fatih. Yazılım mühendisiyim. Harika kullanıcı deneyimleri sunan, sağlam ve ölçeklenebilir FullStack ürünleri geliştirecek bir Geliştirici arıyorsanız, benimle el sıkışın.",
      innovative: "Yenilikçi zihin\nMinimalizm tutkunu",

      // Skills
      javascript: "JavaScript, birçok platformda hem ön uç hem de arka uç web geliştirme için kullanılan çok yönlü bir dildir.",
      reactjs: "React, yeniden kullanılabilir bileşenler oluşturarak ve sanal DOM'u verimli bir şekilde yöneterek hızlı, etkileşimli kullanıcı arayüzleri oluşturur",
      nodejs: "Node.js, JavaScript'in sunucu tarafında çalışmasına olanak tanır ve yüksek performanslı, ölçeklenebilir, olay odaklı uygulamalara olanak tanır",
      skills_desc: "Yetenekler açıklaması burada olacak...",

      // Profile
      profile: "Profil",
      about: "Hakkımda",
      dob: "Doğum Tarihi:",
      address: "Adres:",
      education: "Eğitim:",
      edu: "Bülent Ecevit Üniversitesi - Bilgisayar Mühendisliği",
      position: "Tercih Edilen Pozisyon:",
      posi: "Fulstack Geliştiricisi",
      profile_desc: "Gelişim odaklı, yeni beceriler edinmeye ve yeni zorluklar karşısında kendimi sürekli geliştirmeye istekli, hevesli bir full-stack geliştiriciyim. Bülent Ecevit Üniversitesi'nden Bilgisayar Mühendisliği bölümünden mezun oldum. Eğitimim boyunca edindiğim teorik bilgileri gerçek dünya projelerine uygulamayı hedefliyorum.",
      profile_desc1: "Şu anda, 2400'den fazla başvuru arasından seçildiğim Workintech Full-stack Geliştirme Programı'na katılıyorum. Bu program, uygulamalı öğrenme ve iş birliğine dayalı projeler aracılığıyla modern web teknolojilerindeki becerilerimi güçlendirmeme yardımcı oluyor.",

      // Projects
      projects: "Projeler",
      github: "Github",
      viewSite: "Siteye Git",
      loading: "Yükleniyor...",
      fetchError: "Veriler çekilemedi.",

      // Footer
      letsWork: "Bir sonraki ürününüzde birlikte çalışalım.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // başlangıç dili
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
