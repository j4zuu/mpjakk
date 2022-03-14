import React from 'react';
import MediaRow from './MediaRow';
import PropTypes from 'prop-types';

const MediaTable = ({mediaArray}) => {
  return (
    <table>
      <tbody>
      {
        mediaArray.map((item, index) => {
          return <MediaRow file={item} key={index}/>;
        })
      }
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  mediaArray: PropTypes.array.isRequired,
};

export {MediaTable};
