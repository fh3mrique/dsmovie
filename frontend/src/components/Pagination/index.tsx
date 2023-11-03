import './styles.css'

import Arrow from "../../assets/img/arrow.svg";

function Pagination() {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <img src={Arrow} alt="GitHub Icon" />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <img className="dsmovie-flip-horizontal" src={Arrow} alt="GitHub Icon" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
