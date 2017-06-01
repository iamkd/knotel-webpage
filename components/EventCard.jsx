import React from 'react';

// There should be a timestamp used for a date
export default ({ imageUrl, date, name, description }) =>
  <div className="event-card">
    <div className="event-card__image">
      <img src={imageUrl}/>
    </div>
    <div className="event-card__info">
      <div className="event-card__date">
        <span className="date-number">{date.split(' ')[0]}</span>
        {date.split(' ')[1]}
      </div>
      <div className="event-card__text">
        <div className="event-card__title">{name}</div>
        <div className="event-card__description">{description}</div>
      </div>
    </div>
  </div>