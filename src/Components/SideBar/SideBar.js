import React from 'react';
import './SideBar.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

function SideBar(props) {
  const mapList = () => {
    if (props.list) {
      return props.list.map(item => <li><ChevronRightIcon /><p>{item}</p></li>);
    }
  }

  return (
    <aside className="sideBar">
      <div className="sideBar__content">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <ul className="sideBar__list">
          {mapList()}
        </ul>
        <p>{props.info}<Link to={props.link} className="sideBar__link">here</Link>.</p>
      </div>
    </aside>
  )
}

export default SideBar
