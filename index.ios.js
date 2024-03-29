/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Index from 'Component/index';

const APP_ICON = 'http://oimg.qunarzz.com/qtalk/opsapp/img/opsapp_app_icon1.png';

export default class bounceImageDemo extends Component {
  render() {
    return (
      <Index {...this.props} height={300} url={APP_ICON} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('bounceImageDemo', () => bounceImageDemo);
