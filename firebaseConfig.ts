import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  projectId: "my-vertex-demo-477402",
  appId: "1:951182156991:web:f3d9a719d286edb79d120a",
  storageBucket: "my-vertex-demo-477402.firebasestorage.app",
  apiKey: "AIzaSyBMrcD659wimRmDjztaq0g1WPcCdVdv7pE",
  authDomain: "my-vertex-demo-477402.firebaseapp.com",
  messagingSenderId: "951182156991",
  measurementId: "G-X9MG3S33N4"
};

export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firebase Storage
export const storage = getStorage(app);

// Use specific database ID "workflow111" in my-vertex-demo project
export const db = getFirestore(app, "workflow111");

export const getActualDbId = () => {
    try {
        // @ts-ignore
        const internalId = db._databaseId;
        if (internalId && internalId.database) {
            return internalId.database;
        }
        return "(default)";
    } catch (e) {
        return "unknown";
    }
};
