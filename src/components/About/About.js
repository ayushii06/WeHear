import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className='section'>
        <p className='bold-center'>Inspiration</p>
        <p className='head'>Mental health is a crucial aspect of overall well-being, yet many people struggle to access timely support and resources. According to the World Health Organization, depression affects <bold>more than 264 million people worldwide</bold>, and anxiety disorders affect over 284 million people. The COVID-19 pandemic has exacerbated these issues, leading to a significant increase in mental health challenges across all age groups. Inspired by these statistics and<bold> the urgent need for accessible, proactive solutions, we created WeHear to provide continuous mental health surveillance, assessment, and support for individuals of all ages.</bold></p>
        
     </div>

     <div className='section'>
        <p className='bold-center'>What it does</p>
        <p className='head'>WeHear is a comprehensive web application <bold>designed to monitor and assess mental health</bold> across all age groups. It features <bold>interactive quizzes</bold> to evaluate mental well-being, tracks changes over time, and provides personalized feedback and resources. The app <bold>identifies potential mental health issues early and offers coping strategies, educational materials, and recommendations for professional support when necessary.</bold></p>
        
     </div>

     <div className='section'>
        <p className='bold-center'>How I built it</p>
        <p className='head'>
          <div className="">
          <bold>Frontend : </bold><p className="">Developed using React.js for a responsive and intuitive user interface.</p>
          </div>
          <div className="">
          <bold>Backend : </bold><p className="">Built with Express and Nodejs to handle data processing and user authentication</p>
          </div>
          <div className="">
          <bold>Database : </bold><p className="">Implemented with MongoDB for secure storage and management of user data.</p>
          </div>
          
        </p>
        
     </div>

     </>
  )
}

export default About