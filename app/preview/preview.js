import { useLocalSearchParams, useRouter } from 'expo-router';

import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { previewStyles } from './preview-styles';

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
    <View style={previewStyles.container}>
      <Text style={previewStyles.title}>
        Preview
      </Text>

      <Image
        source={{ uri: imageUri }}
        style={previewStyles.image}
      />

      <View style={previewStyles.buttonContainer}>
        <TouchableOpacity
          style={previewStyles.secondaryButton}
          onPress={handleRetake}
          activeOpacity={0.8}
        >
          <Text style={previewStyles.secondaryButtonText}>
            Retake
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={previewStyles.primaryButton}
          onPress={handleUsePhoto}
          activeOpacity={0.8}
        >
          <Text style={previewStyles.primaryButtonText}>
            Use Photo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}