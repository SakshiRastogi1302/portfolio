import streamHubImage from "../assets/stream-hub-project.png"
import fantasiaFoodCornerImage from "../assets/fantasia-food-corner-project.png"

const projectData = [
    {
       id:1,
       imageURL : streamHubImage,
       projectName : "Video Stream Hub",
       projectStatus : "Project Completed",
       projectDescription : "Video Stream Hub is a Netflix-inspired UI clone built with React and Tailwind CSS. It features a responsive layout, modern design, and interactive components that replicate the look and feel of a real streaming platform.",
       technologyStack : ["HTML","Tailwind CSS","JavaScript","React JS"],
       liveDemoLink : "https://video-stream-hub.netlify.app/",
       githubCodeLink : "https://github.com/SakshiRastogi1302/Stream-Hub"
    },
    {
        id:2,
        imageURL : fantasiaFoodCornerImage,
        projectName : "Fantasia Food Corner",
        projectStatus : "Project In Progress",
        projectDescription: "Fantasia Food Corner is a responsive food-ordering web app built with React and Tailwind CSS. Users can browse menus, add dishes to a cart, and enjoy a seamless ordering experience." ,
        technologyStack : ["HTML","Tailwind CSS","JavaScript","React JS"],
        liveDemoLink : "https://fantasia-food-corner.netlify.app/",
        githubCodeLink : "https://github.com/SakshiRastogi1302/Fantasia-Food-Corner"
    }
]

export default projectData;