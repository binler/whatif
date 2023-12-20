import { Flex, View } from '@adobe/react-spectrum';
import Link from 'next/link'

export default function RightSideBar() {
    return (
        <View
            backgroundColor="blue-600"
            gridArea="nav"
        >
            <Flex
                direction={{ base: 'row', M: 'column' }}
                gap="size-100"
                margin="size-100"
            >
                <Link href="/dashboard">
                    Dashboard
                </Link>
                <Link href="/setting">
                    Setting
                </Link>
                <Link href="/login">
                    Login
                </Link>
            </Flex>
        </View>
    )
}
