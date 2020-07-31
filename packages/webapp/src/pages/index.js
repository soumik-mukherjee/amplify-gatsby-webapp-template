import React from 'react'
import { Link } from 'gatsby'
import { withAuthenticator } from '@aws-amplify/ui-react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
)

export default withAuthenticator(IndexPage, true);
