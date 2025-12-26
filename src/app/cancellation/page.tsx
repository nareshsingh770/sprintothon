import React from "react";

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-10 px-4 md:px-8 lg:px-32">
      <div className="container mx-auto rounded-xl shadow-lg p-8 mt-40">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
          Cancellation and Refund Policy
        </h1>
        <div className="prose prose-stone dark:prose-invert max-w-none text-base">
          <h2 className="mb-4">1. Introduction</h2>
          <p>
            This Cancellation Policy outlines the terms and conditions for
            cancellations and refunds related to events ticketed through
            Sprintothon. By purchasing tickets through our platform, you agree
            to comply with this policy.
          </p>

          <h2 className="mb-4">2. Ticket Cancellations by Attendees</h2>
          <ul>
            <li>
              Ticket cancellation policies are set by individual event
              organizers. Sprintothon facilitates these policies as follows:
            </li>
            <li>
              Cancellation requests must be made at least 24 hours prior to the
              event start time.
            </li>
            <li>
              To request a cancellation, attendees should contact the event
              organizer directly.
            </li>
            <li>
              Refund eligibility and amounts are determined by the event
              organizer's policy, which may vary from event to event.
            </li>
            <li>
              We strongly recommend reading the specific terms and conditions
              for each event before booking tickets.
            </li>
            <li>
              <b>Note:</b> The platform fee charged by Sprintothon is
              non-refundable.
            </li>
          </ul>

          <h2 className="mb-4">3. Event Cancellations or Postponements</h2>
          <ul>
            <li>
              If an event is cancelled, postponed, or significantly changed:
            </li>
            <li>
              The event organizer is responsible for notifying ticket holders
              and managing refunds.
            </li>
            <li>
              Sprintothon will assist in communicating updates to ticket holders
              as provided by the event organizer.
            </li>
            <li>
              Refund policies for cancelled or postponed events are set by the
              event organizer.
            </li>
            <li>
              Sprintothon is not liable for any loss or inconvenience caused by
              event cancellations or changes.
            </li>
          </ul>

          <h2 className="mb-4">4. Refund Process</h2>
          <ul>
            <li>When a refund is approved by the event organizer:</li>
            <li>
              Refunds will be processed through the original payment method used
              for the ticket purchase.
            </li>
            <li>
              Processing times may vary depending on the payment provider and
              financial institutions involved.
            </li>
            <li>
              In most cases, refunds should be reflected in the attendee's
              account within 5-10 business days.
            </li>
          </ul>

          <h2 className="mb-4">5. Limitations</h2>
          <ul>
            <li>
              Sprintothon cannot override an event organizer's cancellation
              policy.
            </li>
            <li>
              We are not responsible for cash refunds for tickets purchased
              through credit/debit cards or other electronic payment methods.
            </li>
            <li>
              Sprintothon is not liable for any changes in event details,
              including but not limited to date, time, venue, or content of the
              event.
            </li>
          </ul>

          <h2 className="mb-4">6. Fraudulent Activity</h2>
          <p>
            Sprintothon reserves the right to cancel tickets and refuse refunds
            if fraudulent activity is suspected in relation to a ticket purchase
            or cancellation request.
          </p>

          <h2 className="mb-4">7. Changes to This Policy</h2>
          <p>
            We may update this Cancellation Policy from time to time. We will
            notify users of any significant changes by posting the new
            Cancellation Policy on this page.
          </p>

          <h2 className="mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Cancellation Policy, please
            contact us at:
          </p>
          <ul>
            <li>T&T Entertainment Private Limited</li>
            <li>C/O Ankit Tibrewal, Rinku Tyagi</li>
            <li>Email: info@sprintothon.com</li>
          </ul>

          <div className="mt-10">
            <p className="font-semibold text-center">
              India's #1 platform for running events, marathons & race photos.
              Join 100,000+ runners across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancellation;
