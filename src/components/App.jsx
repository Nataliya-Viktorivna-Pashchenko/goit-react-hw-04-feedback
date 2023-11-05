import { Component } from "react"
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

counterFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    })
  };

totalFeedback = () => {
    return (this.state.good + this.state.bad + this.state.neutral);
  };

percentagePositiveFeedback = () => {
    return ((this.state.good / this.totalFeedback()) * 100).toFixed(0);
  };


 
  render() { 
    const stateNames = Object.keys(this.state);
    const { good, neutral, bad, } = this.state;
    const total = this.totalFeedback();
    
    return (
      <div>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateNames}
            onLeaveFeedback={this.counterFeedback}
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
            positivePercentage={good && this.percentagePositiveFeedback()}
            />
          }
         

        </Section>
        
      </div>
     
    )
   
  }
}
