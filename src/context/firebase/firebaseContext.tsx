import {createContext} from 'react';
import {IFirebaseContext} from '../../dataStructure';

export const FirebaseContext = createContext<IFirebaseContext>({} as IFirebaseContext);
