import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from 'three';
import { Link } from "react-router-dom"
import moonImage from "../../Images/moon.jpg"
import spaceImage from "../../Images/space.jpg"
import venusImage from "../../Images/venus.jpg"
import { Typography } from "@mui/material"
import TimeLine from "../TimeLine/TimeLine";
import { MouseOutlined } from "@mui/icons-material";
import PropTypes from 'prop-types';
import ThreeCanvas from "../ThreeCanvas/ThreeCanvas";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";





const Home = ({ timelines, skills, youtubes }) => {

    // useEffect(() => {
    //     const textureLoader = new THREE.TextureLoader();
    //     const moonTexture = textureLoader.load(moonImage);
    //     const venusTexture = textureLoader.load(venusImage);
    //     const spaceTexture = textureLoader.load(spaceImage);
      
    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //     camera.position.set(4, 4, 8);
      
    //     const canvas = document.querySelector(".homeCanvas");
    //     const renderer = new THREE.WebGLRenderer({ canvas });
    //     renderer.setSize(window.innerWidth, window.innerHeight);
        
    //     const moon = new THREE.Mesh(new THREE.SphereGeometry(2, 64, 64), new THREE.MeshStandardMaterial({ map: moonTexture }));
    //     const venus = new THREE.Mesh(new THREE.SphereGeometry(3, 64, 64), new THREE.MeshBasicMaterial({ map: venusTexture }));
    //     venus.position.set(8, 5, 5);
      
    //     const pointLight = new THREE.PointLight(0xffffff, 1);
    //     const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    //     pointLight.position.set(8, 5, 5);
    //     pointLight2.position.set(-8, -5, -5);
      
    //     scene.add(moon, venus, pointLight, pointLight2);
    //     scene.background = spaceTexture;
      
    //     const animate = () => {
    //       moon.rotation.y += 0.001;
    //       venus.rotation.y += 0.001;
    //       renderer.render(scene, camera);
    //       requestAnimationFrame(animate);
    //     };
      
    //     animate();
      
    //     window.addEventListener("scroll", () => {
    //       camera.rotation.z = window.scrollY * 0.001;
    //       camera.rotation.y = window.scrollY * 0.003;
    //     });
      
    //     window.addEventListener("resize", () => {
    //       camera.aspect = window.innerWidth / window.innerHeight;
    //       camera.updateProjectionMatrix();
    //       renderer.setSize(window.innerWidth, window.innerHeight);
    //     });
      
    //     return () => {
    //       window.removeEventListener("scroll", null);
    //       window.removeEventListener("resize", null);
    //     };
    //   }, []);
      



  return (
    <div className="home">
      {/* <canvas className="homeCanvas"></canvas> */}
      <ThreeCanvas />
      <div className="homeCanvasContainer">
        <Typography variant="h1" >
          <p>N</p>
          <p>A</p>
          <p>S</p>
          <p>I</p>
          <p>R</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">DESIGNER</Typography>
        </div>
        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>


      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills?.image1.url} alt="face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills?.image2.url} alt="face2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills?.image3.url} alt="face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills?.image4.url} alt="face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills?.image5.url} alt="face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills?.image6.url} alt="face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

        <div className="homeYoutubeWrapper">

          {youtubes.length > 0 ? (
            youtubes.map((item) => (
              <YoutubeCard
                key={item._id}
                id={item._id}
                image={item.image.url}
                title={item.title}
                isAdmin={false}
                url={item.url}
              />
            ))
          ) : (
            <p>No videos available</p> 
          )}


        </div>
      </div>

    </div>
  );
}

Home.propTypes = {
  timelines: PropTypes.array,
  skills: PropTypes.object,
  youtubes: PropTypes.array
};

Home.defaultProps = {
  timelines: [],
  skills: {},
  youtubes: []
};

export default Home;

