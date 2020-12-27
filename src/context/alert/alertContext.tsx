import {createContext} from 'react';
import {IAlertContext} from '../../dataStructure';

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);
