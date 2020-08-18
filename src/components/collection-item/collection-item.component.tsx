import React from "react";

import "./collection-item.styles.scss";
interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }
const CollectionItem = ({name,imageUrl,price}:Item) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage : `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
    </div>
  </div>
);

export default CollectionItem;