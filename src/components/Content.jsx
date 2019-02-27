import React from 'react';
import PropTypes from 'prop-types';

import rehypeReact from 'rehype-react';
import InlineImage from './InlineImage';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'inline-image': InlineImage
  }
}).Compiler;

export const HTMLContent = ({ content, className }) => renderAst(content);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
