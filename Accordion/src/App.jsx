import React from 'react'
import "./Accordion.css";
import Accordion from './accordion';
export default function App() {

  const items = [
    {
      title : "JavaScript Basics",
      description : "Learn the fundamentals of JavaScript, including variables, data types, and functions."
    },
    {
      title : "React Introduction",
      description : "Get started with React and learn how to build interactive user interfaces."
    },{
      title : "Full Stack Development",
      description : "Master both frontend and backend development to become a complete full-stack developer."
    },
    {
      title: "Ai and Machine Learning",
      description: "Explore the world of artificial intelligence and machine learning, and learn how to build intelligent applications."
    }
  ];

  return <Accordion items={items} />

}

