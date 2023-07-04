import Image from "next/image";
import { QRCodepWrapper } from "./QRCode.style";

export default function QRCode() {
  return (
    <QRCodepWrapper>
      <div
        className="centered-element"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Image
          src={"/../public/images/image-qr-code.png"}
          width="500"
          height="500"
          alt="Picture of the author"
          className="image"
        />
      </div>
      <div className="under">
        <h2 className="title-under">
          Improve your front-end skills by building projects
        </h2>
        <p className="paragraph-under">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </QRCodepWrapper>
  );
}
