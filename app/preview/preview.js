import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PreviewScreen() {
  const router = useRouter();
  const { imageUri } = useLocalSearchParams();

  const handleRetake = () => {
    router.back();
  };

  const handleUsePhoto = () => {
    router.push({
      pathname: '/results/ResultsScreen',
      params: {
        imageUri,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Preview
      </Text>

      <Image
        source={{ uri: imageUri }}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={handleRetake}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>
            Retake
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleUsePhoto}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>
            Use Photo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#111',
  },

  image: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },

  primaryButton: {
    flex: 1,
    backgroundColor: '#0A84FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },

  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});