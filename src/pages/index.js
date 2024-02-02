// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
//import img from '../images/image1.png'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <center>
      <Layout pageTitle=" "><br/>
      {/* <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>*/}
      <StaticImage
        alt="image"
        src={"../images/image2.png"}
      /> 
      </Layout>
      </center>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage