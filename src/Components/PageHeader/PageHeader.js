import React from 'react';
import './PageHeader.css';

function PageHeader(props) {
  return (
    <section id="header" className="pageHeader" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="pageHeader__content">
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
    </section >
  )
}

export default PageHeader;
