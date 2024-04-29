import React from 'react'
import { infoTour } from '../data1'

const Feature = () => {
  return (
    <article className="tour-card">
      {infoTour.map((tour) => (
        <div key={tour.id} className="tour-item">
          <div className="tour-img-container">
            <img src={tour.imgTour} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.tourtitle}</h4>
            </div>
            <p>{tour.text}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{' '}
                {tour.country}
              </p>
              <p>{tour.days}</p>
              <p>from ${tour.price}</p>
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}

export default Feature
