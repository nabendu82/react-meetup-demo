import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import AdultAge from '../components/pages/AdultAge';
import MiddleAge from '../components/pages/MiddleAge';
import SeniorAge from '../components/pages/SeniorAge';
import OldAge from '../components/pages/OldAge';
import NavigationLink from '../components/molecules/NavigationLink';
import SocialLink from '../components/molecules/SocialLink';
import { FlexBoxNav, HeaderTitle, FlexBoxNormal, HeaderWrapper } from '../components/molecules/StyledComponents';

const navListElem = [
    { name: 'Children/Teens', href: '/home' },
    { name: 'Adults', href: '/adult' },
    { name: 'Middle-Aged', href: '/middle' },
    { name: 'Senior', href: '/senior' },
    { name: 'Old', href: '/old' }
  ];

const socialListElem = [
    { name: 'Twitter', href: 'https://twitter.com/nabendu82' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nabendu-biswas-42aa4522/' },
    { name: 'Medium', href: 'https://medium.com/@nabendu82' }
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

         const socialList = socialListElem.map((item, index) => {
            return (
                <SocialLink
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
                             <HeaderTitle>Population Distribution</HeaderTitle>
                         </FlexBoxNav>
                     </HeaderWrapper>
                     <div className="main-content">
                         <Switch>
                             <Route path="/old" component={ OldAge } />
                             <Route path="/senior" component={ SeniorAge } />
                             <Route path="/middle" component={ MiddleAge } />
                             <Route path="/adult" component={ AdultAge } />
                             <Route path="/" component={ HomePage } />
                         </Switch>
                     </div>
                     <HeaderWrapper thinner>
                         <FlexBoxNav toBtw>
                             <FlexBoxNormal>
                                 {socialList}
                             </FlexBoxNormal>
                             <HeaderTitle small>Created in 🇮🇳 by Nabendu</HeaderTitle>
                         </FlexBoxNav>
                     </HeaderWrapper>
                 </div>
             </BrowserRouter>

         );
     }
 }

 export default Routes;
