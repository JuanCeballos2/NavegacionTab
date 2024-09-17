// screens/ImageScreen.tsx
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria De Imagenes</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Imágenes locales o desde una URL */}
        <Image
          style={styles.image}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Cristiano_Ronaldo_20120609.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Cristiano_Ronaldo_WC2022_-_02.jpg/640px-Cristiano_Ronaldo_WC2022_-_02.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/media/E4l1PqYWEAE_dX3.jpg:large' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ronaldo_in_2018.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Cristiano_Ronaldo_2%2C_2010.jpg' }} // Image from URL
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://estaticos-cdn.prensaiberica.es/clip/d1c7d7ea-17c1-4a18-8a16-39ae656e47e6_alta-libre-aspect-ratio_default_0.jpg' }} // Image from URL
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollViewContainer: {
    alignItems: 'center', // Center the images horizontally
  },
  image: {
    width: 210,
    height: 250,
    marginBottom: 15,
  },
});

export default ImageScreen;
