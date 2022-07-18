import { useState, useEffect } from 'react';
import Card from './Card';
import api from '../utils/Api';
import avatarDefault from'../images/сousteau-min.jpg';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = useState(avatarDefault);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(`${res.name}`);
        setUserDescription(`${res.about}`);
        setUserAvatar(`${res.avatar}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар пользователя"
          />
          <div className="profile__avatar-hover" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__content">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="card">
        {cards.map((card) => {
          return <Card card={card} onCardClick={onCardClick} key={card._id} />;
        })}
      </section>
    </main>
  );
}

export default Main;
