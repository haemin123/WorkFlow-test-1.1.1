
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    sendPasswordResetEmail,
    updatePassword,
    signOut,
    updateProfile,
    User as FirebaseUser
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { auth, db, storage } from "../firebaseConfig";
import { User } from "../types";

const googleProvider = new GoogleAuthProvider();

export const authService = {
    // --- Login ---
    loginEmail: async (email: string, pw: string) => {
        return await signInWithEmailAndPassword(auth, email, pw);
    },

    loginGoogle: async () => {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    },

    // --- Signup ---
    signup: async (email: string, pw: string, name: string, additionalInfo: Partial<User>) => {
        const result = await createUserWithEmailAndPassword(auth, email, pw);
        
        await updateProfile(result.user, { displayName: name });

        const newUser: User = {
            id: result.user.uid,
            email: email,
            name: name,
            role: 'REQUESTER',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            ...additionalInfo
        };

        await setDoc(doc(db, "users", result.user.uid), newUser);
        return result;
    },

    // --- Password Reset ---
    resetPassword: async (email: string) => {
        await sendPasswordResetEmail(auth, email);
    },

    // --- Profile Management ---
    getUserProfile: async (uid: string): Promise<User | null> => {
        const snap = await getDoc(doc(db, "users", uid));
        if (snap.exists()) {
            return snap.data() as User;
        }
        return null;
    },

    getAllUsers: async (): Promise<User[]> => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users: User[] = [];
        querySnapshot.forEach((doc) => {
            users.push(doc.data() as User);
        });
        return users;
    },

    updateUserProfile: async (uid: string, data: Partial<User>) => {
        await setDoc(doc(db, "users", uid), {
            ...data,
            updatedAt: Date.now()
        }, { merge: true });
        
        if (data.name && auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: data.name });
        }
        // If profile image changed, update auth profile too
        if (data.profileImageUrl && auth.currentUser) {
            await updateProfile(auth.currentUser, { photoURL: data.profileImageUrl });
        }
    },

    changePassword: async (newPw: string) => {
        if (auth.currentUser) {
            await updatePassword(auth.currentUser, newPw);
        } else {
            throw new Error("No authenticated user");
        }
    },

    // --- Profile Image ---
    uploadProfileImage: async (uid: string, file: File): Promise<string> => {
        // Path: users/{uid}/profile.jpg (Overwrite existing)
        // You could use timestamp if you want history, but overwriting saves space.
        const storageRef = ref(storage, `users/${uid}/profile.jpg`);
        
        // Upload
        await uploadBytes(storageRef, file);
        
        // Get URL
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    },

    deleteProfileImage: async (uid: string) => {
        const storageRef = ref(storage, `users/${uid}/profile.jpg`);
        try {
            await deleteObject(storageRef);
        } catch (e) {
            console.warn("Image might not exist in storage", e);
        }
    },

    logout: async () => {
        await signOut(auth);
    }
};
