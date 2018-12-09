
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle'; 

// import Home from 'pages/Home/Home';
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Note from 'bundle-loader?lazy&name=Note!pages/Note/Note';
import Mark from 'bundle-loader?lazy&name=Mark!pages/Mark/Mark';
import Resume from 'bundle-loader?lazy&name=Resume!pages/Resume/Resume';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import Loading from 'components/Loading/Loading/';


const createComponent = (component) => (props) => (
    <Bundle load={component }>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)} />
            <Route   path="/note" component={createComponent(Note)} />
            <Route   path="/mark" component={createComponent(Mark)} />
            <Route   path="/resume" component={createComponent(Resume)} />
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);
