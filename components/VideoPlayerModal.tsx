import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

import VideoPlayer from 'react-native-video-player';

const VideoPlayerModal = ({isModalVisible,setModalVisible}) => {
return (
    <Modal
         
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
          onRequestClose={() => {
            // alert('Modal has been closed.');
          }}>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              marginTop: 40,
            }}>
            <VideoPlayer
              video={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              videoWidth={1600}
              videoHeight={900}
              thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
            />
            <TouchableOpacity
              style={{width: '90%'}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <View style={styles.buttonContainer}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Close Video
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
)
}

const styles = StyleSheet.create({
    buttonContainer: {
      height: 40,
      width: '90%',
      backgroundColor: 'red',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
       marginTop: 30
    },
    
  });
export default VideoPlayerModal;