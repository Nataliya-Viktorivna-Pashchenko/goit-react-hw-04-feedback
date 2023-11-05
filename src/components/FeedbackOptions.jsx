import css from "./Styles.module.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        className={css.stylesBtn}
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >{option}
      </button>
    ))}
    </div>)
  