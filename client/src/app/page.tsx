"use client";
import { Button } from '@adobe/react-spectrum';
export default function Home() {
    return (
        <Button
            variant="accent"
            onPress={() => alert('Hey there!')}
        >
            Hello React Spectrum!
        </Button>
    )
}
