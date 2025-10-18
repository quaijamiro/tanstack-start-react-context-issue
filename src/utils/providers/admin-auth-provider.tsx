import * as React from "react";

export interface AdminAuthContext {
  isInit: boolean;
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminAuthContext = React.createContext<AdminAuthContext | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isInit, setInit] = React.useState<boolean>(false);
  const [isAuth, setAuthInternal] = React.useState<boolean>(false);

  const setAuth = React.useCallback((value: React.SetStateAction<boolean>) => {
    setAuthInternal(value);
    setInit(true);
  }, []);

  return <AdminAuthContext.Provider value={{ isInit, isAuth, setAuth }}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = React.useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AuthProvider");
  }
  return context;
}
