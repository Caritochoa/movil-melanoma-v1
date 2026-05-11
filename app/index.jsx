import { useRouter } from 'expo-router';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/camera/camera-index');
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/images/logo-square.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          AI-Powered Health Insights
        </Text>
      </View>

      {/* Texto */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Take a picture, get instant insights. Our AI-powered tool helps detect potential melanoma easily and quickly, early detection made simple!
        </Text>
      </View>

      {/* Botón */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleButtonClick}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Start Scan</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // más limpio
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  logo: { 
    width: 140,
    height: 140,
    marginBottom: 30,
  },

  titleContainer: {
    marginBottom: 12,
  },

  title: {
    fontSize: 26,
    fontWeight: '600', // más moderno que bold
    textAlign: 'center',
    color: '#111',
  },

  textContainer: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555', // suaviza
    lineHeight: 22,
  },

  button: {
  backgroundColor: '#0A84FF',
  paddingVertical: 16,
  borderRadius: 12,
  alignItems: 'center',
  width: '100%', // 👈 clave para ancho completo
  marginTop: 20,
},

buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});