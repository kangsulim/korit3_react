import { Routes, Route } from "react-router-dom";
import ContactBusan from "./ContactBusan";

export default function Contact() {

  return(
    <>
      <h3>Contact Component</h3>
      <Routes>
        <Route path='busan' element={<ContactBusan />}></Route>
      </Routes>
    </>
  );
}