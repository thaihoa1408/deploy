import { useContext } from "react";
import PowerContext from "../context";

export default function PowerNav() {
    const { setDisplay } = useContext(PowerContext);
    
    return (
        <div className="powernav">
            <a onClick={() => setDisplay('Tables')}><i className="bi bi-box me-2"></i>Tables</a>
            <a onClick={() => setDisplay('Orders')}><i className="bi bi-box me-2"></i>Orders</a>
        </div>
    );
};

export function OrderNav() {

    const Order = () => {
        return(
            <div class="p-3 mb-3">
                <div className="row justify-content-evenly mb-4">
                    <div className="col-6">
                        <span className="d-block fw-bold">1. Salted Caramel Cold Brew</span>
                        
                        <span className="d-block ms-3">+ Grande</span>
                        <span className="d-block ms-3">+ Vanilla Syrup</span>
                        <span className="d-block ms-3">+ Hazelnut Syrup</span>
                        <span className="d-block ms-3">+ Caramel Syrup</span>
                        <span className="d-block ms-3">+ Whip Cream</span>
                    </div>

                    <div className="col-6">
                        <span className="d-block fw-bold">$100.00</span>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <i className="bi bi-dash fs-4 me-2"></i>
                    <span className="fs-5 me-2">2</span>
                    <i class="bi bi-plus fs-4 me-4"></i>

                    <span className="fw-bold me-3">Edit</span>
                    <span className="fw-bold">Delete</span>
                </div>
                
            </div>
        );
    }

    return (
        <div class="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
            <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <h4>Table #12</h4>
                <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">Decline</h6>
            </div>

            <div class="offcanvas-body px-0">

                <div className="row align-items-center justify-content-evenly">
                    <div className="col-6">
                        <span className="d-block fw-bold">Order # 123456</span>
                    </div>

                    <div className="col-6">
                        <span className="d-block fw-bold">Name: ------</span>
                    </div>
                </div>

                <br />

                {/* ORDERS */}
                <Order />
                <Order />
                <Order />

                {/* TOTAL */}
                <div className="d-flex justify-content-between p-4 mb-4">
                    <div>
                        <span className="d-block">Subtotal</span>
                        <span className="d-block">Tax</span>
                        <span className="d-block">Tip</span>
                        <span className="d-block fw-bold">Total</span>
                    </div>

                    <div>
                    <span className="d-block">$57.25</span>
                        <span className="d-block">$5.75</span>
                        <span className="d-block">$50.75</span>
                        <span className="d-block fw-bold">$111.75</span>
                    </div>
                </div>
                

                <button style={{ backgroundColor: 'black', color: 'white', border: 'none', width: '100%', paddingTop: 10, paddingBottom: 10 }}>
                    Accept Order
                </button>
            </div>
        </div>
    )
}