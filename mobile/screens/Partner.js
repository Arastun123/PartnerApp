import React from "react";
import { View, StyleSheet, ScrollView, Pressable, Text, Image, ImageBackground, LogBox } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Carousel from "../components/Carousel";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Partner = () => {
    let [fontsLoad] = useFonts({ 'Sen': require('../assets/font//Sen-Medium.ttf') })
    LogBox.ignoreAllLogs()
    return (
        <ScrollView>
            <View style={styles.headBox}>
                <View>
                    <Text style={styles.mainText}>Azersun</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable style={styles.btn}>
                        <AntDesign name="bells" size={32} color="#fff" />
                    </Pressable >

                    <Pressable style={styles.btn}>
                        <Ionicons name="home-outline" size={32} color="#fff" />
                    </Pressable >
                </View>
            </View>
            <View style={styles.imageBox}>
                <ImageBackground
                    source={require('../assets/imgs/mainbg.jpg')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <View>
                            <Image source={require('../assets/imgs/circule.jpg')} style={styles.image} />
                        </View>
                        <View style={styles.txtBox}>
                            <View>
                                <Text style={styles.imgTxt}>Azersun</Text>
                                <Text style={{ ...styles.imgTxt, fontFamily: 'Sen', }}>
                                    <View style={{ ...styles.circle,}}></View>
                                    <Text style={{ fontFamily: 'Sen', fontSize: 12,}}> Online</Text>
                                </Text>
                            </View>
                            <Pressable>
                                <FontAwesome5 name="heart" size={24} color="#fff" />
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <View>
                    <Text style={{ ...styles.font, fontSize: 26, marginVertical: 5}}>Об Azersun</Text>
                    <Text style={{ ...styles.font, fontSize: 16, textAlign: 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ ...styles.font, fontSize: 26,}}>Дополнительные данные</Text>
                    <View>
                        <View style={styles.list}>
                            <MaterialCommunityIcons name="handshake-outline" size={24} color="#000" />
                            <Text style={{ ...styles.listTxt }}>4 года сотрудничества</Text>
                        </View>
                        <View style={styles.list}>
                            <FontAwesome6 name="users" size={24} color="black" />
                            <Text style={styles.listTxt}>150 сотрудников</Text>
                        </View>
                        <View style={styles.list}>
                            <MaterialIcons name="verified" size={26} color="#000" />
                            <Text style={styles.listTxt}>120,000 успешных сделок</Text>
                        </View>
                        <View style={styles.list}>
                            <MaterialIcons name="verified-user" size={24} color="black" />
                            <Text style={styles.listTxt}>Подтверждённый поставщик</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="star" size={18} color="black" />
                            <Ionicons name="star" size={18} color="black" marginHorizontal={5} />
                            <Ionicons name="star" size={18} color="black" marginHorizontal={5} />
                            <Ionicons name="star" size={18} color="black" marginHorizontal={5} />
                            <Ionicons name="star-half" size={18} color="black" marginHorizontal={5} />
                        </View>
                        <Text style={{ ...styles.font, fontSize: 16, color: '#000'}}>
                            Рейтинг поставщика 4.5/5
                        </Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ ...styles.font, fontSize: 23, }}>Popular prodcuts</Text>
                    <Carousel />
                </View>
                <View>
                    <Text style={{ ...styles.font, fontSize: 24, }}>CEO</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Image source={require('../assets/imgs/ceo.jpg')} style={styles.image} />
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{ ...styles.font, fontSize: 20, color: '#000' }}>Mr. Joshgun Agayev</Text>
                            <Text style={{ ...styles.font, fontSize: 16, color: '#000' }}><Text style={{ color: '#818181' }}>Должность:</Text> Менеджер</Text>
                            <Text style={{ ...styles.font, fontSize: 16, color: '#000' }}><Text style={{ color: '#818181' }}>Город:</Text> Баку</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ ...styles.font, fontSize: 24, marginVertical: 10 }}>Контакты</Text>
                        <Text style={{ ...styles.font, fontSize: 18, color: '#000', }}>+994 55 123 45 67 г.,Баку</Text>
                        <Text style={{ ...styles.font, fontSize: 18, color: '#000', marginVertical: 5,}}>+994 12 123 45 67 г.,Баку</Text>
                        <Text style={{ ...styles.font, fontSize: 18, color: '#000', }}>+994 51 123 45 67 г.,Хачмаз</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Pressable style={{ borderWidth: 1, padding: 10, }}>
                        <Text style={{ ...styles.font, textAlign: 'center', fontSize: 20, color: '#000', fontFamily: 'Sen', }}>Посмотреть все товары</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ backgroundColor: '#1886EB', flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <Pressable style={styles.footerBtn}>
                    <Text style={{ ...styles.font, textAlign: 'center', fontSize: 20, color: '#000', }}>Запрос</Text>
                </Pressable>
                <Pressable style={styles.footerBtn}>
                    <Text style={{ ...styles.font, textAlign: 'center', fontSize: 20, color: '#000', fontFamily: 'Sen', }}>Написать</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    headBox: {
        backgroundColor: '#1886EB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 10,
    },
    font:{ fontFamily: 'Sen',  },  
    mainText: {
        fontFamily: 'Sen',
        fontSize: 38,
        color: '#FFF',
    },
    btn: {
        marginHorizontal: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 38,
        fontFamily: 'Sen',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: 140
    },
    imageBox: {
        height: 180,
        position: 'relative',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        padding: 10,
        position: 'absolute',
        left: 10,
        bottom: 5
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    imgTxt: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Sen',
    },
    txtBox: {
        marginVertical: 20,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 250,
        alignItems: 'center',
        fontFamily: 'Sen',
    },
    circle: {
        backgroundColor: "#00FF38",
        width: 6,
        height: 6,
        padding: 10,
        borderRadius: 100,
    },
    list: {
        flexDirection: 'row',
        marginVertical: 10
    },
    listTxt: {
        marginHorizontal: 10,
        fontFamily: 'Sen',
    },
    footerBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 6
    }
});
export default Partner;