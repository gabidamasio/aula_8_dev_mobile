import { StyleSheet, Switch, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';

export function TelaConfiguracoes() {
  const { isDark, toggleTheme } = useTheme();

  const backgroundColor = isDark ? '#121212' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  const secondaryTextColor = isDark ? '#ccc' : '#555';
  const borderColor = isDark ? '#444' : '#ddd';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.titulo, { color: textColor }]}>Configurações</Text>
      <Text style={[styles.texto, { color: secondaryTextColor }]}>
        Gerencie preferências e o tema do aplicativo.
      </Text>

      <View style={[styles.linhaTema, { borderColor }]}>
        <Text style={[styles.rotulo, { color: textColor }]}>Modo Escuro</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

export default TelaConfiguracoes;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 24 },
  titulo: { fontSize: 20, fontWeight: '700' },
  texto: { fontSize: 16, textAlign: 'center' },
  linhaTema: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  rotulo: { fontSize: 16, fontWeight: '600' },
});