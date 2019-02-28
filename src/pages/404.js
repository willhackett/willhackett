import React from 'react';
import Container from '../components/Container';

const NotFoundPage = () => (
  <Container>
    <h1>
      <span role="img" aria-label="404 - Page not Found">
        🤷‍♂️
      </span>
    </h1>
    <h3>I'm really not sure what you were expecting</h3>
    <p>This page does not exist. </p>
    <iframe
      title="Giphy 404 Image"
      src="https://giphy.com/embed/9J7tdYltWyXIY"
      width="480"
      height="404"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    />
    <p>
      <a href="https://giphy.com/gifs/internet-google-chrone-9J7tdYltWyXIY">
        via GIPHY
      </a>
    </p>
  </Container>
);

export default NotFoundPage;
