import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SCREEN_SIZE = {windowHeight, windowWidth};
export default SCREEN_SIZE

