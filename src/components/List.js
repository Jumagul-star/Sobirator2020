import React from 'react'
import { Row, Col, Card, CardBody, Form, FormGroup, Label, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';

function List(props) {
    // const [surname, setSurname] = useState(props.data.surname);
    // const [name, setName] = useState(props.data.name);
    // const [waste, setWaste] = useState(props.data.waste);
    // const [amount, setAmount] = useState(props.data.amount);

    // const url = "http://localhost:8000"
    // const { item } = props

    return (
        <div style={{marginTop: '200px', marginBottom: '100px'}}>
            <h3 className='text-center'>Заявки на сдачу вторсырья</h3>
        <Row>
            {props.data.map((item)=>(
                <Col md={4} key={item._id}>
                    <Card >
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <p>
                                        <strong>Фамилия: {' '}</strong>      
                                        <Label for="exampleEmail">{item.surname}</Label>
                                    </p>
                                    <p>
                                        <strong>Имя: {' '}</strong>
                                        <Label  for="exampleEmail">{item.name}</Label>
                                    </p>
                                    <p>
                                        <strong>Вид вторичного сырья: {' '}</strong>
                                        <Label  for="exampleEmail">{item.waste}</Label>
                                    </p>
                                    <p>
                                        <strong>Количество: {' '}</strong>
                                        <Label  for="exampleEmail">{item.amount}</Label>
                                    </p>
                                    <p>
                                        <strong>Адрес места: {' '}</strong>
                                        <Label>{item.note}</Label>
                                    </p>
                                </FormGroup>
                                <ButtonGroup>
                                    {/* <Button
                                        // onClick={()=>setIsOpen(true)}
                                        color='warning'
                                    >
                                        Редактировать
                                    </Button> */}
                                        {/* <Modal isOpen={isOpen}> */}
                                            {/* <Card>
                                                <CardBody>
                                                    <Form onSubmit={()=>editData(item.id)}>
                                                        <div className='form-group'>
                                                            <h5 className='mb-4'>Редактирование заявки</h5>
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                value={surname}
                                                                onChange={(e)=>setSurname(e.target.value)}
                                                            />
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                value={name}
                                                                onChange={(e)=>setName(e.target.value)}
                                                            />
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                value={waste}
                                                                onChange={(e)=>setWaste(e.target.value)}
                                                            />
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                value={amount}
                                                                onChange={(e)=>setAmount(e.target.value)}
                                                            /> */}
                                                            {/* <input
                                                                className="form-control mb-3"
                                                                type="text"
                                                            ></input> */}
                                                            {/* <ButtonGroup>
                                                                <Button className="btn btn-primary w-100" type="submit"
                                                                    // onClick={()=>editData(item.id)}
                                                                >
                                                                    Сохранить
                                                                </Button>
                                                                <Button className="btn btn-secondary w-100"
                                                                    // inClick={()=>setIsOpen(false)}
                                                                >
                                                                    Отмена
                                                                </Button>
                                                            </ButtonGroup>
                                                        </div>
                                                    </Form>
                                                </CardBody>
                                            </Card> */}
                                        {/* </Modal> */}
                                        {/* <Button
                                            onClick={(e) => delData(item.id, e)}
                                            color='danger'
                                            >&times;</Button>
                                            {console.log(item.id)} */}
                                </ButtonGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
    )
}

const mapStateToProps = state => state.RecycleReducer;

export default connect(mapStateToProps, { fetchData })(List)
