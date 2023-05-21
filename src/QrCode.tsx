// src/components/QrCode.js
//import
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = ({ value }) => {
  const qrCodeEncoder = (e) => {
    value;
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={value}
      size={400}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );
  return (
    <div className="qrcode__container">
      <div>{qrcode}</div>
      <div className="input__group"></div>
    </div>
  );
};

export default QrCode;
