import React from "react";
import "./SearchRow.css";
import Rating from "@material-ui/lab/Rating";

function SearchRow({
  image,
  title,
  price,
  info,
  instructor,
  rating,
  stars,
  reviews,
  hours,
  lectures,
  type,
  isBestSeller,
}) {
  return (
    <div className="searchRow">
      <div className="searchRow__image">
        <img src={image} alt="" />
      </div>
      <div className="searchRow__text">
        <div className="text__main">
          <h4 className="text__title">{title}</h4>
          <h4 className="price">{price}</h4>
        </div>
        <p className="text__description">{info}</p>
        <p className="text__instructor">{instructor}</p>
        <div className="text__reviews">
          <p className="rating">{rating}</p>
          <Rating
            name="half-rating-read"
            defaultValue={stars}
            precision={0.5}
            readOnly
            size="small"
            className="text__stars"
          />
          <p className="reviews">({reviews})</p>
        </div>
        <p className="text__time">
          {hours} total hours • {lectures} • {type}
        </p>
        <div className="text__foot">
          <h4 className="price m-price">{price}</h4>
          {isBestSeller && <p className="bestseller">Bestseller</p>}
        </div>
      </div>
    </div>
  );
}

export default SearchRow;
