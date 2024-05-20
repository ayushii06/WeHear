import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './input.css'
import Response from '../Response/Response';


function Input() {
    const [formData, setFormData] = useState({
        mood: '',
        anxiety_frequency: '',
        sleep_hours: '',
        academic_stress: '',
        coping_mechanisms: '',
      });
    
      const [result, setResult] = useState({
        totalScore: null,
        riskLevel: '',
        feedback: ''
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const calculateScore = () => {
        let totalScore = 0;
    
        // Calculate total score based on formData
        for (let key in formData) {
          totalScore += parseInt(formData[key]);
        }
    
        let riskLevel = '';
        let feedback = '';
    
        if (totalScore <= 10) {
          riskLevel = 'Low Risk';
          feedback = 'You are experiencing normal levels of stress and mood fluctuations. Keep up the good habits!';
        } else if (totalScore <= 20) {
          riskLevel = 'Moderate Risk';
          feedback = 'You show some signs of stress or mood disturbances. Consider using coping strategies and talking to a counselor or trusted adult.';
        } else {
          riskLevel = 'High Risk';
          feedback = 'You are experiencing significant levels of stress, anxiety, or mood disturbances. Seek professional help immediately.';
        }
    
        setResult({ totalScore, riskLevel, feedback });
      };

  return (
    <>
  
   
    {result.totalScore !== null ? <Response result={result}></Response>: <div className="text-center">
    <p className='appname font-bold'>Great! You're now registered</p>
    <p className="h-1">Let's take a small test.</p>
    <p className="h-2">(Don't worry...It’s not your school test :)</p>
    <p className="h-1">Answer the questions as your heart says !</p>
    <form className="input-container">
        <div className="ques-container">
    <label>How have you been feeling over the past week?</label><br />
    <div className="ans-container">
        <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="1"  /><p className="">Never</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="2"  /><p className="">Never</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="3"  /><p className="">Never</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="4"  /><p className="">Never</p> <br />
          </div>
        </div>
          </div>

          <div className="ques-container">
    <label>How often have you felt anxious or stressed in the past week?</label><br />
    <div className="ans-container">
        <div className="">
          <input onChange={handleChange} type='checkbox' name="anxiety_frequency" value="1"  /><p className="">Never</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="anxiety_frequency" value="2"  /><p className="">Rarely</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="anxiety_frequency" value="3"  /><p className="">Often</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="anxiety_frequency" value="4"  /><p className="">Always</p> <br />
          </div>
        </div>
          </div>


          <div className="ques-container">
    <label>How many hours of sleep do you get on an average night?</label><br />
    <div className="ans-container">
        <div className="">
          <input onChange={handleChange} type='checkbox' name="sleep_hours" value="1"  /><p className="">Less than 5</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="sleep_hours" value="2"  /><p className="">5-6 hours</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="sleep_hours" value="3"  /><p className="">6-8 hours</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="sleep_hours" value="4"  /><p className="">More than 8 hours</p> <br />
          </div>
        </div>
          </div>

          <div className="ques-container">
    <label>How stressed do you feel about schoolwork and assignments?</label><br />
    <div className="ans-container">
        <div className="">
          <input onChange={handleChange} type='checkbox' name="academic_stress" value="1"  /><p className="">Not at all stressed</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="academic_stress" value="2"  /><p className="">Moderately stressed</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="academic_stress" value="3"  /><p className="">Very stressed</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="academic_stress" value="4"  /><p className="">Extremely stressed</p> <br />
          </div>
        </div>
          </div>

          <div className="ques-container">
    <label>Do you find it difficult to concentrate on your studies?</label><br />
    <div className="ans-container">
        <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="1"  /><p className="">Never</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="2"  /><p className="">Sometimes</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="3"  /><p className="">Often</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="mood" value="4"  /><p className="">Always</p> <br />
          </div>
        </div>
          </div>
          <div className="ques-container">
    <label>How do you usually cope with stress or difficult emotions?</label><br />
    <div className="ans-container">
        <div className="">
          <input onChange={handleChange} type='checkbox' name="coping_mechanisms" value="1"  /><p className="">Talking to someone</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="coping_mechanisms" value="2"  /><p className="">Exercising</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="coping_mechanisms" value="3"  /><p className="">Engaging in hobbies</p> <br />
          </div>
          <div className="">
          <input onChange={handleChange} type='checkbox' name="coping_mechanisms" value="4"  /><p className="">Avoiding the problem</p> <br />
          </div>
        </div>
          </div>
        
    
    <button type="button"  className="text-center btns font-bold" onClick={calculateScore}>Submit</button>
    </form>
    </div>
    }
    </>
  )
}

export default Input