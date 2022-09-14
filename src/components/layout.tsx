/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./app.css"
import { Row } from "react-bootstrap"
import Footer from "./footer"
import Header from "./Header"
import Main from "./Main"

const Layout = ({ children }) => {
  const refs = {
    workingMethods: React.useRef<HTMLDivElement>(null),
    canIHelpU: React.useRef<HTMLDivElement>(null),
    visitAdvice: React.useRef<HTMLDivElement>(null),
    contact: React.useRef<HTMLDivElement>(null),
    aboutMe: React.useRef<HTMLDivElement>(null),
    facebook: React.useRef<HTMLDivElement>(null),
    price: React.useRef<HTMLDivElement>(null),
  }
  return (
    <div className="App">
      <Header refs={refs} />
      <Main refs={refs} />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
