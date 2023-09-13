import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
   setEnteredGoalText("");
    //console.log(enteredGoalText)
  }


  return (
  <Modal visible= {props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image}
        source={require('../assets/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer} >
          <View style={styles.button}>
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
          color='#b180f0'
        />
        </View>
        <View style={styles.button}>
          <Button title="Cancel"
          onPress={props.onCancel}
          color='#f31282'/>
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
    alignItems: 'center',
    borderBottomWidth: 1,
    padding:16, 
    backgroundColor:'#311b6b',
    marginBottom: 1,   
    height:'90%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '90%',
    padding: 13,
    color:'#120438',
    backgroundColor:'#e4d0ff',
    borderRadius:6,
    padding:16,
     
  },
  buttonContainer:{
    marginTop:20,
    flexDirection: "row", 
  }, 
  button:{
    width:"35%", 
    marginHorizontal:8, 
  }, 
  image:{
    width:100, 
    height:100,
    margin:20,
  }
});
