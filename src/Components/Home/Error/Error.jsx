import React from "react";
import errorImg from "../../../assets/imgs/error.png";

export default function Error() {
  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center">
      <img src={errorImg} alt="error 404" className="w-50 mt-4" />
    </section>
  );
}
