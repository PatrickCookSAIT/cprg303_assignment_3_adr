import { z } from "zod";

export const employeeInfoSchema = z.object({
  //schema for employee info form
  fullName: z
    .string()
    .min(2, "please enter minimum 2 characters for your name"),
  jobTitle: z.string().min(1, "Please choose a job title"),
  phone: z
    .string()
    .regex(
      /^\d{3}-\d{3}-\d{4}$/,
      "Phone number must be in the format XXX-XXX-XXXX",
    ),
  email: z
    .email("Enter a valid email address")
    .refine((email) => email.endsWith("@adr.ca"), {
      message: "Please use employee's @adr.ca email",
    }),
  postalCode: z
    .string()
    .regex(
      /^[A-Za-z]\d[A-Za-z]-\d[A-Za-z]\d$/,
      "Postal code must be in the format A9A-9A9",
    ),
});

export type EmployeeInfoData = z.infer<typeof employeeInfoSchema>;

export const signInSchema = z.object({
  //schema for sign in form
  email: z
    .email("Enter a valid email address")
    .refine((email) => email.endsWith("@adr.ca"), {
      message: "Please use employee's @adr.ca email",
    }),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]/+=~`]).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
    ),
});

export type SignInData = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    //schema for sign up form
    fullName: z
      .string()
      .min(2, "please enter minimum 2 characters for your name"),
    email: z
      .email("Enter a valid email address")
      .refine((email) => email.endsWith("@adr.ca"), {
        message: "Please use employee's @adr.ca email",
      }),
    password: z
      .string()
      .min(7, "Password must be at least 7 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]/+=~`]).+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
      ),
    //passwordConfirm does not need the same regex requirements as it will need to match password and thus, will have to fulfill password requirements
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"], // Shows the error on the confirm password field
  });

export type SignUpData = z.infer<typeof signUpSchema>;
