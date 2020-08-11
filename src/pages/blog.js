import React from "react"
import Layout from "../components/layout"
import postsStyle from './blog.module.scss'
import {Link, graphql, useStaticQuery} from "gatsby"
import Head from "../components/head"

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(
            sort: {
                fields: publishDate,
                order: ASC
            }
            ){
            edges{
                node{
                    title
                    slug
                    publishDate (fromNow: true)
                }
            }
            }
    }
`)
    return (
        <div>
            <Layout>
            <Head title="Blogs" />
            <h1> My Blogs</h1>
            <ol className={postsStyle.posts}>
                {data.allContentfulBlogPost.edges.map ((edge) => {
                    return (
                        <li className={postsStyle.post}>
                            <h3>
                            <Link to={"/blog/" + edge.node.slug }>
                                {edge.node.title}
                                <p> ({edge.node.publishDate})</p>
                            </Link>
                            
                            </h3>
                            
                            
                            
                                
                            
                        </li>
                    )
                    
                })}
            </ol>
            
            </Layout>
        </div>
    )
}
export default BlogPage

