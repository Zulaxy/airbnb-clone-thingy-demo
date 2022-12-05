import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 ">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">Contact Us</h5>
        <p>Feel Free</p>
        <p>To Contact Us</p>
        <p>Reach Out</p>
        <p>Or don't</p>
        <p>It is up to you</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It is a clone</p>
        <p>I did with the help of</p>
        <p>Sonny Sangha</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>This is</p>
        <p>A place</p>
        <p>to host</p>
        <p>your places</p>
        <p>Join Now!</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust and Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For The Win</p>
      </div>
    </footer>
  );
};

export default Footer;
