import { h, render } from 'preact';

import App from './components/app';

import './index.css';


render((
    <div id="foo">
        <App/>
    </div>
), document.body);
