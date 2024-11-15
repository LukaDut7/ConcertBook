// app/instructions/page.js

import Image from "next/image";
import interacLogo from "../images.png"; // Add your logo here or place it in the public directory

export default function InstructionsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        How to Send Us the Money for Your Ticket
      </h1>

      {/* Interac Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src={interacLogo}
          alt="Interac e-Transfer Logo"
          width={150}
          height={50}
        />
      </div>

      <p className="text-gray-700 mb-6 text-center">
        To complete your ticket purchase, please follow these simple steps to
        send us the payment via e-Transfer:
      </p>

      <ol className="list-decimal list-inside space-y-4">
        <li className="text-gray-700">
          **Open Your Banking App**: Access the e-Transfer feature in your
          online banking app or website.
        </li>
        <li className="text-gray-700">
          **Add a New Recipient**: Use our email address{" "}
          <strong>ticketsales@taylorswifttickets.ca</strong> as the
          recipient.
        </li>
        <li className="text-gray-700">
          **Enter the Payment Amount**: Make sure to enter the exact amount as
          shown in your order summary.
        </li>
        <li className="text-gray-700">
          **Include a Message **: You can include your ticket order ID
          in the message for easier tracking.
        </li>
        <li className="text-gray-700">
          **Security Question and Password**: When prompted, use the following:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>
              **Security Question**: <strong>What is the event name?</strong>
            </li>
            <li>
              **Answer/Password**: <strong>taylorswift2024</strong>
            </li>
          </ul>
        </li>
        <li className="text-gray-700">
          **Send the Transfer**: Double-check the details and confirm the
          transfer.
        </li>
      </ol>

      <p className="mt-8 text-gray-700 text-center">
        Once we receive the payment, we will send you a confirmation email with
        your ticket details. For any questions, contact us at{" "}
        <strong>ticketsales@taylorswifttickets.ca</strong>.
      </p>
    </div>
  );
}
