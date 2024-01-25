"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRef } from "react";
import axios from "axios"; // Import Axios
import { Textarea } from "@/components/ui/textarea";

const FormData = () => {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const handleFeedbackButton = async (e) => {
    e.preventDefault();
    console.log("Handling feedback submission...");
    const emailEntered = emailRef.current.value;
    const feedbackEntered = feedbackRef.current.value;

    const reqBody = { email: emailEntered, text: feedbackEntered };

    try {
      const response = await axios.post("api", reqBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(reqBody);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
        <CardDescription>Your feedback makes us grow bigger</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="POST" onSubmit={handleFeedbackButton}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Feedback</Label>
              <Textarea
                id="text"
                type="text"
                name="text"
                placeholder="Enter your feedback here"
                ref={feedbackRef}
              />
            </div>
          </div>
          <CardFooter className="flex items-center gap-10 mt-10 ml-[-20px]">
            <Button variant="outline">Close</Button>
            <Button type="submit">Submit your Feedback</Button>{" "}
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormData;
