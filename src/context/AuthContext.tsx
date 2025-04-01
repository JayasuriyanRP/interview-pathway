
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  User as FirebaseUser,
  signOut as firebaseSignOut 
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Define our user type based on Firebase User
type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Initialize Firebase - this will use the values from localStorage after login
const initFirebase = () => {
  try {
    const firebaseConfig = JSON.parse(localStorage.getItem('firebase_config') || '{}');
    
    // Check if we have the required config
    if (firebaseConfig.apiKey && firebaseConfig.authDomain) {
      return initializeApp(firebaseConfig);
    } else {
      console.warn('Firebase config not found in localStorage');
      return null;
    }
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return null;
  }
};

// Auth context provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [firebaseApp, setFirebaseApp] = useState<any>(null);

  useEffect(() => {
    // Initialize Firebase if we have config
    const app = initFirebase();
    setFirebaseApp(app);

    // Even if Firebase is not initialized, we can still check localStorage
    // for previously authenticated user
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing stored user:', err);
      }
    }
    setLoading(false);
  }, []);

  // Set up Firebase auth state listener when the app is initialized
  useEffect(() => {
    if (!firebaseApp) return;

    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setLoading(true);
      if (firebaseUser) {
        const formattedUser = formatUser(firebaseUser);
        setUser(formattedUser);
        localStorage.setItem('auth_user', JSON.stringify(formattedUser));
      } else {
        setUser(null);
        localStorage.removeItem('auth_user');
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [firebaseApp]);

  // Format Firebase user to our User type
  const formatUser = (firebaseUser: FirebaseUser): User => {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
    };
  };

  // Sign in with Google
  const signInWithGoogle = async (): Promise<void> => {
    if (!firebaseApp) {
      setError('Firebase is not initialized. Please save your Firebase configuration first.');
      toast.error('Firebase is not initialized. Please save your configuration first.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const auth = getAuth(firebaseApp);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // User is automatically set via the onAuthStateChanged listener
      toast.success('Signed in successfully');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
      toast.error('Failed to sign in');
      console.error('Sign-in error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async (): Promise<void> => {
    if (!firebaseApp) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const auth = getAuth(firebaseApp);
      await firebaseSignOut(auth);
      
      // User is automatically set to null via the onAuthStateChanged listener
      toast.success('Signed out successfully');
    } catch (err: any) {
      setError(err.message || 'Failed to sign out');
      toast.error('Failed to sign out');
      console.error('Sign-out error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Value object for the context provider
  const value = {
    user,
    loading,
    error,
    signInWithGoogle,
    signOut,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
