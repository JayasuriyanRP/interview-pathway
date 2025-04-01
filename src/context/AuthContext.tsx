
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

// This is a placeholder until we fully integrate Firebase
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

// Auth context provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This is a placeholder for Firebase's onAuthStateChanged
    // When we integrate Firebase, this will be replaced with actual code
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

  // Sync user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth_user');
    }
  }, [user]);

  // Sign in with Google - placeholder function
  const signInWithGoogle = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      // Placeholder for Firebase Google sign-in
      // This will be replaced with actual Firebase code
      
      // Mock successful sign-in for now
      const mockUser = {
        uid: 'mock-uid-' + Math.random().toString(36).substring(2, 9),
        email: 'user@example.com',
        displayName: 'Demo User',
        photoURL: null,
      };
      
      setUser(mockUser);
      toast.success('Signed in successfully');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
      toast.error('Failed to sign in');
      console.error('Sign-in error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Sign out - placeholder function
  const signOut = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      // Placeholder for Firebase sign-out
      // This will be replaced with actual Firebase code
      
      setUser(null);
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
