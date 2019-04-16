import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Imagetheme = ({props}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props);
      });
      if (!image) { return null; }
      
      const imageFluid = image.node.childImageSharp.fluid;
      return (
        <Img
          fluid={imageFluid}
        />
      );
    }}
  />
)

export default Imagetheme