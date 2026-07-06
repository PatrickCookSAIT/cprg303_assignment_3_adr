import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, Stack } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { employeeInfoSchema, type EmployeeInfoData } from "../lib/schema";

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeInfoData>({
    resolver: zodResolver(employeeInfoSchema),
    defaultValues: {
      fullName: "",
      jobTitle: "",
      phone: "",
      email: "",
      postalCode: "",
    },
    mode: "onSubmit",
  });
  //pushes to success page for new employee. Sends data of the new employee for display
  const onSubmit = (data: EmployeeInfoData) => {
    router.push({
      pathname: "/new-employee-success",
      params: {
        fullName: data.fullName,
        jobTitle: data.jobTitle,
        phone: data.phone,
        email: data.email,
        postalCode: data.postalCode,
      },
    });
  };
  return (
    <View style={styles.contentContainer}>
      <Stack.Screen
        options={{
          title: "Enter New Employee",
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
      {/*spacing between header and content*/}
      <View style={styles.headerSpacing} />
      {/*form input boxes*/}
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Employee Name</Text>
        </View>
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.inputBox}
            />
          )}
        />
        {errors.fullName && (
          <Text style={styles.errorText}>{errors.fullName.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Job Title</Text>
        </View>
        <Controller
          control={control}
          name="jobTitle"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.inputBox}
            />
          )}
        />
        {errors.jobTitle && (
          <Text style={styles.errorText}>{errors.jobTitle.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Employee Email</Text>
        </View>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.inputBox}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Phone</Text>
        </View>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.inputBox}
            />
          )}
        />
        {errors.phone && (
          <Text style={styles.errorText}>{errors.phone.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Postal Code</Text>
        </View>
        <Controller
          control={control}
          name="postalCode"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.inputBox}
            />
          )}
        />
        {errors.postalCode && (
          <Text style={styles.errorText}>{errors.postalCode.message}</Text>
        )}
      </View>
      <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Submit Employee</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;

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
  headerText: {
    fontWeight: "900",
    fontSize: 20,
    color: "#333333",
  },
  inputContainer: {
    marginBottom: 15,
    alignItems: "center",
  },
  inputHeaderTextContainer: {
    width: 225,
  },
  inputHeaderText: {
    paddingLeft: 10,
  },
  inputBox: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: 225,
    height: 50,

    paddingLeft: 10,
  },
  submitButton: {
    borderRadius: 20,
    width: 180,
    height: 40,
    backgroundColor: "#FFC5D3",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    fontWeight: "500",
  },
  errorText: {
    color: "red",
    fontSize: 10,
    marginTop: 1,
    marginLeft: 8,
  },
});
