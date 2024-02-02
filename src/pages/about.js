// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <haritha>
      <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </haritha>
  )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="about" content="This defines about my first work experience with gasby with react"/>
    </>
  )

//export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default AboutPage