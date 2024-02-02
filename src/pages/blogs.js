// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const BlogsPage = () => {
  return (
    <haritha>
      <Layout pageTitle="Blogs">
      <p>This is blogs page!!</p>
      </Layout>
    </haritha>
  )
}

export const Head = () => (
    <>
      <title>Blogs</title>
      <meta name="blogs" content="This is blogs page!!"/>
    </>
  )

//export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default BlogsPage