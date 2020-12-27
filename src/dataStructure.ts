export type AlertKindType = 'success' | 'danger' | 'warning';

export interface IAlert {
	text?: string;
	type?: AlertKindType;
	visible?: boolean;
};

export interface IAlertContext {
	alert: IAlert;
	show: (text: string, type?: AlertKindType) => void;
	hide: () => void;
};

interface IAlertShow {
	type: 'SHOW_ALERT';
	payload: IAlert;
};

interface IAlertHide {
	type: 'HIDE_ALERT';
};

export type AlertActions = IAlertShow | IAlertHide;

export interface INote {
	title: string;
	date: string;
	id: number;
};

export interface IFirebaseContext {
	notes: INote[];
	showLoader?: () => void;
	fetchNotes: () => Promise<any>;
	addNote: (title: string) => Promise<any>;
	removeNote: (id: number, title: string) => void;
	loading: boolean;
};

interface IFirebaseShowLoader {
	type: 'SHOW_LOADER';
};

interface IFirebaseAddNote {
	type: 'ADD_NOTE';
	payload: INote;
};

interface IFirebaseFetchNotes {
	type: 'FETCH_NOTES';
	payload: INote[];
};

interface IFirebaseRemoveNote {
	type: 'REMOVE_NOTE';
	payload: number;
};

export type FirebaseActions = IFirebaseShowLoader | IFirebaseAddNote | IFirebaseFetchNotes | IFirebaseRemoveNote;
