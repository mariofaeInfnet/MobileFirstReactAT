import style from './Seller.module.css';

export default function Seller(props){
  return (
    <div className={style.seller}>
      <h4>Dados do Vendedor:</h4>
      <p>Vendedor: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Telefone: {props.phone}</p>
      <p>Nota(0/5): {props.rate}</p>
    </div>
  )
}