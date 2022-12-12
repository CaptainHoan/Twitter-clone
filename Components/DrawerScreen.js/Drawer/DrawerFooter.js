import { View, Text, StyleSheet, Switch } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Modal from "react-native-modal";
import ToggleSwitch from 'toggle-switch-react-native'

const DrawerFooter = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(false)
   
    const setModal = () => {
        setModalVisible(!isModalVisible)
    }

    const [toggle, setToggle] = useState(false)
    const [darkmode, setDarkmode] = useState(true)

  return (
    <View>
        <View style={{height: 1, backgroundColor: 'gray', marginTop: 20}}></View>
        <View 
            style={{
               flexDirection: 'row',
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 10,
                paddingTop: 10 
            }}
        >
            <View>
                <TouchableOpacity onPress={setModal}>
                    <FontAwesome5 name="lightbulb" size={24} color='white' />
                </TouchableOpacity>
                <Modal 
                    isVisible={isModalVisible} 
                    onBackdropPress={() => setModal()}
                    swipeDirection={['down', 'up']}
                    style={{
                        backgroundColor: 'black',
                        marginHorizontal: 0,
                        marginTop: 450,
                        marginBottom: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        
                     }}
                >
                    <View style={{
                        marginHorizontal: 30                            
                    }}>
                        <Text style={{color: 'white', 
                            fontSize: 20, 
                            fontWeight: '700',
                            alignSelf: 'center',
                            marginBottom: 20
                        }}>Dark mode</Text>

                        {/**Darkmode Switch using 'Appearance' not 
                         + Redux
                         + Context API
                         */}
                        <View style={[styles.darkContainer, {marginBottom: 20}]}>
                            <Text style={styles.textContainer}>Dark mode</Text>
                            <ToggleSwitch
                                isOn={darkmode}
                                onColor="#04FD81"
                                offColor="gray"
                                size="large"
                                onToggle={() => {
                                    setDarkmode(!darkmode)
                                }}
                                animationSpeed={100}
                              />
                        </View>
                        {/**Device settings Switch */}
                        <View style={styles.darkContainer}>
                            <Text style={styles.textContainer}>Use device setting</Text>
                            <ToggleSwitch
                                isOn={toggle}
                                onColor="#04FD81"
                                offColor="gray"
                                size="large"
                                onToggle={() => setToggle(!toggle)}
                                animationSpeed={100}
                              />
                        
                        </View>
                        <Text 
                            style={[styles.textContainer, {
                                color: 'gray', 
                                fontSize: 16, 
                                marginTop: 15
                            }]}>
                                Set Dark mode to use the Light or Dark theme in your device Display & Brightness settings
                            </Text>
                    </View>
                </Modal>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('QRcodeScreen')}>
                <Ionicons name="ios-qr-code-sharp" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </View>  
  )
}

const styles = StyleSheet.create({
    darkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    }
})


export default DrawerFooter