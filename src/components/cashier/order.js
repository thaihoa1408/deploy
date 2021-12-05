export default function Order() {
    return (
        <div className="m-2 bg-light">
            <div className="d-flex align-items-center justify-content-between border border-dark p-2">
                <span className="d-block fw-bold">John D.</span>
                <span className="d-block bg-secondary px-3 fw-bold">VIP</span>
            </div>

            <div className="border border-dark p-2">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <small className="d-block">Order#123123</small>
                    <small className="d-block">Table#12</small>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <small className="d-block">Order#123123</small>
                    <small className="d-block">Table#12</small>
                </div>

                <div className="d-flex align-items-center justify-content-between ">
                    <small className="d-block">Order#123123</small>
                    <small className="d-block">Table#12</small>
                </div>

                <div className="d-flex align-items-center justify-content-between ">
                    <small className="d-block">Order#123123</small>
                    <small className="d-block">Table#12</small>
                </div>
            </div>
            

            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button" style={{ backgroundColor: 'black', color: 'white', border: 'none', width: '100%', paddingTop: 10, paddingBottom: 10 }}>
                View Order
            </button>

        </div>
    );
};
