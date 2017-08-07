 import React, {Component} from 'react';
 
 import Product from './Product';
 
 class ProductList extends Component {
   render() {
     const productList = this.props.productList;

     const productComponents = productList.map((product, index) => {
       return <Product
            productName={product.productName}
            description={product.description}
            price={product.price}
            key={index}
            id={index}
            deleteFromProductList={this.props.deleteFromProductList}
            addProductToCart={this.props.addProductToCart}
            />
     });
 
     return (
         <div>
           { productComponents }
         </div>
     );
 
   }
 }
 
 export default ProductList;
