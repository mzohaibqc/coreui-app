import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {Container} from 'reactstrap';

import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import {fetchOrders} from '../../actions/order-actions';

class Full extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    this.props.fetchOrders()
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" render={()=><Dashboard orders={this.props.orders}/>}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('storeeeeeee', state.orders.orders)
  return { orders: state.orders.orders }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOrders }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Full);
