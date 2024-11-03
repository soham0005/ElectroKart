import React, { useEffect } from "react";
import "./GoogleTranslate.css";

const GoogleTranslate = () => {
  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,es,nl,fr,de,it,ta,te",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            defaultLanguage: "en",
            autoDisplay: false,
          },
          "google_element"
        );
        // Run cleanup after a short delay to ensure the element is initialized
        setTimeout(cleanUpGadgetText, 500);
      }
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () =>
          console.error("Error loading Google Translate script");
        document.body.appendChild(script);
      }
    };

    const cleanUpGadgetText = () => {
      const gadgetElement = document.querySelector(".goog-te-gadget");
      if (gadgetElement) {
        const textNodes = Array.from(gadgetElement.childNodes);
        textNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = ""; // Clear text content
          }
        });
      }
    };

    loadGoogleTranslateScript();

    // Check if Google Translate is already loaded, then initialize it
    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return <div id="google_element" className="google-translate-container"></div>;
};

export default GoogleTranslate;
