import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Henrik Sporh Christiansen', // e.g: 'Name | Developer'
  lang: 'da', // e.g: en, es, fr, jp
  description: 'Henrik Sporh Christiansen', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hej, mit navn er ',
  name: 'Henrik',
  subtitle: 'Velkommen',
  cta: 'Læs mere',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Jeg er partner i bureauet Become. Mine kerneområder er WordPress, Woocommerce og Active Campaign som kunderne har stor gavn af.',
  paragraphTwo: 'I 2011 stiftede jeg bureauet Beruf sammen med Andreas Solgaard i København, og i 2020 fusionerede vi med Århusianske Compell, hvor de tog det fælles navn Become. Become giver kunderne målbare resultater i en omskiftelig, digital verden.',
  paragraphThree: 'Kan jeg hælpe dig? Send mig en mail.',
  resume: 'https://www.linkedin.com/in/henriksporh/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'become.jpg',
    title: 'Become',
    info: 'Online markedsføring ',
    info2: 'Siden 2011 har vi hjulpet virkosmheder med Google Ads, Facebook Ads, Analytics og hjemmesider.',
    url: 'https://www.become.dk/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mimer-metrics.jpg',
    title: 'Mimer Metrics',
    info: '',
    info2: '',
    url: 'https://mimer.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'skywalkr.jpg',
    title: 'Skywalkr',
    info: 'Lynhurtig WordPress Hosting',
    info2: '',
    url: 'https://www.skywalkr.io/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};