
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/theme-context';

export function TelaSobre() {
  const router = useRouter();
  const { isDark } = useTheme();

  const backgroundColor = isDark ? '#121212' : '#fff';
  const textColor = isDark ? '#fff' : '#333';
  const secondaryTextColor = isDark ? '#ccc' : '#666';

  return (
    <View style={[estilos.tela, { backgroundColor }]}>
      <Text style={[estilos.titulo, { color: textColor }]}>
        Rastreador de Micro-hábitos
      </Text>

      <Text style={[estilos.subtitulo, { color: secondaryTextColor }]}>
        Versão: Aula 8 (Hooks, Zustand e Persistência Local)
      </Text>

      <Text style={[estilos.descricao, { color: secondaryTextColor }]}>
        Acompanhe seus hábitos diários com estado global compartilhado via Zustand e persistência em disco com AsyncStorage e SQLite.
      </Text>

      <Pressable onPress={() => router.back()} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}

export default TelaSobre;

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 24,
    gap: 16,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitulo: {
    fontSize: 16,
  },
  descricao: {
    fontSize: 14,
    lineHeight: 20,
  },
  botao: {
    backgroundColor: '#f26522',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
