/**
 * @format
 */

import {AppRegistry, Button} from 'react-native';
import App from './App';
import ButtonCounter from './ButtonCounter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ButtonCounter);
