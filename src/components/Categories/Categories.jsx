import React from 'react';
import Container from '../Container';
import { categories } from './categories_data';
import CategoryItem from './CategoryItem';

const Categories = () => {
    return (
        <Container>
            <div className='flex justify-between items-center overflow-auto'>
                {
                    categories.map(category => <CategoryItem key={category.label} category={category}></CategoryItem> )
                }
            </div>
        </Container>
    );
};

export default Categories;