import React from "react"
import { graphql, useStaticQuery} from "gatsby"
import footerStyle from './footer.module.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
            author
            }
        }
        }
    `)
    return (
        <footer className={footerStyle.footer}>
            <p>© {data.site.siteMetadata.author }- 2021</p>
        </footer>
    )
} 

export default Footer