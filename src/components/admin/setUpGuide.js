import Logo from '../../assets/images/TigerPuffLogo.png';
import './admin.css';
import { BsCheck2Circle } from 'react-icons/bs';

const SetUpGuide = () => {
  return (
    <div className='admin__setup text-center'>
      <div className='container'>
        <img src={Logo} alt='' className='admin__setup__logo mb-4' />

        <div className='row text-center align-items-end'>
          <div className='col-lg-4 mb-5 mb-lg-0'>
            <div className='bg-white p-5 rounded-lg shadow guide-card-container'>
              <h1 className='font-weight-bold mb-4'>Order</h1>

              <div className='custom-separator my-4 mx-auto bg-primary'></div>

              <ul className='list-unstyled my-5 text-small text-right guide-card-list'>
                <li class='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Lorem ipsum dolor sit
                  amet
                </li>
                <li className='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Sed ut perspiciatis
                </li>
              </ul>
              <button className='btn btn-secondary admin-button guide-button'>
                Subscribe
              </button>
            </div>
          </div>

          <div className='col-lg-4 mb-5 mb-lg-0'>
            <div className='bg-white p-5 rounded-lg shadow guide-card-container'>
              <h1 className='font-weight-bold mb-4'>Loyalty Rewards </h1>

              <div className='custom-separator my-4 mx-auto bg-primary'></div>

              <ul className='list-unstyled my-5 text-small text-right guide-card-list'>
                <li class='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Lorem ipsum dolor sit
                  amet
                </li>
                <li className='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Sed ut perspiciatis
                </li>
                <li class='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Lorem ipsum dolor sit
                  amet
                </li>
              </ul>
              <button className='btn btn-secondary admin-button guide-button'>
                Subscribe
              </button>
            </div>
          </div>

          <div className='col-lg-4 mb-5 mb-lg-0'>
            <div className='bg-white p-5 rounded-lg shadow guide-card-container'>
              <h1 className='font-weight-bold mb-4'>
                Order and Loyalty Rewards
              </h1>

              <div className='custom-separator my-4 mx-auto bg-primary'></div>

              <ul className='list-unstyled my-5 text-small text-right guide-card-list'>
                <li class='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Lorem ipsum dolor sit
                  amet
                </li>
                <li className='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Sed ut perspiciatis
                </li>
                <li class='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Lorem ipsum dolor sit
                  amet
                </li>
                <li class='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Lorem ipsum dolor sit
                  amet
                </li>
                <li class='mb-3'>
                  <BsCheck2Circle color={'#FE7B50'} /> Lorem ipsum dolor sit
                  amet
                </li>
              </ul>
              <button className='btn btn-secondary admin-button guide-button'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUpGuide;
