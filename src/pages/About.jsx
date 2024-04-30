import React from "react";
import Sidebar from "../components/Sidebar";

function About() {
  function resetApp() {
    localStorage.clear();
    location.reload();
    alert(`Reset successful!`);
  }

  return (
    <div className="flex justify-start">
      <Sidebar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-start items-start h-[95%] w-[98%] rounded-3xl p-6">
          <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text font-medium text-6xl">
            About Quick Note
          </h1>
          <br />
          <div className="divider divider-neutral"></div>
          <p className="italic">
            Welcome to Quick Note, your ultimate productivity companion designed
            to streamline your note-taking experience and supercharge your
            efficiency. Developed independently by Hirakjyoti, our mission is to
            empower you to achieve your goals faster by harnessing the power of
            cutting-edge technology.
          </p>

          <div className="divider"></div>

          <h3 className="text-2xl">Key Features:</h3>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <strong>Enhanced Productivity:</strong> With Quick Note, you can
              double your productivity effortlessly. Say goodbye to scattered
              notes and welcome a seamless organization system that works for
              you.
            </li>
            <li>
              <strong>Local Storage Convenience:</strong> Your notes are
              securely stored in your browser's local storage, ensuring easy
              access and privacy.
            </li>
            <li>
              <strong>AI-Powered Help:</strong> Need assistance with note
              generation? Our AI-powered HELP tab is at your service. Whether
              it's summarizing content, generating outlines, or providing
              insights, our AI assistant is here to support you.
            </li>
          </ul>

          <div className="divider"></div>

          <h3 className="text-2xl">Developer Details:</h3>
          <br />
          <ul className="list-disc list-inside">
            <li>
              <strong>Developer:</strong> Hirakjyoti
            </li>
            <li>
              <strong>Contact Email:</strong>{" "}
              <a href="mailto:hirakbth2@gmail.com">hirakbth2@gmail.com</a>
            </li>
          </ul>

          <div className="divider"></div>

          <p className="italic">
            Quick Note is more than just a note-taking app; it's a testament to
            independent innovation, helping you unlock your full potential and
            accomplish more than you ever thought possible. Get started today
            and experience the difference!
            <br />
            Should you ever need to refresh your app or start anew, simply
            utilize the reset button for a clean slate.
          </p>
          <br />
          <br />
          <button
            className="btn btn-wide btn-error btn-outline"
            onClick={resetApp}
          >
            RESET APP
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
