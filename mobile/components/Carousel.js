import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useFonts } from 'expo-font';

const CarouselComp = () => {
    let [fontsLoad] = useFonts({ 'Sen': require('../assets/font//Sen-Medium.ttf') })

    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([
        {
            title: "Azersun yag",
            img: "img1.jpg",
            desc: "500+ stok",
        },
        {
            title: "Azersun yag",
            img: "img2.jpg",
            desc: "500+ stok",
        },
        {
            title: "Azersun yag",
            img: "img3.jpg",
            desc: "500+ stok",
        },
    ]);

    const _renderItem = ({ item, index }) => {
        const imagePath = `../assets/imgs/${item.img}`;
        return (
            <View>
                <Image
                    source={require(`../assets/imgs/img1.jpg`)}
                    style={{
                        width: 150,
                        height: 150,
                        padding: 50,
                    }}
                />
                <Text style={{ fontSize: 20, fontFamily: 'Sen', }}>{item.title}</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Sen', }}>{item.desc}</Text>
            </View>
            
        );
    };

    return (
        <View
            style={{
                marginVertical: 20,
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'start',
                    borderRadius: 10,
                    width: 360,
                    borderWidth: 1.5,
                    borderColor: '#eee',
                    padding: 10,
                }}
            >
                <Carousel
                    layout={"default"}
                    ref={(ref) => (this.carousel = ref)}
                    data={carouselItems}
                    sliderWidth={160}
                    itemWidth={160}
                    renderItem={_renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            </View>
        </View>
    );
};

export default CarouselComp;
