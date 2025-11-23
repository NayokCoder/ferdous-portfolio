import React from "react";
import Image from "next/image";

import { Award, MapPin, Mail } from "lucide-react";

const Course = () => {
  return (
    <div>
      <section className="max-w-4xl mx-auto my-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Certificate card */}
          <article className="flex flex-col gap-4 p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>

                <div>
                  <h3 className="font-semibold">Complete Web Development</h3>
                  <p className="text-sm text-gray-500">Programing Hero — Jun 2024</p>
                </div>
              </div>
              <a href="https://drive.google.com/file/d/1rCCxx2gEUi3QwvS2ilDeUCWMOASXqIRl/view?usp=sharing" target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50">
                View Certificate
              </a>
            </div>

            <p className="text-sm text-gray-600">Completed a comprehensive web development program covering HTML, CSS, JavaScript, React, Node.js and deployment workflows. Built multiple projects and a portfolio-ready application.</p>
          </article>

          {/* Education list */}
          <article className="p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Education</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Bachelor of Science in Computer Science & Engineering</p>
                  <p className="text-sm text-gray-500">Tejgaon College (National University)</p>
                  <p className="text-sm text-gray-500">
                    2015 – 2020 • CGPA: <span className="font-semibold">2.62 / 4.00</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Higher Secondary School Certificate</p>
                  <p className="text-sm text-gray-500">Quality Education College</p>
                  <p className="text-sm text-gray-500">
                    2012 – 2014 • CGPA: <span className="font-semibold">4.50 / 5.00</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Secondary School Certificate</p>
                  <p className="text-sm text-gray-500">Dakhin Banasree Model High School</p>
                  <p className="text-sm text-gray-500">
                    2010 – 2012 • CGPA: <span className="font-semibold">4.06 / 5.00</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* decorative timeline */}
        <div className="mt-8 flex items-center gap-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <span className="text-xs text-gray-400">Education timeline • Dhaka, Bangladesh</span>
        </div>
      </section>
    </div>
  );
};

export default Course;
