"use client";
import Link from "next/link";

import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaEnvelopeSquare,
} from "react-icons/fa";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enqueueSnackbar } from "notistack";

const FormSchema = z.object({
  fname: z
    .string()
    .nonempty({ message: "First name shouldn't be empty!" })
    .trim(),
  lname: z
    .string()
    .nonempty({ message: "Second name shouldn't be empty!" })
    .trim(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().length(10, {
    message: "Phone number must be exactly 10 digits",
  }),
  msg: z
    .string()
    .nonempty({ message: "message name shouldn't be empty!" })
    .min(10, { message: "message field must have 10 character." }),
});

type iFromInput = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFromInput>({
    resolver: zodResolver(FormSchema),
  });

  const onErrors = () => {
    Object.values(errors).forEach((error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    });
  };

  const onSubmit = (data: iFromInput) => {
    console.log(data);
  };
  return (
    <div className="py-[3em] mb-4" id={"contact"}>
      <h1 className="section-header mb-8">Contact Us</h1>
      <div className="w-[80vw] mx-auto flex gap-6">
        <div className="flex-1/2 flex flex-col bg-[#271b1b] rounded-3xl p-8 text-white shadow-md shadow-gray-600">
          <h2 className="text-2xl font-bolder mb-2">Contact Information</h2>
          <p>
            Fill up this form and our team will get back to you within one
            working day. See You!
          </p>
          <div className="my-auto">
            <div className="contactinfoGrp">
              <FaPhoneSquareAlt className="icon mr-4" />
              <a href="tel:+919354566860">+91 93545 66860</a>
            </div>
            <div className="contactinfoGrp">
              <FaEnvelopeSquare className="icon mr-4" />
              <a href="mailto:sales@dzynfox.com">sales@dzynfox.com</a>
            </div>
          </div>
          <div className="flex w-3/5 justify-between my-4 ">
            <Link
              href="https://www.facebook.com/DzynFox-Visual-Communications-105250575387678"
              target={"_blank"}
              rel="nofollow noreferrer"
            >
              <FaFacebookSquare className="icon" />
            </Link>
            <Link
              href="https://www.instagram.com/dzynfox/"
              target={"_blank"}
              rel="nofollow noreferrer"
            >
              <FaInstagramSquare className="icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/dzynfox/"
              target={"_blank"}
              rel="nofollow noreferrer"
            >
              <FaLinkedin className="icon" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC6ZfkNO_QGy2RvPckmQ_tdw"
              target={"_blank"}
              rel="nofollow noreferrer"
            >
              <FaYoutubeSquare className="icon" />
            </Link>
          </div>
        </div>
        <form
          className="ContactForm-Form flex-1/2"
          onSubmit={handleSubmit(onSubmit, onErrors)}
        >
          <div className="inputGroup">
            <label htmlFor="fname" className="inputLbl">
              First Name
            </label>
            <input {...register("fname")} type="text" name="fname" />
          </div>

          <div className="inputGroup">
            <label htmlFor="lname" className="inputLbl">
              Last Name
            </label>
            <input {...register("lname")} type="text" name="lname" />
          </div>

          <div className="inputGroup">
            <label htmlFor="email" className="inputLbl">
              E-Mail
            </label>
            <input {...register("email")} type="email" name="email" />
          </div>

          <div className="inputGroup">
            <label htmlFor="phone" className="inputLbl">
              Phone
            </label>
            <input {...register("phone")} type="tel" name="phone" />
          </div>

          <div className="col-start-1 col-end-3 inputGroup">
            <label htmlFor="msg" className="inputLbl">
              Message
            </label>
            <textarea
              {...register("msg")}
              name="msg"
              className="msgBox"
            ></textarea>
          </div>
          <button type="submit" className="sendBtn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
