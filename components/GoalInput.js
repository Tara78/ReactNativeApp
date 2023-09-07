import { StyleSheet, View, TextInput, Button, Modal } from "react-native"; 
import { useState } from "react";

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
function addGoalHandler (){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
}
  return (
    <Modal>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
      />
    </View>
    </Modal>
    )
}

export default GoalInput; 
const styles= StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#cccc",
      },
      textInput: {
        borderColor: "#cccc",
        width: "80%",
        borderWidth: 1,
        marginRight: 8,
        padding: 8,
      }
})