import React,{Fragment, useState, useEffect} from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Noticias from "./componentes/Noticias";

function App(){

  const [categoria, setcategoria] = useState('')
  const [noticias, setnoticias] = useState([])
  useEffect(() => {
    const consultarAPI = async () => {
      let url = `http://newsapi.org/v2/top-headlines?country=AR&category=${categoria}&apiKey=0b258088e68c4fdca01d5d147c9f2c58`;

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      setnoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])
 

    return (
      <Fragment>
        <Header titulo="Noticias" />
        <div className="container white">
          <Formulario 
          setcategoria= {setcategoria}
          
          />
          <Noticias noticias={noticias} />
        </div>
      </Fragment>
    );
  
}

export default App;
