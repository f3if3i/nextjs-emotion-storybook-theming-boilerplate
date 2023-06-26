import { Theme } from "@/theme"

export const getThemeName = (theme: Theme) => {
    if (theme.colors.primary.main === "#ffcc00") {
        return "default"
    } else {
        return "vivid"
    }
}