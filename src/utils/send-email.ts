import React from "react";

const APIENDPOINT = "/api/email";

export type ContactFormData = {
  name: string;
  phone?: string;
  email: string;
  body: string;
};

export async function sendEmail(
  data: ContactFormData,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true);
  try {
    const res = await fetch(APIENDPOINT, {
      method: "POST",
      body: JSON.stringify(data),
    })
    if (res.ok) {
      return true
    } else {
      return false
    }
  } catch (error: unknown) {
    return false
  } finally {
    setLoading(false)
  }
}
