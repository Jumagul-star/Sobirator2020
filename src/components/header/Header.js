import React from "react"
import {
    Navbar,
    Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
import { isAuthUser } from "../../helpers/authFunctions";
import logo from "../../assets/logo.svg"


function Header(props) {
    // const [info, setInfo] = useState([]);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true)

    // })
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
    // const history = useHistory()
    return (
        <div className="main">
            <Navbar className="header d-flex fixed-top justify-content-around" light expand="md">
            <div>
                <Link className="nav-link" to="/">
                <img className="logo-hdr" style={{"width": "200px", "height": "90px"}} alt="logo" src={logo}></img>
                </Link>
            </div>
                {/* <Nav className="mr-auto" navbar>
                <NavbarToggler onClick={toggle} />
                <UncontrolledDropdown nav inNavbar>
                    <Dropdown isOpen={isOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Dropdown
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>
                            <Link to="/info">Info</Link>
                            <Link className="mr-3 text-dark" to="/account">Личный кабинет</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </UncontrolledDropdown>
                </Nav> */}
                <div>
                    <Form>
                        <div className="form-grp d-flex align-items-center">
                            <input type="search" name="search" className="search-inp" placeholder="Поиск..."/>
                            {/* <ButtonGroup>
                                <Button className="nav-btn btn-info" style={{"width": "100px"}}>Поиск</Button>
                            </ButtonGroup> */}
                            <div className="arrow-2">
                                <div className="arrow-2-top"></div>
                                <div className="arrow-2-bottom"></div>
                            </div>
                        </div>
                    </Form>
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