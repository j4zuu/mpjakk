import React from 'react';


MediaRow.propTypes = {};

const MediaRow = ({file}) => {
  return (
    <tr>
      <td>
        <img src={file.thumbnails.w160} alt='kissa'/>
      </td>
      <td>
        <h4 {file.filename} />
        <p {file.description} />
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export {
  MediaRow,
};
