import "./Contact.css"
import { Button, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useAlert} from "react-alert"
import {CLEAR_ERRORS, CLEAR_MESSAGE} from "../../actions/actions"
import {contactUs} from "../../actions/user"


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const alert = useAlert()
    const {loading, message:alertMessage, error} = useSelector((state)=>state.update)

    const contactFormHandler = (e)=>{
        e.preventDefault()
        dispatch(contactUs(name, email, message))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: CLEAR_ERRORS })
        }

        if (alertMessage) {
            alert.success(alertMessage)
            dispatch({ type: CLEAR_MESSAGE })
        }

        
    }, [alert, error, alertMessage, dispatch])


    return (
        <div className='contact'>
            <div className="contactRightBar"></div>
            <div className="contactContainer">
                <form className="contactContainerForm" onSubmit={contactFormHandler}>
                    <Typography variant="h4" >Contact Us</Typography>
                    <input type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name' />
                    <input type="email"
                       required
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder='Message'
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button variant='contained' type='submit' disabled={loading} >Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact