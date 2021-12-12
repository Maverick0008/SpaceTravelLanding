import React from 'react'
import {Icon,Text, Container,Form,FormButton,FormContent,FormInput,FormLabel,FormTitle,FormWrap } from './SinginElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">SpaceTravel</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormTitle>Sign in to your account</FormTitle>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required/>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
