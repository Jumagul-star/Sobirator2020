import React, { useState } from 'react'
import { FormGroup, Label, Input, FormText, Button, Container, Row, Col, Card, CardBody, Form } from 'reactstrap'
import { useHistory, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { addNewApplication } from '../redux/actions';
import { isAuthUser } from '../helpers/authFunctions';

function Application(props) {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [waste, setWaste] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const history = useHistory();
    // const [alert, setAlert] = useState(false);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setAlert(true);
    //     setTimeout(()=> {
    //         setAlert(false)
    //     }, 3000)
    // }
    
    const url = 'http://localhost:8000';
    
    function addNewApplication(e) {
        e.preventDefault()
        const data = {
            id: Date.now(),
            surname,
            name,
            waste,
            amount,
            note,
        }
        console.log(data)
        if (surname !== '' && name !== '' && waste !== '' && amount !== '') {
            (async function () {
                await Axios.post(`${url}/posts`, data)
                props.addNewApplication(data)
                setSurname('')
                setName('')
                setWaste('')
                setAmount('')
                setNote('')
            }())
        }
        history.push('/')
        
    }
    if(!isAuthUser())return <Redirect to="/auth/login"/>
    return (
        <div style={{background: 'url(https://images.unsplash.com/photo-1532300481631-0bc14f3b7699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)'}}>
            <Container>
                {/* <Toaster style={{top: '950px', width: '400px', left: '850px'}} isOpen={alert}>
                    Ваша заявка успешно отправлена!
                </Toaster> */}
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <Card className="shadow" style={{marginTop: '200px', marginBottom: '200px'}}>
                            <CardBody>
                                <Form onSubmit={(event)=>addNewApplication(event)}>
                                    <h3>Заполните заявку</h3>
                                    <p>Для оповещение собиратора необходимо заполнить форму</p>
                                    <p><Label className='text-danger'>*</Label> - обозначены поля, обязательные для заполнения</p>
                                    <FormGroup>
                                        <Label className='text-danger'>*</Label>  {' '}
                                        <Label for="exampleEmail">Фамилия</Label>
                                        <Input 
                                            required
                                            type="text" 
                                            name="surname" 
                                            id="surname"
                                            value={surname}
                                            onChange={(e) => setSurname(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className='text-danger'>*</Label>  {' '}
                                        <Label  for="exampleEmail">Имя</Label>
                                        <Input 
                                            required
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className='text-danger'>*</Label>  {' '}
                                        <Label for="exampleSelect">Вид вторичного сырья</Label>
                                        <Input 
                                            required
                                            type="select" 
                                            name="sorts" 
                                            id="sorts"
                                            value={waste}
                                            onChange={(e) => setWaste(e.target.value)}
                                        >
                                        <option>Пластиковые бутылки</option>
                                        <option>Стекло</option>
                                        <option>Макулатура</option>
                                        <option>Полиэтилен</option>
                                        <option>Электроника</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className='text-danger'>*</Label>  {' '}
                                        <Label for="examplePassword">Количество (кг)</Label>
                                        <Input 
                                            required
                                            type="text" 
                                            name="quantity" 
                                            id="quantity" 
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className='text-danger'>*</Label>  {' '}
                                        <Label for="exampleText">Адрес места, откуда необходимо забрать вторичное сырье:</Label>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="exampleText" 
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleFile">Фото</Label>
                                        <Input type="file" name="file" id="exampleFile" />
                                        <FormText color="muted">
                                        Пожалуйста, для подтверждения загрузите фото вашего вторичного сырья
                                        </FormText>
                                    </FormGroup>
                                    <FormGroup tag="fieldset">
                                        <legend>Выбор времени</legend>
                                        <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            В  любое время
                                        </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            В первой половине дня (до 12:00)
                                        </Label>
                                        </FormGroup>
                                        <FormGroup check disabled>
                                        <Label check>
                                            <Input type="radio" name="radio1"/>{' '}
                                            Во второй половине дня(12:00 - 21:00)
                                        </Label>
                                        </FormGroup>
                                    </FormGroup>
                                    <Button type="submit">Отправить заявку</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default connect(null, { addNewApplication })(Application)
