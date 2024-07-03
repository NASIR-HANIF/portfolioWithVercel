import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from 'react-alert'
import {  addProject, getUser } from '../../actions/user';
import { MdKeyboardBackspace } from "react-icons/md"
import { CLEAR_ERRORS, CLEAR_MESSAGE } from '../../actions/actions';
import { Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { ProjectCard } from '../Projects/Projects';



const Project = () => {
    const { message, error, loading } = useSelector((state) => state.update)
    const { user } = useSelector((state) => state.user)
    const { message:loginMessage } = useSelector((state) => state.login)
    const dispatch = useDispatch();
    const alert = useAlert()
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [techStack, setTechStack] = useState("")

    
  const handleImage = (e) => {
    const Reader = new FileReader();
    const file = e.target.files[0]
    Reader.readAsDataURL(file)
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result)
      }
    }
  }



    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addProject(title, url, image, description, techStack))
        dispatch(getUser())
    }


    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: CLEAR_ERRORS })
        }

        if (message) {
            alert.success(message)
            dispatch({ type: CLEAR_MESSAGE })
        }

        if (loginMessage) {
            alert.success(loginMessage)
            dispatch({ type: CLEAR_MESSAGE })
        }
    }, [alert, error, message, dispatch, loginMessage])


    return (
        <div className='adminPanel'>
            <div className="adminPanelContainer">
                <Typography variant='h4' >
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{ marginRight: "1vmax" }}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>

                <form onSubmit={submitHandler}>
                    <input
                        className='adminPanelInputs'
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        className='adminPanelInputs'
                        type="text"
                        placeholder='Link'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <input
                        className='adminPanelInputs'
                        type="text"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        className='adminPanelInputs'
                        type="text"
                        placeholder='Technologies'
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                    />
                    
                    <input
                        className='adminPanelFileUpload'
                        type="file"
                        accept='image/*'
                        onChange={handleImage}
                    />

                    <Link to="/account">
                        BACK <MdKeyboardBackspace />
                    </Link>


                    <Button type='submit' onSubmit={submitHandler} variant='contained' disabled={loading} >
                        Add
                    </Button>

                </form>
                    <div className="adminPanelYoutubeVideos">
                        {
                            user && user.projects && user.projects.map((item)=>(
                              <ProjectCard
                              key={item._id}
                              id={item._id}
                              url={item.url}
                              projectImage={item.image.url}
                              projectTitle={item.title}
                              description={item.description}
                              technologies={item.techStack}
                              isAdmin = {true}
                              />
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}


export default Project