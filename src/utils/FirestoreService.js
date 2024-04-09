import firestore from "@react-native-firebase/firestore";

class FirestoreService {
  static async createUserProfile(userId, profile) {
    await firestore()
      .collection("users")
      .doc(userId)
      .set(profile, { merge: true });
  }

  static async getUserProfile(userId) {
    const userProfileSnapshot = await firestore()
      .collection("users")
      .doc(userId)
      .get();

    return userProfileSnapshot.exists ? userProfileSnapshot.data() : null;
  }
}

export default FirestoreService;
