import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import FluidContainer from '../components/FluidContainer';
import Content, { HTMLContent } from '../components/Content';

export const BioPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return <PageContent className="content" content={content} />;
};

BioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const BioPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <FluidContainer top="6rem">
      <BioPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </FluidContainer>
  );
};

BioPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BioPage;

export const bioPageQuery = graphql`
  query BioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
