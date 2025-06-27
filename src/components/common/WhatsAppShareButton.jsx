import React from "react";

const WhatsAppShareButton = ({ packageName, packageUrl }) => {
  const shareMessage = `Check out this amazing travel package: ${packageName}. Click here to view: ${packageUrl}`;

  return (
    <a
      href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white-600 transition font-medium text-sm"
      title="Share on WhatsApp"
    >
    </a>
  );
};

export default WhatsAppShareButton;
