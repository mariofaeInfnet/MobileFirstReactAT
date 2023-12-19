import style from './Button.module.css';

export function Button({ onClick,
                        children,
                        fullWidth }) {

  const width = fullWidth ? '100%' : 'auto';

  return (
    <button style={{width}} className={[style.button]} onClick={onClick}>
      {children}
    </button>
          );
}