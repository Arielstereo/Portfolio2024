"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";

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
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="w-full max-w-md  rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">
          {text("title")}
        </h2>

        <form onSubmit={sendEmail} className="flex flex-col">
          <input
            placeholder={text("inputName")}
            className="bg-gray-900 text-gray-200 border-0 rounded-md p-4 mb-4 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            required
          />
          <input
            placeholder={text("inputEmail")}
            className="bg-gray-900 text-gray-200 border-0 rounded-md p-4 mb-4 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <textarea
            rows="6"
            maxLength="350"
            placeholder={text("inputMessage")}
            className="bg-gray-900 text-gray-200 border-0 rounded-md p-4 mb-4 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            value={data.message}
            name="message"
            onChange={handleChange}
            required
          ></textarea>
          <button
            disabled={isLoading}
            className={
              isLoading
                ? "bg-gradient-to-r from-slate-800 to-slate-400 text-slate-50 font-bold py-3 px-4 rounded-md mt-2"
                : "bg-gradient-to-r hover:bg-gradient-to-br from-blue-600 via-sky-600 to-sky-300 text-slate-50 font-bold py-3 px-4 rounded-md mt-2  transition ease-in-out duration-150"
            }
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
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
