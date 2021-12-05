import { useEffect, useState } from 'react';

import { getFirestore, collection, query, where, updateDoc, doc, getDocs } from 'firebase/firestore';
import app from '../firebase';

export default function Orders() {
    const [status, setStatus]   = useState('upcoming');
    const [orders, setOrders]   = useState([]);
    const [order, setOrder]     = useState({});

    useEffect(async () => {
        await getDocs(query(collection(getFirestore(app), `orders`), where('status', '==', status)))
            .then(results => {
                let x = [];
                results.forEach(result => x.push([result.id, result.data()]));
                setOrders(x);
            });
    }, []);

    const filterOrders = async filter => {
        await getDocs(query(collection(getFirestore(app), `orders`), where('status', '==', filter)))
            .then(results => {
                let x = [];
                results.forEach(result => x.push([result.id, result.data()]));
                setOrders(x);
            });
        setStatus(filter);
    }

    const acceptOrder = async () => {
        await updateDoc(doc(getFirestore(app), `orders/${order.orderId}`), { status: 'accepted' });

        // await getDocs(query(collection(getFirestore(app), `orders`)), where('status', '==', status))
        //     .then(results => {
        //         let x = [];
        //         results.forEach(result => x.push([result.id, result.data()]));
        //         setOrders(x);
        //     });
    }

    return (
        <div className="container-fluid bg-light">
            <div className="row g-0 min-vh-100">
                <div className="col-md-3 col-lg-2 bg-secondary">
                    <div>
                        <i class="bi bi-person-circle text-light display-1 d-block text-center"></i>
                        <h4>Restaurant Name</h4>

                        <hr />

                        <a href="" className="d-block text-light fs-4">Tables</a>
                        <a href="" className="d-block text-light fs-4">Orders</a>
                    </div>
                </div>

                <div className="col-md-9 col-lg-10">
                    <div>
                        <div className="d-flex bg-dark align-items-center justify-content-end">
                            <div className="me-1">
                                <small className="d-block text-muted">Good Morning</small>
                                <span className="d-block text-light fw-bold">Tiger Puff</span>
                            </div>
                            
                            <i class="bi bi-person-circle text-light fs-1"></i>
                        </div>

                        <h1>Orders</h1>
                        <button>Upcoming</button>
                        <button>Upcoming</button>
                        <button>Upcoming</button>
                        {/* <a href="" className=" rounded-pill mx-1 text-warning fw-bold"><i className="bi bi-star-fill me-2"></i>VIP Orders</a> */}
                        
                        <br /><br />

                        {
                            orders.length > 0 ? (
<div className="row g-2">
                            {
                                orders.map(order => (
                                            <div className="col-12 col-md-4 col-lg-3">
                                                <div className="h-100 border p-2">
                                                    <h6>{order[1].vip ? <span className="bg-warning px-2 rounded-3 me-1">VIP</span>:<></>}{order[1].customer}</h6>
                                                    <hr />
                                                    <div className="d-flex justify-content-between">
                                                        <small>Order #{order[1].orderNumber}</small>
                                                        <small>Table #{order[1].tableNumber}</small>
                                                    </div>
                                                    
                                                    <br />
                                                    {/* Orders */}
                                                    <div className="row">
                                                        <div className="col-2">x1</div>
                                                        <div className="col-6">Cheese Burger</div>
                                                        <div className="col-2">$1.50</div>
                                                        <div className="col-2"><i className="bi bi-check text-success"></i></div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-2">x6</div>
                                                        <div className="col-6">Brewed Coffee (Large)</div>
                                                        <div className="col-2">$1.50</div>
                                                        <div className="col-2"><i className="bi bi-check text-success"></i></div>
                                                    </div>

                                                    <br />

                                                    <button
                                                        className="btn btn-sm btn-dark w-100"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#viewOrder"
                                                        onClick={() => setOrder({orderId: order[0], orderNumber: order[1].orderNumber, tableNumber: order[1].tableNumber, customer: order[1].customer})}>View Order</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ):(
                                <div>
                                    <h4>No Upcoming Orders At A Moment</h4>
                                </div>
                            )
                        }
                        
                    </div>


                    {/* MODAL */}
                    <div class="modal fade" id="viewOrder" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <i className="bi bi-x fs-3"></i>
                                        <span className="fw-bold fs-5">Table #12</span>
                                        <a href="" className="fw-bold">Decline</a>
                                    </div>
                                    {/* Orders */}
                                    <div className="d-flex justify-content-between">
                                        <h6>Order #{order.orderNumber}</h6>
                                        <h6>Name: {order.customer}</h6>
                                    </div>
                                    
                                    <hr />
                                    
                                    <div className="row mb-2">
                                        <div className="col-2">2x</div>
                                        <div className="col-8">
                                            <span className="d-block fw-bold">Salted Caramel Cold Brew</span>

                                            {/* ADD ONS */}
                                            <span className="d-block">+ Grande</span>
                                            <span className="d-block">+ Vanilla Syrup</span>
                                            <span className="d-block">+ Hazelnut Syrup</span>
                                            <span className="d-block">+ Caramel Syrup</span>
                                            <span className="d-block">+ Whip Cream</span>
                                        </div>
                                        <div className="col-2">$200.00</div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-2">2x</div>
                                        <div className="col-8">
                                            <span className="d-block fw-bold">Salted Caramel Cold Brew</span>

                                            {/* ADD ONS */}
                                            <span className="d-block">+ Grande</span>
                                            <span className="d-block">+ Vanilla Syrup</span>
                                            <span className="d-block">+ Hazelnut Syrup</span>
                                            <span className="d-block">+ Caramel Syrup</span>
                                            <span className="d-block">+ Whip Cream</span>
                                        </div>
                                        <div className="col-2">$200.00</div>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <span>$57.25</span>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <span>Tax</span>
                                        <span>$5.75</span>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <span>Tip</span>
                                        <span>$50.75</span>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <span className="fw-bold">Total</span>
                                        <span className="fw-bold">$111.75</span>
                                    </div>

                                    <br />
                                    <button className="btn btn-dark w-100" data-bs-dismiss="modal" onClick={acceptOrder}>Accept Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
