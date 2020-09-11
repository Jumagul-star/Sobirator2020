import React from 'react';
import { Container, Row, Col, Card, CardBody, Label, Input, ButtonGroup, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Register() {

    const history = useHistory();
    const handleBack = () => {
        history.replace('/auth/login')
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <form>
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
                                    <ButtonGroup>
                                        <Button
                                            type='submit'
                                            >Регистрация
                                        </Button>
                                        <Button onClick={handleBack}>Назад</Button>
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