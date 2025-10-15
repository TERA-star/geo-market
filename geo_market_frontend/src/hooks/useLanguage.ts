"use client";

import { useState } from "react";

export const useLanguage = () => {
    const [language, setLanguage] = useState<"en" | "ka">("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "ka" : "en"));
    };

    return { language, toggleLanguage };
};
