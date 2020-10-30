import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";


const reducer = (state, action){
  //state === {count:number}
  //action === {type:'increment'||'decrement', payload: 1 }

  switch(action.type){
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;    
  }
}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <View>
      <Button
        title="Increasing"
        onPress={() => {
          dispatch({type: 'increment', payload: 1});
        }}
      />
      <Button
        title="Decreasing"
        onPress={() => {
          dispatch({type: 'decrement', payload: 1});
        }}
      />
      <Text style={{ textAlign: "center" }}>Counter Count: {state.count} </Text>
    </View>
  );
};

//USESTATE
// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <View>
//       <Button
//         title="Increasing"
//         onPress={() => {
//           setCounter(counter + 1);
//         }}
//       />
//       <Button
//         title="Decreasing"
//         onPress={() => {
//           setCounter(counter - 1);
//         }}
//       />
//       <Text style={{ textAlign: "center" }}>Counter Count: {counter} </Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({});

export default CounterScreen;
