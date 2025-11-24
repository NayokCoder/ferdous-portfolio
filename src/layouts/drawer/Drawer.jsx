"use client";
import React from "react";

const Drawer = ({ isOpen, onClose, icon }) => {
  return (
    <>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-5"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          onChange={() => {}}
        />
        <div className="drawer-content">
          <label htmlFor="my-drawer-5" className="drawer-button">
            <button
              onClick={onClose}
              className="border border-border hover:bg-accent hover:text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg mb-5"
            >
              <span className="text-2xl mx-auto text-muted-foreground flex items-center justify-center">
                {icon}
              </span>
            </button>
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={onClose}
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
