// Action Creators for menus
import {
  CLICKED_HOME,
  CLICKED_ABOUTME,
  CLICKED_RESUME,
  CLICKED_PORTPOLIO,
  CLICKED_CONTACT
} from './actionConstants';

export const ClickHome = () => ({
  type: CLICKED_HOME,
  payload: 'active item'
});

export const ClickAboutMe = () => ({
  type: CLICKED_ABOUTME,
  payload: 'active item'
});

export const ClickResume = () => ({
  type: CLICKED_RESUME,
  payload: 'active item'
});

export const ClickPortfolio = () => ({
  type: CLICKED_PORTPOLIO,
  payload: 'active item'
});

export const ClickContact = () => ({
  type: CLICKED_CONTACT,
  payload: 'active item'
});


