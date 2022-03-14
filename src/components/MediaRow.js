import PropTypes from 'prop-types';

const MediaRow = (props) => {
  return (
    <tr>
      <td>
        <img src="https://placekitten.com/180/100" alt="kissa" />
      </td>
      <td>
        <h4>Title</h4>
        <p>
          Functions can be nested. Nested functions have access to variables
          that were declared in the outer function. You can use nested functions
          to organize the code in a function that’s long or complex.
        </p>
      </td>
      <td>
        <a href="https://metropolia.fi">View</a>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {};

export default MediaRow;
