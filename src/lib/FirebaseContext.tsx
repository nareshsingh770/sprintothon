"use client";

import React, { createContext, useContext } from "react";
import { FirebaseApp } from "firebase/app";

const FirebaseContext = createContext<FirebaseApp | null>(null);

export const FirebaseProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: FirebaseApp;
}) => {
  return (
    <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};

export default FirebaseContext;
