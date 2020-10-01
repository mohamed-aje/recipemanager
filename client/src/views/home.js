import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const Home = () => (
  <View>
    <Text style={styles.titleText}>Your Collections</Text>
    <Link to="/collection-detail/12345" underlayColor="#f0f4f7">
      <Text>Link to collection</Text>
    </Link>
    <View style={styles.HomeBtns}>
    <Button title ="New Collection"  
    color="#841584"
 />
    <Button title ="Create" onPress={()=>history.pushState("/add-recipe")}
          color="#841584"
/>

    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
  HomeBtns:{
    flexDirection:'row'

  },
  titleText:{
    fontWeight:'bold',
    fontSize:26,
  }
});

export default Home;
