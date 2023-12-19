import { Button } from '../assets/Button';
import style from './Product.module.css';

export default function Product(props){
  return (

      <div className={style.card}>
        <h3 className={style.productName}>{props.name}</h3>
        <div className={style.imageCard}> 
          <img className={style.image} src={props.image} />
        </div>
        <div>
          <p>{props.description}</p>
          <p>Nota(0/5): <strong>{props.rate}</strong></p>
        </div>
        <div className={style.footer}>
          <p>Preço: R$<strong>{props.price}</strong></p>
          <Button>Comprar</Button>
        </div>
      </div>

  )
}