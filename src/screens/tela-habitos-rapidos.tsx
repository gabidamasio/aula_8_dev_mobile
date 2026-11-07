import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../context/theme-context';

type HabitItem = {
  id: string;
  title: string;
  done: boolean;
};

export function QuickHabitsScreen() {
  const { isDark } = useTheme();
  const [text, setText] = useState('');
  const [totalClicks, setTotalClicks] = useState(0);
  const [habits, setHabits] = useState<HabitItem[]>([
    { id: '1', title: 'Beber água', done: false },
    { id: '2', title: 'Caminhar 20 min', done: true },
  ]);

  const backgroundColor = isDark ? '#121212' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  const secondaryTextColor = isDark ? '#ccc' : '#666';
  const inputBorderColor = isDark ? '#555' : '#ccc';
  const cardBorderColor = isDark ? '#333' : '#eee';

  const handleAdd = () => {
    if (!text.trim()) return;
    setHabits((prev) => [
      ...prev,
      { id: Date.now().toString(), title: text.trim(), done: false },
    ]);
    setText('');
  };

  const handleToggle = (id: string) => {
    setHabits((prev) =>
      prev.map((habit) => (habit.id === id ? { ...habit, done: !habit.done } : habit))
    );
    setTotalClicks((prev) => prev + 1);
  };

  const handleRemove = (id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.counter, { color: secondaryTextColor }]}>
        Interações hoje: {totalClicks}
      </Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { borderColor: inputBorderColor, color: textColor }]}
          value={text}
          onChangeText={setText}
          placeholder="Novo hábito..."
          placeholderTextColor={isDark ? '#999' : '#888'}
        />
        <Pressable style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.addBtnText}>+</Text>
        </Pressable>
      </View>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { borderColor: cardBorderColor }]}>
            <Pressable style={styles.cardTitle} onPress={() => handleToggle(item.id)}>
              <Text style={[styles.titleText, { color: textColor }]}>
                {item.done ? '✅' : '⬜'} {item.title}
              </Text>
            </Pressable>
            <Pressable onPress={() => handleRemove(item.id)}>
              <Text style={styles.deleteText}>Excluir</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

export default QuickHabitsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  counter: { fontSize: 14, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  input: { flex: 1, borderWidth: 1, borderRadius: 8, paddingHorizontal: 12 },
  addBtn: { backgroundColor: '#FF6002', paddingHorizontal: 18, justifyContent: 'center', borderRadius: 8 },
  addBtnText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1 },
  cardTitle: { flex: 1 },
  titleText: { fontSize: 16 },
  deleteText: { color: '#c62828', fontWeight: 'bold' },
});