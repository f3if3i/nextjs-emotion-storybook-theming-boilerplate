// preview.tsx
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import { type Preview } from "@storybook/react"
import React from "react";
import { defaultTheme, vividTheme } from '../src/theme'

// テーマを取得するヘルパー
const getTheme = (themeName) => {
  if (themeName === "vivid") {
    return vividTheme
  }
  return defaultTheme
}

// decorator作成
const withThemeProvider = (Story, context) => {
  // globalTypesのthemeのvalue(defaultもしくはvivid)でthemeを取得
  const theme = getTheme(context.globals.theme)
  return (
    // defaultThemeを反映
    <EmotionThemeProvider theme={theme}>
      <Story />
    </EmotionThemeProvider>
  )
}

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
  // globalType追加
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'default',
      // toolbarのタイトル、アイコンとアイテム（複数追加可能）の設定
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['default', 'vivid'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider]
}

export default preview