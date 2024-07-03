import React from 'react';
import "./YoutubeCard.css"
import { Button, Typography } from '@mui/material';
import thumbnilImage from "../../Images/thumbnail.webp"
import { FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { deleteYoutube, getUser } from '../../actions/user';

const YoutubeCard = ({
  url = "",
  title = "",
  isAdmin = false,
  image,
  id
}) => {

  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
   await dispatch(deleteYoutube(id))
    dispatch(getUser())
}

  return (
    <div className='youtubeCard'>
      <a href={url} target="blank" >
        <img src={image ? image : thumbnilImage} alt={title} />
        <Typography>{title}</Typography>
      </a>
      {
        isAdmin && (
        <Button 
        onClick={()=>deleteHandler(id)}
        style={{display:"block",margin : "auto", color : "rgba(40,40,40,0.7)"}} >
          <FaTrash />
        </Button>)
      }
    </div>
  )
}

export default YoutubeCard