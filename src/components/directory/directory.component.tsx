import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

interface Section{
    title:string,
    imageUrl:string,
    id:number,
    size:string,
    linkUrl:string
}
interface IProps {
}
interface MyState{
    sections: Section[]
}
class Directory extends React.Component<IProps,MyState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
         sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'hats',
              size:""
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: '',
              size:""
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: '',
              size:""
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: ''
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: ''
            }
          ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id ,...restOfProps}) => (
          <MenuItem key={id} {...restOfProps}/>
        ))}
      </div>
    );
  }
}
export default Directory;
