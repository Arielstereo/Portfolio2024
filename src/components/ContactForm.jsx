"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from "./magicui/border-beam";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const { username, email, message } = data;

  const text = useTranslations("Contact");

  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await axios.post("/api/send", { username, email, message });
      if (res.data) {
        setIsLoading(false);
        toast.success(`${text("toast")}`, {
          duration: 5000,
          position: "bottom-center",
        });
        setData({
          username: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
    <div className="mt-10">
    <Image
    src="/avatar.jpeg"
    alt="avatar"
    width={300}
    height={300}
    className="rounded-xl w-28 md:w-32"
  />
    </div>
    <div className="flex flex-col items-center justify-center">
      <Card className="relative w-[400px] p-4 overflow-hidden bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
            {text("title")}
          </CardTitle>
          <CardDescription>
            {text("subtitle")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={sendEmail} className="flex flex-col w-full">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white" htmlFor="email">
                  {text("labelName")}
                </Label>
                <Input
                  placeholder={text("inputName")}
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  required
                  className="text-white"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white" htmlFor="password">
                  {text("labelEmail")}
                </Label>
                <Input
                  placeholder={text("inputEmail")}
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="text-white"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white" htmlFor="password">
                  {text("labelMessage")}
                </Label>
                <Textarea
                  rows="6"
                  maxLength="350"
                  placeholder={text("inputMessage")}
                  value={data.message}
                  name="message"
                  onChange={handleChange}
                  required
                  className="text-white"
                ></Textarea>
              </div>
              <Button
                disabled={isLoading}
                variant="outline"
                className={isLoading ? "bg-gray-500" : ""}
                type="submit"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2 text-slate-200">
                    <svg
                      className="animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2v4m4.2 1.8l2.9-2.9M18 12h4m-5.8 4.2l2.9 2.9M12 18v4m-7.1-2.9l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9"
                      />
                    </svg>
                    <span>{text("loader")}</span>
                  </div>
                ) : (
                  `${text("button")}`
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <BorderBeam duration={8} size={100} />
      </Card>
    </div>
  </div>
  );
};

export default ContactForm;
