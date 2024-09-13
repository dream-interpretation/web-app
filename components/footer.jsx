import React from "react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  {
    href: "https://play.google.com",
    ariaLabel: "Google Play",
    icon: (
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    ),
  },
  {
    href: "https://apps.apple.com",
    ariaLabel: "App Store",
    icon: (
      <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
    ),
  },
];

const SocialLink = ({ href, ariaLabel, icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-gray-200"
  >
    <svg
      className="w-4 h-4 text-gray-600 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
  </Link>
);

export function Footer() {
  return (
    <footer className="w-full bg-white border-t dark:bg-black dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {CURRENT_YEAR} Your Company Name. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
