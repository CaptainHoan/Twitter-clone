import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'
import { Auth } from 'aws-amplify'

const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(8).required()
})

async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log('signed in successfully')
    } catch (error) {
        Alert.alert(error.message)
    }
}

const LoginFormik = ({navigation}) => {
  return (
    <Formik 
        initialValues={{username: '', password: ''}}
        onSubmit={(values) => {
           signIn(values.username, values.password)
        }}
        validateOnMount={true}
        validationSchema={LoginSchema}
    >
        {({handleChange, handleBlur, handleSubmit, errors, values, isValid}) => (
            <>
                <View style={{marginHorizontal: 25, paddingHorizontal: 20}}>

                    <Text style={{color: 'white', textAlign: 'center', fontSize: 25 }}>
                        To get started, enter your email and password
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
                                fontSize: 19,
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

                    <View style={styles.loginButton}>
                        <Button title='Log In' disabled={!isValid} onPress={handleSubmit} />
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
        paddingBottom: 10,
        paddingLeft: 10
    },

    passwordContainer: {
        marginTop: 30,
        borderBottomWidth: 1.2,
        borderBottomColor: '#CCC',
        paddingBottom: 9,
        paddingLeft: 10,
        marginBottom: 50
    },

})

export default LoginFormik