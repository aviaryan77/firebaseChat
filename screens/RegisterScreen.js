import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // sign in
        var user = userCredential.user;
        //....
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        label="Name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your imageUrl"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <Button
          color="red"
          style={styles.btn}
          title="Login"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Register" style={styles.btn} />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  btnContainer: {
    width: 100,
    margin: 10,
  },
});
