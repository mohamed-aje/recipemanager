import { NativeRouter, Route, Switch, BackButton } from "react-router-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/views/home";
import CollectionDetail from "./src/views/collection-detail";
import RecipeDetail from "./src/views/recipe-detail";
import EditRecipe from "./src/views/edit-recipe";
import AddRecipe from "./src/views/add-recipe";

export default function App() {
  return (
    <NativeRouter>
      <BackButton>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/collection-detail/:id" component={CollectionDetail} />
            <Route path="/recipe-detail/:id" component={RecipeDetail} />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/edit-recipe/:id" component={EditRecipe} />
            <Route component={Home} />
          </Switch>
        </View>
      </BackButton>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
