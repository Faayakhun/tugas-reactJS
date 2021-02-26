import React, { Component } from 'react'

export default class ListProduct extends Component {
    render() {
        const data =[{name:"laptop",harga: 20000},{name:"mouse",harga: 50000}];
        const listItems = data.map((item) => <li key={item}>{item.name} harga : Rp. {item.harga}</li>);
        return (
            <div>
                {listItems }
            </div>
        )
    }
}
