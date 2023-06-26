"use client"
import { css } from "@emotion/react"
import { Button } from "../../components/Button"
import { useThemeSwitcher } from "../../store/ThemeContext"
import { useEffect, useState } from "react"
import { getThemeName } from "../../utils/getThemeName"

export default function Home() {
    const { theme, toggleTheme } = useThemeSwitcher()
    const [themeName, setThemeName]= useState<"default" | "vivid">()
    const style = getStyles(theme)
    useEffect(() => {
        console.log({ theme })
        setThemeName(getThemeName(theme))
    }, [theme])
    
    return (
        <main>
            <div css={style.container}>
                <p>Current Theme: {themeName}</p>
                <Button label="Button" onClick={() => toggleTheme()} />
            </div>
        </main >
    )
}

const getStyles = (theme: any) => {
    return ({
        container: css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "600px",
            fontSize: "48px"
        })
    })
}
