import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'


function Tab({image, content, heading}) {
  return <>
  <div>
    <h1>React Router Task</h1>
  </div>
  <div className="HeaderTab">
  <Nav variant="underline" defaultActiveKey="*">
      <Nav.Item>
        <Link className="Card-link" to= "/all"><b>ALL</b></Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="Card-link" to= "/fsd"> <b>Full Stack Development</b></Link>
      </Nav.Item>
      <Nav.Item>
      <Link className="Card-link" to= "/cs"> <b>Cyber Security</b></Link>
      </Nav.Item>
      <Nav.Item>
      <Link className="Card-link" to= "/ds"><b>Data Science</b></Link>
      </Nav.Item>
    </Nav>
    </div>
  </>
}

export default Tab