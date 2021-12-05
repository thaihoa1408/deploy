import Order from './order';
export default function Upcoming() {
    return (
        <div style={{ backgroundColor: '#eeeeee' }}>
            <h4 className="m-2">Upcoming</h4>
            {/* <Order />
            <Order /> */}

            <div className="text-center p-2">
                <i className="bi bi-box fs-1"></i>
                <h4>No Upcoming Orders</h4>
                <p>No Upcoming Orders No Upcoming Orders No Upcoming Orders No Upcoming Orders No Upcoming Orders</p>
            </div>
        </div>    
    );
};
/* <div class="modal fade" id="viewOrder" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <i className="bi bi-x fs-3" data-bs-dismiss="modal"></i>
                                <span className="fw-bold fs-5">Table #{order.tableNumber}</span>
                                <a className="fw-bold" onClick={decline} data-bs-dismiss="modal">Decline</a>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Order #{order.orderNumber}</h6>
                                <h6>Name: {order.name}</h6>
                            </div>
                            
                            <hr />
                            
                            <div className="row mb-2">
                                <div className="col-2">1x</div>
                                <div className="col-8">
                                    <span className="d-block fw-bold">Cheese Burger</span>

                                    <span className="d-block">+ Grande</span>
                                    <span className="d-block">+ Vanilla Syrup</span>
                                    <span className="d-block">+ Hazelnut Syrup</span>
                                    <span className="d-block">+ Caramel Syrup</span>
                                    <span className="d-block">+ Whip Cream</span>
                                </div>

                                <div className="col-2">$2.00</div>
                            </div>

                            <hr />

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
                            {
                                order.status == 'upcoming' ?
                                    <button className="btn btn-dark w-100" data-bs-dismiss="modal" onClick={accept}>Accept Order</button>:
                                    <button className="btn btn-dark w-100" data-bs-dismiss="modal" onClick={served}>Mark as Served</button>
                            }
                            
                        </div>
                    </div>
                </div>
            </div> */