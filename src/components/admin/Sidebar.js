import React, { useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { BsFillMenuButtonWideFill, BsChevronDown } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineRight } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
function Sidebar(props) {
  const sidebarData = [
    {
      title: 'Home',
      icon: <FiHome />,
      path: '/admin/home',
      subNav: [],
    },
    {
      title: 'Menu',
      path: '/admin/menu',
      icon: <BsFillMenuButtonWideFill />,
      iconClosed: <AiOutlineRight />,
      iconOpened: <BsChevronDown />,
      subNav: [
        {
          title: 'Create Category',
          icon: '',
          path: '/admin/menu/create-category',
        },
        {
          title: 'Add Item',
          icon: '',
          path: '/admin/menu/add-item',
        },
        {
          title: 'Add Variants',
          icon: '',
          path: '/admin/menu/add-variants',
        },
        {
          title: 'Add Modifier',
          icon: '',
          path: '/admin/menu/add-modifier',
        },
        {
          title: 'Add Combo Meal',
          icon: '',
          path: '/admin/menu/combo-meal',
        },
      ],
    },
    {
      title: 'Orders',
      path: '/admin/orders',
      icon: <HiOutlineClipboardList />,
      iconClosed: <AiOutlineRight />,
      iconOpened: <BsChevronDown />,
      subNav: [
        {
          title: 'Manage Table QR',
          icon: '',
          path: '/admin/orders/manage-table-qr',
        },
        {
          title: 'Order Tipping',
          icon: '',
          path: '/admin/orders/order-tipping',
        },
      ],
    },
    {
      title: 'Loyalty Rewards',
      icon: <FiHome />,
      path: '/admin/loyalty-rewards',
      subNav: [],
    },
  ];
  const [showSubnav, setShowSubnav] = useState(null);
  const handleSetShowSubnav = (e, index) => {
    e.preventDefault();
    if (index === showSubnav) {
      setShowSubnav(null);
    } else {
      setShowSubnav(index);
    }
  };
  return (
    <nav className='sidebar'>
      <div className='sidebar-header'>
        <h3 style={{ color: 'white' }}>LOGO</h3>
        <RiMenu3Line className='toggle-icon' />
      </div>
      <div className='sidebar-list'>
        {sidebarData.map((item, index) => {
          return (
            <div className='sidebar-item'>
              <Link className='sidebar-link' to={item.path ? item.path : '#'}>
                {item.icon}
                <span className='sidebar-title'>{item.title}</span>
                <span
                  className='sidebar-iconOpenClose'
                  onClick={(e) => handleSetShowSubnav(e, index)}
                >
                  {index === showSubnav ? item.iconOpened : item.iconClosed}
                </span>
              </Link>
              <div
                className={index === showSubnav ? 'subnav active' : 'subnav'}
              >
                {item.subNav.map((subnav) => {
                  return (
                    <NavLink className='sidebar-dropdown-link' to={subnav.path}>
                      <span>{subnav.title}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
