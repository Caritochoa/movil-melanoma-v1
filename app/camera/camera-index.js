import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

export default function CameraScreen() {
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={cameracameraStyles.container}>
        <Text>Necesitamos permiso para usar la cámara</Text>
        <Button title="Dar permiso" onPress={requestPermission} />
      </View>
    );
  }

  const capture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
      });

      console.log("📸 Foto tomada:", photo);
      setImage(photo.uri);

      // Aquí luego conectamos backend
      // sendImageToBackend(photo.base64);
    }
  };

  const goToResults = () => {
    router.push('/results');
  };

  return (
    <View style={cameraStyles.container}>
      <Text style={cameraStyles.title}>Cámara</Text>

      <CameraView
        ref={cameraRef}
        style={cameraStyles.camera}
      />

      <Button title="Tomar foto" onPress={capture} />

      {image && (
        <View style={cameraStyles.preview}>
          <Text>Foto capturada:</Text>
          <Image source={{ uri: image }} style={cameraStyles.image} />
        </View>
      )}

      <Button title="Ver resultados" onPress={goToResults} />
    </View>
  );
}