import React from 'react'
import {Typography } from '@mui/material'
import { Link } from "react-router-dom"
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography variant='h5'>About Me</Typography>
                <Typography>
                    Hey, my name is <b>NASIR HANIF</b>. I am a Full-Stack Devaloper.
                </Typography>
                <Link to="/contact" className='footerContactBtn'>
                    <Typography>
                        Contact Us
                    </Typography>
                </Link>
            </div>
            <div>
                <Typography variant='h6'>Social Media</Typography>
                <a href="https://github.com/NASIR-HANIF" target="blank">
                    <BsGithub />
                </a>
                <a href="https://www.youtube.com/@Nasir-Hanif/" target="blank">
                    <BsYoutube />
                </a>
                <a href="https://www.instagram.com/nasirhanif127sb" target="blank">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/nasir-hanif-dev/" target="blank">
                    <BsLinkedin />
                </a>

            </div>
        </div>
    )
}

export default Footer