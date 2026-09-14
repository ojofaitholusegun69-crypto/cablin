import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Property } from "@/types";
import { useRouter } from "expo-router";

export default function FeaturedCard({ property }: {property: Property}) 
{
  const router = useRouter();

  return (
    <TouchableOpacity className="w-72 mr-2 rounded-3xl overflow-hidden bg-white">
        <Image
        source={{ url:property.images[0] }}
        className="w-full h-44"
        resizeMode="cover"
        />
    </TouchableOpacity>
  );
}
