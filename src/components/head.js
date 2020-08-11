import React from "react"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql} from "gatsby"


const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
    query {
        contentfulFixPicsFrontpage(latest: {eq: true}){
             homeTitle,
        }
    }
    `)
    return (
        <Helmet title={`${title} | ${data.contentfulFixPicsFrontpage.homeTitle}`}/>
    )
}

export default Head