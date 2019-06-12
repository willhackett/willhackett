import React, { useEffect } from 'react';
import { Heading, Box, Text } from 'grommet';
import { visitor } from '../modules/ua';

const links = {
  opensource: [
    {
      title: 'is-dark',
      description: 'subscribe to system darkmode in the browser',
      url: 'https://npm.im/is-dark'
    },
    {
      title: 'is-pwned',
      description: "detect breached passwords before they're used",
      url: 'https://npm.im/is-pwned'
    },
    {
      title: 'graphql-gate',
      description: 'schema logic decorators for GraphQL',
      url: 'https://npm.im/graphql-gate'
    }
  ],
  companies: [
    {
      title: 'OpenClub',
      url: 'https://www.openclub.com.au/',
      position: 'Founder'
    },
    {
      title: 'Firelabs',
      url: 'https://www.firelabs.com.au',
      position: 'Director'
    },
    {
      title: 'SEEK',
      url: 'https://www.seek.com.au/',
      position: 'Senior Engineer'
    }
  ],
  social: [
    { title: 'github', url: 'https://www.github.com/willhackett' },
    { title: 'instagram', url: 'https://www.instagram.com/willhackett' },
    { title: 'linkedin', url: 'https://www.linkedin.com/in/willhackett' },
    { title: 'medium', url: 'https://www.medium.com/@willhackett' }
  ]
};

const Home = () => (
  <Box pad="large" a11yTitle="main content area" animation="fadeIn">
    {useEffect(() => {
      visitor.pageview('/', window.location.origin, 'Homepage').send();
    }, [])}
    <Heading a11yTitle="website owner" size="small">
      Will Hackett
    </Heading>
    <Text>
      <a href="https://journal.willhackett.com/" rel="noopener noreferrer">
        blog
      </a>
    </Text>
    <Heading
      level="2"
      size="small"
      a11yTitle="links to companies I hold positions in"
    >
      Current
    </Heading>
    {links.companies.map(link => (
      <Text key={link.title}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.title}
        </a>{' '}
        <small>{link.position}</small>
      </Text>
    ))}
    <Heading level="2" size="small" a11yTitle="links to open source libraries">
      Open source
    </Heading>
    {links.opensource.map(link => (
      <Text key={link.title}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.title}
        </a>{' '}
        <small>{link.description}</small>
      </Text>
    ))}
    <Heading level="2" size="small" a11yTitle="links to social sites I use">
      Social
    </Heading>
    {links.social.map(link => (
      <Text key={link.title}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.title}
        </a>
      </Text>
    ))}
  </Box>
);

export default Home;
