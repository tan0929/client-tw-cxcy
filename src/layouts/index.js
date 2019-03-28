import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GlobalStyle from '../components/globalStyle';
import Header from '../components/header';
import Footer from '../components/footer';

//need to fix the reactbreakpoints warning
const Layout = ({ children }) => (
  <div>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
          <Header 
            siteTitle={data.site.siteMetadata.title}
          />
      )}
    />
    <div>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
