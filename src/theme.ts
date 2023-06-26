export interface Theme {
    colors: {
        primary: {
            main: string;
        };
        caution: {
            main: string;
        };
        white: {
            main: string;
        };
        black: {
            main: string;
        };
        grey: {
            100: string;
            200: string;
            300: string;
        };
    };
}

export const defaultTheme: Theme = {
    colors: {
        primary: { main: "#ffcc00" },
        caution: { main: "#EE4521" },
        white: { main: "#FFFFFF" },
        black: {
            main: "#1B1C1E",
        },
        grey: {
            100: "#F5F5F5",
            200: "#EEEBE4",
            300: "#B0B0B0"
        },
    }
}

export const vividTheme: Theme = {
    colors: {
        primary: { main: "#99ff00" },
        caution: { main: "#EE4521" },
        white: { main: "#FFFFFF" },
        black: {
            main: "#1B1C1E",
        },
        grey: {
            100: "#F5F5F5",
            200: "#EEEBE4",
            300: "#B0B0B0"
        },
    }

}

