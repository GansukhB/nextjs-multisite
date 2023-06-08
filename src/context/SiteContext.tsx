import React from "react";

interface SiteContextType {
    siteId: number;
    setSiteId: React.Dispatch<React.SetStateAction<number>>;
}
export default React.createContext<SiteContextType>({siteId: 0, setSiteId: () => {}});