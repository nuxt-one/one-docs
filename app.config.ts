export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Nuxt One',
      description: 'The best way to start a full-stack, typesafe Nuxt.js app.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Nuxt One',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'Docs',
        links: [{
          title: 'Getting Started',
          to: '/getting-started',
          description: 'Get started with Nuxt One',
          target: '_self',
          icon: 'lucide:rocket',
        }, {
          title: 'Usage',
          to: '/usage/first-steps',
          description: 'First steps to get you started with Nuxt One',
          target: '_self',
          icon: 'lucide:book',
        }, {
          title: 'Deployment',
          to: '/deployment/docker',
          description: 'Deploy your Nuxt application',
          target: '_self',
          icon: 'lucide:cloud',
        }],
      }, {
        title: 'Use This Template',
        to: 'https://github.com/easy-temps/nuxt-one',
        target: '_blank',
        showLinkIcon: true,
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/easy-temps/nuxt-one',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'default',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © easy-temps',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/easy-temps/nuxt-one',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      enableInMobile: false,
      enableInHomepage: false,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/easy-temps/nuxt-one',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/easy-temps/nuxt-one/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
      style: 'input',
    }
  }
})
