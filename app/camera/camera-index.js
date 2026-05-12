import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { Button, Text, View } from 'react-native';

import { cameraStyles } from './camera-styles';

export default function CameraScreen() {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={cameraStyles.container}>
        <Text>Necesitamos permiso para usar la cámara</Text>

        <Button
          title="Dar permiso"
          onPress={requestPermission}
        />
      </View>
    );
  }

  const capture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
      });

      console.log('📸 Foto tomada:', photo);

      router.push({
        pathname: '/preview/preview',
        params: {
          imageUri: photo.uri,
        },
      });

      // Aquí luego conectamos backend
      // sendImageToBackend(photo.base64);
    }
  };

  return (
    <View style={cameraStyles.container}>
      <Text style={cameraStyles.title}>
        Cámara
      </Text>

      <CameraView
        ref={cameraRef}
        style={cameraStyles.camera}
      />

      <Button
        title="Tomar foto"
        onPress={capture}
      />
    </View>
  );
}