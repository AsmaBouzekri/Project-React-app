
import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'



// constants
import { images, theme } from '../../constants';
const { onboarding1, onboarding2, onboarding3 } = images;

// theme
const { COLORS, SIZES } = theme;

const onBoardings = [
    {
        title: "Gérez votre budget",
        description: "Organisez vos finances et garder le controle de votre argent avec notre application flexible et facile à utiliser.",
        img: onboarding1
    },
    {
        title: "Choisissez vos dates",
        description: "Décidez quand vous voulez que votre budget commence et se termine avec des dates personnalisable",
        img: onboarding2
    },
    {
        title: "Recervoir des Notifications",
        description: "Recevoir et Conslter les notifications ",
        img: onboarding3
    }
];

const OnBoarding = () => {
    const Navigation = useNavigation()
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                    >
                        <View
                            style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    bottom: '10%',
                                    width: "45%",
                                    height: "45%",
                                }}
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: '20%',
                                left: 50,
                                right: 50
                            }}
                        >
                            <Text style={{
                                fontFamily: 'Cochin',
                                color: COLORS.gray,
                                textAlign: 'center',
                                marginTop: SIZES.font,
                                fontSize: 20,
                                fontWeight: 'bold'

                            }}
                            >
                                {item.title}
                            </Text>

                            <Text style={{
                                textAlign: 'center',
                                marginTop: SIZES.base,
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold'
                            }}
                            >
                                {item.description}
                            </Text>

                        </View>
                        {/* Button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 10,
                                width: 150,
                                height: 30,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                borderTopLeftRadius: 50,
                                borderBottomLeftRadius: 50,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                backgroundColor: 'gray'
                            }}
                            onPress={() => {
                                Navigation.navigate('Screen')
                            }}
                        >
                            <Text style={{ fontFamily: 'Cochin', color: COLORS.white }}>
                                {completed ? "Let's Go" : "Skip"}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    imageAndTextContainer: {
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 700 ? '25%' : '20%',
    },
    //{/* point */}
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: '#000000',
        marginHorizontal: SIZES.radius / 2
    }
});

export default OnBoarding;
