import { StyleSheet, Image } from "react-native";
import { ImageViewerProps } from "./IProps";

const ImageViewer: React.FC<ImageViewerProps> = ({
  placeholderImageSource,
  selectedImage,
}) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 540,
    borderRadius: 18,
  },
});

export default ImageViewer;
