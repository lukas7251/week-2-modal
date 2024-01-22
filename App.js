import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "./modal.js";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default App;
