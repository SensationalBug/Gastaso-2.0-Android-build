import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useField } from "formik";

const FormikInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
        {...props}
        value={field.value}
        error={meta.error}
        style={styles.textInput}
        onChangeText={(value) => helpers.setValue(value)}
      />
      {meta.error && <Text style={styles.textError}>{meta.error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#eeefff",
  },
});

export default FormikInput;
