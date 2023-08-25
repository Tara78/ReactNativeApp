import { StyleSheet, View, Text } from "react-native"; 

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}>{props.text}</Text>
  </View>
  )
}

export default GoalItem; 

const styles= StyleSheet.create({
    goalItem: {
        margin: 10,
        padding: 10,
        fontSize: 16,
        borderRadius: 6,
        backgroundColor: "#8e0acc",
      },
      goalText: {
        color: "white",
      },
}); 