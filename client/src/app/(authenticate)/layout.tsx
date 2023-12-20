"use client"

import { View } from "@adobe/react-spectrum";

export default function LoginLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <View backgroundColor="magenta-600">{children}</View>
}
