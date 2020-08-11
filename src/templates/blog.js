import React from "react"
import {graphql} from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"

import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

export const query = graphql`
query(
  $slug: String!
){
  contentfulBlogPost( slug: {eq: $slug}){
    title
    publishDate( formatString: "MMMM Do, YYYY")
    body {json}
    focuspic{
        file{
          url
        }
        title
    }
  }
  
}
`
const Blog = (props) => {
  const options ={
    renderNode: {
      "embedded-asset-block" : (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }
    return (
        <Layout>
        <Head title={props.data.contentfulBlogPost.title}></Head>
        <h2>{props.data.contentfulBlogPost.title}</h2>    
        <p>{props.data.contentfulBlogPost.publishDate}</p>
        <p>    
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </p>    
        <p>
        
        <img alt={props.data.contentfulBlogPost.focuspic.title} 
            src={props.data.contentfulBlogPost.focuspic.file.url} /> </p>
        </Layout>
    )
    
}
export default Blog