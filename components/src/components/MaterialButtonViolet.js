import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function MaterialButtonViolet(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  button: {
    width: 0,
    height: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: 50,
    marginTop: 18
  }
});

export default MaterialButtonViolet;
