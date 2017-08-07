import React, { Component } from 'react';

class Product extends Component {

     _deleteProduct = () => {
 	    this.props.deleteProductFromList(this.props.id);
    };

    render () {
     const productName = this.props.productName;
     const description = this.props.description;
     const price = this.props.price;

    
 
     return (
         <div>
           <h3>{productName}</h3>
           <div>{description}</div>
           <div>{price}</div>
           <button 
           onClick={this._deleteProduct}>DELETE</button>
         </div>
     );
 
}
}

 
 export default Product;