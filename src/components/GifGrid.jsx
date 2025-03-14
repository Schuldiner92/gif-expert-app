import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {    

  const {images, isLoading} = useFetchGifs(category);   
  
  return (
    <>        
        <h3>{category}</h3>    
        {
          isLoading && (<h2>Cargando...</h2>) // and lógico: si isLoading es true, se renderiza  
        }
        <div className="card-grid">
          {
            images.map(image=>(
              <GifItem 
                key={image.id} 
                {...image} // Usamos spread para mandar todas las props de la imagen
              />
            ))
          }
        </div>    
    </>
  )
}
