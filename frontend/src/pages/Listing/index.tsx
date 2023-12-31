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

  const [page, setPage] = useState <MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  })

  /*O hook useEffect é usado para executar um efeito colateral após a renderização do componente. 
  O efeito colateral é uma chamada de API usando Axios para obter dados de filmes */
  useEffect (() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
    // Quando a resposta da requisição estiver disponível, esta função de retorno será executada.
      .then(response => {

        // Extrai os dados da resposta da requisição e os converte para o tipo 'MoviePage'.
        const data = response.data as MoviePage;
        setPage(data);
        
  });
  }, [pageNumber])

   //Objeto mocado
   const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber)
  }  

  return (
    <>
      <Pagination page={page} onChange={handlePageChange}/>

      <div className="container">
        <div className="row">
          {page.content.map(movie => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div> 
          ))}

            
             
        </div>
      </div>
    </>
  );
}

export default Listing;
