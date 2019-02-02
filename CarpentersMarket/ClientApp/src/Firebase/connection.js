import Firebase from 'firebase';
import constants from '../Constants/constants';

const firebaseApp = () => {
  Firebase.initializeApp(constants.firebaseConfig);
}

export default firebaseApp;