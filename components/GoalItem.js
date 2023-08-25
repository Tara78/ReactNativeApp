import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#6e0acc" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
    <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#8e0acc",
  },
  goalText: {
    color: "white",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
