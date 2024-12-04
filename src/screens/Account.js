import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến trang Tài khoản!</Text>
      <Text style={styles.content}>Đây là nơi bạn có thể quản lý thông tin cá nhân của mình.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Account;
