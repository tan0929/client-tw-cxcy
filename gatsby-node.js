/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const _ = require('lodash');

exports.createPages=({graphql, actions})=>{
  const { createPage } = actions;
  return graphql(`{
    allMarkdownRemark(filter:{frontmatter:{type :{
      eq: "page"
    }}}){
      edges{
        node{
          fields{
            slug
          }
          frontmatter{
            templateKey
          }
          id
        }
      }
    }
  }`).then( res=>{
    if(res.errors){
      return Promise.reject(res.errors);
    }
    const pages = res.data.allMarkdownRemark.edges;
    pages.forEach(({node})=>{
      const id = node.id;
      //const pagePath = `/${_.kebabCase(node.fields.slug)}/`;
      const pagePath = node.fields.slug;
      createPage(
        {
          path: pagePath,
          component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
          context: {
            id,
          }
        }
      );
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    fmImagesToRelative(node); // convert image paths for gatsby images
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode });
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
}