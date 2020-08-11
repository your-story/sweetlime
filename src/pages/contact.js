import React from "react"

import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
            email
            }
        }
    }
`)

    return (
        <div>
            <Layout>
            <Head title="Contact" />
            <h2> Contact US: Email:</h2> <a href={"mailto:" + data.site.siteMetadata.email}>{data.site.siteMetadata.email}</a>
            </Layout>
        </div>
    )
}
export default ContactPage

