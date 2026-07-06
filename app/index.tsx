import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contentContainer}>
      {/*set fixed distance between stack header and content*/}
      <View style={styles.headerSpacing}></View>
      <Pressable
        style={styles.signInContainer}
        onPress={() => router.push("sign-in-form")}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
      <Pressable
        style={styles.signUpContainer}
        onPress={() => router.push("sign-up-form")}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#ADD8E6",
    flex: 1,
    alignItems: "center",
  },
  headerSpacing: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 10,
  },
  signInContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    backgroundColor: "#FFC5D3",
    borderRadius: 20,
    width: 225,
    height: 50,
    marginBottom: 15,
  },
  signInText: {
    fontSize: 16,
  },
  signUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 225,
    height: 50,
  },
  signUpText: {
    fontSize: 16,
  },
});
