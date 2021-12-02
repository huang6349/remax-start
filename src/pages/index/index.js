import * as React from 'react';
import { View } from 'remax/wechat';
import { Text } from 'remax/wechat';
import styles from './index.css';

const IndexPage = () => {
  return (<View className={styles['page']}>
    <Text>使用 remax 开发微信小程序</Text>
  </View>);
};

export default IndexPage;
