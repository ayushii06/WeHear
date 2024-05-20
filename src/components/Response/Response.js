import React from 'react';
import '../Response/Response.css'
import contact from '../../assets/Response/contact.jpg'
import read from '../../assets/Response/read.jpg'
import talk from '../../assets/Response/talk.jpg'
import yoga from '../../assets/Response/yoga.jpg'

const ResponsePage = ({ result }) => {
  const { totalScore, riskLevel, feedback } = result;

  // const getResources = () => {
  //   if (riskLevel === 'Low Risk') {
  //     return (
  //       <ul>
  //         <li>Continue practicing mindfulness and relaxation techniques.</li>
  //         <li>Maintain a balanced diet and regular exercise.</li>
  //         <li>Stay connected with friends and family.</li>
  //         <li>Set achievable goals and celebrate small wins.</li>
  //       </ul>
  //     );
  //   } else if (riskLevel === 'Moderate Risk') {
  //     return (
  //       <ul>
  //         <li>Try journaling to express your thoughts and feelings.</li>
  //         <li>Practice deep breathing exercises and meditation.</li>
  //         <li>Engage in hobbies and activities you enjoy.</li>
  //         <li>Consider talking to a school counselor or trusted adult.</li>
  //       </ul>
  //     );
  //   } else if (riskLevel === 'High Risk') {
  //     return (
  //       <ul>
  //         <li>Seek professional help from a mental health specialist.</li>
  //         <li>Talk to a trusted adult or school counselor immediately.</li>
  //         <li>Reach out to support groups or helplines.</li>
  //         <li>Avoid isolation; stay connected with loved ones.</li>
  //       </ul>
  //     );
  //   }
  // };

  return (
    <div className="response-container">
      <h1>Assessment Result</h1>
      <div className="result-summary">
       
        <p className= {riskLevel==='Low Risk'?'low':riskLevel==='Moderate Risk'?'moderate':'high'}>Total Score: {totalScore}</p>
        <p>Risk Level: {riskLevel}</p>
        <p>{feedback}</p>
      </div>
      <div className="resources">
        <h2>Recommended Resources and Coping Strategies</h2>
        <div className="card">
      <div className="card-container">
        <img className="" src={yoga} />
        <div className="right">
        <p className="title font-bold">Mindfulness and Meditation</p>
        <p className="content">Mindfulness and meditation involve focusing your attention on the present moment, promoting awareness and acceptance of your thoughts and feelings without judgment. These practices help reduce stress, enhance emotional regulation, and improve overall mental well-being by fostering a calm and centered mind.</p>
        </div>
       
      </div>
      <div className="card-container">
   
        <div className="right">
        <p className="title font-bold">Because they support you!</p>
        <p className="content">Talking to family and friends involves sharing your thoughts, feelings, and experiences with trusted individuals in your support network. This communication provides emotional support, helps alleviate stress, and fosters a sense of connection and understanding, contributing to improved mental well-being and resilience.</p>
        </div>
        <img className="" src={talk} />
      </div>
      <div className="card-container">
      <img className="" src={read} />
        <div className="right">
        <p className="title font-bold">Explore Resources</p>
        <p className="content">Reading books involves engaging with written content for enjoyment, education, or self-improvement. It can reduce stress, enhance empathy, and improve cognitive function. By exploring different perspectives and gaining knowledge, reading books supports mental well-being and personal growth.</p>
        </div>      
      </div>

      <div className="card-container">
    
        <div className="right">
        <p className="title font-bold">Join Our Community</p>
        <p className="content">Contact helplines provide immediate, confidential support for individuals experiencing mental health crises or emotional distress. Trained professionals offer guidance, resources, and a listening ear, helping to de-escalate situations and connect individuals with appropriate care and support services.</p>
      </div>
      <img className="" src={contact} />
      </div>
    </div> 
      </div>
    </div>
  );
};

export default ResponsePage;
