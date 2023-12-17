import React from 'react'
import Card from 'react-bootstrap/Card';

function Fsd({image, content, heading}) {
  return  <>
    <div className="container">
        <div className="row">
            <Card className="cards" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{heading}</Card.Title>
                  <Card.Text>
                    {content}
                  </Card.Text>
                </Card.Body>
              </Card>
        </div>
      </div>
    </>
  
}

export default Fsd