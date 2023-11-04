import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "../../types/movie";

function Listing() {

  //FORMA ERRADA
  /* axios.get('http://localhost:8080/movies?size=12&page=0')
      .then(response => {
        console.log(response.data);       
  }); */

  /* Define um estado 'pageNumber' e uma função 'setPageNumber' para 
  manipulá-lo. Inicializa 'pageNumber' com o valor 0.*/
  const [pageNumber, setPageNumber] = useState(0);

  /*O hook useEffect é usado para executar um efeito colateral após a renderização do componente. 
  O efeito colateral é uma chamada de API usando Axios para obter dados de filmes */
  useEffect (() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
    // Quando a resposta da requisição estiver disponível, esta função de retorno será executada.
      .then(response => {

        // Extrai os dados da resposta da requisição e os converte para o tipo 'MoviePage'.
        const data = response.data as MoviePage;

        console.log(data )
        // Define o estado 'pageNumber' com o valor obtido da resposta (neste caso, o valor de 'data.number').
        setPageNumber(data.number);
  });
  }, [])


  return (
    <>
      <Pagination />

      <p>{pageNumber}</p>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>   
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>   
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>   
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>   
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>   
        </div>
      </div>
    </>
  );
}

export default Listing;
