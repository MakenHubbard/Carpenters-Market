import Firebase from 'firebase';

const registerUser = (user) => {
  return Firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
}