import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SuccessScreen() {
  const { fullName, jobTitle, email, postalCode, phone } =
    useLocalSearchParams<{
      fullName?: string;
      jobTitle?: string;
      email?: string;
      postalCode: string;
      phone?: string;
    }>();

  return (
    <View style={styles.contentContainer}>
      <Stack.Screen
        options={{
          title: "New Employee Added!",
          headerLeft: () => (
            // button to go back on the stack
            <Pressable onPress={() => router.back()}>
              <Ionicons
                name="arrow-back"
                size={24}
                style={styles.headerButton}
              />
            </Pressable>
          ),
        }}
      />
      {/*set fixed distance between stack header and content*/}
      <View style={styles.headerSpacing} />
      <View style={styles.employeeContainer}>
        <View style={styles.employeeDetailContainer}>
          <Text style={styles.employeeDetailLabelText}>Name:</Text>
          <Text style={styles.employeeDetailText}>{fullName}</Text>
        </View>
        <View style={styles.employeeDetailContainer}>
          <Text style={styles.employeeDetailLabelText}>Job:</Text>
          <Text style={styles.employeeDetailText}>{jobTitle}</Text>
        </View>
        <View style={styles.employeeDetailContainer}>
          <Text style={styles.employeeDetailLabelText}>Email:</Text>
          <Text style={styles.employeeDetailText}>{email}</Text>
        </View>
        <View style={styles.employeeDetailContainer}>
          <Text style={styles.employeeDetailLabelText}>Phone #:</Text>
          <Text style={styles.employeeDetailText}>{phone}</Text>
        </View>
        <View style={styles.employeeDetailContainer}>
          <Text style={styles.employeeDetailLabelText}>Postal Code:</Text>
          <Text style={styles.employeeDetailText}>{postalCode}</Text>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.newButton}
          onPress={() => router.push("/employee-info-form")}
        >
          <Text style={styles.newButtonText}>Register a New Employee</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={styles.logoutButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#ADD8E6",
    flex: 1,
    alignItems: "center",
  },
  headerButton: {
    paddingTop: 40,
    paddingLeft: 10,
  },
  headerSpacing: {
    marginTop: 60,
    marginBottom: 10,
  },
  employeeContainer: {
    flexDirection: "column",
    width: "90%",
    marginBottom: 40,
  },
  employeeDetailContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 50,
  },
  employeeDetailLabelText: {
    width: 100,
  },
  employeeDetailText: {
    fontWeight: "700",
  },
  logoutButton: {
    borderRadius: 20,
    width: 180,
    height: 40,

    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButtonText: {
    fontWeight: "500",
  },
  newButton: {
    borderRadius: 20,
    width: 180,
    height: 40,

    backgroundColor: "#FFC5D3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  newButtonText: {
    fontWeight: "500",
  },
});
