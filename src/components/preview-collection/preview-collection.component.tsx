import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from '../collection-item/collection-item.component'
interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }
  interface Collection {
    title: string;
    routeName: string;
    items: Item[];
  }
const PreviewCollection = (collection:Collection) => (
  <div className="preview-collection">
    <h1 className="title">{collection.title.toUpperCase()}</h1>
    <div className="preview">
      {collection.items
        .filter((item, idx) => idx < 4)
        .map(({id,...otherProps}) => (
          <CollectionItem id={id} key={id} {...otherProps} />
        ))}
    </div>
  </div>
);
export default PreviewCollection;
