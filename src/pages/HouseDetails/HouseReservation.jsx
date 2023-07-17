import React from 'react';
import Calender from './Calender';
import Button from '../../components/Button/Button';

const HouseReservation = () => {
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>$ 200</div>
                <div className='font-light text-neutral-600'>Night</div>
            </div>
            <hr />
            <div >
                <Calender></Calender>
                <hr />
                <div className='p-2'>
                    <Button label={"Reserve"}></Button>
                </div>
                <hr />

                <div className='p-4 flex items-center justify-between font-semibold text-lg'>
                    <div>Total</div>
                    <div>$600</div>
                </div>
            </div>
            
        </div>
    );
};

export default HouseReservation;