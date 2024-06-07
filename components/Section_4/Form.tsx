"use client";

import emailjs from "@emailjs/browser";
import { Alert, Collapse, IconButton } from "@mui/material";
import React, { FormEvent, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function ContactForm() {
  const form = useRef(null);
  const [email, setEmail] = useState<string>("");
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 10000);
    if (form.current) {
      emailjs
        .sendForm("service_an4ae79", "template_xoovg6g", form.current, {
          publicKey: "TyK2R5cp5qjWvOuRO",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setEmail("");
            setValue("");
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 w-full relative"
    >
      <div>
        <input
          className="text-white bg-gray2 placeholder-gray w-[80%] rounded-md py-3 px-8"
          required
          type="text"
          name="from_name"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          className="text-white bg-gray2 placeholder-gray w-[80%] rounded-md py-3 px-8"
          required
          type="email"
          name="from_email"
          placeholder="Email"
        />
      </div>
      <div>
        <textarea
          className="text-white resize-none h-52 bg-gray2 placeholder-gray w-[80%] rounded-md py-3 px-8"
          name="message"
          placeholder="Message"
        />
      </div>
      <div className="flex items-start ">
        <button className={`${open ? "hidden" : ""}`}>
          <input
            className="btn "
            type="submit"
            placeholder="Send"
            value="Send"
          />
        </button>
        <div className="relative left-0 w-[80%]">
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2, p: 0, px: 10, height: 40 }}
            >
              Success!
            </Alert>
          </Collapse>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
