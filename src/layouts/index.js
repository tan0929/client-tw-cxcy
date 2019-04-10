import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import GlobalStyle from '../components/globalStyle';
import Header from '../components/header';
import Footer from '../components/footer';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import SEO from '../components/seo';

//need to fix the reactbreakpoints warning
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
      <StaticQuery
        query={query}
        render={data => <Content data={data} children={children}/>}
      />
  </ThemeProvider>
)

const Content = ({data,children})=>(
  <div>
    <SEO 
      title={data.site.siteMetadata.title} 
      keywords={data.setting.edges[0].node.frontmatter.keywords} 
    />
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    setting: allMarkdownRemark( filter: { 
      frontmatter:{ type:{ eq: "setting" } }
    }){
      edges{
        node{
          frontmatter{
            keywords
          }
        }
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
