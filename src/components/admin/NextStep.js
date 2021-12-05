import LeftContainer from '../../components/admin/LeftContainer';
import './admin.css';
import Logo from '../../assets/images/TigerPuffLogo.png';

const NextStep = () => {
  return (
    <div className='admin-container'>
      <div className='container'>
        <div className='row'>
          <LeftContainer></LeftContainer>

          <div className='col-md-8 '>
            <div class='skewed'></div>
            <div class='form-container text-center d-flex justify-content-center'>
              <div className='next-container'>
                <img src={Logo} alt='' className='admin__setup__logo' />
                <h4>We’re almost there!</h4>
                <p className='mb-5'>
                  Next, we’re going to very your identity so you can accept
                  payments. Please use your legal name and home address, even if
                  you’re signing up as a business.We use this information for
                  identity verification only, and we always keep it safe.
                </p>
                <button className='btn btn-secondary w-100 admin-button'>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
