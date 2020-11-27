import {StyleSheet} from 'react-native';

export const Colors = {
  red: 'red',
  orange: 'orange',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
  navy: 'navy',
  purple: 'purple',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

const redStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.red,
  },
});

const orangeStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.orange,
  },
});
const yellowStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.yellow,
  },
});
const greenStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.green,
  },
});
const blueStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.blue,
  },
});
const navyStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.navy,
  },
});
const purpleStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.purple,
  },
});

export default function getStyleSheet(useDarkTheme) {
  let result = redStyleSheet;
  if (useDarkTheme === 'RED') {
    result = orangeStyleSheet;
  } else if (useDarkTheme === 'ORANGE') {
    result = yellowStyleSheet;
  } else if (useDarkTheme === 'YELLOW') {
    result = greenStyleSheet;
  } else if (useDarkTheme === 'GREEN') {
    result = blueStyleSheet;
  } else if (useDarkTheme === 'BLUE') {
    result = navyStyleSheet;
  } else if (useDarkTheme === 'NAVY') {
    result = purpleStyleSheet;
  } else if (useDarkTheme === 'PURPLE') {
    result = redStyleSheet;
  }
  return result;
}
