// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'maberyick', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['user/my-project1', 'user/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Distributed OCT Foundation Model Pipeline',
          description:
            'End-to-end pipeline training foundation models on 2M+ unlabeled and 600k labeled OCT volumes across 20+ GPUs and 10+ machines with Podman, Redis, MLflow, and Flask orchestration.',
          imageUrl: '',
          link: 'https://crisbarrera.com',
        },
        {
          title: 'AI Agent Reader for Quality Control',
          description:
            'Vision- and language-model agent to verify, correct, and summarize workflow outputs before QC review; integrated into containerized pipelines with automated logging.',
          imageUrl: '',
          link: 'https://crisbarrera.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Cristian Barrera',
    description: 'Portfolio of Cristian Barrera',
    imageURL: '',
  },
  social: {
    linkedin: 'cristian-barrera-63205997',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://crisbarrera.com',
    phone: '+1 (216) 333-4388',
    email: 'cris.rbarreram@gmail.com',
  },
  resume: {
    fileUrl: '/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'PyTorch',
    'TensorFlow',
    'Computer Vision',
    'Deep Learning',
    'Foundation Models',
    'Representation Learning',
    'Medical Imaging (OCT, Histopathology)',
    'MLOps',
    'Distributed Training',
    'Docker & Podman',
    'Redis',
    'MLflow',
    'Flask',
    'Data Pipelines & ETL',
    'Experiment Tracking & Model Registry',
    'Linux & HPC',
    'AWS & Azure',
    'R',
  ],
  experiences: [
    {
      company: 'Cleveland Clinic',
      position: 'Software Developer II (Medical Imaging)',
      from: 'Nov 2024',
      to: 'Present',
      companyLink: 'https://my.clevelandclinic.org',
    },
    {
      company: 'Genentech',
      position: 'Imaging Scientist Intern',
      from: 'Jun 2023',
      to: 'Aug 2023',
      companyLink: 'https://www.gene.com',
    },
    {
      company: 'Emory University',
      position: 'Graduate Research Scientist (Biomedical Imaging)',
      from: 'Feb 2018',
      to: 'Jan 2024',
      companyLink: 'https://www.emory.edu',
    },
    {
      company: 'National University of Colombia',
      position: 'Biomedical Engineering Contractor',
      from: 'Jan 2017',
      to: 'Dec 2019',
      companyLink: 'https://unal.edu.co',
    },
    {
      company: 'Case Western Reserve University',
      position: 'Visiting Scientist (J-1 Short-Term Scholar)',
      from: 'Nov 2017',
      to: 'Jan 2020',
      companyLink: 'https://case.edu',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Georgia Tech & Emory University',
      degree: 'Ph.D., Biomedical Engineering',
      from: 'Aug 2020',
      to: 'May 2025',
    },
    {
      institution: 'National University of Colombia',
      degree: 'Master of Engineering, Biomedical Engineering',
      from: 'Jan 2017',
      to: 'Dec 2019',
    },
    {
      institution: 'South Colombian University',
      degree: 'Bachelor of Engineering, Electronics',
      from: 'Jan 2011',
      to: 'Dec 2015',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by Cristian Barrera with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> ❤️`,

  enablePWA: true,
};

export default CONFIG;
