import React from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import './GetStarted.css'

function GetStarted() {
    const history = useHistory();
    
    return (
        <div className='container'>
            <img className='img-start' alt='#' src='https://cameralabs.org/media/camera/avgust/26avgust/53_db8920af483063e84d514c86aaeefca9.jpg'/>
            <Button className='btn-start' onClick={()=>history.replace('/')}>Спасти Землю</Button>
        </div>
    )
}

export default GetStarted
