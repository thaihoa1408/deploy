import LeftContainer from '../../components/admin/LeftContainer';
import './admin.css';
import CheckEmailImage from '../../assets/images/Rectangle3.png';

const RecoverPassword = () => {
  return (
    <div className='admin-container'>
      <div className='container-fluid h-100'>
        <div className='row h-100'>
          <LeftContainer></LeftContainer>

          <div className='col-md-8 '>
            <div class='skewed'></div>
            <div class='text-center d-flex justify-content-center align-items-center h-100'>
              <div>
                <div className='check-email-container'>
                  <img src={CheckEmailImage} className='check-email-image' />
                  <div>
                    <h4 className='fw-bold text-secondary'>Check Email</h4>
                    <p>
                      <a href='/admin/signin' className='text-tertiary'>
                        Back to Log In
                      </a>
                    </p>
                    <span>
                      Didn’t get the email?{' '}
                      <a href='#' className='text-tertiary'>
                        Click here to resend it.
                      </a>
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center mt-3'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
