import React, { useState } from 'react'
import { Card, CardBody, Form, FormGroup, Label, ButtonGroup, Button, Modal, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import { deleteApplication, editApplication, fetchData } from '../redux/actions';

const url = "http://localhost:8000"

function List(props) {
    const [surname, setSurname] = useState(props.data.surname);
    const [name, setName] = useState(props.data.name);
    const [waste, setWaste] = useState(props.data.waste);
    const [amount, setAmount] = useState(props.data.amount);
    const [address, setAddress] = useState(props.data.address);
    const [number, setNumber] = useState(props.data.number);
    
    const [isOpen, setIsOpen] = useState(false);

    const { item } = props

    function delData(id, e) {
        e.stopPropagation();
        async function delApplication(id) {
            await Axios.delete(`${url}/posts/${id}`)
            props.deleteApplication(id)
            Axios.get(`${url}/posts`)
                .then(({data}) => {
                    props.fetchData(data)
                })
        }
        delApplication(id)
    }

    function editData(id) {
        const data = {
            surname,
            name,
            waste,
            amount,
            address,
            number
        }
        setIsOpen('')
        Axios.patch(`${url}/posts/${id}`, data)
            .then((res) => {
                console.log('PATCH DATA', res.data)
                props.editApplication(res.data)
            })
    }

    return (
        <Container>
            <div>
                    <Card>
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
                                        <strong>Номер: {' '}</strong>
                                        <Label  for="exampleEmail">{item.number}</Label>
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
                                        <Label>{item.address}</Label>
                                    </p>
                                </FormGroup>
                                <ButtonGroup>
                                    <Button
                                        onClick={()=>setIsOpen(true)}
                                        color='warning'
                                    >
                                        Редактировать
                                    </Button>
                                        <Modal isOpen={isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <Form onSubmit={()=>editData(item.id)}>
                                                        <div className='form-group'>
                                                            <h5 className='mb-4'>Редактирование заявки</h5>
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                // placeholder='Введите вашу фамилию'
                                                                value={surname}
                                                                onChange={(e)=>setSurname(e.target.value)}
                                                                {...item.surname}
                                                            ></Input>
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                placeholder='Введите ваше имя'
                                                                value={name}
                                                                onChange={(e)=>setName(e.target.value)}
                                                            />
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                placeholder='Введите ваш номер телефона'
                                                                value={number}
                                                                onChange={(e)=>setNumber(e.target.value)}
                                                            />
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="select"
                                                                value={waste}
                                                                onChange={(e)=>setWaste(e.target.value)}
                                                            >
                                                                <option>Выберите вид вторичного сырья</option>
                                                                <option>Пластиковые бутылки</option>
                                                                <option>Стекло</option>
                                                                <option>Макулатура</option>
                                                                <option>Полиэтилен</option>
                                                                <option>Электроника</option>
                                                            </Input>
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                placeholder='Введите количество'
                                                                value={amount}
                                                                onChange={(e)=>setAmount(e.target.value)}
                                                            />
                                                            <Input
                                                                className="form-control mb-3"
                                                                type="text"
                                                                placeholder='Введите ваш адрес'
                                                                value={address}
                                                                onChange={(e)=>setAddress(e.target.value)}
                                                            />
                                                            
                                                            <ButtonGroup>
                                                                <Button className="btn btn-success w-100" type="submit"                                                                >
                                                                    Сохранить
                                                                </Button>
                                                                <Button className="btn btn-secondary w-100"
                                                                    inClick={()=>setIsOpen(false)}
                                                                >
                                                                    Отмена
                                                                </Button>
                                                            </ButtonGroup>
                                                        </div>
                                                    </Form>
                                                </CardBody>
                                            </Card>
                                        </Modal>
                                        <Button
                                            onClick={(e) => delData(item.id, e)}
                                            color='danger'
                                            >&times;</Button>
                                </ButtonGroup>
                            </Form>
                        </CardBody>
                    </Card>
            </div>
        </Container>
    )
}

const mapStateToProps = state => state.RecycleReducer;

export default connect(mapStateToProps, { fetchData, deleteApplication, editApplication })(List)
