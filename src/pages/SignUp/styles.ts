import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 20,
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 16
  },

  btn: {
    backgroundColor: 'green',
    alignItems: 'center',
    width: 100
  },

  btnText: {
    color: 'white',
  },

  inputContainer: {
    width: 350,
    gap: 20,
  }
});
