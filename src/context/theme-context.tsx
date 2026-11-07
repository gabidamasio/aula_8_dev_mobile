import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const THEME_STORAGE_KEY = '@habits:theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    async function loadTheme() {
      try {
        const saved = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (saved !== null) {
          setIsDark(JSON.parse(saved) as boolean);
        }
      } catch (error) {
        console.warn('Erro ao carregar tema', error);
      }
    }

    loadTheme();
  }, []);

  const toggleTheme = () => {
    const nextValue = !isDark;
    setIsDark((prev) => !prev);
    AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(nextValue)).catch((error) =>
      console.warn('Erro ao salvar tema', error)
    );
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}