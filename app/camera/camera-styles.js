import { StyleSheet } from 'react-native';

export const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  camera: {
    width: '100%',
    height: 400,
    marginBottom: 20,
  },
  preview: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
});