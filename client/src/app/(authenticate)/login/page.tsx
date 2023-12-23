"use client"

import { Form, TextField, Checkbox, Button } from "@adobe/react-spectrum";

export default function Login() {
    return <Form maxWidth="size-3600">
        <TextField label="Email" />
        <TextField label="Password" />
        <Checkbox>Remember me</Checkbox>
        <Button variant="accent" style="fill" type="submit">Login</Button>
    </Form>
}
