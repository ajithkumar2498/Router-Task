import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'


function Tab() {
  return <>
  <div>
    <h1>React Router Task</h1>
  </div>
  <div className="HeaderTab">
  <Nav variant="underline" defaultActiveKey="*">
      <Nav.Item>
        <Link className="Card-link" to= "/all" tabIndex= "1"><b>ALL</b></Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="Card-link" to= "/fsd" tabIndex= "1" > <b>Full Stack Development</b></Link>
      </Nav.Item>
      <Nav.Item>
      <Link className="Card-link" to= "/cs" tabIndex= "1" > <b>Cyber Security</b></Link>
      </Nav.Item>
      <Nav.Item>
      <Link className="Card-link" to= "/ds" tabIndex= "1" ><b>Data Science</b></Link>
      </Nav.Item>
    </Nav>
    </div>
  </>
}

export default Tab