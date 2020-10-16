import React, {useState} from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types'

function PizzaBlock(props) {
  const [activeType, setActiveType] = useState(props.types[0]);
  const [activeSize, setActiveSize] = useState(props.sizes[0]);
  const avaibaleTypes = ["тонкое", "традиционное"];
  const avaibaleSizes = [26, 30, 40];

  const onSelectType = (index) => {
    setActiveType(index);
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{props.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {avaibaleTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index,
                disabled: !props.types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>

        <ul>
          {avaibaleSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !props.sizes.includes(size),
              })}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {props.price} грн</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
  name: "no name",
  imageUrl: "https://thumbs.dreamstime.com/b/%D0%B5%D0%B4%D0%B0-%D0%B8%D0%B7-%D0%B7%D0%B0%D0%BA%D1%83%D1%81%D0%BE%D1%87%D0%BD%D1%8B%D1%85-%D0%BE%D1%82%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0-110044200.jpg",
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
