import './styles.css'

import Arrow from "../../assets/img/arrow.svg";
import { MoviePage } from '../../types/movie';

type Props = {
  page: MoviePage;
  onChange: Function
}

function Pagination({page, onChange} : Props ) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number -1)}>
          <img src={Arrow} alt="GitHub Icon" />
        </button>
        <p>{`${page.number +1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number +1)}>
          <img className="dsmovie-flip-horizontal" src={Arrow} alt="GitHub Icon" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
