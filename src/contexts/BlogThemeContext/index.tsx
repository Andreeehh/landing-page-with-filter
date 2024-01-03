import React, { createContext, useCallback, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme,
});

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setBlogTheme(newTheme);
  }, []);

  const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
    (node = 'default') => {
      if (node === 'default') {
        setBlogTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const newTheme = {
          ...theme,
          name: 'inverted',
          colors: {
            primary: '#FFFFFF',
            darkText: '#F9F9F9',
            secondary: '#e65c00bc',
            white: '#000000',
            mediumGray: '#f9f9f9',
            darkerGray: '#cccccc',
            warning: 'rgb(247, 38, 115)',
            success: 'rgb(172, 243, 157)',
            info: 'rgb(85, 193, 255)',
            deepBlack: 'rgb(255, 255, 255)',
            gray12: 'rgb(245, 245, 253)',
            gray11: 'rgb(241, 241, 243)',
            gray10: 'rgb(221, 221, 223)',
            gray9: 'rgb(201, 201, 203)',
            gray8: 'rgb(181, 181, 184)',
            gray7: 'rgb(161, 161, 164)',
            gray6: 'rgb(141, 141, 144)',
            gray5: 'rgb(121, 121, 124)',
            gray4: 'rgb(101, 101, 104)',
            gray3: 'rgb(81, 81, 84)',
            gray2: 'rgb(61, 61, 64)',
            gray1: 'rgb(41, 41, 44)',
            gray0: 'rgb(21, 21, 24)',
            deepWhite: 'rgb(0, 0, 0)',
          },
        };
        setBlogTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
      }
    },
    [],
  );

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};
