import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import HouseCard from './HouseCard';

const Houses = () => {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(()=>{
        setLoading(true)
        fetch("./houses_data.json")
        .then(res=> res.json()
        .then(data => setHouses(data)))
        setLoading(false)
    },[])
    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-8 mt-8'>
            {houses.map(house=><HouseCard></HouseCard>)}
            </div>
        </Container>
    );
};

export default Houses;