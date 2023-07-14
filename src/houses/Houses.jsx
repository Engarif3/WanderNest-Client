import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import HouseCard from './HouseCard';
import Loader from '../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Houses = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get("category");
    console.log(category)
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(()=>{
        setLoading(true)
        fetch("./houses_data.json")
        .then(res=> res.json())
        .then(data =>{
            if (category){
                const filteredHouses = data.filter(house =>house.category === category )
                setHouses(filteredHouses)
            } else
            {

                setHouses(data)
            }
            setLoading(false)
        })
    },[category])

    if (loading) {
        return <Loader></Loader>
      }
    
    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-8 mt-8'>
            {houses.map((house, i)=><HouseCard key={i} house={house}></HouseCard>)}
            </div>
        </Container>
    );
};

export default Houses;