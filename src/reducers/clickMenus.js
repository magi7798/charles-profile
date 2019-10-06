import {
  CLICKED_HOME,
  CLICKED_ABOUTME,
  CLICKED_RESUME,
  CLICKED_PORTPOLIO,
  CLICKED_CONTACT
} from '../actions/actionConstants';

export const ClickItems = (state = '', action) => {
  switch (action.type) {
    case CLICKED_HOME:
      return action.payload;
    case CLICKED_ABOUTME:
      return action.payload;
    case CLICKED_RESUME:
      return action.payload;
    case CLICKED_PORTPOLIO:
      return action.payload;
    case CLICKED_CONTACT:
      return action.payload;
    default:
      return state;
  };
};