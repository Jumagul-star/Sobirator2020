import React from 'react'
import { Col, Row } from 'reactstrap'
import ListItem from './ListItem'

function List(props) {
    
    return (
        <div style={{marginTop: '200px', marginBottom: '100px'}}>
            <h3 className='text-center'>Заявки на сдачу вторсырья</h3>
            <Row>
                {props.data.map((item) => (
                    <Col md={4} key={item._id}>
                        <ListItem item={item}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default List
