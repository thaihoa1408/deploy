import { useState, useContext } from 'react';

import PowerNav from '../components/nav';
import PowerContext from '../context';
import Orders       from '../components/cashier/orders';

const Display = () => {
    const { display } = useContext(PowerContext);
    if (display == 'Orders') return <Orders />
}

export default function Cashier() {
    return (
        <div className="container-fluid">
            <PowerNav />
            <Display />
        </div>
    );
};
