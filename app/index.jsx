import { useRouter } from 'expo-router';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from 'lucide-react-native';
import Header from './components/header/Header';


export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/camera/camera-index');
  };

  return (
    <View style={styles.container}>

        <Header />
      
      <Image
        source={require('../assets/images/logo-square.png')}
        //source={require('../assets/images/logo-square.png')}
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
        onPress={handleButtonClick}
        activeOpacity={0.9}
        style={styles.buttonWrapper}
      >
      <LinearGradient
        colors={['#007BFF', '#6A00FF']}
        locations={[0.15, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
    <View style={styles.buttonContent}>
      <ArrowRight
        color="white"
        size={28}
        strokeWidth={2}
      />

      <Text style={styles.buttonText}>
        <Text style={styles.buttonTextBold}>Start </Text>
        <Text style={styles.buttonTextLight}>Scan</Text>
      </Text>
    
    </View>
  </LinearGradient>
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

  buttonWrapper: {
  width: '100%',
  marginTop: 30,
},

button: {
  height: 72,
  borderRadius: 999,
  justifyContent: 'center',

  shadowColor: '#4F6BFF',
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 20,

  elevation: 10,
},

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },

  buttonText: {
  color: '#FFFFFF',
  fontSize: 26,
  letterSpacing: -0.5,
  },

  buttonTextBold: {
    fontFamily: 'PoppinsSemiBold',
  },

  buttonTextLight: {
    fontFamily: 'PoppinsLight',
  },
});