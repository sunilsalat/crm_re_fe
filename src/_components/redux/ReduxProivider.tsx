'use client'
import { store } from "@/redux/store/store"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import '../../axios'

const ReduxProivider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProivider