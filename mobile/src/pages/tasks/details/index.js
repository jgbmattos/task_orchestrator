import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
//import logoImg from '../../assets/logo.png';
import styles from './styles';



export default function ProductList({route}) {
    const navigation = useNavigation();
    const product = route.params;
    function navigateToList(){
        navigation.navigate('TasksList');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={navigateToList}
                >
                    <Feather style={styles.returnArrowIcon} name="arrow-left" size={30} color="#4293f5"></Feather>
                </TouchableOpacity>
                <Text style={styles.productName}>{product.name}</Text>
            </View>

            <Image style={styles.image} source={{uri: product.img_url}} />
            <View style={styles.product}>
                <View style={styles.column1}>
                    <Text style={styles.productTitle}>Preço de custo</Text>
                    <Text style={styles.productCostPrice}>{product.cost_price}</Text>
                </View>
                <View style={styles.column2}>
                    <Text style={styles.productTitle}>Preço de venda</Text>
                    <Text style={styles.productSalePrice}>{product.sale_price}</Text>
                </View>
                <View style={styles.column2}>
                    <Text style={styles.productTitle}>Estoque</Text>
                    <Text style={styles.productStock}>{product.stock}</Text>
                </View>
            </View>
        </View>
    );
}