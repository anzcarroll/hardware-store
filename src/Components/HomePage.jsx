import React, { Component } from 'react';

import AdminView from './AdminView';
import ShopView from './ShopView';
import CartView from './CartView';


class HomePage extends Component {
   constructor() {
     super();
  
     this.state = {
       itemCurrentlyOnSale: 'A Hammer!',
        editSaleItem: true,
        showAdminView: true,
 	    productList: [
 		{
 		  productName: 'Hammer',
 		  description: 'Itsa hammer',
 		  price: 12.3,
 		},
 		{
 		  productName: 'Nail',
 		  description: 'Itsa nail',
 		  price: 0.12,
 		}
 	]       
 };
}
_toggleView = () => {       
     const showAdminView = !this.state.showAdminView; 
     this.setState({showAdminView});
    };
    
   //because HomePage is a JS Class, we can give attritubute as toggleEditSaleItem = () => { 
_toggleEditSaleItem = () => {       
     const editSaleItem = !this.state.editSaleItem; 
     //respect all rules react has, and ensure that when we change state we get expected results
     //its making a new {} with new state; "copy current value, flip it, save to state"
     this.setState({editSaleItem}); 
   };

_handleItemCurrentlyOnSaleChange = (event) => {
 	    const itemCurrentlyOnSale = event.target.value;
 	    this.setState({itemCurrentlyOnSale});
   	};

_addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
 };

  _deleteProductFromList = (event) => {
        const productList = [...this.state.productList];
        productList.splice(event, 1);
        this.setState({productList});
 };

_addProductToCart = (i) => {
        const product = {...this.state.productList[i]};
        const cartList = [...this.state.cartList];

        cartList.push(product);

        this.setState({cartList});
};

_removeProductFromCart = (index) => {
    const cartList = [...this.state.cartList];

    cartList.splice(index, 1);

    this.setState({cartList});
  };


  render() {

    const adminView = <AdminView
        productList={this.state.productList}
        addNewProductToProductList={this._addNewProductToProductList}
        deleteProductFromListByIndex={this._deleteProductFromList}/>;

    const shopView = <ShopView
        productList={this.state.productList}
        addProductToCart={this._addProductToCart}/>;

    return (
        <div>
          <div>
            <div id="home-page-nav">
              <h1>Hardware Store</h1>
              <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>

              <div>
                {
                  this.state.editSaleItem ? <div>
                        <input
                            onChange={this._handleItemCurrentlyOnSaleChange}
                            value={this.state.itemCurrentlyOnSale}
                            type="text"
                        />
                      </div>
                      : null
                }
              </div>
              <div>
                <button onClick={this._toggleEditSaleItem}>
                  {this.state.editSaleItem
                      ? 'Hide'
                      : 'Edit Sale Item'}
                </button>
              </div>
              <div>
                <button onClick={this._toggleView}>
                  {this.state.showAdminView
                      ? 'Show Shop View'
                      : 'Show Admin View'}
                </button>
              </div>
            </div>
          </div>

          <div id="view-container">
            {this.state.showAdminView ? adminView : shopView}

            <CartView
                productList={this.state.cartList}
                removeProductFromCart={this._removeProductFromCart}/>
          </div>
        </div>
    );
  }
}

export default HomePage;



/* <div>
                        <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
                        <span><button onClick={this._toggleEditSaleItem}>
                            { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }</button></span>
                            { this.state.editSaleItem ? <div>
                                <input onChange={this._handleItemCurrentlyOnSaleChange} 
                                value={this.state.itemCurrentlyOnSale} type="text"/></div> 
                            : null }      
                    </div>  */
                 /* <AdminView 
                    productList={this.state.productList} 
                    addNewProductToProductList={this._addNewProductToProductList}
                    deleteProductFromProductList={this._deleteProductFromProductList}/>
                <ShopView 
                    productList={this.state.productList} />  */

