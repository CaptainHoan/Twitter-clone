import { View, Text, TouchableOpacity, StyleSheet, Share } from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { showMessage, hideMessage, FlashMessage } from "react-native-flash-message";

const UploadShare = ({post}) => {

    const [isModalVisible, setModalVisible] = useState(false)
   
    const setModal = () => {
        setModalVisible(!isModalVisible)
    }

    const onShare = async () => {
        try {
          const result = await Share.share({
            message: `${post.name} on Twitter \n ${post.post}`,
            url: 'testapp://'           
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

  return (
    <View>
        <TouchableOpacity onPress={setModal}>
            <Feather name="upload" size={20} color="gray" />
        </TouchableOpacity>

        <Modal 
            isVisible={isModalVisible} 
            onBackdropPress={() => setModal()}
            swipeDirection={['down', 'up']}
            swipeThreshold={400}
            scrollOffsetMax={400}
            style={{
              backgroundColor: 'black',
              marginHorizontal: 0,
              marginTop: 400,
              marginBottom: -600,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              flex: 1
            }}
            onSwipeComplete={({down, up}) => setModal()}
         >
            <View style={{
                marginHorizontal: 30                            
              }}>
                <Text style={[styles.textContainer, {
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 20
                }]}>Share Tweet</Text>
                
                <View style={[styles.mainContainer, {
                    marginBottom: 20
                }]}>
                    <SimpleLineIcons name="envelope" size={27} color="gray" style={{marginRight: 25}}/>
                    <Text style={[styles.textContainer, {fontSize: 17}]}>Send via Direct Message</Text>
                </View>

                <View style={styles.mainContainer}>
                    <View>                     
                        <TouchableOpacity 
                            style={styles.buttonContainer} 
                            onPress={() => {
                                setModal();
                                showMessage({                                   
                                    message: 'Tweet added to your Bookmarks',
                                    titleStyle: {
                                        fontSize: 18,
                                        fontWeight: '700',
                                        color: 'white',
                                        alignItems: 'center'
                                    },
                                    style: {
                                        marginTop: 20,
                                        paddingVertical: 20,
                                        borderRadius: 15,                                       
                                    },
                                    backgroundColor: '#303F9F',
                                    duration: 4096,
                                    animationDuration: 300,
                                    floating: true,
                                    icon: 'success', 
                                    position: "top" 
                                })
                            }}
                        >
                            <Feather name="bookmark" size={35} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.shareContainer}>Bookmark</Text> 
                    </View>
                    
                    <View>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={() => {
                                setModal();
                                showMessage({
                                    message: 'Copied to Clipboard',
                                    titleStyle: {
                                        fontSize: 18,
                                        fontWeight: '700',
                                        color: 'white',
                                        alignItems: 'center'
                                    },
                                    style: {
                                        marginTop: 20,
                                        paddingVertical: 20,
                                        borderRadius: 15,
                                        
                                    },
                                    backgroundColor: '#303F9F',
                                    duration: 4096,
                                    animationDuration: 300,
                                    floating: true,
                                    icon: 'success', 
                                    position: "top"
                                })
                            }}
                        >
                            <Entypo name="link" size={35} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.shareContainer}>Copy Link</Text>                         
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={styles.buttonContainer}
                            onPress={onShare}
                        >
                            <Feather name="share" size={35} color="white" />
                        </TouchableOpacity>
                        <Text style={[styles.shareContainer]}>Share via...</Text>                         
                    </View>
                </View>
                <TouchableOpacity 
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        backgroundColor: 'transparent',
                        borderRadius: 50,
                        paddingVertical: 10
                    }}
                    onPress={setModal}
                    >
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Cancel</Text>
                </TouchableOpacity>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
                <Text>this is black</Text>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    textContainer: {
        color: 'white',
        fontWeight: '700'
    },

    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    
    buttonContainer: {
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,
        marginRight: 30,
        borderRadius: 50,
        marginBottom: 8
    },

    shareContainer: {
        color: 'white',
        fontWeight: '700',
    }
})

export default UploadShare