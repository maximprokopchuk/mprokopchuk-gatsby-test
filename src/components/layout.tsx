import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {PropsWithChildren} from 'react'
import {container, navLinkItem, navLinks, navLinkText, heading, siteTitle} from './layout.module.css'

interface LayoutProps {
  pageTitle: string
}
const Layout = ({ pageTitle, children }: PropsWithChildren<LayoutProps>) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          siteUrl
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout