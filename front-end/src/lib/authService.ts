// This is authentication helper logic

import { supabase } from "./supabase";

export async function signUp(
  email: string,
  password: string,
  fullName: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
  //An unknown error occurred
  if (error) {
    if (error.message.toLowerCase().includes("An unknown error occurred")) {
      throw new Error(
        "Please confirm your email before logging in, thank you."
      );
    }
    throw error;
  }
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    if (error.message.toLowerCase().includes("email not confirmed")) {
      throw new Error("Please confirm your email before logging in.");
    }
    throw error;
  }
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}
