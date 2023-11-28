import * as z from "zod";


export const SignupValidation = z.object({
  name: z.string().min(2,{message:"Name must be between 2 and 50 characters"}),
  username: z.string().min(2,{message:"Too short"})
})