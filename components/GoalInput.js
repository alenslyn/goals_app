import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    if (!enteredText.trim()) {
      alert("Course goal is empty!");
      return;
    }
    props.onAddGoal(enteredText);
    setEnteredText("");
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
    <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <View style={styles.buttonContainer}> 
     
      <View style={styles.button}>
         <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
         </View>
         <View style={styles.button}> 
       <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
       </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {

    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
    color: '#120438',
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
