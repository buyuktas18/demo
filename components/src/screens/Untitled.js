import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import MaterialButtonShare from "../components/MaterialButtonShare";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Start from scratch{"\n"}
        {"\n"}or{"\n"}
        {"\n"}Drag and drop a Sketch file
      </Text>
      <View style={styles.materialCardWithImageAndTitleStack}>
        <MaterialCardWithImageAndTitle
          style={styles.materialCardWithImageAndTitle}
        ></MaterialCardWithImageAndTitle>
        <MaterialButtonShare
          style={styles.materialButtonShare}
        ></MaterialButtonShare>
        <TextInput
          placeholder="Lorem Ipsum"
          style={styles.textInput}
        ></TextInput>
        <TextInput
          placeholder="Lorem Ipsum"
          style={styles.textInput2}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#121212",
    fontSize: 24,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 346,
    alignSelf: "center"
  },
  materialCardWithImageAndTitle: {
    top: 0,
    width: 359,
    height: 166,
    position: "absolute",
    opacity: 0.55,
    borderRadius: 27,
    borderColor: "#000000",
    borderWidth: 4,
    borderStyle: "solid",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.79,
    left: 0
  },
  materialButtonShare: {
    top: 99,
    left: 286,
    width: 57,
    height: 53,
    position: "absolute"
  },
  textInput: {
    top: 60,
    left: 42,
    width: 200,
    height: 34,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  textInput2: {
    top: 16,
    left: 27,
    width: 171,
    height: 43,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-700"
  },
  materialCardWithImageAndTitleStack: {
    width: 359,
    height: 166,
    marginTop: 87,
    marginLeft: 8
  }
});

export default Untitled;
