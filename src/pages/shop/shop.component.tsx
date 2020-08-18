import React from "react";
import { SHOP_DATA } from "./shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
}
interface MyState{
    collections:Collection[]
}
interface MyProps{}
class ShopPage extends React.Component<MyProps,MyState> {
  constructor(props:MyProps) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const collections:Collection[] = this.state.collections;
    return (
      <div className="shop-page">
        {collections.map(({ id,...restOfData }) => (
          <CollectionPreview key={id} {...restOfData} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
