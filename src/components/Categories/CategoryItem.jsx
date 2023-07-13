import React from 'react';

const CategoryItem = ({category}) => {
    const {label, icon:Icon} = category;
    return (
        <div className='w-28 flex flex-col justify-center items-center border-b-4  hover:bg-red-600 hover:text-white rounded-md border-red-600 text-neutral-500 py-2 mx-4 mb-2'>
            <Icon size={26}/>
            <div className='mx-2'>
                {label}
            </div>
        </div>
    );
};

export default CategoryItem;