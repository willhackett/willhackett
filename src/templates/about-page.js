import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import FluidContainer from '../components/FluidContainer';
import Content, { HTMLContent } from '../components/Content';
import breakpoints from '../components/breakpoints'

import seek from '../img/logos/seek.png';
import openclub from '../img/logos/openclub.png';
import firelabs from '../img/logos/firelabs.png';
import bmwgroup from '../img/logos/bmwgroup.png';
import localz from '../img/logos/localz.png';
import innowell from '../img/logos/innowell.png';
import enablo from '../img/logos/enablo.png';
import expedia from '../img/logos/expedia.png';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return <PageContent className="content" content={content} />;
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const Logos = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 4rem 0;
  ${breakpoints.md} {
    flex-wrap: nowrap;
  }
`;

const ImageContainer = styled('div')`
  max-width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  ${breakpoints.md} {
    max-width: 12.5%;
    // height: 4rem;
  }
`;

const Image = styled('img')`
  align-self: center;
  max-width: 70%;
  max-height: 70%;
  filter: grayscale(100%);
  transition: filter 0.25s;
  &:hover {
    filter: grayscale(0%);
  }
`;

const Logo = ({ src, brand }) => (
  <ImageContainer>
    <Image src={src} title={brand} alt={brand} />
  </ImageContainer>
);

const logos = [
  { src: seek, brand: 'Seek' },
  { src: openclub, brand: 'OpenClub' },
  { src: firelabs, brand: 'Firelabs' },
  { src: bmwgroup, brand: 'BMW Group' },
  { src: localz, brand: 'Localz' },
  { src: innowell, brand: 'InnoWell' },
  { src: enablo, brand: 'Enablo' },
  { src: expedia, brand: 'Expedia' }
];


const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <FluidContainer top="6rem">
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.htmlAst}
      />
      <Logos>
        {logos.map(logo => (
          <Logo key={logo.brand} src={logo.src} brand={logo.brand} />
        ))}
      </Logos>
    </FluidContainer>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
