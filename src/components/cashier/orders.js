import { useEffect, useState } from 'react';

import Order        from './order';
import Header       from './header';
import Upcoming     from './upcoming';
import Accepted     from './accepted';
import Served       from './served';
import Completed    from './completed';
// import Accepted from './accepted';

import { OrderNav } from '../nav';



export default function Orders() {
    const [status, setStatus] = useState('accepted');

    const Status = () => {
        if      (status == 'accepted')  return <Accepted />
        else if (status == 'served')    return <Served />
        else if (status == 'completed') return <Completed />
    }

    return (
        <div className="main">
            {/* <Header /> */}
            
            <div className="row min-vh-100">
                <div className="col-md-8 col-lg-9">
                    <br />
                    <div className="ms-4">
                        <a role="button" className={`me-4 text-dark ${status == 'accepted' && 'fw-bold'}`}  onClick={() => setStatus('accepted')}>ACCEPTED (2)</a>
                        <a role="button" className={`me-4 text-dark ${status == 'served' && 'fw-bold'}`}    onClick={() => setStatus('served')}>SERVED</a>
                        <a role="button" className={`me-4 text-dark ${status == 'completed' && 'fw-bold'}`} onClick={() => setStatus('completed')}>COMPLETED</a>
                    </div>

                    <Status />
                </div>

                <div className="col-md-4 col-lg-3" style={{ backgroundColor: '#eeeeee' }}>
                    <Upcoming />
                </div>
                
            </div>

            {/* This is a popup nav for Accepting orders */}
            <OrderNav />
            
{/* 
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="bg-light p-3">
                            <span className="d-block fs-2 fw-bold">You have new order!</span>
                            <span className="d-block fs-4">Table #12 - 3 items</span>
                            
                    </div>
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button" style={{ backgroundColor: 'black', color: 'white', border: 'none', width: '100%', paddingTop: 10, paddingBottom: 10 }}>
                        View Order
                    </button>
                </div>
            </div> */}
        </div>
    );
};
