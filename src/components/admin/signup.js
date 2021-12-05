import LeftContainer from '../../components/admin/LeftContainer';
import './admin.css';

export default function SignUp() {
  return (
    <div className='admin-container'>
      <div className='container-fluid h-100'>
        <div className='row h-100'>
          <LeftContainer></LeftContainer>

          <div className='col-md-8'>
            <div class='skewed'></div>
            <div class='text-center d-flex justify-content-center align-items-center h-100'>
              <form className='form-admin'>
                <h2 className='fw-bold'>Sign up your account</h2>

                <div className='mb-4 left'>
                  <label className='form-label fw-bold text-secondary'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control admin-input'
                    placeholder='Enter Your Name'
                  />
                </div>

                <div className='mb-4 left'>
                  <label className='form-label fw-bold text-secondary'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control admin-input'
                    placeholder='hello@example.com'
                  />
                </div>

                <div className='mb-4 left'>
                  <label className='form-label fw-bold text-secondary'>
                    Password
                  </label>
                  <input
                    placeholder='•••••••'
                    type='password'
                    className='form-control admin-input'
                  />
                </div>

                <div className='mb-2 left'>
                  <button className='btn btn-secondary w-100 fw-bold'>
                    Sign up
                  </button>
                  <div className='text-secodary'>
                    Already have an Account?{' '}
                    <a href='/admin/signin' className='text-tertiary'>
                      Sign In
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
