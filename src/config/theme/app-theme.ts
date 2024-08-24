import { StyleSheet } from 'react-native';


export const colors = {
  background: '#fafdea',
  color2: '#ccc9aa',
  color3: '#360b41',
  color4: '#4f2c4d',
  color5: '#7d677e',

  white: 'white',
  black: 'black',
  warning: '#a93545'
};

export const globlaStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 36,
    color: colors.black,
    textAlign: 'center'
  }
});
