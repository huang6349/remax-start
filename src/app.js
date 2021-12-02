import * as React from 'react';
import { REQUEST, transformRequestResponseOkData } from 'miniprogram-network';
import '@/app.css';

REQUEST.Defaults.transformResponse = transformRequestResponseOkData;
REQUEST.Defaults.baseURL = process.env.REMAX_APP_BASE_URL;

const App = (props) => props?.children;

export default App;
