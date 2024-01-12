"use client"

import { View, Flex } from "@adobe/react-spectrum";

export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <Flex height="100vh">
        <View flex justifySelf="center" alignSelf="center">
            {children}
        </View>
        <View flex backgroundColor="blue-400">
        </View>
    </Flex>
}
