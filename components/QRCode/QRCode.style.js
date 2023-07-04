"use client";
import { styled } from "styled-components";

export const QRCodepWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 320px;
  height: 496px;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;

  .centered-element {
    width: auto;
    border-radius: 10px;
    aspect-ratio: 1 / 1;
    overflow: hidden;

    margin: 16px;

    .image {
      width: auto;
      height: auto;
      border-radius: 10px;
    }
  }

  .under {
    .title-under {
      text-align: center;
      font-weight: 700;
      font-size: 22px;
      color: hsl(218, 44%, 22%);

      margin-left: 25px;
      margin-right: 25px;
      margin-top: 24px;
    }

    .paragraph-under {
      text-align: center;
      font-weight: 400;
      font-size: 15px;
      color: hsl(220, 15%, 55%);

      margin-top: 15px;
      margin-left: 30px;
      margin-right: 30px;
    }
  }
`;
