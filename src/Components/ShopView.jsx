import React, { Component } from 'react';
import ProductList from './ProductList';


class ShopView extends Component {
    render () {     
        const productList = this.props.productList;
        return(
            <div>
                <h1>This is your Shopping List</h1>
 
                <h2>Products</h2>
                <ProductList 
                    productList={productList} 
                />
            </div>
        )
    
}
}

export default ShopView;