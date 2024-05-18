import toast from "react-hot-toast";

export type ContactFormData = {
  name: string;
  phone?: string;
  email: string;
  body: string;
};

export function sendEmail(
  data: ContactFormData,
  onStart: () => void,
  onSettled: () => void
): void {
  const apiEndpoint = "/api/email";
  onStart();
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message);
    })
    .catch((err) => {
      toast.error(err);
    })
    .finally(() => {
      onSettled();
    });
}
