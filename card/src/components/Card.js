import "./Card.css";

function Card({movie}) {
  return (
    <div className="Card">
    {movie.map(index => 
      <div className="card card--13">
      <h2 className="card__title">{index.title}</h2>
      <img
        width="300px"
        classNamxe="card__img"
        src={index.movieImage}
        alt=""
      ></img>
      <p className="card__text">
      {index.info}
      </p>
      <a className="card__btn" href="">
        buy me
      </a>
      </div>
    )}
    </div>
  );
}

export default Card;
