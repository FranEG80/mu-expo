
const getCommonStyle = (insets) => ({
    mainContainer: {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: 'red',
        
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default getCommonStyle
