import { css, useTheme } from "@emotion/react"
import { Theme } from "@/theme"

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({
    label,
    ...props
}: ButtonProps) => {
    // emotionの機能
    const theme = useTheme() as Theme
    const style = getStyles(theme)

    return (
        <button
            type="button"
            css={style.button}
            {...props}
        >
            {label}
        </button >
    )
}

const getStyles = (theme: Theme) => {
    return ({
        button: css({
            color: `${theme.colors.primary.main}`,
            backgroundColor: `${theme.colors.black.main}`,
            padding: "16px 36px",
            borderRadius: "26px",
            fontSize: "20px",
            fontWeight: "700"
        })
    })
}