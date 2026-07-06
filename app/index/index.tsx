import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to ADR Co.</Text>
      </View>
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
  headerContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 200,
  },
  headerText: {
    fontWeight: "900",
    fontSize: 20,
    color: "#333333",
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
