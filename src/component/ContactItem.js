import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <Row className='contact-item'>
        <Col lg={1}>
            <img width={50} src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" />
        </Col>
        <Col lg={10}>
            <div>
                {item.name}
            </div>
            <div>
                {item.phoneNumber}
            </div>
        </Col>
    </Row>
  )
}

export default ContactItem
