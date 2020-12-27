import React, {useReducer, useContext} from 'react';
import axios from 'axios';
import {FirebaseContext} from './firebaseContext';
import {firebaseReducer} from './firebaseReducer';
import {AlertContext} from '../alert/alertContext';
import {IFirebaseContext} from '../../dataStructure';

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState: React.FC = ({children}) => {
  const alert = useContext(AlertContext);

  const fetchNotes = async (): Promise<any> => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);

    if (!res.data) res.data = {};

    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    });

    dispatch({type: 'FETCH_NOTES', payload});
  };

  const removeNote = async (id: number, title: string): Promise<any> => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: 'REMOVE_NOTE',
      payload: id
    });

    alert.show(`Заметка "${title}" была удалена`, 'success');
  }

  const addNote = async (title: string): Promise<any> => {
    const note = {
      title, date: new Date().toJSON()
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: res.data.name
      };

      dispatch({type: 'ADD_NOTE', payload});

    } catch (e) {
      throw new Error(e.message);
    }
  }

  const initialState: IFirebaseContext = {
    notes: [],
    loading: false,
    fetchNotes,
    removeNote,
    addNote
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({type: 'SHOW_LOADER'});

  return (
    <FirebaseContext.Provider value={{
      showLoader, addNote, removeNote, fetchNotes,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>
  );
};
