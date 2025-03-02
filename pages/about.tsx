import Image from 'next/image'
import Page from 'components/page'
import Button from 'components/button'
import { NextSeo } from 'next-seo'
import me from 'public/me.jpeg'
import styles from './about.module.scss'

const About = (): JSX.Element => {
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  const seoTitle = 'About Yezi'
  return (
    <Page>
      <NextSeo
        title={seoTitle}
        openGraph={{
          title: seoTitle,
          url: `https://yezinote.com/about/`,
          site_name: 'yezinote.com',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Image src={me} alt="Picture of me (Yezi)" placeholder="blur" className={styles.image} priority />
      <div className={styles.text}>
        <p>野子是半撇私塾的课程运营总监。她是中国职场知识社群品牌及活动负责人，泛新媒体社群「MediaHack」 发起人。</p>

        <p>
          野子是一名经验丰富的品牌营销者，在知名快消品牌主导过多项千万级的整合营销项目，先后在蓝月亮、网易负责数字营销与运营等工作。“教育是一个灵魂推动另一个灵魂”，她坚信学习的力量，并致力于帮助更多人不断地Lean
          In。
        </p>
        {/* <p>这里写</p> */}
        <p>
          <ul>
            <li>
              <a href="https://github.com/YeziGZ/" {...linkProps}>
                Github
              </a>
            </li>
          </ul>
        </p>
      </div>
      <Button href="mailto:yefang811@foxmail.com">联系我</Button>
    </Page>
  )
}

export default About
