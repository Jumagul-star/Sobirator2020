import React, { useEffect, useState } from "react"
import {
    Navbar,
    Form,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
import { isAuthUser } from "../../helpers/authFunctions";
import logo from "../../assets/logo.svg";
import Axios from "axios";


const url = "http://localhost:8000";

function Header(props) {

    //? Search
    const [info, setInfo] = useState([]);
    const [filteredInformation, setFilteredInformation] = useState([]);
    const [input, setInput] = useState('');
    const history = useHistory();

    useEffect(() => {
        Axios.get(`${url}/info`)
        .then(res => {
            const {data} = res;
            setInfo(data)
            if (input.length > 0) {
                let result = info.filter((item)=>{
                    return item.title.toLowerCase().match(input)
                })
                setFilteredInformation(result)
            }
        })
    }, [input])

    const handleChange = e => {
        e.preventDefault(
            setInput(e.target.value)
        )
    }

    const handleGetDetails = data => {
        setInput('')
        data.desc ? history.push('/sorts') : history.push('/results') 
        // history.replace('/sorts')
    }

    return (
        <div className="main">
            <Navbar className="header d-flex fixed-top justify-content-around" light expand="md">
            <div>
                <Link className="nav-link" to="/">
                <img className="logo-hdr" style={{"width": "200px", "height": "90px"}} alt="logo" src={logo}></img>
                </Link>
            </div>
                <div className='d-flex align-items-center'>
                    <Form>
                        <div className="form-grp">
                            <input 
                                type="search" 
                                name="search" 
                                className="search-inp text-center"
                                autoComplete="off" 
                                placeholder="Поиск..."
                                value={input}
                                onChange={handleChange}
                            />
                            <div>
                                <ul className='searchList text-light'>
                                    {filteredInformation.map((item,id) => {
                                        return (
                                            input !== "" ? (
                                                <li 
                                                    style={{listStyleType: 'none'}}
                                                    key={id}
                                                    onClick={()=>handleGetDetails(item)}
                                                    >
                                                    {item.title}
                                                </li>
                                            ) : null
                                        ) 
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Form>
                    {/* <div className="arrow-2">
                        <div className="arrow-2-top"></div>
                        <div className="arrow-2-bottom"></div>
                    </div> */}
                </div>
                {console.log(props)}
                {isAuthUser() && (
                    <div>
                    <p className='text-light'>Сбор: каждую пятницу с 9:00 до 20:00</p>
                    <Link to='/account' className="text-light mr-3">Личный кабинет</Link>
                    <Link className="text-light" to="/auth/logout">Выйти</Link>
                </div>
                )}    
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => {
    const { isAuth } = state.AuthReducer
    return { isAuth }
}

export default connect(mapStateToProps, null)(Header)