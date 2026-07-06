import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, Stack } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { signInSchema, type SignInData } from "../lib/schema";

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  //change to move to EmployeeInfoForm
  const onSubmit = (data: SignInData) => {
    router.replace({
      pathname: "/success",
      params: { type: "signin", email: data.email },
    });
  };
  return (
    <View style={styles.contentContainer}>
      <Stack.Screen
        options={{
          title: "Sign In to Your account",
          headerLeft: () => (
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
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Email</Text>
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
          <Text style={styles.inputHeaderText}>*password</Text>
        </View>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.inputBox}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>
      <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Sign In</Text>
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
