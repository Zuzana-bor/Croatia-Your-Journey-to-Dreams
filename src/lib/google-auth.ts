import { gapi } from 'gapi-script';

const CLIENT_ID =
  '127656549989-bikeqkr99km51sgvg2vjv270uiitiv4o.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAlkFxkhj_8jDv4M0Mb6ENJB_BPV4EwHd4';
const SCOPES = 'https://www.googleapis.com/auth/photoslibrary.readonly';

export const initClient = () => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: [
        'https://photoslibrary.googleapis.com/$discovery/rest?version=v1',
      ],
      scope: SCOPES,
    });
  });
};

export const signIn = () => {
  return gapi.auth2.getAuthInstance().signIn();
};

export const signOut = () => {
  return gapi.auth2.getAuthInstance().signOut();
};

export const isSignedIn = () => {
  return gapi.auth2.getAuthInstance().isSignedIn.get();
};

export const getUser = () => {
  return gapi.auth2.getAuthInstance().currentUser.get();
};
