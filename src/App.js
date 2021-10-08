import React from 'react'
import { Route, Switch } from 'react-router';
import FooterComp from './components/FooterComp';
import NavbarComp from './components/NavbarComp';
import SidebarComp from './components/SidebarComp';
import DashboardPage from './pages/DashboardPage'
import InquryPage from './pages/InquryPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <SidebarComp />
        <NavbarComp />
        <Switch>
          <Route path="/" component={DashboardPage} exact/>
          <Route path="/inquiry" component={InquryPage} />
        </Switch>
        <FooterComp />
      </>
    );
  }
}

export default App;
