import React, { memo, use } from 'react';
import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = memo(() => {
    const [product, setProduct] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProduct([...product, newProduct]);
    }

    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
});

export default ProductManagement;