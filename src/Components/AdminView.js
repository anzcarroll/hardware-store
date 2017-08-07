import React, { Component } from 'react';

import ProductList from './ProductList';
import ProductForm from './ProductForm';


const AdminView = (props) => {
    const productList = props.productList;
        return(
            <div>   
                <h1>Admin View</h1>
 
                <h2>Products</h2>
                <ProductList 
                    productList={productList} 
                    deleteFromProductList={props.deleteFromProductList}
                    toggleEditSaleItem={props._toggleEditSaleItem}
                    handleItemCurrentlyOnSaleChange={props._handleItemCurrentlyOnSaleChange}
                />
                
 
               <h2>Create a New Product</h2>
                <ProductForm 
                    addNewProductToProductList={props.addNewProductToProductList}
                />
            </div>
        );
    }

export default AdminView;