import { View, Footer as FooterComponent } from '@adobe/react-spectrum';
export default function Footer() {
    return (
        <View
            backgroundColor="seafoam-600"
            gridArea="footer"
            height="size-1000"
        >
            <FooterComponent>&copy; All rights reserved.</FooterComponent>
        </View>
    )
}
