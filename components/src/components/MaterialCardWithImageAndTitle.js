import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare from "./MaterialButtonShare";

function MaterialCardWithImageAndTitle(props) {
  return <View style={[styles.container, props.style]}>
    <MaterialButtonShare
  style={styles.materialButtonShare}
></MaterialButtonShare>
<Text style={styles.text}>
            AA
</Text>
<Text style={styles.text2}>
    bb
</Text></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  text: {
    top: 60,
    left: 42,
    width: 200,
    height: 34,
    color: "#000",
    position: "absolute",
  },
  text2: {
    top: 16,
    left: 27,
    width: 171,
    height: 43,
    color: "#000",
    position: "absolute",
    fontSize: 20,
    
  },
  materialButtonShare: {
    top: 99,
    left: 222,
    width: 57,
    height: 53,
    marginRight: 70,
    position: "absolute"
  },
});

export default MaterialCardWithImageAndTitle;
