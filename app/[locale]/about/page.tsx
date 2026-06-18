"use client";

import ReactLenis from "@studio-freight/react-lenis";

export default function AboutPage() {
  return (
    <ReactLenis root>
      <div className="h-screen bg-gray-800">
        <div className="container h-full flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Lorem ipsum dolor sit</h1>
            <p className="text-xl text-gray-300 mb-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse aspernatur enim quos.</p>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
