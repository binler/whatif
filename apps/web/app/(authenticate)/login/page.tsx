"use client"

import { Form, TextField, Checkbox, Button } from "@adobe/react-spectrum";


export default function Login() {
    return <Form validationBehavior="native" width="size-3600">
        <TextField label="Email" isRequired />
        <TextField label="Password" isRequired />
        <Checkbox>Remember me</Checkbox>
        <Button variant="accent" style="fill" type="submit" marginTop="size-100">Login</Button>
    </Form>
}
