import style from './Related.module.css';

export default function Related(props){
  return (
    <div className={style.content}>
      <h4>Produtos Relacionados</h4>
    <div className={style.product}>
      
      {props.relateds.map((related, index) => {
        return (

          <div key={index} className={style.card}>
              <h3 className={style.productName}>{related.name}</h3>
            <div className={style.imageCard}> 
              <img className={style.image} src={related.photo} />
            </div>
            <div className={style.footer}>
              <p>Preço: R${related.price}</p>
            </div>
          </div>

        )
      })
      }
    </div>
    </div>
  )
}