import React from "react";
import "./Telegram.css";
import { Button } from "@mui/material";
import { FaTelegram } from "react-icons/fa";
const TelegramLink = () => {
  const telegramGroupLink = "https://t.me/+k39u4PsV4_4yZjNk";

  return (
    <div className='telegram-border'>
      <Button
        className="telegram-border"
        variant="contained"
        color="primary"
        href={telegramGroupLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram className="telegram-icon" />
        Join our Telegram group
      </Button>
    </div>
  );
};

export default TelegramLink;
