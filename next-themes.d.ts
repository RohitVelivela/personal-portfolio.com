declare module 'next-themes' {
  export type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: string;
    attribute?: string;
    value?: {
      dark?: string;
      light?: string;
    };
    forcedTheme?: string;
    enableSystem?: boolean;
    enableColorScheme?: boolean;
    storageKey?: string;
    nonce?: string;
  };

  export type UseThemeProps = {
    themes: string[];
    forcedTheme?: string;
    setTheme: (theme: string) => void;
    theme?: string;
    systemTheme?: 'dark' | 'light';
    resolvedTheme?: string;
  };

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export function useTheme(): UseThemeProps;
}
