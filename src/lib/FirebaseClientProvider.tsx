"use client";

import { useEffect, useState } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "@/lib/appConstant";
import { FirebaseProvider } from "@/lib/FirebaseContext";

export default function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [app, setApp] = useState<FirebaseApp | null>(null);

  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    setApp(firebaseApp);
    
    // Initialize analytics only in browser
    if (typeof window !== "undefined") {
      getAnalytics(firebaseApp);
    }
  }, []);

  if (!app) {
    return <>{children}</>;
  }

  return <FirebaseProvider value={app}>{children}</FirebaseProvider>;
}
