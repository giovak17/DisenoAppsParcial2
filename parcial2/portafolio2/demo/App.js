import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from "expo-image-picker";
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';

const PlaceholderImage = require("./assets/images/images.jpeg");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync =  async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    })
    if (!result.canceled) {
        console.log(result)
        setSelectedImage(result.assets[0].uri);
        setShowAppOptions(true);
    }else{
        alert("You did not select any image")
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onSaveImageAsync = async () => {
    
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <ImageViewer selectedImage={selectedImage} PlaceholderImageSource={PlaceholderImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label='Save' onPress={onSaveImageAsync} />
          </View>
        </View>
      ): (<View style={styles.footer_container}>
        <Button onPress={pickImageAsync} theme = "primary" label="Chose a Photo" />
        <Button onPress={() => setShowAppOptions(true)} label="Use this Photo" />
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>

      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4056',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_props: {
    color: "#FFFFFF",
  },
  image_container: {
    flex: 1,
    paddingTop: 58,
  },
  footer_container: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
