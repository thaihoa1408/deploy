import logo from '../../assets/images/TigerPuffLogo.png';
import { BsCloudUpload } from 'react-icons/bs';
import { MdArrowBackIos } from 'react-icons/md';
import './admin.css';

export default function Setup() {
  return (
    <div className='admin__setup'>
      <img src={logo} alt='' className='admin__setup__logo' />
      <div className='admin__setup__form'>
        <h2 className='admin__setup__form-header'>Setup Store</h2>
        <div className='admin__setup__form-body'>
          <div className='col'>
            <div>
              <div>Store Name</div>
              <input type='text' placeholder='Restaurant Name' />
            </div>
            <div>
              <div>Store Category</div>
              <input type='text' placeholder='Fast food' />
            </div>
            <div>
              <div>Phone Number</div>
              <input type='text' placeholder='' />
            </div>
            <div>
              <div>Address</div>
              <input type='text' placeholder='Address 1' />
            </div>
            <div className='city-postal'>
              <div>
                <div>City</div>
                <input type='text' placeholder='City' />
              </div>
              <div>
                <div>Postal Code</div>
                <input type='text' placeholder='Postal code' />
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='upload-image'>
              <div>Upload Logo</div>
              <label>
                <span>
                  <BsCloudUpload />
                </span>
                <input
                  style={{ display: 'none' }}
                  type='file'
                  id='file'
                  accept='.png,.jpeg,.jpg'
                />
              </label>
            </div>
            <div className='upload-image'>
              <div>Upload Cover Photo</div>
              <label>
                <span>
                  <BsCloudUpload />
                </span>
                <input
                  style={{ display: 'none' }}
                  type='file'
                  id='file'
                  accept='.png,.jpeg,.jpg'
                />
              </label>
            </div>
            <div>
              <div>Address</div>
              <input type='text' placeholder='Address 2' />
            </div>
          </div>
        </div>
        <div className='admin__setup__form-footer'>
          <div>
            <span>
              <MdArrowBackIos />
            </span>
            <span>Back</span>
          </div>
          <div>
            <button>Add Store</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
