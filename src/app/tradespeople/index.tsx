"use client";

import React from "react";
import ProfileManagement from "./components/ProfileManagement";
import JobRequests from "./components/JobRequests";
import CalendarAvailability from "./components/CalendarAvailability";
import JobDetails from "./components/JobDetails";
import Chat from "./components/Chat";
import JobCompletion from "./components/JobCompletion";
import Payments from "./components/Payments";
import Notifications from "./components/Notifications";

export default function TradespeopleApp() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Tradespeople App</h2>
      <ProfileManagement />
      <JobRequests />
      <CalendarAvailability />
      <JobDetails />
      <Chat />
      <JobCompletion />
      <Payments />
      <Notifications />
    </main>
  );
}
