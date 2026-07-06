import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, Stack } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { signUpSchema, type SignUpData } from "../lib/schema";

const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onSubmit",
  });

  //redirects to the success page carrying over the email address and user's name to notify them the account creation is successful and a verification email will be sent
  const onSubmit = (data: SignUpData) => {
    router.replace({
      pathname: "/success",
      params: { type: "signup", email: data.email, fullName: data.fullName },
    });
  };

  return (
    <View style={styles.contentContainer}>
      <Stack.Screen
        options={{
          title: "Sign Up for Your ADR Account",
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
      <View style={styles.headerSpacing} />
      {/*form input boxes*/}
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Your Name</Text>
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
          <Text style={styles.inputHeaderText}>*email</Text>
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
      <View style={styles.inputContainer}>
        <View style={styles.inputHeaderTextContainer}>
          <Text style={styles.inputHeaderText}>*Confirm password</Text>
        </View>
        <Controller
          control={control}
          name="passwordConfirm"
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.inputBox}
            />
          )}
        />
        {errors.passwordConfirm && (
          <Text style={styles.errorText}>{errors.passwordConfirm.message}</Text>
        )}
      </View>
      <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Register Your Account</Text>
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
