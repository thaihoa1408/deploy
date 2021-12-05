import Order from './order';

export default function Completed() {

    return (
        <div className="">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Table#</th>
                        <th scope="col">Order#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Time in</th>
                        <th scope="col">Time out</th>
                        <th scope="col">Points</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#12</td>
                        <td>#12345</td>
                        <td>John Doe</td>
                        <td>$157.00</td>
                        <td>10:15am</td>
                        <td>12:15pm</td>
                        <td>200</td>
                        <td>
                            <a className="fw-bold text-dark">View Check</a>
                        </td>
                    </tr>
                </tbody>
            </table>

                

            {/* <div class="modal fade" id="viewOrder" tabindex="-1">
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
            </div> */}
        </div>
    );
};
