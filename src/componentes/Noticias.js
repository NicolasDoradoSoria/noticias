import React from "react";
import Noticia from "./Noticia";

const Noticias = ({noticias}) => {
    return (
      <div className="row">
        {noticias.map(noticia => (
          <Noticia 
            noticia={noticia} 
            key={noticia.url} />
        ))}
      </div>
    );
}

export default Noticias;
