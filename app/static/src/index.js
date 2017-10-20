import {h, render} from 'preact';

import App from './components/app';
import StaffService from "./services/staffService";


import './index.css';

StaffService.get().then(
    emp => {
        console.log('appp', emp);
        render(<App employees={emp}/>, document.body);

    }, er => {
        console.log('errrrr',er);

        render(<div>Something went wrong </div>, document.body);
    }
);






