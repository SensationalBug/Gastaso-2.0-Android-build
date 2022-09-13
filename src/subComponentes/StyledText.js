import React from "react";
import { StyleSheet, Text } from "react-native";

const StyledText = ({
  children,
  userName,
  mainTitle,
  surfaceTitle,
  surfaceContent,
}) => {
  const textStyles = [
    styles,
    userName && styles.userName,
    mainTitle && styles.mainTitle,
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
});

export default StyledText;
