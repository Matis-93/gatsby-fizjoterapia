import * as React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/")
  }, [])
  return (
    <Layout>
      <h1>404</h1>
      <p>
        Zgubułeś się? Wróć na stronę główną: <Link to="/">fizjokrej.pl</Link>
      </p>
    </Layout>
  )
}

export default NotFoundPage
