import type { Preview } from "@storybook/react";
import { defaultTheme, vividTheme } from '../src/theme'
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider, useThemeSwitcher } from "../store/ThemeContext"
import React, { useEffect } from "react";

const getTheme = (themeName) => {
  if (themeName === "vivid") {
    return vividTheme
  }
  return defaultTheme
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);

  const ThemeSwitcherProvider = ({ children }) => {
    const { setupTheme } = useThemeSwitcher();
    useEffect(() => {
      setupTheme(context.globals.theme);
    }, [context.globals.theme, setupTheme]);

    return <>{children}</>;
  };

  return (
    <ThemeProvider>
      <EmotionThemeProvider theme={theme}>
        <ThemeSwitcherProvider>
          <Story {...context} />
        </ThemeSwitcherProvider>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "default",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["default", "vivid"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
}

export default preview
