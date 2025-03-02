import Button from 'components/button'
import PageHeader from 'components/pageheader'
import Project from 'components/project'
import Page from 'components/page'

import sha11Img from 'public/projects/sha11.jpg'

const projects = [
  {
    title: '沙11',
    description: '3天的比赛结束了，很虐，但很开心，C队小菜成功完赛✌️团队捧回金沙欧的那一刻，真的很燃！',
    image: sha11Img,
    link: '', // 有链接的话
  },
]

export async function getStaticProps() {
  // https://github.com/vercel/next.js/discussions/12124
  return {
    props: {
      allPostsData: [],
    },
  }
}

const headerTitle = 'Hello，这里是野子Yezi的网站！'

const headerDescription = '用心生活，用心分享。目标是把学习、个人成长、职业发展、AI等内容分享在这里。'

const Home = (): JSX.Element => (
  <Page>
    <PageHeader title={headerTitle} description={headerDescription}>
      <Button href="/about">了解更多</Button>
    </PageHeader>
    <h2>个人作品</h2>
    {projects.map(project => (
      <Project key={project.title} {...project} />
    ))}
  </Page>
)

export default Home
