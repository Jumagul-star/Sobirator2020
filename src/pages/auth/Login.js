import React, { useState, useEffect } from 'react'
import { Container, Col, Card, CardBody, Label, Input, Row, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/actions';
import { connect } from 'react-redux';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        props.loginUser({email, password}, history)
        // history.replace('/')
    }

    const handleRegister = () => {
        history.replace('/auth/register')
    }

    const { clearError } = props;
    useEffect(() => {
        clearError()
    }, [clearError])

    // if (localStorage.getItem('token')) {
    //     return <Redirect to='/'/>
    // }


    return (
        <div style={{ background: 'url(https://images.unsplash.com/photo-1560190356-3c4e8a38d9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1869&q=80)' }}>
            <Container>
                <Row style={{ height: '100vh' }}
                    className='justify-content-center align-items-center'>
                    <Col md={8}>
                        <Card className="shadow">
                            <CardBody className="d-flex justify-content-around">
                                <form className='col-md-6'
                                    onSubmit={handleSubmit}
                                >
                                    {props?.err && props?.err?.response?.data?.message && (
                                        <h4 className='text-danger'>
                                            Ошибка: {props.err.response.data.message}
                                        </h4>
                                    )}
                                    <Label htmlFor='email' className='mt-3'>Адрес электронной почты: </Label>
                                    <Input
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                    <Label htmlFor='password' className='mt-3'>Пароль:</Label>
                                    <Input
                                        id='password'
                                        name='password'
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                    <Button 
                                        type='submit'
                                        className='w-100 mt-4'
                                        style={{
                                            'backgroundColor': '#3d72b0',
                                            'color': 'black',
                                            'border': 'none',
                                        }}
                                    >Войти</Button>
                                </form>
                                <form className='col-md-6' style={{'backgroundColor': '#3d72b0'}}>
                                    <h2>Регистрация</h2>
                                    <p>Если вы в первый раз на нашем сайте и хотите подать заявку на сбор вторичного сырья, пожалуйста, зарегистрируйтесь.</p>
                                        <Button
                                            onClick={handleRegister}
                                            className='w-100 mt-2 bg-light text-dark'
                                        >Зарегистрироваться</Button>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    const { isAuth, loading, err } = state.AuthReducer;
    return { isAuth, loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: ({email, password}, history) => {
            dispatch(loginUser(
                { email, password },
                history
            )
            )
        },
        clearError: () => dispatch({
            type: 'CLEAR_ERROR'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
