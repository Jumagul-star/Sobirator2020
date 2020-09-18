import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './Body.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Body() {
    AOS.init();
    const history = useHistory();
    return (
        <div>
            <div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" 
                    className="waste"
                >
                    <img className="img-waste" alt="#" src="https://images.unsplash.com/photo-1585119192228-f072c53bc55c?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
                    <Button className="btn-waste" onClick={()=>history.replace("/application")}>Сдать отходы</Button>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='waste'>
                    <img className='img-sorts' alt='#' src='https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80'/>
                    <Button className='btn-sorts' onClick={()=>history.replace('/sorts')}>Виды вторичного сырья</Button>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="waste">
                    <img className='img-res' alt='#' src='https://images.unsplash.com/photo-1525331336235-d3153d7e58cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'/>
                    <Button onClick={()=>history.replace('/results')} className='btn-res'>Последствия</Button>
                </div>
            </div>
        </div>
    )
}

export default Body
