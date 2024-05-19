import React from 'react';

const ResponsePage = ({ result }) => {
  const { totalScore, riskLevel, feedback } = result;

  const getResources = () => {
    if (riskLevel === 'Low Risk') {
      return (
        <ul>
          <li>Continue practicing mindfulness and relaxation techniques.</li>
          <li>Maintain a balanced diet and regular exercise.</li>
          <li>Stay connected with friends and family.</li>
          <li>Set achievable goals and celebrate small wins.</li>
        </ul>
      );
    } else if (riskLevel === 'Moderate Risk') {
      return (
        <ul>
          <li>Try journaling to express your thoughts and feelings.</li>
          <li>Practice deep breathing exercises and meditation.</li>
          <li>Engage in hobbies and activities you enjoy.</li>
          <li>Consider talking to a school counselor or trusted adult.</li>
        </ul>
      );
    } else if (riskLevel === 'High Risk') {
      return (
        <ul>
          <li>Seek professional help from a mental health specialist.</li>
          <li>Talk to a trusted adult or school counselor immediately.</li>
          <li>Reach out to support groups or helplines.</li>
          <li>Avoid isolation; stay connected with loved ones.</li>
        </ul>
      );
    }
  };

  return (
    <div className="response-container">
      <h1>MindTracker Assessment Result</h1>
      <div className="result-summary">
        <p><strong>Total Score:</strong> {totalScore}</p>
        <p><strong>Risk Level:</strong> {riskLevel}</p>
        <p>{feedback}</p>
      </div>
      <div className="resources">
        <h2>Recommended Resources and Coping Strategies</h2>
        {getResources()}
      </div>
    </div>
  );
};

export default ResponsePage;
