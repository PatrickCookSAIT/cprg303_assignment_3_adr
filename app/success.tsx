import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SuccessScreen() {
  const { type, email, fullName } = useLocalSearchParams<{
    type?: string;
    email?: string;
    fullName?: string;
  }>();

  //checks which screen redirected to success screen, sign-in or sign-up
  const isSuccessType = type === "signup";

  // automatically redirects after 3 seconds to either sign-in-form or employee-info-form depending on if user signed up or signed in respectively
  // replaces on stack so going back from next page will return home
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSuccessType) {
        router.replace("/sign-in-form");
      } else {
        router.replace("/employee-info-form");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSuccessType]);

  return (
    <View style={styles.contentContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.headerSpacing} />
      {/*prints different info based on if user signed up or signed in */}
      <Text>
        {isSuccessType ? (
          <>
            <View style={styles.textContainer}>
              <Text>
                Thank you, <Text style={styles.boldText}> {fullName}</Text>
              </Text>
              <Text>
                an email will be sent to{" "}
                <Text style={styles.boldText}> {email}</Text> for verification
              </Text>
            </View>
          </>
        ) : (
          <>
            You are signed in as<Text style={styles.boldText}> {email}</Text>
          </>
        )}
      </Text>
      <Text style={styles.redirectingText}>
        Redirecting to{" "}
        {isSuccessType ? "Sign in page..." : "Employee Info Form..."}
      </Text>
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
    marginTop: 60,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "800",
  },
  redirectingText: {
    marginTop: 30,
  },
});
