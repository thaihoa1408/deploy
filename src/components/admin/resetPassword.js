import LeftContainer from '../../components/admin/LeftContainer';
import './admin.css';
export default function ResetPassword() {
  return (
    <div className='admin-container'>
      <div className='container-fluid h-100'>
        <div className='row h-100'>
          <LeftContainer></LeftContainer>

          <div className='col-md-8 '>
            <div class='skewed'></div>
            <div class='text-center d-flex justify-content-center align-items-center h-100'>
              <form>
                <h2 className='fw-bold'>Recover Password</h2>
                <div className='mb-4 left'>
                  <label className='form-label fw-bold text-secondary'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control admin-input'
                    placeholder='Enter email...'
                  />
                </div>

                <div className='mb-2'>
                  <button className='btn btn-secondary w-100 admin-button'>
                    Email Me a Recovery Link
                  </button>
                  <div className='d-flex align-items-center justify-content-center'>
                    <a href='' className='mx-4 fs-12 text-tertiary'>
                      Privacy Policy
                    </a>
                    <span
                      style={{
                        height: '5px',
                        width: '5px',
                        background: '#fe7b50',
                        borderRadius: '50%',
                      }}
                    ></span>
                    <a href='' className='mx-4 text-tertiary'>
                      Terms & Conditions
                    </a>
                    <span
                      style={{
                        height: '5px',
                        width: '5px',
                        background: '#fe7b50',
                        borderRadius: '50%',
                      }}
                    ></span>
                    <a href='' className='mx-4 text-tertiary'>
                      Help
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
