import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { data } = props;
  const { imgAvatar, nomeUsuario, horarioPost } = data;

  return (
    <div className="postHeaderWrapper">
      <div className="imgWrapper">
        <img src={imgAvatar} alt="avatar" />
      </div>

      <div className="infosWrapper">
        <p className="nomeUsuario">{nomeUsuario}</p>
        <p className="horarioPost">{horarioPost}</p>
      </div>
    </div>
  );
};

PostHeader.defaultProps = {
  data: [],
};

PostHeader.propTypes = {
  data: PropTypes.shape({
    imagem: PropTypes.string,
    nomeUsuario: PropTypes.string,
    horarioPost: PropTypes.string,
  }),
};

export default PostHeader;
