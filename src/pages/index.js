import React from "react"
import {Link,graphql, useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
// import Img from 'gatsby-image'

const IndexPage = () =>{
    const data = useStaticQuery(graphql`
    query {
        
            contentfulFixPicsFrontpage(latest: {eq: true}){
             head,
             homeTitle,
             block1{block1},
             block2{block2},
             block3{block3},
             block4{block4},
             block5{block5},
             block6{block6},
             homePix{
                title,
                file{
                    url
                }
            }
        }
        
    }
    
    `)

    return (
        <div>
        
            <Layout>
            <Head title="Home" />
            <div className="main-body">
                <div className="left">
                    <div className="home-head">{data.contentfulFixPicsFrontpage.head}</div>
                    <div className="home-title">{data.contentfulFixPicsFrontpage.homeTitle}</div>
                    <div className="home-block1">{data.contentfulFixPicsFrontpage.block1.block1}</div>
                    <div className="home-block2">{data.contentfulFixPicsFrontpage.block2.block2}</div>
                    <div className="home-block3">{data.contentfulFixPicsFrontpage.block3.block3}</div>
                    <div className="home-block4">{data.contentfulFixPicsFrontpage.block4.block4}</div>
                    <div className="home-block3">{data.contentfulFixPicsFrontpage.block5.block5}</div>
                    <div className="home-block4">{data.contentfulFixPicsFrontpage.block6.block6}</div>
                </div>
                <div className="right">
                    <img alt={data.contentfulFixPicsFrontpage.homePix.title} 
                            src={data.contentfulFixPicsFrontpage.homePix.file.url} />
                </div>
            </div>
                <Link to="/contact">Contact Me</Link>
            </Layout>
        </div>
    )
}


export default IndexPage
