import { createContext } from "react";


export interface ContextValue {
    root: HTMLDivElement | null;
    host: HTMLDivElement | null;
}


export const { Provider, Consumer } = createContext<ContextValue>({
    root: null,
    host: null,
});
