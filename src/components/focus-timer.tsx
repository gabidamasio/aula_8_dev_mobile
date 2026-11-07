import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { listFocusSessions, saveFocusSession } from '../services/focus-db';

type FocusTimerProps = {
  habitId?: string;
};

export default function FocusTimer({ habitId }: FocusTimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (!habitId) return;

    let active = true;

    async function loadSessions() {
      try {
        const logs = await listFocusSessions();
        if (active) {
          setSavedCount(logs.filter((log) => log.habitId === habitId).length);
        }
      } catch (error) {
        console.warn('Erro ao listar sessões', error);
      }
    }

    loadSessions();

    return () => {
      active = false;
    };
  }, [habitId]);

  const handleSave = async () => {
    if (!habitId || seconds === 0) return;

    setIsRunning(false);
    try {
      await saveFocusSession(habitId, seconds);
      setSavedCount((prev) => prev + 1);
      setSeconds(0);
    } catch (error) {
      console.warn('Erro ao salvar sessão', error);
    }
  };

  return (
    <View style={styles.box}>
      <Text style={styles.timer}>{seconds}s</Text>
      <View style={styles.actions}>
        <Pressable
          style={styles.button}
          onPress={() => setIsRunning((prev) => !prev)}
        >
          <Text style={styles.buttonText}>{isRunning ? 'Pausar' : 'Iniciar Foco'}</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.resetButton]}
          onPress={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          <Text style={styles.buttonText}>Zerar</Text>
        </Pressable>
      </View>

      {habitId ? (
        <>
          <Pressable style={[styles.button, styles.saveButton]} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar sessão</Text>
          </Pressable>
          <Text style={styles.savedText}>Sessões salvas: {savedCount}</Text>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, alignItems: 'center', borderRadius: 12, backgroundColor: '#F3E9DC', gap: 12 },
  timer: { fontSize: 36, fontWeight: 'bold' },
  actions: { flexDirection: 'row', gap: 12 },
  button: { backgroundColor: '#FF6002', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  resetButton: { backgroundColor: '#555' },
  saveButton: { backgroundColor: '#2e7d32' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  savedText: { color: '#555', fontSize: 14 },
});