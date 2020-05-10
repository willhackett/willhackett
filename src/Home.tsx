import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { visitor } from './modules/ua';

import Contact from './Contact';
import Current from './Current';
import Name from './Name';

import profile from './profile.jpeg';
import icon from './icon.png';

const Home = () => {
  useEffect(() => {
    visitor.pageview('/').send();
  });

  return (
    <>
      <Helmet>
        <title>
          Will Hackett - Melbourne, Australia — Software engineering, digital
          products
        </title>
        <meta
          name="description"
          content="Melbourne-based software engineer, consultant, founder and volunteer with experience across small business, enterprise and non-profit organisations. Avid gin aficionado, surfer and skier — loves his husky named Blue."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Will Hackett" />
        <meta property="og:url" content="https://www.willhackett.com/" />
        <meta property="og:image" content={profile} />
        <meta property="profile:first_name" content="Will" />
        <meta property="profile:last_name" content="Hackett" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href={icon} type="image/png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href={icon} type="image/png" />
      </Helmet>
      <Name />
      <div>
        <Current />
        <Contact />
      </div>
    </>
  );
};

export default Home;
