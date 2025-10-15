"use client";

import { Switch } from "@headlessui/react";
import { useLanguage } from "@/hooks/useLanguage";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const enabled = language === "en";

  return (
    <Switch
      checked={enabled}
      onChange={toggleLanguage}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-500"
      } relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Toggle language</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
      <span
        className={`absolute text-xs font-medium text-white ${
          enabled ? "left-1.5" : "right-1.5"
        }`}
      >
        {enabled ? "EN" : "GE"}
      </span>
    </Switch>
  );
};
