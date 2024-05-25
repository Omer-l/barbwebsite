import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        secondary: 'black',
        tertiary: 'navy',
    },
}

export default customTheme;