import { object, string, TypeOf } from "zod";

// export const CREATE_USER_SCHEMA = object({
//   body: object({
//     username: string({
//       required_error: "Username is required",
//     }).email({message: "Email address is not valid"}),
//     password: string({
//       required_error: "Password is required",
//     }),
//   }),
// });

// export type CreateUserInput = TypeOf<typeof CREATE_USER_SCHEMA>["body"];

// export const LOGIN_USER_SCHEMA = object({
//   body: object({
//     username: string({
//       required_error: "Username is required",
//     }).email("Email address is not valid"),
//     password: string({
//       required_error: "Password is required",
//     }),
//   }),
// });

// export type LoginUserInput = TypeOf<typeof LOGIN_USER_SCHEMA>["body"];
