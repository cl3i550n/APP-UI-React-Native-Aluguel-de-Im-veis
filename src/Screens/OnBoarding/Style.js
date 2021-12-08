import { StyleSheet } from "react-native";
import COLORS from '../../Constants/colors';

export default StyleSheet.create({

    image: {
        height: 420,
        width: '100%',
        borderBottomLeftRadius: 100,
    },

    indicatorContainer: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    indicator: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        marginHorizontal: 5,
    },

    indicatorActive: {
        backgroundColor: COLORS.dark,
    },

    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: 'black',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: { fontSize: 32, fontWeight: 'bold' },
    textStyle: { fontSize: 16, color: COLORS.grey },
})