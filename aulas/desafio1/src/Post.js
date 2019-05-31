import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = (props) => {
  const { post } = props;

  return (
    <div className="postContainer">
      <PostHeader data={post} />

      <div className="textoPost">
        <p>{post.texto}</p>
      </div>
    </div>
  );
};

Post.defaultProps = {
  post: [],
};

Post.propTypes = {
  post: PropTypes.shape({
    texto: PropTypes.string,
  }),
};

export default Post;
