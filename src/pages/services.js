// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const ServicesPage = () => {
  return (
    <haritha>
      <Layout pageTitle="Services">
      <p>This is services page!!</p>
      </Layout>
    </haritha>
  )
}

export const Head = () => (
    <>
      <title>Services</title>
      <meta name="services" content="This is services page!!"/>
    </>
  )

//export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default ServicesPage