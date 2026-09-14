import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '@clerk/expo'
import { router } from 'expo-router'

export default function Profile() {

   

    const { signOut } = useAuth() 

    const handleSignOut = async () => {
        try {
            await signOut();
            router.replace("/sign-in");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return ( 
        <SafeAreaView className="flex-1 bg-gray-50">
            <Text>Profile</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>SignOut</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
}