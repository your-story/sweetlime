import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import Img from 'gatsby-image'
import HeaderStyle from './header.module.scss'



const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        
        file(relativePath: { eq: "assets/fix-pics-logo.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed( height: 75  ) {
                    ...GatsbyImageSharpFixed
                    }
                }
                }
        }
    `)

    return (
        <header>
        
        <div className={HeaderStyle.title} >
            <div className={HeaderStyle.left}>
            <Link  to="/"> <Img fixed={data.file.childImageSharp.fixed} /></Link>  
            </div>

            <div className={HeaderStyle.right}>
            <nav>
            <ul className={HeaderStyle.navList}>
                <li><Link className= {HeaderStyle.navItem} activeClassName={HeaderStyle.activeNavItem} to="/">HOME</Link></li>
                <li><Link className= {HeaderStyle.navItem} activeClassName={HeaderStyle.activeNavItem} to="/howto">How it Works?</Link></li>
                <li><Link className= {HeaderStyle.navItem} activeClassName={HeaderStyle.activeNavItem} to="/blog">BLOG</Link></li>
                <li><Link className= {HeaderStyle.navItem} activeClassName={HeaderStyle.activeNavItem} to="/about">ABOUT</Link></li>
                <li><Link className= {HeaderStyle.navItem} activeClassName={HeaderStyle.activeNavItem} to="/contact">Contact</Link></li>
        </ul>


            </nav>
            </div>
        </div>
        
        </header>


    )
} 

export default Header