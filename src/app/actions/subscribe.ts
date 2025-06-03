"use server";

export async function subscribe(formData: FormData) {
    const email = formData.get("email") as "string";
    console.log("Server function subscribe called");
    console.log(`The email is ${email}`);
}
