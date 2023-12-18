import React from 'react'
import Card from 'react-bootstrap/Card';




function All({image, content, heading}) {
    
  return <>
  
  <div className="row">
   <Card className="cards" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{heading}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </>
}

export default All