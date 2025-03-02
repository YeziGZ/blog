import { DefaultSeo } from 'next-seo'

const config = {
  title: '野子的百宝箱',
  description:
    'Yezi的百宝箱',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.yezinote.com',
    site_name: 'Blog | Yezi',
    images: [
      {
        url: 'https://yezinote.com/avatar.png',
        alt: 'Yezi',
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
