import React from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, ButtonGroup, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Register() {

    const history = useHistory();
    const handleBack = () => {
        history.replace('/auth/login')
    }
    return (
        <div style={{ background: 'url(https://images.unsplash.com/photo-1560190356-3c4e8a38d9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1869&q=80)' }}>
            <Container>
                <Row 
                    style={{ height: '100vh' }}
                    className='justify-content-center align-items-center'
                >
                    <Col md={8}>
                        <Card className='shadow'>
                            <CardBody className="d-flex justify-content-around">
                                <form className='col-md-6'>
                                    <h2>Регистрация</h2>
                                    <Label htmlFor='email'>Адрес электронной почты: </Label>
                                    <Input 
                                        id='email'
                                        name='email'    
                                    />
                                    <Label htmlFor='password'>Пароль: </Label>
                                    <Input 
                                        id='password'
                                        name='password'
                                    />
                                    <Label htmlFor='repeat_password'>Повторите пароль:</Label>
                                    <Input 
                                        id='repeat_password'
                                        name='repeat_password'
                                    />
                                    <ButtonGroup className='mt-3'>
                                        <Button
                                            type='submit'
                                            color='success'
                                            >Регистрация
                                        </Button>
                                        <Button color='danger' onClick={handleBack}>Назад</Button>
                                    </ButtonGroup>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register