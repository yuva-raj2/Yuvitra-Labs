"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "cmms-pilot",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-[#10121A] p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-zinc-100">Consultation Request Received</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-amber-400 font-medium">{formData.name || "there"}</span>. An engineering lead from Yuvitra Labs will review your requirements and reach out to <span className="text-zinc-200 font-mono">{formData.email}</span> within 24 business hours.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                organization: "",
                service: "cmms-pilot",
                message: "",
              });
            }}
            className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
          >
            &larr; Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="organization" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
            Company / Organization
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Apex Precision Tools"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="service" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
            Area of Interest *
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          >
            <option value="cmms-pilot">Yuvitra CMMS Showcase &amp; Pilot</option>
            <option value="custom-software">Custom Industrial Software / Web App</option>
            <option value="ai-automation">AI Assistants &amp; Business Automation</option>
            <option value="architecture-consulting">Technical Architecture Consulting</option>
            <option value="other">General Engineering Inquiry</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
          Project Brief / Machine Count / Objectives *
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your current operational challenge, factory lines, or software requirements..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-y"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        >
          Send Engineering Inquiry &rarr;
        </button>
      </div>
    </form>
  );
}
