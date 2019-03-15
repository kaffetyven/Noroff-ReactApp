import 'styles/app.scss';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/App/App';
import Homepage from './pages/homepage/homepage';
import CharacterSpecific from './pages/character-specific/character-specfic';

const routes = (
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact component={Homepage} />
                <Route path="/character-specfic/:id" component={CharacterSpecific} />
            </App>
        </Switch>
    </HashRouter>
);

const outlet = document.getElementById('app')

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(render);
}
