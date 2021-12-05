import LeftContainer from '../../components/admin/LeftContainer';
import './admin.css';

export default function ChangePassword() {
  return (
    <div className='admin-container'>
      <div className='container-fluid h-100'>
        <div className='row h-100'>
          <LeftContainer></LeftContainer>

          <div className='col-md-8 '>
            <div class='skewed'></div>
            <div class='text-center d-flex justify-content-center align-items-center h-100'>
              <form className='form-admin'>
                <h2 className='fw-bold'>Change Password</h2>

                <div className='mb-2 left'>
                  <label className='form-label fw-bold text-secondary'>
                    New Password
                  </label>
                  <input
                    type='password'
                    placeholder='•••••••'
                    className='form-control admin-input'
                  />
                </div>
                <div className='mb-4 left'>
                  <label className='form-label fw-bold text-secondary'>
                    Re-enter Your New Password
                  </label>
                  <input
                    type='password'
                    placeholder='•••••••'
                    className='form-control admin-input'
                  />
                </div>

                <div className='mb-2'>
                  <button className='btn btn-secondary w-100 admin-button'>
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
