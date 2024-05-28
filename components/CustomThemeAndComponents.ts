import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        secondary: 'black',
        tertiary: 'navy',
    },
}

export const CustomStyles = {
    input: {
        borderColor: CustomTheme.colors.secondary,
        backgroundColor: CustomTheme.colors.primary,
        marginTop: 45,
        width:300,
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize:15,
        borderRadius: 50,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        overflow: 'hidden',
    },
}

// export default CustomStyles;