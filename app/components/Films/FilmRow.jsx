import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors } from "@utils/Constants";
import { Entypo } from "@expo/vector-icons";
import { width, w33Percent } from "@styles/global.style";
import { useFonts } from "expo-font";

const film3Items = w33Percent - 10;
const FilmRow = ({ title, subtitle, films, linkTo }) => {
    const [fontsLoaded] = useFonts({
        creatoBoldItalic: require("@fonts/CreatoDisplay-BlackItalic.otf"),
    });
    return (
        <View style={styles.container}>
            {linkTo ? (
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="pl-[20]"
                    style={styles.headerTitle}
                    onPress={linkTo}
                >
                    <Text style={styles.title}>{title}</Text>
                    <Entypo name="chevron-right" size={20} color="white" />
                </TouchableOpacity>
            ) : (
                <View className="pl-[20]" style={styles.headerTitle}>
                    <Text style={[styles.title]}>{title}</Text>
                </View>
            )}
            {subtitle ? (
                <Text className="pl-[20]" style={styles.subtitle}>
                    {subtitle}
                </Text>
            ) : null}
            <FlatList
                style={styles.flatList}
                data={films}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View className="p-0" style={styles.filmItem}>
                        <Image
                            className="w-full h-full rounded"
                            resizeMode="cover"
                            source={{ uri: item.image }}
                        ></Image>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    container: { marginBottom: 30 },
    subtitle: {
        fontSize: 13,
        color: colors.customGray,
    },
    flatList: { marginTop: 15 },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.customWhite,
    },
    filmItem: {
        width: film3Items,
        aspectRatio: 320 / 480,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
    },
});

export default FilmRow;
