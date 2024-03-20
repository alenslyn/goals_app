import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  const[modalIsVisible, setmodalIsVisible]=useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

function startAddGoalHandler() {
  setmodalIsVisible(true)
}

function endAddGoalHandler () {
  setmodalIsVisible(false)
}

  function addGoalHandler(enteredText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button onPress={startAddGoalHandler} title="Add new goal" color="#5e0acc"/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
