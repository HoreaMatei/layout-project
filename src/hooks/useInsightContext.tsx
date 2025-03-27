import { createContext, useContext } from "react";

interface InsightContextType {
  date: string;
  readTime: string;
  title: string;
  imgUrl: string;
  linkTo: string;
}

const InsightContext = createContext<InsightContextType | undefined>(undefined);

export const InsightProvider: React.FC<{
  children: React.ReactNode;
  value: InsightContextType;
}> = ({ children, value }) => {
  return (
    <InsightContext.Provider value={value}>{children}</InsightContext.Provider>
  );
};

export const useInsight = (): InsightContextType => {
  const context = useContext(InsightContext);
  if (!context) {
    throw new Error("useBanner must be used within a BannerProvider");
  }
  return context;
};
