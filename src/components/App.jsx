import {  useState } from "react"
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }

const counterFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

const totalFeedback = () => {
    return (good + bad + neutral);
  };

const percentagePositiveFeedback = () => {
    return ((good / totalFeedback()) * 100).toFixed(0);
  };
 
    const stateNames = Object.keys({ good, neutral,bad });
    // const { good, neutral, bad, } = this.state;
    const total = totalFeedback();
    
    return (
      <div>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateNames}
            onLeaveFeedback={counterFeedback}
        />
        </Section>
      
        
        <Section title="Statistics">
          {total === 0 ?
            <Notification message="There is no feedback" /> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={good && percentagePositiveFeedback()}
            />
          }
         

        </Section>
        
      </div>
     
    )
   
  
}
