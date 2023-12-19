import { useState } from 'react';
import style from './Menu.module.css';

export default function Menu(){
  
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    console.log(isActive);
  }
  
  return (
    <div>
      <nav className={isActive ? style.active : ''}>
        <ul className={style.navbar}>
          <li className={style.logo}><a href="#">LOJA 10</a></li>
          <li className={style.navItem}><a href="#">Produtos</a></li>
          <li className={style.navItem}><a href="#">Serviços</a></li>
          <li className={style.navItem}><a href="#">Contato</a></li>
          <li className={style.toggle} onClick={toggleMenu}><a href="#">{isActive ? 'X' : '='}</a></li>
        </ul>
      </nav>
    </div>
  )
}