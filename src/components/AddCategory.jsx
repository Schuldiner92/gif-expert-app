import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {        
        setInputValue(event.target.value); // Osbtenemos el inputValue
    };

    const onSubmit = (event) => {
        event.preventDefault(); // Evitar refresh al oprimir enter en el formulario
        if (inputValue.trim().length<=1) return;  
             
        onNewCategory(inputValue.trim());
        setInputValue(''); // Limpiar input después de agregar
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange= {onInputChange}
            />
        </form>        
    )
}
