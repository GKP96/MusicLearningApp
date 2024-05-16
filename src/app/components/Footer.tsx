import React from "react";

export default function Footer() {
  return (
    <div className="bg-black shadow-2xl">
      <div className="m-2 p-10 grid grid-cols-1 sm:grid-col-3 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-lg font-semibold mb-4 text-center">
            About Us
          </h2>
          <p>
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 text-center">
            Quick links
          </h2>

          <div className="grid grid-cols-2 my-4">
            <div className="flex justify-center items-center p-2">Home</div>
            <div className="flex justify-center items-center p-2">About</div>
            <div className="flex justify-center items-center p-2">Courses</div>
            <div className="flex justify-center items-center p-2">Contacts</div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 text-center">
            Follow Us
          </h2>
          <div className="flex  items-center justify-between p-2">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 text-center">
            Contact Us
            {/* <div className="flex justify-center"> */}
            <div className="text-sm my-4">
              <div className="p-2">
                <p>New Delhi, India</p>
                <p>Delhi 10001</p>
                <p>Email: info@musicschool.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              {/* </div> */}
            </div>
          </h2>
        </div>
      </div>
      <p className="text-center text-xs p-2">
        © 2024 Music School. All rights reserved.
      </p>
    </div>
  );
}
