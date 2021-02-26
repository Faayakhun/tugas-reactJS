import React, { Component } from 'react'

export default class ListProduct extends Component {
    render() {
        const data =[{id: 0, name:"laptop",harga: 20000},{id: 1,name:"mouse",harga: 50000},{id: 2,name:"webcam",harga: 10000}];
        const listItems = data.map((item) => <li key={item.id}>{item.name} harga : Rp. {item.harga}</li>);
        return (
            <div>
                {listItems }
            </div>
        )
    }
}
