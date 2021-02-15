import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Henrik Sporh Christiansen', // e.g: 'Name | Developer'
  lang: 'da', // e.g: en, es, fr, jp
  description: 'Henrik Sporh Christiansen', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hej, mit navn er',
  name: 'Henrik Sporh Christiansen',
  subtitle: '',
  cta: 'Læs mere',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Jeg er partner i bureauet Become. Og iværksætter i hjertet :)',
  paragraphTwo: 'Siden 2005 har jeg drevet virksomhed. Mit primære fokus har været iværksætteri, online markedsføring og hjemmesider. WordPress, design, JavaScript.',
  paragraphThree: 'Kan jeg hjælpe dig?',
  resume: 'https://www.linkedin.com/in/henriksporh/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'become.jpg',
    title: 'Become',
    info: 'Online markedsføring.',
    info2: 'Siden 2011 har vi hjulpet virkosmheder med Google Ads, Facebook Ads, Analytics og hjemmesider. Dengang hed vi Beruf, men i 2020 fusionerede vi med Compell fra Aarhus og hedder nu Become. Samme ydelser og service - bare landsdækkende.',
    url: 'https://www.become.dk/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mimer-metrics.jpg',
    title: 'Mimer Metrics',
    info: 'Rapportering og dashbords samlet og nemt',
    info2: 'Engelsksproget SaaS, der samler dine tal i et dashboard eller rapport online, så du har et overblik. Lav dine egne oversigter, eller brug dem vi har lavet, så du ikke mister overblikket.',
    url: 'https://mimer.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'skywalkr.jpg',
    title: 'Skywalkr',
    info: 'Lynhurtig WordPress Hosting',
    info2: 'Dansk WordPress hosting til virksomheder, der vil have hastighed og dansk support, man ikke får andre steder.',
    url: 'https://www.skywalkr.io/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Kan jeg hælpe med noget? Så lad os tage en snak.',
  btn: 'Kontakt mig',
  email: 'hc@become.dk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sporh',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/henriksporh/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sporh',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};