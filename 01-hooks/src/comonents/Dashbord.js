import React from 'react'
import withAurth from '../utils/WithAuth';
import WithDark from '../utils/WithDarkMode';

const Dashbord = () => {
  return React.createElement('div', null, 'our Dash Board Is here')
}
 const AuthDasbord = WithDark(withAurth(Dashbord))
export default AuthDasbord;
