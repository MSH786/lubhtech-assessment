import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

import LoginForm from '../../../../components/organisms/login-form';
import { isDarkTheme } from '../../../../utilities/get-theme';
import { styles } from './styles';

const Login = () => {
  return (
    <SafeAreaView
      style={[
        styles.loginContainer,
        { backgroundColor: isDarkTheme() ? '#000' : '#fff' },
      ]}
    >
      <ScrollView
        style={styles.innerContainer}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
