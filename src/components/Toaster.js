import React from 'react'
import { Alert } from 'reactstrap';

function Toaster({isOpen, children, ...props}) {
    if(!isOpen) return null;
    return (
        <div>
            <Alert className='myToaster' {...props}>
                {children}
            </Alert>
        </div>
    )
}

export default Toaster
