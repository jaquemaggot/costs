import styles from './Input.module.css'

function Input({type,text,name,placeholder,handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <labe htmlFor={name}>{text}:</labe>
            <input 
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
              onChange={handleOnChange}
              value={value}
            />
        </div>
    )
}

export default Input