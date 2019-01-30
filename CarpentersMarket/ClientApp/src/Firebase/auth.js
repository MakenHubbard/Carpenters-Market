import Firebase from 'firebase';

const registerUser = (user) => {
  return Firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
}

const loginUser = (user) => {
    return Firebase.auth().signInwithEmailAndPassword(user.email, user.password);
}

const logoutUser = () => {
    return Firebase.auth().signOut();
}

const getUid = () => {
    return Firebase.auth().currentUser();
}

export default { registerUser, loginUser, logoutUser, getUid }