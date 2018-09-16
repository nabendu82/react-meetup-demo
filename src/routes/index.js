import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import ResultPage from '../components/pages/ResultPage';
import NavigationLink from '../components/molecules/NavigationLink';
import { FlexBoxNav, HeaderTitle, FlexBoxNormal, HeaderWrapper } from '../components/molecules/StyledComponents';

const navListElem = [
    { name: 'Home', href: '/home' },
    { name: 'Result', href: '/result' }
  ];

 class Routes extends Component {

     render() {
         const navList = navListElem.map((item, index) => {
             return (
                 <NavigationLink
                     name={ item.name }
                     href={ item.href }
                     key={ index }
                 />
             );
         });
         return (

             <BrowserRouter>
                 <div className="main-container">
                     <HeaderWrapper>
                         <FlexBoxNav toBtw>
                             <FlexBoxNormal>
                                 {navList}
                             </FlexBoxNormal>
                             <HeaderTitle>Finding Falcone</HeaderTitle>
                         </FlexBoxNav>
                     </HeaderWrapper>
                     <div className="main-content">
                         <Switch>
                             <Route path="/result" component={ ResultPage } />
                             <Route path="/" component={ HomePage } />
                         </Switch>
                     </div>
                 </div>
             </BrowserRouter>

         );
     }
 }

 export default Routes;
