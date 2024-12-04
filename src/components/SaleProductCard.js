import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SaleProductCard = ({ item, isFavorite, onToggleFavorite }) => {
    return (
        <View style={styles.productContainer}>
            <TouchableOpacity
                style={styles.heartIcon}
                onPress={() => onToggleFavorite(item)}
            >
                <Ionicons
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    size={24}
                    color={isFavorite ? 'red' : 'gray'}
                />
            </TouchableOpacity>

            <Image source={{ uri: item.listImage[0]?.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.productText}>Giá mua: {item.priceBuy || 'Không có'} đ</Text>
                <Text style={styles.productText}>Đánh giá: {item.rating || 0} ⭐</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    productImage: {
        width: 100,
        height: 100,
    },
    productDetails: {
        flex: 1,
        padding: 10,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    productText: {
        fontSize: 14,
        marginBottom: 2,
    },
});

export default SaleProductCard;