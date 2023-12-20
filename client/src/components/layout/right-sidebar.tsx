import { View } from '@adobe/react-spectrum';

export default function RightSideBar() {
    return <View
        backgroundColor="magenta-600"
        gridArea="toc"
        minHeight="size-1000"
        isHidden={{ base: true, L: false }}
    />
}
