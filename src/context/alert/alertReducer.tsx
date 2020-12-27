import {IAlert, AlertActions} from '../../dataStructure';

export const alertReducer = (state: IAlert, action: AlertActions) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {...action.payload, visible: true};
    case 'HIDE_ALERT':
      return {...state, visible: false};
    default:
      return state;
  }
};
