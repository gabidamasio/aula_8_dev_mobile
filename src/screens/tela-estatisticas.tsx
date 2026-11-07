// Exercício 4 (Tarefa 3) & Atividade Aplicada (Requisito 4) — Aba Estatísticas com Zustand e useTheme
// Onde: src/screens/tela-estatisticas.tsx (rota: src/app/(tabs)/stats.tsx)

import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';
import { useHabitStore } from '../store/use-habit-store';

export function TelaEstatisticas() {
  const habits = useHabitStore((state) => state.habits);
  const { isDark, toggleTheme } = useTheme();

  const total = habits.length;
  const completed = habits.filter((habit) => habit.done).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const backgroundColor = isDark ? '#121212' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  const secondaryTextColor = isDark ? '#ccc' : '#555';
  const borderColor = isDark ? '#444' : '#ddd';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.titulo, { color: textColor }]}>Estatísticas</Text>
      <Text style={[styles.texto, { color: secondaryTextColor }]}>Total de hábitos: {total}</Text>
      <Text style={[styles.texto, { color: secondaryTextColor }]}>Concluídos: {completed}</Text>
      <Text style={[styles.texto, { color: secondaryTextColor }]}>Pendentes: {pending}</Text>
      <Text style={styles.destaque}>Progresso: {percentage}%</Text>

      <View style={[styles.linhaTema, { borderColor }]}>
        <Text style={[styles.texto, { color: secondaryTextColor }]}>Modo Escuro</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

export default TelaEstatisticas;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, padding: 24 },
  titulo: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  texto: { fontSize: 16 },
  destaque: { fontSize: 18, fontWeight: '700', color: '#FF6002', marginTop: 4 },
  linhaTema: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
});