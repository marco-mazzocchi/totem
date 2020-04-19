import React, { useContext } from 'react';
import logoLight from '../images/logo_light.png';
import logoDark from '../images/logo_dark.png';
import AppContext from '../AppContext';

export default function Logo({ ...props }) {
   const { useDarkTheme } = useContext(AppContext);
   const logo = useDarkTheme ? logoDark : logoLight;
   return <img alt="logo" src={logo} {...props} />;
}
