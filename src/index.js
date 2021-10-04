import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="bbdd0708-a63d-4756-934a-40aeee6be3de" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
document.getElementById('root'));