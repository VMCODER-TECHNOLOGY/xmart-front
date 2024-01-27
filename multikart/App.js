import React, {createContext, useState, useContext, useEffect} from 'react';
import {LogBox} from 'react-native';
import Navigator from './src/navigator';
import {getValue} from './src/utils/localStorage';
import {
  textRTLStyle,
  viewRTLStyle,
  imageRTLStyle,
  viewSelfRTLStyle,
} from './src/style/rtlStyle';

LogBox.ignoreAllLogs();
export const CommonContext = createContext();

const App = () => {
  const [isRTL, setIsRTL] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currSymbol, setCurrSymbol] = useState('$');
  const [currValue, setCurrValue] = useState(1);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  const contextValues = {
    isRTL,
    setIsRTL,
    isDark,
    setIsDark,
    textRTLStyle: textRTLStyle(isRTL),
    viewRTLStyle: viewRTLStyle(isRTL),
    imageRTLStyle: imageRTLStyle(isRTL),
    viewSelfRTLStyle: viewSelfRTLStyle(isRTL),
    currSymbol,
    setCurrSymbol,
    currValue,
    setCurrValue,
    isFirstLaunch,
    setIsFirstLaunch,
  };

  console.log('IS FIRST TIME', isFirstLaunch);

  useEffect(() => {
    const getDarkModeval = async () => {
      getValue('darkMode')
        .then(res => JSON.parse(res))
        .then(val => {
          if (val !== null) {
            setIsDark(val);
          }
        });
    };
    getDarkModeval();
  }, []);

  return (
    <CommonContext.Provider value={contextValues}>
      <Navigator />
    </CommonContext.Provider>
  );
};
export const useValues = () => useContext(CommonContext);
export default App;
