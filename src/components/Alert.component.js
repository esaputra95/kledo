import { Alert } from 'flowbite-react'
import React from 'react'

const AlertComponent = ({alert, setAlert}) => {
    return (
        <div className={`w-full ${alert.status ? 'flex' : 'hidden'}`}>
            <Alert
                color={alert.type ? alert.type : 'success'}
                className='mt-4 w-full'
                onDismiss={()=>setAlert({status:false})}
            >
            <span>
                <p>
                    {alert.message}
                </p>
            </span>
            </Alert>
        </div>
        
    )
}

export default AlertComponent