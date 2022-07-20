function Card({ card, onCardClick }) {
	function handleCardClick() {
		onCardClick({ name: card.name, link: card.link }); 
}
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
        onClick={handleCardClick}
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
