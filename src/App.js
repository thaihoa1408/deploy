// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './App.css';
// import 'antd/dist/antd.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PowerContext from './context';
import { useState } from 'react';

// VIEWS
import SignupAd from './components/admin/signup';
import SigninAd from './components/admin/signin';
import ResetPasswordAd from './components/admin/resetPassword';
import ResetPasswordSentAd from './components/admin/recoverPassword';
import ChangePasswordAd from './components/admin/changePassword';
import SetupAd from './components/admin/setup';
import SetupGuideAd from './components/admin/setUpGuide';
import HomeAd from './components/admin/home';
import MenuAd from './components/admin/menu';
import ProductDetailAd from './components/admin/ProductDetail';
import CreateCategoryAd from './components/admin/CreateCategory';
import AddItemAd from './components/admin/AddItem';
import SetTimeSlotAd from './components/admin/SetTimeSlot';
import AddVariantAd from './components/admin/AddVariant';
import AddModifierAd from './components/admin/AddModifier';
import ComboMealListAd from './components/admin/ComboMealList';
import AddComboMealAd from './components/admin/AddComboMeal';
import SetTimeSlotComboMealAd from './components/admin/SetTimeSlotComboMeal';
import OrdersAd from './components/admin/orders';

// Customer Views
import HomeCust from './components/customer/pages/Home';
// Customer Sign in
import SignInCust from './components/customer/pages/SignIn';
// Customer Sign up
import SignUpCust from './components/customer/pages/SignUp';
// Customer Menu
import MenuCust from './components/customer/pages/Menu';
// Customer Item Detail
import ItemDetailCust from './components/customer/pages/ItemDetail';
// Customer Checkout Summary
import CheckoutSummmaryCust from './components/customer/pages/CheckoutSummary';
// Customer Pay Check
import PayCheckCust from './components/customer/pages/PayCheck';
// Customer Pay Check Invoice
import PayCheckInvoiceCust from './components/customer/pages/PayCheckInvoice';
import NotFoundCust from './components/customer/pages/404';
import BrandsCust from './components/customer/pages/Brands';
import ConfirmOrderCust from './components/customer/pages/ConfirmOrder';
import OpenCheckCust from './components/customer/pages/OpenCheck';
// import Customer from './views/customer';
// why are we not using the views to manage routing?
// import Admin    from './views/admin';
// import Customer from './views/customer';

export default function App() {
  const [user, setUser] = useState();
  const [display, setDisplay] = useState();

  // THIS STORES ALL GLOBAL STATES
  const powers = { display, setDisplay };

  return (
    <Router basename='/deploy'>
      <Switch>
        <PowerContext.Provider value={powers}>
          {/* <Route path="/cashier" 	component={Cashier} />
                    <Route path="/admin" 	component={Admin} /> */}
          {/*<Route path="/login"       component={Login} />
                    <Route path="/logout"         component={Logout} /> */}
          {/*admin Route*/}
          <Route path='/admin/signup' exact component={SignupAd} />
          <Route path='/admin/signin' exact component={SigninAd} />
          <Route
            path='/admin/reset-password'
            exact
            component={ResetPasswordAd}
          />
          <Route
            path='/admin/reset-password-sent'
            exact
            component={ResetPasswordSentAd}
          />
          <Route
            path='/admin/change-password'
            exact
            component={ChangePasswordAd}
          />
          <Route path='/admin/setup' exact component={SetupAd} />
          <Route path='/admin/setup-guide' exact component={SetupGuideAd} />
          <Route path='/admin/home' exact component={HomeAd} />
          <Route path='/admin/menu' exact component={MenuAd} />
          <Route
            path='/admin/menu/product-detail'
            exact
            component={ProductDetailAd}
          />
          <Route
            path='/admin/menu/create-category'
            exact
            component={CreateCategoryAd}
          />
          <Route path='/admin/menu/add-item' exact component={AddItemAd} />
          <Route
            path='/admin/menu/add-item/set-time-slot'
            exact
            component={SetTimeSlotAd}
          />
          <Route
            path='/admin/menu/add-variants'
            exact
            component={AddVariantAd}
          />
          <Route
            path='/admin/menu/add-modifier'
            exact
            component={AddModifierAd}
          />
          <Route
            path='/admin/menu/combo-meal'
            exact
            component={ComboMealListAd}
          />
          <Route
            path='/admin/menu/combo-meal/add-combo-meal'
            exact
            component={AddComboMealAd}
          />
          <Route
            path='/admin/menu/combo-meal/set-time-slot'
            exact
            component={SetTimeSlotComboMealAd}
          />
          <Route path='/admin/orders' exact component={OrdersAd} />

          {/* CUSTOMER */}
          {/* to view previous customer version */}
          {/* <Route path="/customer-archived" component={Customer}/> */}

          {/*
           * Dine in index
           */}
          <Route
            exact
            path='/customer/table-ordering/:table_id'
            component={HomeCust}
          />
          {/* Sign in */}
          <Route exact path='/customer/signin' component={SignInCust} />
          {/* Sign up */}
          <Route exact path='/customer/signup' component={SignUpCust} />
          {/* Table ordering menu: */}
          <Route
            exact
            path='/customer/table-ordering/:table_id/menu'
            // path='/customer/menu/:restaurant/:table'
            component={MenuCust}
          />
          {/* 
            Table ordering Item detail
            NOTE: the item could either be an id or clean_url title 
            TBD
           */}
          <Route
            exact
            path='/customer/table-ordering/:table_id/menu/:item_id'
            component={ItemDetailCust}
          />
          <Route
            exact
            path='/customer/table-ordering/:table_id/menu/:item_id/:order_item_id'
            component={ItemDetailCust}
          />
          {/* Checkout/Cart/summary page */}
          <Route
            exact
            path='/customer/table-ordering/:table_id/brands'
            component={BrandsCust}
          />
          <Route
            exact
            path='/customer/checkout/:table_id'
            component={CheckoutSummmaryCust}
          />
          <Route
            exact
            path='/customer/confirm-order/:table_id'
            component={ConfirmOrderCust}
          />
          <Route
            exact
            path='/customer/open-check/:table_id'
            component={OpenCheckCust}
          />
          <Route
            exact
            path='/customer/pay-check/:table_id'
            component={PayCheckCust}
          />
          <Route
            exact
            path='/customer/pay-check-invoice/:table_id'
            component={PayCheckInvoiceCust}
          />
          <Route exact path='/customer/not-found' component={NotFoundCust} />
        </PowerContext.Provider>
      </Switch>
    </Router>
  );
}
