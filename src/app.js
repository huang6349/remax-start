import * as React from 'react';
import { REQUEST, transformRequestResponseOkData } from 'miniprogram-network';
import { showLoading, hideLoading } from 'remax/wechat';
import '@/app.css';

import Miniprogram from '@/containers/miniprogram';

REQUEST.Defaults.transformResponse = transformRequestResponseOkData;
REQUEST.Defaults.baseURL = process.env.REMAX_APP_BASE_URL;

REQUEST.Listeners.onSend.push(() => {
  showLoading({ title: '加载中' });
});
REQUEST.Listeners.onComplete.push(() => {
  hideLoading();
});

const App = ({ children }) => <Miniprogram.Provider>{children}</Miniprogram.Provider>;

export default App;
