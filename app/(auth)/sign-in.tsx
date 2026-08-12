import { useAuth, useSignIn } from "@clerk/expo";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignIn() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const { isSignedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = fetchStatus === "fetching";

  if (isSignedIn) {
    return null;
  }

  const onSignInPress = async () => {
    const { error } = await signIn.password({
      identifier: email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-white"
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 justify-center px-6 py-12">
        <Image
          source={require("../../assets/images/kribb.png")}
          className="w-20 h-16 mb-8"
          resizeMode="contain"
        />
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back
        </Text>
        <Text className="text-gray-500 mb-8">Sign in to your account</Text>

        <TextInput
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6"
          placeholder="Email address"
          placeholderTextColor="#9ca3af"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        {errors.fields.identifier && (
          <Text className="text-red-500 mb-4">
            {errors.fields.identifier.message}
          </Text>
        )}

        <TextInput
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.fields.password && (
          <Text className="text-red-500 mb-4">
            {errors.fields.password.message}
          </Text>
        )}

        <TouchableOpacity
          disabled={isLoading}
          className="w-full bg-blue-600 py-4 rounded-xl items-center mb-4 mt-2"
          onPress={onSignInPress}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-bold text-base">Sign In</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-center">
          <Text className="text-gray-500">Don't have an account? </Text>
          <Link href="/sign-up">
            <Text className="text-blue-600 font-semibold">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}