import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author, id } = props;
  return (
    <div>
      <h2>{title}</h2>
      <span>
        By
        {author}
      </span>
      <button type="button" data-id={id}>
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
