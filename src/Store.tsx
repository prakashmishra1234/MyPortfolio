import * as React from "react";

export interface Imodal {
  open: boolean;
  comp: string;
  title: string;
}

interface IContext {
  openModal: Imodal;
  setOpenModal: React.Dispatch<React.SetStateAction<Imodal>>;
}

const AuthContext = React.createContext<IContext>({
  openModal: {
    open: false,
    comp: "",
    title: "",
  },
  setOpenModal: () => {},
});

const Store: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openModal, setOpenModal] = React.useState<Imodal>({
    open: false,
    comp: "",
    title: "",
  });

  return (
    <AuthContext.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { Store, AuthContext };
