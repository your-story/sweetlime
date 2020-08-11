import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import HowtStyle from './howto.module.scss'
const howtoPage = () => {
    return (
        <div>
            <Layout>
            <Head title="Howto" />
            <div className={HowtStyle.title}> Steps:</div>
            <ul>
                <li>
                    <div className={HowtStyle.navItem}>
                        <b>Digitize:</b> 
                            <ul>
                                <li>
                                    Mobile Phone:
                                </li> 
                                <li>
                                    Scan:
                                </li> 

                            </ul>
                    </div>
                </li>    
                <li>
                    <div className={HowtStyle.navItem}>
                        <b>Restore:</b> 
                            <ul>
                                <li>
                                    Estimate:
                                </li> 
                                <li>
                                    Proof:
                                </li> 
                                <li>
                                    Deliver:
                                </li> 
                            </ul>
                    </div>
                </li>             
            </ul>
            
            </Layout>
        </div>
    )
}
export default howtoPage

