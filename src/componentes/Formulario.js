import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css'
const Formulario =({setcategoria}) =>{

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ]

    //custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

   const handleSubmit = (e) => {
        e.preventDefault()

        setcategoria(categoria)
    }

    
        return (
            <div className={`${styles.buscador} row`}>
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={handleSubmit}>
                        <h2 className={styles.heading}>Noticias por catergoria</h2>

                        <SelectNoticias />

                        <div className="input-field col s12">
                          
                            <select>
                                <option value="general" defaultValue>General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className={`${styles.btn_block} btn amber darken-2`} value="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
        );
    
}

export default Formulario;
