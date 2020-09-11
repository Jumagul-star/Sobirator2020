import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import { isAuthUser } from '../helpers/authFunctions';

//? Auth
const Login = React.lazy(()=>import('../pages/auth/Login'));
const Logout = React.lazy(()=>import('../pages/auth/Logout'));
const Register = React.lazy(()=>import('../pages/auth/Register'));


//? Pages
const Home = React.lazy(()=>import('../pages/Home'));
const GetStarted = React.lazy(()=>import('../pages/start/GetStarted'));
const Application = React.lazy(()=>import('../pages/Application'));
const Sorts = React.lazy(()=>import('../pages/Sorts'));
const Res = React.lazy(()=>import('../pages/Res'));
const Account = React.lazy(()=>import('../pages/Account'));

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route 
            {...rest}
            render = {
                ({location}) => {
                    return isAuthUser() ? (children) : (
                        <Redirect 
                            to={{
                                pathname: '/',
                                state: {from: location}
                            }}
                        />
                    )
                }
            }
        />
    ) 
}

function Routes( ) {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route 
                        exact path='/auth/login' 
                        component={Login}
                    />
                    <Route 
                        exact path='/auth/logout' 
                        component={Logout}
                    />
                    <Route 
                        exact path='/auth/register' 
                        component={Register}
                    />
                        <Route 
                            exact path='/application'
                        >
                        <Layout>
                            <Application />
                        </Layout>
                    </Route>

                    <Route exact path='/start/GetStarted'>
                        <Layout>
                            <GetStarted />
                        </Layout>
                    </Route>

                    <Route exact path='/'>
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>

                    <Route exact path='/sorts'>
                        <Layout>
                            <Sorts/>
                        </Layout>
                    </Route>

                    <Route exact path='/results'>
                        <Layout>
                            <Res/>
                        </Layout>
                    </Route>

                    <Route exact path='/account'>
                        <Layout>
                            <Account/>
                        </Layout>
                    </Route>
                    {/* <PrivateRoute exact path='/info'>
                        <Layout>
                            <Info />
                        </Layout>
                    </PrivateRoute> */}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;