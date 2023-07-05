import { ReactNode } from 'react'
import Header from 'components/header'
import Link from 'next/link'
import PageTransition from 'components/pagetransition'
import styles from './page.module.scss'

type PageProps = {
  children: ReactNode
}

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'GitHub', url: 'https://github.com/YeziGZ', target: '_blank' },
  { name: '旅游地图', url: 'http://map.isanote.com', target: '_blank' },
  { name: 'Blog', url: '/blog' },
  { name: '语雀', url: 'https://www.yuque.com/yezi', target: '_blank' },
  { name: 'About', url: '/about' },
  { name: 'RSS', url: '/feed.xml', target: '_blank' },
]

const Page = ({ children }: PageProps): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <PageTransition>{children}</PageTransition>
    </main>
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {footerLinks.map(link => {
          if (link.target === '_blank') {
            return (
              <li key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            )
          }
          return (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className={styles.bottomInfo}>
        <p className={styles.copyright}>&copy; Isabella {new Date().getFullYear()}</p>
      </div>
    </footer>
  </div>
)

export default Page
