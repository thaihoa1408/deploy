import React from 'react';

function MenuBrand(props) {
  const { logo, background, text, selected, drop } = props;
  return (
    <div
      style={{ height: 68, width: '100%' }}
      className='container-fluid position-relative mt-0'
    >
      <div className='row d-flex align-items-center gx-2 py-2 h-100'>
        <div className='col-4'>
          <div style={{ width: '100%', height: '100%' }}>
            <img
              style={{ width: '100%', height: '100%', maxWidth: 64 }}
              src={logo}
              alt=''
            />
          </div>
        </div>
        <div className='col-5'>
          <div style={{ color: '#033F7A', fontSize: 12 }}>{text}</div>
        </div>
        <div className='col-3 d-flex justify-content-end'>
          {drop && (
            <i
              className='bi bi-caret-down-fill'
              style={{ color: '#808D9A' }}
            ></i>
          )}
          {selected && (
            <i
              className='bi bi-check-circle-fill'
              style={{ color: '#033F7A' }}
            ></i>
          )}
        </div>
      </div>
      <img
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
          top: 0,
          right: 0,
          opacity: 0.6,
        }}
        src={background}
        alt=''
      />
    </div>
  );
}

export default MenuBrand;
