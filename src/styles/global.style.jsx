import React from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";

export const { width } = Dimensions.get("window");
export const w33Percent = width * 0.33333;
export const w50Percent = width * 0.5;

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        backgroundColor: "black",
        alignItems: "center",
    },
    playerContainer: {
        height: 300,
        width: width - 40,
    },
    player: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        margin: 40,
    },
    xPadding: {
        paddingInline: 20,
    },
    yPadding: {
        paddingBlock: 20,
    },
    zPadding: {
        padding: 20,
    },
    filmAspectRatio: {
        flex: 1,
        aspectRatio: 340 / 458,
    },
});
