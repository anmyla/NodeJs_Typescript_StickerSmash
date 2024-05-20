import { ImageSourcePropType } from 'react-native';

export interface ImageViewerProps {
    placeholderImageSource: ImageSourcePropType;
    selectedImage: string | null;
  }

export interface ButtonProps {
  label: string;
  theme?: string; 
  onPress: () => void;
}

export interface CircleButtonProps {
  onPress: () => void;
}

export interface IconButtonProps {
  label: any;
  icon: any; 
  onPress: () => void;
}

export interface EmojiPickerProps {
  isVisible: boolean;
  children: any; 
  onClose: () => void;
}

export interface EmojiListProps {
  onSelect: any;
  onCloseModal: any;
}

export interface EmojiStickerProps {
  imageSize: number;
  stickerSource: any;
}