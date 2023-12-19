import Menu from './Menu';
import style from './Menu.module.css';

export default function Header(){
  return (
    <div className={style.menu} >
      <Menu />
    </div>
  )
}