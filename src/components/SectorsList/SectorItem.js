import React, { useState } from 'react';

const SectorItem = ({ sector, number }) => {
  const [isToolTipShowing, setToolTipShowing] = useState(false);

  const [isDirectionSwitched__2, setDirectionSwitched__2] = useState(false)

  const [isDirectionSwitched__3, setDirectionSwitched__3] = useState(false)




  const toggleToolTip = (newValue) => {
    setDirectionSwitched__2(number === 2 || number === 5);
    setDirectionSwitched__3(number % 3 === 0);
    setToolTipShowing(newValue);
  }
  // const toggleToolTip = () => {
  // 	setToolTipShowing(
  // 		!isToolTipShowing
  // 	)
  // }

  return (
    <div className="sectors-list-item"
      onMouseEnter={() => toggleToolTip(true)}
      onMouseLeave={() => toggleToolTip(false)}
      style={{
        background: `url(${sector.imgUrl}) center no-repeat`,
        backgroundSize: 'cover'
      }}>
      <p className="sectors-list-item-name">
        {sector.name}
      </p>
      {
        isToolTipShowing && <p className={`sectors-list-item-tooltip ${isDirectionSwitched__2
          ? "sectors-list-item-tooltip-switched__2"
          : ""
          }
          ${isDirectionSwitched__3
            ? "sectors-list-item-tooltip-switched__3"
            : ""
          }
          `}>
          <span className="sectors-list-item-tooltip-name">
            {sector.name}
          </span>
          {sector.description}
        </p>
      }
    </div>
  );
};

export default SectorItem;