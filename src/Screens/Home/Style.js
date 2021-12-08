import { StyleSheet, Dimensions } from "react-native";
import COLORS from '../../Constants/colors';
const { width } = Dimensions.get('screen');

export default StyleSheet.create({

    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },

    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 12,
    },

    sortBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },

    optionsCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
    },

    optionsCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },

    optionListsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },

    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
    },

    activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },

    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
    },

    card: {
        height: '100%',
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },

    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
    },

    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: COLORS.grey },
})