/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { visitor } from './modules/ua';

const Link = ({
  href,
  ...rest
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    visitor.event('Navigation clicks', href as string);

    window.open(`${href}?ref=willhackett`);
  };

  return (
    <a
      {...rest}
      href={href}
      onClick={handleOnClick}
      rel="noopener noreferrer"
      target="_blank"
    />
  );
};

export default Link;
