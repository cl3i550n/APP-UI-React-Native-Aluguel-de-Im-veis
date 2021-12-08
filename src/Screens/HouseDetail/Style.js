import { StyleSheet, Dimensions } from "react-native";
import COLORS from '../../Constants/colors';
const { width } = Dimensions.get('screen');

export default StyleSheet.create({

    backgroundImageContainer: {
        elevation: 20,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        height: 350,
    },

    backgroundImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },

    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    headerBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ratingTag: {
        height: 30,
        width: 35,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    virtualTag: {
        top: -20,
        width: 120,
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.dark,
        justifyContent: 'center',
        alignItems: 'center',
    },

    interiorImage: {
        width: width / 3 - 20,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
    },

    footer: {
        height: 70,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    bookNowBtn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.dark,
        borderRadius: 10,
        paddingHorizontal: 20,
    },

    detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: COLORS.grey },
})