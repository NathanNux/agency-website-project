import { createContext } from 'react'

interface GlobalState {
    sectionToScrollTo: string | null
    setGlobalState: (newState: { sectionToScrollTo: string }) => void
    clearGlobalState: () => void
}

const GlobalStateContext = createContext<GlobalState>({
    sectionToScrollTo: null,
    setGlobalState: () => {},
    clearGlobalState: () => {},
})

export default GlobalStateContext