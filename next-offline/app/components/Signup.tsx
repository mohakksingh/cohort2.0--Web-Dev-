"use client";

import axios from "axios";
import { useState } from "react";
import { signup } from "../actions/user";

export function Signup() {
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="p-4 border rounded pb-4">
          <input
            onChange={(e) => {
              setEMail(e.target.value);
            }}
            className="p-2 m-2"
            type="text"
            placeholder="username"
          ></input>
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);    
            }}
            className="p-2 m-2"
            type="password"
            placeholder="password"
          ></input>
          <br />
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => {
                signup(email, password);  
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
