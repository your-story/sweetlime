import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import {graphql, useStaticQuery} from "gatsby"
// import HowtStyle from './howto.module.scss'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const HowtoPage = () =>{
    const data = useStaticQuery(graphql`
    query {
        contentfulHowitworks{

             body{json}
        }
        
    }
    
    `)
// const howtoPage = () => {
//     const data = useStaticQuery(graphql`
//     query {
        
//         contentfulHowitworks{
//              body {json}
//             }
//         }
        
    
    
//     `)

    return (
        <div>
        
            <Layout>
            <Head title="Home" />
            <dr>
            {documentToReactComponents(data.contentfulHowitworks.body.json)}
            </dr>
            </Layout>
        </div>
    )
}
export default HowtoPage

