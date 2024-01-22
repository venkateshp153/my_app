import React from "react";
import Close from "../assets/close.svg";
const PortfolioItem = ({ img, title, details }) => {
  return (
    <div className="portfolio_item">
      <img src={img} alt="" className="portfolio_img" />
      <div className="portfolio_hover">
        <h3 className="portfolio_title">{title}</h3>
      </div>
      <div className="portfolio_modal">
        <div className="portfolio_modal-content">
          <img src={Close} alt="" className="modal_close" />
          <h3 className="modal_title">{title}</h3>
          <ul className="modal_list grid">
            {details.map(({ icon, title, desc }, index) => {
              return <li className="modal_item" key={index}>
                <span className="item_icon">{icon}</span>
                <div>
                    <span className="item_title">{title}</span>
                    <span className="item_details">{desc}</span>
                </div>
              </li>;
            })}
          </ul>
          <img src={img} alt="" className="modal_img"/>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
