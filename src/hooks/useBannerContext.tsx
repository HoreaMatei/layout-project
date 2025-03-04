import { createContext, useContext } from "react";

interface BannerContextType {
  title: string;
  leftText: string;
  rightText: string;
  buttonText: string;
  image: string;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export const BannerProvider: React.FC<{
  children: React.ReactNode;
  value: BannerContextType;
}> = ({ children, value }) => {
  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  );
};

export const useBanner = (): BannerContextType => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner must be used within a BannerProvider");
  }
  return context;
};
