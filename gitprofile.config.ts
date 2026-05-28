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
      header: 'Selected Open-Source Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
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
        projects: [
          'maberyick/bartek',
          'maberyick/crisrbarreram',
          'maberyick/HistoTIL',
          'maberyick/PhenoTIL',
          'maberyick/nucleiSegmentationHEDL',
          'maberyick/Pytorch-UNet',
        ], // List of repository names to display. example: ['user/my-project1', 'user/my-project2']
      },
    },
    external: {
      header: 'Featured Production Work',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BARTEK LLC AI Platform',
          description:
            'Full-stack AI platform and business-facing website work spanning architecture, deployment, and UX decisions for production usage.',
          imageUrl: '/logo192.png',
          link: 'https://github.com/maberyick/bartek',
        },
        {
          title: 'Personal Portfolio Infrastructure',
          description:
            'Modern Vite + React portfolio with CI/CD on GitHub Pages, SEO hardening, PWA support, and continuous profile updates.',
          imageUrl: '/logo192.png',
          link: 'https://github.com/maberyick/crisrbarreram',
        },
        {
          title: 'Computational Pathology Toolkit',
          description:
            'Research-to-production code for histopathology analysis pipelines, including cell phenotyping and segmentation workflows.',
          imageUrl: '/logo192.png',
          link: 'https://github.com/maberyick/HistoTIL',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Cristian Barrera',
    description:
      'Cristian Barrera, PhD. Software Developer II in medical imaging and AI, building distributed foundation model pipelines and production ML systems.',
    imageURL: 'https://crisbarrera.com/logo512.png',
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
      position: 'Data Scientist III',
      from: 'Mar 2026',
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
      'corporate',
      'lofi',
      'coffee',
      'winter',
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
