import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import KitchenSink from './kitchen-sink';
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
            <KitchenSink/>
        </Provider>
    )
}

render(
    <App/>,
    document.getElementById('app')
);
