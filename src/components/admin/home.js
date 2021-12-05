import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { BsSearch } from 'react-icons/bs';
import './admin.css';
export default function Home() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>
        <Navbar />
        <div className='container-fluid mainview-container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-9'>
              <h2>Home</h2>
              <div style={{ color: '#828282' }}>
                Welcom to Tiger Puff Admin!
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='form-control rounded-pill d-flex align-items-center'>
                <input
                  type='text'
                  placeholder='search here'
                  style={{ outline: 'none', padding: '5px' }}
                  name=''
                  id=''
                  className='w-100 border-0'
                />
                <BsSearch />
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-lg-9'>
              <div className='p-4 shadow'>
                <h5>Let's get started</h5>
                <p>
                  Out Set Up Guide will walk you through how to get set up on
                  Tigerpuff.
                </p>
                <div className='row d-flex align-item-center'>
                  <div className='col-10 py-1'>
                    <div class='progress'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        style={{ width: '25%' }}
                        aria-valuenow='25'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                  <div className='col-2'>25% set up</div>
                </div>
              </div>
              <br />
              <div className='p-4 shadow'>
                <div className='row d-flex align-items-center border-bottom py-2'>
                  <span className='col-2 round'></span>
                  <div className='col-8'>
                    <h5>Setting Up Loyalty Rules</h5>
                    <p>
                      First try to create a rule to calculate loyalty point.
                    </p>
                  </div>
                  <button className='col-2 btn btn-outline-dark'>
                    Loyalty rule
                  </button>
                </div>
                <div className='row d-flex align-items-center border-bottom py-2'>
                  <div className='col-2 round'></div>
                  <div className='col-8 d-flex flex-column justify-content-center'>
                    <h5>You can add regular customers to your system</h5>
                    <p>
                      You can always update the customer information in the
                      customer list screen.
                    </p>
                  </div>
                  <button className='col-2 btn btn-outline-dark'>
                    Customer list
                  </button>
                </div>
                <div className='row d-flex align-items-center border-bottom py-2'>
                  <div className='col-2 round'></div>
                  <div className='col-8 d-flex flex-column justify-content-center'>
                    <h5>Magical! Now you can create a QR code</h5>
                    <p>
                      Choose a loyalty rule and enter needed information to
                      create the QR code. You're ready to give point to your
                      customer
                    </p>
                  </div>
                  <button className='col-2 btn btn-outline-dark'>
                    QR code
                  </button>
                </div>
                <div className='row d-flex align-items-center border-bottom py-2'>
                  <div className='col-2 round'></div>
                  <div className='col-8 d-flex flex-column justify-content-center'>
                    <h5>Create Menu</h5>
                    <p>
                      You can always update the menu information in the menu
                      list screen.
                    </p>
                  </div>
                  <button className='col-2 btn btn-outline-dark'>
                    Menu list
                  </button>
                </div>
                <div className='row d-flex align-items-center border-bottom py-2'>
                  <div className='col-2 round'></div>
                  <div className='col-8 d-flex flex-column justify-content-center'>
                    <h5>Accept Order</h5>
                    <p>Choose a reward that your customer will love.</p>
                  </div>
                  <button className='col-2 btn btn-outline-dark'>Order</button>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='p-4 shadow'>
                <div className='row d-flex align-items-center py-2'>
                  <span className='col-2 round'></span>
                  <div className='col-8'>
                    <div>Add Dolar</div>
                  </div>
                </div>
                <div className='row d-flex align-items-center py-2'>
                  <span className='col-2 round'></span>
                  <div className='col-8'>
                    <div>Add Ipsum</div>
                  </div>
                </div>
                <div className='row d-flex align-items-center py-2'>
                  <span className='col-2 round'></span>
                  <div className='col-8'>
                    <div>Add Lorem</div>
                  </div>
                </div>
              </div>

              <br />

              <h4>Last 30 Days</h4>
              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <span className='my-2'>Total Customers</span>
                <span>0</span>
              </div>

              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <span className='my-2'>New Customers</span>
                <span>0</span>
              </div>

              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <span className='my-2'>Returning Customers</span>
                <span>0</span>
              </div>

              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <span className='my-2'>Average Spending per visit</span>
                <span>0</span>
              </div>

              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <span className='my-2'>Positive Feedback</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
