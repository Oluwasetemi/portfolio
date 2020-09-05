import { graphql, Link } from 'gatsby';
import React from 'react';

export const query = graphql`
  query ALL_PORTFOLIO_CONTENT {
    allContentfulPortfolioItem {
      __typename
      nodes {
        projectName
        id
        gatsbyPath(filePath: "/portfolio/{ContentfulPortfolioItem.projectName}")
        projectScreenshot {
          fluid {
            src
          }
          title
        }
        projectDescription {
          projectDescription
              json
        }
      }
    }
  }
`;

export default function index(props) {
  const portfolios = props.data.allContentfulPortfolioItem.nodes;
  return (
    <div>
      <p><Link to="/">Hello World Gatsby Route Api</Link></p>
      <h2>All Portfolios {props.data.allContentfulPortfolioItem.nodes.length}</h2>
      {/* <pre>{JSON.stringify(portfolios, null, 4)}</pre> */}

      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id}>
            <Link to={portfolio.gatsbyPath}>
              {portfolio.projectName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
