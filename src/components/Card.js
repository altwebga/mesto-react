function Card({ card, onCardClick }) {
  return (
    <div className="card__place">
      <button
        type="button"
        className="card__delete card__delete_hidden"
      ></button>
      <img
        className="card__img"
        src={card.link}
        alt={card.name}
        onClick={() => {
          onCardClick({ name: card.name, link: card.link });
        }}
      />
      <div className="card__text">
        <h3 className="card__name">{card.name}</h3>
        <div className="card__like-wrapper">
          <button type="button" className="card__like"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
