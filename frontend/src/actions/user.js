import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  ADD_TIMELINE_REQUEST,
  ADD_TIMELINE_SUCCESS,
  ADD_TIMELINE_FAILURE,
  DELETE_TIMELINE_REQUEST,
  DELETE_TIMELINE_SUCCESS,
  DELETE_TIMELINE_FAILURE,
  ADD_YOUTUBE_REQUEST,
  ADD_YOUTUBE_SUCCESS,
  ADD_YOUTUBE_FAILURE,
  DELETE_YOUTUBE_REQUEST,
  DELETE_YOUTUBE_SUCCESS,
  DELETE_YOUTUBE_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAILURE,
} from "../actions/actions"


const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    credentials: 'include', 
  },
});

export default axiosInstance;


export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });

    const { data } = await axiosInstance.get("/api/v1/user");

    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const { data } = await axiosInstance.post(
      "/api/v1/login",
      { email, password },
     
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_REQUEST,
    });

    const { data } = await axiosInstance.get("/api/v1/logout");

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });

    const { data } = await axiosInstance.get("/api/v1/me");

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const updateUser = (name, email, password, about, skills) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    const { data } = await axiosInstance.put(
      "/api/v1/admin/update",
      { name,
        email,
        password,
        about,
        skills
      },
      
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};


export const deleteTimeline = ( id ) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TIMELINE_REQUEST,
    });

    const { data } = await axiosInstance.delete(`/api/v1/admin/timeline/${id}`);

    dispatch({
      type: DELETE_TIMELINE_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: DELETE_TIMELINE_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const addTimeline = ( title, description, date ) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TIMELINE_REQUEST,
    });

    const { data } = await axiosInstance.post(
      "/api/v1/admin/timeline/add",
      {
        title,
        description,
        date
      },
    );

    dispatch({
      type: ADD_TIMELINE_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: ADD_TIMELINE_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};



export const deleteYoutube = ( id ) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_YOUTUBE_REQUEST,
    });

    const { data } = await axiosInstance.delete(`/api/v1/admin/youtube/${id}`);

    dispatch({
      type: DELETE_YOUTUBE_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: DELETE_YOUTUBE_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const addYoutube = ( title, url, image ) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_YOUTUBE_REQUEST,
    });

    const { data } = await axiosInstance.post(
      "/api/v1/admin/youtube/add",
      {
        title,
        url,
        image
      },
     
    );

    dispatch({
      type: ADD_YOUTUBE_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: ADD_YOUTUBE_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};




export const deleteProject = ( id ) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_PROJECT_REQUEST,
    });

    const { data } = await axiosInstance.delete(`/api/v1/admin/project/${id}`);

    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const addProject = ( title, url, image, description, techStack ) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PROJECT_REQUEST,
    });

    const { data } = await axiosInstance.post(
      "/api/v1/admin/project/add",
      {
        title,
        url,
        image,
        description,
        techStack
      },
     
    );

    dispatch({
      type: ADD_PROJECT_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: ADD_PROJECT_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const contactUs = ( name, email, message ) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_US_REQUEST,
    });

    const { data } = await axiosInstance.post(
      "/api/v1/contact",
      {
        name, email, message
      },
    
    );

    dispatch({
      type: CONTACT_US_SUCCESS,
      payload: data.message
    });
  } catch (error) {
    dispatch({
      type: CONTACT_US_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};