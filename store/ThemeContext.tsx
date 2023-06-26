"use client"
import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { Theme, defaultTheme, vividTheme } from "../src/theme"

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setupTheme: (themeName: "default" | "vivid") => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(defaultTheme)

    const toggleTheme = useCallback(() => {
        setTheme(currentTheme => currentTheme === defaultTheme ? vividTheme : defaultTheme)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const setupTheme = useCallback((themeName: "default" | "vivid") => {
        if (themeName === "default") {
            setTheme(defaultTheme)
        } else {
            setTheme(vividTheme)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const value = useMemo(() => ({ theme, toggleTheme, setupTheme }), [setupTheme, theme, toggleTheme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeSwitcher = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useThemeSwitcher must be used within a ThemeProvider")
    }
    return context
}
