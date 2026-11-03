"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "cmms-architecture",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const formatEmailBody = () => {
    return (
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company / Organization: ${formData.organization || "N/A"}\n` +
      `Area of Interest: ${formData.service}\n\n` +
      `Project Brief / Objectives:\n${formData.message}`
    );
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Yuvitra Labs Inquiry] ${formData.service} - ${formData.name || "Engineering Consultation"}`
    );
    const body = encodeURIComponent(formatEmailBody());
    return `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = constructMailtoUrl();
    window.location.href = mailtoUrl;
    setDispatched(true);
  };

  const handleCopy = () => {
    const textToCopy = formatEmailBody();
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="space-y-6 text-left">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Full Name *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Work Email *
            </label>
            <input
              id="contact-email"
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
            <label htmlFor="contact-org" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Company / Organization
            </label>
            <input
              id="contact-org"
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Apex Precision Tools"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-service" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Area of Interest *
            </label>
            <select
              id="contact-service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            >
              <option value="cmms-architecture">Yuvitra CMMS Architecture &amp; Specification</option>
              <option value="custom-software">Custom Industrial Software / Web App</option>
              <option value="ai-automation">AI Assistants &amp; Business Automation</option>
              <option value="architecture-consulting">Technical Architecture Consulting</option>
              <option value="other">General Engineering Inquiry</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
            Project Brief / Machine Count / Objectives *
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe your operational requirements, factory lines, or architecture inquiry..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#27272A] bg-[#0E1017] text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-y"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            Compose Email Inquiry &rarr;
          </button>

          {formData.message && (
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-[#161922] border border-[#27272A] hover:border-zinc-600 text-zinc-300 text-xs font-mono transition-all"
            >
              {copied ? "Inquiry Copied to Clipboard!" : "Copy Inquiry Text"}
            </button>
          )}
        </div>
      </form>

      {/* Honest Backend Connectivity Notice */}
      <div className="p-3.5 rounded-lg border border-zinc-800 bg-[#0E1017] text-[11px] font-mono text-zinc-500 space-y-1">
        <div className="flex items-center gap-1.5 text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="font-semibold uppercase tracking-wider">Direct Dispatch Channel</span>
        </div>
        <p className="leading-relaxed">
          Inquiries are routed directly to <span className="text-zinc-300 select-all">{SITE_CONFIG.email}</span> via your system mail client. Automated database form submission endpoints are scheduled for deployment in Phase 2.
        </p>
      </div>

      {dispatched && (
        <div className="p-4 rounded-lg border border-amber-500/30 bg-amber-500/10 text-xs text-amber-300 font-mono space-y-1">
          <div className="font-semibold">&bull; Email client triggered with your inquiry details.</div>
          <div className="text-[11px] text-zinc-400">
            If your email application did not launch automatically, please send your inquiry directly to{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-amber-400 underline">
              {SITE_CONFIG.email}
            </a>.
          </div>
        </div>
      )}
    </div>
  );
}
