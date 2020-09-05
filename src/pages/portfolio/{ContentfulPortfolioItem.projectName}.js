import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from "@contentful/rich-text-types";
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';


export const query = graphql`
  query SINGLE_PORTFOLIO_CONTENT($id: String) {
    contentfulPortfolioItem(id: {eq: $id}) {
      id
      createdAt(fromNow: true)
      projectName
      projectScreenshot {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      projectDescription {
        json
        projectDescription
      }
    }
  }
`;

export default function PortfolioItem({ data }) {
  const item = data.contentfulPortfolioItem;
  const description = documentToReactComponents(item.projectDescription.json, {
    renderMark: {
      [MARKS.ITALIC]: text => <em>{text}</em>
    }
  })
    return (
      <div>
        <p><Link to="/">Hello World Gatsby Route Api</Link></p>
        <h2>{item.projectName}</h2>
        <Image fluid={item.projectScreenshot.fluid} alt={item.projectScreenshot.title} />
        <div className="content">{description}</div>
        {/* <pre>{JSON.stringify(item, null, 4)}</pre> */}
        <Link to="/portfolio">Back to Portfolio</Link>
      </div>
    )
}
