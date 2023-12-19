import style from './Questions.module.css';

export default function Questions(props){
  return (
    <div className={style.content}>
      <h4>Perguntas</h4>
      {props.questions.map((question, index) => {
        return (
         <div key={index} className={style.questionCard}>
          <p className={style.questionDate}>{question.date}</p>
          <p className={style.questionText}><strong>{question.name}:</strong> {question.question}</p>
           <p className={style.questionAnswer}>- {question.answer}</p>
         </div>
        )
      })
      }
    </div>
  )
}