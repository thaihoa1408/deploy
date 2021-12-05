import { useContext, useEffect } from 'react';
import PowerContext from '../context';

// Components
import Home     from '../components/customer_archived/home';
import Menu     from '../components/customer_archived/menu';
import Invoice  from '../components/customer_archived/invoice';

export default function Customer() {
    const { display, setDisplay } = useContext(PowerContext);

    const Display = () => {
        useEffect(()=> {
            console.log(display)
        }, [display])
        if (display == 'customer/home')                 return <Home />
        else if (display == 'customer/menu')            return <Menu />
        // else if (display == 'Customer/Register')        return <Orders />
        // else if (display == 'Customer/Verify')          return <Orders />
        // else if (display == 'Customer/Menu')            return <Orders />
        // else if (display == 'Customer/Confirmation')    return <Orders />
        else if (display == 'customer/invoice')         return <Invoice />
        // else if (display == 'Customer/Payment')         return <Orders />
        // else if (display == 'Customer/Receipt')         return <Orders />
        else                                            return <Home />
        
        
    }

    return <Display />
};
