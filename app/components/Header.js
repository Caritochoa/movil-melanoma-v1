import { useRouter } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Image
          source={require('../../assets/images/lucis-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}