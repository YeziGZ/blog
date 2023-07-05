import { DefaultSeo } from 'next-seo'

const config = {
  title: 'Isabella - A girl',
  description:
    '自驱型前端工程师，8年多大型复杂产品开发经验，4年前端团队管理经验，熟悉跨端APP 如 Ionic、React Native开发，熟悉 微前端、DevOps 等，具备全栈开发能力。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.isanote.com',
    site_name: 'Blog | Isabella',
    images: [
      {
        url: 'https://isanote.com/avatar.png',
        alt: 'Isabella',
      },
    ],
  },
  twitter: {
    handle: '@yezi',
    site: '@yezi',
    cardType: 'summary_large_image',
  },
}

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />
}

export default SEO
