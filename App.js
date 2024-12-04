import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Supplier from './src/screens/Supplier';
import Category from './src/screens/Category';
import RentalProduct from './src/screens/RentalProducts';
import SaleProduct from './src/screens/SaleProduct';
import Policy from './src/screens/Policy';
import Contact from './src/screens/Contact';
import Login from './src/screens/Login';
import SignUp from './src/screens/Signup';
import Account from './src/screens/Account';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra token khi khởi chạy ứng dụng
  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem('token');
    setIsLoggedIn(!!token); // Nếu có token => Đã đăng nhập
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Xử lý chức năng logout
  const handleLogout = async (navigation) => {
    await AsyncStorage.removeItem('token'); // Xóa token khỏi AsyncStorage
    setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập
    Alert.alert('Đăng xuất thành công!');
  
    navigation.navigate('Home'); // Điều hướng về màn hình Home
  };
  
  

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
        <Drawer.Screen name="Supplier" component={Supplier} options={{ headerShown: true }} />
        <Drawer.Screen name="Category" component={Category} options={{ headerShown: true }} />
        <Drawer.Screen name="RentalProduct" component={RentalProduct} options={{ headerShown: true }} />
        <Drawer.Screen name="SaleProduct" component={SaleProduct} options={{ headerShown: true }} />
        <Drawer.Screen name="Policy" component={Policy} options={{ headerShown: true }} />
        <Drawer.Screen name="Favorites" component={SettingsScreen} options={{ headerShown: true }} />
        <Drawer.Screen name="Contact" component={Contact} options={{ headerShown: true }} />

        {/* Hiển thị Login và SignUp khi chưa đăng nhập */}
        {!isLoggedIn && (
          <>
            <Drawer.Screen name="Login" component={(props) => (
              <Login {...props} onLoginSuccess={checkLoginStatus} />
            )} options={{ headerShown: true }} />
            <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown: true }} />
          </>
        )}

        {/* Hiển thị Account khi đã đăng nhập */}
        {isLoggedIn && (
          <>
            <Drawer.Screen name="Account" component={Account} options={{ headerShown: true }} />
            <Drawer.Screen
              name="Logout"
              component={({ navigation }) => {
                useEffect(() => {
                  handleLogout(navigation);
                }, []);
                return null; // Không cần giao diện, chỉ cần thực thi logout
              }}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
