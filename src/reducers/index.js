import { combineReducers } from 'redux';

import { ClickItems } from './clickMenus';

export default combineReducers({
  clicked: ClickItems
});