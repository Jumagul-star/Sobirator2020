import React from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import './GetStarted.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GetStarted() {
    const history = useHistory();
    AOS.init()
    
    return (
        <div className='container'>
            <h2 data-aos="flip-up"
                data-aos-duration="1500"  className="Mainh">Единственный способ спасти нашу Землю <br></br>- поменять наше сознание <br></br>и перестать оставлять мусор после себя!</h2>
            <img className='img-start' alt='#' src='https://cameralabs.org/media/camera/avgust/26avgust/53_db8920af483063e84d514c86aaeefca9.jpg'/>
            <Button className='btn-start' onClick={()=>history.replace('/')}>Спасти Землю</Button>
        </div>
    )
}

export default GetStarted
