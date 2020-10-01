import React, { useState } from "react";
import { Text, View, Button,StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import { useBack } from "../service/utils/hooks/history";

const AddRecipe = () => {
  const goBack = useBack();
  const [recipe,setRecipe]=useState('');
  const[recipeList,setRecipeList]=useState([]);
  const RecipeHandler=(recipe)=>{
    setRecipe(recipe);
    
  }
  const AddRecipeHandler=()=>{
   setRecipeList(currentRecipes=>[...recipeList,recipe]);
  }

  return (
    <View>
      <TextInput placeholder="add you Recipe Here"
        style={styles.Listitem}
        onChangeText={RecipeHandler}
        value={recipe}/>
        <Button onPress={AddRecipeHandler} title="Add Recipe"/>
      <Button onPress={goBack} title="Back to collection"/>
      <View>
  {recipeList.map((recipee)=><Text id={recipee}>{recipee}</Text>)}
    </View>
    </View>
    
  );
};
const styles=StyleSheet.create({
Listitem:{
  backgroundColor:'grey',
  height:200,
  width:200,
}
});

export default AddRecipe;
