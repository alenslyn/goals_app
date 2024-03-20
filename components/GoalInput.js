import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
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
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <View style={styles.buttonContainer}> 
      <View style={styles.button}> 
       <Button title="Add goal" onPress={addGoalHandler} />
       </View>
      <View style={styles.button}>
         <Button color="salmon" title="Cancel" onPress={props.onCancel}/>
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
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
