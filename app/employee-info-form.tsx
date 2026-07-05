import { zodResolver } from "@hookform/resolvers/zod";
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

  //change to move to EmployeeInfoForm
  const onSubmit = (data: EmployeeInfoData) => {
    console.log("Signed in:", data);
  };
  return (
    <View style={styles.contentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Enter New Employee</Text>
      </View>
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
  headerContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 80,
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
    width: 150,
    height: 30,

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
