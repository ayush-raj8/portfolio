import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <footer style={{ marginTop: '0.5rem', paddingTop: '0.3rem', paddingBottom: '0.3rem'}} >
          <Row>
            <Col className='text-center py-3 ' style={{ fontWeight: 'bold', color: 'black' }}> 
              Copyright &copy; NuGarner
            </Col>
           </Row>
        </footer>
    </div>
  )
}

export default Footer