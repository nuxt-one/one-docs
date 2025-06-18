export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      // Header nav
      'Docs': 'Docs',
      'Getting Started': 'Getting Started',
      'Get started with Nuxt One': 'Get started with Nuxt One',
      'Usage': 'Usage',
      'First steps to get you started with Nuxt One': 'First steps to get you started with Nuxt One.',
      'Deployment': 'Deployment',
      'Deploy your Nuxt application': 'Deploy your Nuxt application',
      'Use This Template': 'Use This Template',

       // TOC
      'Star on GitHub': 'Star on GitHub',
      'Create Issues': 'Create Issues',
    },
    zh: {
      // Header nav
      'Docs': '文档',
      'Getting Started': '开始',
      'Get started with Nuxt One': '开始使用 Nuxt One',
      'Usage': '使用',
      'First steps to get you started with Nuxt One': '开始使用 Nuxt One 的第一个步骤。',
      'Deployment': '部署',
      'Deploy your Nuxt application': '部署你的 Nuxt 应用。',
      'Use This Template': '使用此模板',

       // TOC
       'Star on GitHub': '在 GitHub 上 Star',
       'Create Issues': '创建 Issues',
    },
  },
}))
