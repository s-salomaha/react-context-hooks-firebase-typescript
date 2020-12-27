import React, {Fragment, useContext, useEffect} from 'react';
import {Form} from '../components/Form';
import {Notes} from '../components/Notes';
import {FirebaseContext} from '../context/firebase/firebaseContext';
import {Loader} from '../components/Loader';

export const Home: React.FC = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h1 className="mb-5">Ваши заметки</h1>
      <Form />

      <hr className="my-5"/>

      {loading
        ? <Loader />
        : notes.length
          ? <Notes notes={notes} onRemove={removeNote} />
          : <div>У вас нет заметок</div>
      }
    </Fragment>
  );
};
