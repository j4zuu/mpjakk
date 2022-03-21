import {mediaUrl} from '../utils/variables';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Single = () => {
  const file = {}; // TODO in the next task: single media from props.location.state

  return (
    <React.Fragment>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title}/>
      <Link to={{pathname: "/example", state: fileObject}} />
    </React.Fragment>
  );
};

// TODO in the next task: add propType for location

export default Single;
