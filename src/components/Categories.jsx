import React, { useState } from 'react';



export default function Categories(props) {
    const [active, setActive] = useState(null);
    const selectActive =(index) => {
        setActive(index);
    }
    
    return (
      <div className="categories">
        <ul>
          <li
            onClick={() => selectActive(null)}
            className={active === null ? "active" : ""}
          >
            Все
          </li>

          {
          props.item &&
            props.item.map((item, index) => (
              <li
                className={active === index ? "active" : ""}
                onClick={() => selectActive(index)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    );
}
