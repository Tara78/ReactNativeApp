import { StyleSheet,View,FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
   const [courseGoals, setCourseGoals] = useState([]);
 
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((curentCourseGoals) => [
      ...curentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text= {itemData.item.text}/>;
          }}
          keyExtractor= {(item, index) =>{
            return item.id; 
          } }
          alwaysBounceVertical={false}
        />
      </View>
      </View> 
    );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingBottom: 16,
    flex: 1,
  },
  goalContainer: {
    flex: 4,
  }

});
