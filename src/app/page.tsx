"use client"
import { Theme } from "@/theme"
import { css, useTheme } from "@emotion/react"
import { Button } from "../../components/Button"
import { getThemeName } from "../../utils/getThemeName"

export default function Home() {
    const theme = useTheme() as Theme
    const style = getStyles(theme)
    const themeName = getThemeName(theme)

    
    return (
        <main>
            <div css={style.container}>
                <p>Current Theme: {themeName}</p>
                <Button label="Button" onClick={() => {}} />
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
            fontSize: "48px",
            color: theme.colors.primary.main
        })
    })
}
