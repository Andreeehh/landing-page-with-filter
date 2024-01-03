import { AppProps } from 'next/app';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { BlogThemeProvider } from 'contexts/BlogThemeContext';
import NextNprogress from 'nextjs-progressbar';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <NextNprogress
        color={theme.colors.secondary}
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
      />
      <Component {...pageProps} />
      <GlobalStyles />
    </BlogThemeProvider>
  );
}

export default MyApp;
