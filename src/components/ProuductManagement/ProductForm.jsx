import React, { memo, use } from 'react';
import { useState } from 'react';

const ProductForm = memo(({handleAddProduct}) => {
    const [error, setError] = useState('');

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        console.log('Product Submitted');

        const newProduct = {
            name,
            price,
            quantity    
        }

        if(!error){
            handleAddProduct(newProduct);
        }
        
        if( name === '' || price === '' || quantity === ''){
            setError('All fields are required');
        } else if (price <=0 || quantity <=0){
            setError('Price and quantity must be greater than zero');
        } else{
            setError('');
        }
    }

    return (
        <div>
            
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder="Product Name" />
                <input type="number" name="price" placeholder="Product Price" />
                <input type="text" name="quantity" placeholder='quantity'/>
                <input type="submit" value="Add Product" />
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
});

export default ProductForm;