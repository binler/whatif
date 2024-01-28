"use client";

import { Form, TextField, Checkbox } from "@adobe/react-spectrum";

export default function ForgotPassword() {
    return (
        <Form maxWidth="size-3600">
            <TextField label="Email" />
            <TextField label="Password" />
            <Checkbox>Remember me</Checkbox>
        </Form>
    );
}
