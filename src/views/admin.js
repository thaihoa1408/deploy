import {useContext, useEffect } from 'react';
import PowerContext from '../context';

export default function Admin() {
    const { display, setDisplay } = useContext(PowerContext);

    // This effect decides which component to display
    // useEffect(() => {
    //     if (!display) setDisplay('customer/home');
    // }, []);

    const Display = () => {
        // if (display == 'customer/home') return <Home />
        // else if (display == 'Customer/Login')           return <Orders />
        // else if (display == 'Customer/Register')        return <Orders />
        // else if (display == 'Customer/Verify')          return <Orders />
        // else if (display == 'Customer/Menu')            return <Orders />
        // else if (display == 'Customer/Confirmation')    return <Orders />
        // else if (display == 'Customer/Invoice')         return <Orders />
        // else if (display == 'Customer/Payment')         return <Orders />
        // else if (display == 'Customer/Receipt')         return <Orders />
    }

    return <Display />
};
