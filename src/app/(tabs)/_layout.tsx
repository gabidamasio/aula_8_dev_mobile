// Exercício 2 — RESOLUÇÃO: Tabs com Home e Stats
// Nível ⭐⭐
// No sandbox: src/app/(tabs)/_layout.tsx

import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useTheme } from '../../context/theme-context';

export default function TabLayout() {
  const { isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarStyle: {
          backgroundColor: isDark ? '#121212' : '#fff',
          borderTopColor: isDark ? '#333' : '#ddd',
        },
      }}
    >
      {/* Aba 1: Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={String(color)} />
          ),
        }}
      />
      {/* Aba 2: Stats */}
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <Feather name="bar-chart-2" size={size} color={String(color)} />
          ),
        }}
      />
    </Tabs>
  );
}