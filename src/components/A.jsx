import React from 'react';
import PropTypes from 'prop-types';

const A = ({ href, title, mailto, children }, { mixpanel }) => {
  const trackLink = () => mixpanel.track('Link Clicked', {
    title,
    href
  });

  const trackEmail = (e) => {
    e.preventDefault();
    window.location = `mailto:${mailto}`;
    mixpanel.track('Email Clicked', {
      mailto,
      title
    });
  }

  if (mailto) {
    const email = () => {
      mixpanel.track('email click');
      window.location = 'mailto:hello@willhackett.com?subject=Greetings'
    }
  }
  return (
    <a
      className="mp"
      href={href}
      target="_blank"
      rel="noreferrer,nofollow"
      title={title}
      onClick={() => mailto ? trackEmail() : trackLink()}
      >
      {children}
    </a>
  )
}
A.contextTypes = {
  mixpanel: PropTypes.object
}
A.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
}
export default A;
