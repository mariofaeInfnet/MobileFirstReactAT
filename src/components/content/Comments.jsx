import style from './Comments.module.css';

export default function Comments(props){
  return (
    <div className={style.content}>
      <h4>Avaliações de Clientes</h4>
      {props.comments.map((comment, index) => {
        return (
         <div key={index} className={style.comment}>
          <p className={style.commentDate}>{comment.date}</p>
          <p className={style.commentText}><strong>{comment.name}:</strong> {comment.comment}</p>
         </div>
        )
      })
      }
    </div>
  )
}