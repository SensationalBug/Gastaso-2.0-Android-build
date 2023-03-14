import React from "react";
import { StyleSheet, Text } from "react-native";

const StyledText = ({
  style,
  children,
  userName,
  mainTitle,
  buttonText,
  surfaceTitle,
  surfaceContent,
}) => {
  const textStyles = [
    style,
    userName && styles.userName,
    mainTitle && styles.mainTitle,
    buttonText && styles.buttonText,
    surfaceTitle && styles.surfaceTitle,
    surfaceContent && styles.surfaceContent,
  ];
  return (
    <Text adjustsFontSizeToFit={true} style={textStyles}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 25,
  },
  userName: {
    fontSize: 40,
  },
  surfaceTitle: {
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  surfaceContent: {
    fontSize: 25,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default StyledText;
