import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Auth } from 'aws-amplify'
import Authenticator from 'aws-amplify-react-native/dist/Auth/Authenticator'

const getRandomProfilePicture = async() => {
    const response = await fetch ('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
}

const SignupSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    date: yup.string()
})

const SignupFormik = ({navigation}) => {
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChangeValue = (event, values) => {
        setDate(values);
        setIsPickerShow(false);
    };

    async function signUp( username, email, password, date ) {
        
        try {
            await Auth.signUp({
                username,
                password,
                date,
                attributes: {email}
            });
            console.log('signed up successfully');
            navigation.navigate('EmailConfirmScreen', {username})
            
        } catch (error) {
            Alert.alert(error.message)
        }
    }

  return (
    <Formik 
        initialValues={{ username: '', email: '',password: '', date: '' }}
        onSubmit={(values) => {
            signUp( values.username, values.email, date, values.password);
        }}
        validateOnMount={true}
        validationSchema={SignupSchema}
    >
        
        {({handleChange, handleBlur, handleSubmit, errors, values, isValid}) => (
            <>
                <View style={{marginHorizontal: 25, paddingHorizontal: 20}}>

                    <Text style={{color: 'white', textAlign: 'center', fontSize: 25 }}>
                        Create your account
                    </Text>

                    <View style={styles.emailContainer
                        }>
                        <TextInput
                            name='username'
                            placeholder='Username'
                            placeholderTextColor={'gray'}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            style={{
                                fontSize: 18,
                                color: '#2089dc',
                                fontWeight: '600'
                            }}
                        />
                        
                    </View>

                    <View style={[styles.emailContainer, 
                        {borderBottomColor: 
                            values.email.length < 1 || Validator.validate(values.email)
                                ? '#CCC'
                                : 'red'
                        }
                    ]}>
                        <TextInput
                            name='email'
                            placeholder='Email'
                            placeholderTextColor={'gray'}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={{
                                fontSize: 18,
                                color: '#2089dc',
                                fontWeight: '600'
                            }}
                        />
                    </View>
                    
                    <View style={[styles.passwordContainer, {
                        borderBottomColor: 
                            1 > values.password.length || values.password.length >= 8
                                ? '#CCC'
                                : 'red'
                    }]}>
                        <TextInput
                            name= "password"
                            placeholder='Password'
                            placeholderTextColor={'gray'}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={{
                                fontSize: 18,
                                color: '#2089dc',
                                fontWeight: '600'
                            }}
                            
                        />
                    </View>

                    <View style={styles.birthContainer} >
                        <TextInput 
                            name= "date"
                            showSoftInputOnFocus={false}
                            onTouchStart={() => showPicker()}
                            onTouchCancel={() => {
                                setDate(values)
                                setIsPickerShow(false);
                            }}
                            placeholder='Date of birth'
                            placeholderTextColor={'gray'}
                            onChangeText={onChangeValue}
                            onBlur={handleBlur('date')}
                            value={
                                date.toDateString().split(' ').slice(1, 4).join(' / ')
                                //: date.toDateString().split(' ').slice(1, 4).join(' / ')
                            }
                            style={{
                                fontSize: 18,
                                color: '#2089dc',
                                fontWeight: '600'
                            }}
                        />
                    </View>

                    {isPickerShow && (
                        <DateTimePicker
                            display="spinner"
                            value={date}
                            mode={'date'}
                            maximumDate={new Date(2100, 1, 1)}
                            minimumDate={new Date(1950, 1, 1)} 
                            onChange={onChangeValue}
                        />
                    )}

                    <Text style={{color: 'gray', marginTop: 5, marginLeft: 10, fontSize: 15, fontWeight: '600'}}>Date of birth</Text>

                    <View style={{marginTop: 55}} >
                        <Button onPress={handleSubmit} disabled={!isValid} title="Sign up"  />
                    </View>
                </View>
            </>
        )}
    </Formik>
  )
}

const styles = StyleSheet.create({
    emailContainer: {
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 9,
        paddingLeft: 10
    },

    passwordContainer: {
        marginTop: 30,
        borderBottomWidth: 1.2,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        paddingLeft: 10
    },

    birthContainer: {
        marginTop: 30,
        borderBottomWidth: 1.2,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        paddingLeft: 10,
    },
})

export default SignupFormik