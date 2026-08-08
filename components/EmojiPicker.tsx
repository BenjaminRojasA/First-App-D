import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function EmojiPicker({isVisible, onClose, children}: Props) {
  return (
    <Modal animationType="slide"  transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Pick an Emoji</Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name="close" size={24} color="#000" />
                <View style={styles.emojiContainer}>{children}</View>
                </Pressable>
            </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        position: 'absolute',
    },
    titleContainer: {
        height: "16%",
        backgroundColor: '#464C55',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#000',
        fontSize: 16,
    },
    
});