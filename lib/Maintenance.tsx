import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";

type LinksData = {
  title: string;
  des: { text: string | ReactNode }[];
  price?: number;
};

type DataObject = {
  data: LinksData[];
};

export const MaintenancePricing: DataObject = {
  data: [
    {
      title: "Basic Maintenance",
      des: [
        {
          text: (
            <p>
              <span className="font-semibold">Content Updates:</span> <br />
              Regular updates for availability, rates, and descriptions
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Booking System:</span> <br />
              Basic maintenance for the booking system, ensuring smooth
              functionality
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Security:</span> <br />
              Basic security monitoring to protect guest information and payment
              details
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Performance:</span> <br />
              Basic performance optimization to ensure fast loading times for
              potential guests
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Support:</span> <br />
              Email support for any technical issues or inquiries
            </p>
          ),
        },
      ],
      price: 10,
    },
    {
      title: "Standard Maintenance",
      des: [
        {
          text: (
            <p>
              <span className="font-semibold">Content Updates:</span> <br />
              Frequent updates for availability, rates, and descriptions,
              including seasonal promotions
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Booking System:</span> <br />
              Regular maintenance and updates for the booking system
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Security:</span> <br />
              Enhanced security monitoring, malware protection, and SSL
              certificate management for secure transactions
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Backups:</span> <br />
              Weekly backups to safeguard guest data and booking information
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Performance:</span> <br />
              Advanced performance optimization, including caching and image
              optimization, to provide a seamless browsing experience
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Support:</span> <br />
              Priority email and phone support with a dedicated account manager
              for immediate assistance
            </p>
          ),
        },
      ],
      price: 30,
    },
    {
      title: "Premium Maintenance",
      des: [
        {
          text: (
            <p>
              <span className="font-semibold">Content Updates:</span> <br />
              Priority updates for availability, rates, and descriptions,
              including dynamic pricing strategies
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Booking System:</span> <br />
              Continuous maintenance and updates for the booking system, with
              custom features and integrations tailored to your specific
              requirements
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Security:</span> <br />
              Comprehensive security monitoring, firewall protection, and
              regular security audits to maintain the highest level of
              protection for guest information
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Backups:</span> <br />
              Daily backups with real-time data replication to ensure zero data
              loss in case of emergencies
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Performance:</span> <br />
              Complete performance optimization, including server-side
              optimizations and CDN integration, for lightning-fast website
              speed
            </p>
          ),
        },
        {
          text: (
            <p>
              <span className="font-semibold">Support:</span> <br />
              24/7 premium support with a dedicated support team available via
              phone, email, and live chat, ensuring minimal downtime and maximum
              guest satisfaction
            </p>
          ),
        },
      ],
      price: 100,
    },
  ],
};
