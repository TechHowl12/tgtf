"use client";
import React, { useMemo, useState } from "react";

const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyQeW6hrrZf16DIAPwbQskDmP7M1kMrtuG702uZIuJ173gT-_UG0p5oXHVemcNRIrN6/exec";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    interest: "Partner with TGTF",
    consent: false,
};

export default function ContactForm() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState(null);
    // null | {type:'sending'|'success'|'error', msg: string}

    const [errors, setErrors] = useState({});
    // { name?: string, email?: string, phone?: string, consent?: string }

    const [showSuccess, setShowSuccess] = useState(false);

    const emailRegex = useMemo(
        () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        []
    );
    const phoneRegex = useMemo(
        () => /^[0-9]{7,15}$/,
        []
    );

    const validate = (data) => {
        const nextErrors = {};

        // Name
        if (!data.name.trim()) nextErrors.name = "Please enter your name.";
        else if (data.name.trim().length < 2)
            nextErrors.name = "Name must be at least 2 characters.";

        // Email
        if (!data.email.trim()) nextErrors.email = "Please enter your email.";
        else if (!emailRegex.test(data.email.trim()))
            nextErrors.email = "Please enter a valid email address.";

        // Phone (optional)
        const phoneVal = data.phone.trim();
        if (!phoneVal) nextErrors.phone = "Please enter your phone number.";
        else if (!phoneRegex.test(phoneVal))
            nextErrors.phone = "Phone must be 7–15 digits (numbers only).";

        // Consent
        if (!data.consent)
            nextErrors.consent = "Please accept terms to continue.";

        return nextErrors;
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // live clear error for that field
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const nextErrors = validate(form);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus({ type: "error", msg: "Please fix the errors below." });
            return;
        }

        setStatus({ type: "sending", msg: "Submitting..." });

        try {
            const url = new URL(APPS_SCRIPT_URL);
            url.searchParams.append("name", form.name.trim());
            url.searchParams.append("email", form.email.trim());
            url.searchParams.append("phone", form.phone.trim());
            url.searchParams.append("want", form.interest || "");

            const res = await fetch(url.toString(), {
                method: "GET",
                headers: { Accept: "application/json" },
            });

            let json = null;
            try {
                json = await res.json();
            } catch (_) { }

            if (!res.ok) {
                const msg =
                    (json && json.message) || `Server responded with ${res.status}`;
                throw new Error(msg);
            }

            if (json && json.ok === true) {
                setStatus({ type: "success", msg: "Thanks — we'll be in touch." });
                setForm(initialForm);
                setShowSuccess(true);
            } else {
                const msg = (json && json.message) || "Submission failed.";
                throw new Error(msg);
            }
        } catch (err) {
            console.error("ContactForm submit error:", err);
            setStatus({
                type: "error",
                msg: err.message || "Network error. Try again.",
            });
        }
    };

    return (
        <>
            {/* Success Popup */}
            {showSuccess && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
                    {/* backdrop */}
                    <div
                        className="absolute inset-0 bg-black/30"
                        onClick={() => setShowSuccess(false)}
                    />
                    {/* modal */}
                    <div className="relative w-full max-w-sm rounded-2xl bg-gray-100 p-6 shadow-xl border border-pink/30">
                        <h3 className="text-pink font-extrabold text-base mb-2">
                            Submitted successfully!
                        </h3>
                        <p className="text-[12px] text-gray-600">
                            Thanks — we’ll be in touch shortly.
                        </p>

                        <button
                            onClick={() => setShowSuccess(false)}
                            className="mt-4 w-full py-2 rounded-lg font-extrabold text-bright bg-pink transition-colors"
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6 text-sm z-9999">
                {/* Name */}
                <div>
                    <label className="text-pink text-xs">Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className={`w-full rounded-xl bg-gray-100 px-4 py-3 text-sm mt-2 placeholder-gray-400 focus:outline-none ${errors.name ? "ring-1 ring-red-400" : ""
                            }`}
                    />
                    {errors.name && (
                        <small className="text-[11px] text-red-600 mt-1">{errors.name}</small>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="text-pink text-xs">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        className={`w-full rounded-xl bg-gray-100 px-4 py-3 text-sm mt-2 focus:outline-none ${errors.email ? "ring-1 ring-red-400" : ""
                            }`}
                    />
                    {errors.email && (
                        <small className="text-[11px] text-red-600 mt-1">{errors.email}</small>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label className="text-pink text-xs">Phone</label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        inputMode="tel"
                        className={`w-full rounded-xl bg-gray-100 px-4 py-3 text-sm mt-2 focus:outline-none ${errors.phone ? "ring-1 ring-red-400" : ""
                            }`}
                    />
                    {errors.phone && (
                        <small className="text-[11px] text-red-600 mt-1">{errors.phone}</small>
                    )}
                </div>

                {/* Interest */}
                <div>
                    <label className="text-pink text-xs">I want to...</label>
                    <select
                        name="interest"
                        value={form.interest}
                        onChange={onChange}
                        className="w-full rounded-xl bg-gray-100 px-4 py-3 text-sm mt-2 focus:outline-none"
                    >
                        <option>Partner with TGTF</option>
                        <option>Get updates on Tgtf</option>
                    </select>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                    <input
                        id="consent"
                        name="consent"
                        checked={form.consent}
                        onChange={onChange}
                        type="checkbox"
                        className={`mt-1 h-4 w-4 rounded border-gray-300 ${errors.consent ? "ring-1 ring-red-400" : ""
                            }`}
                    />
                    <label htmlFor="consent" className="text-[12px] text-gray-600">
                        <span className="text-pink">
                            By clicking ‘Submit’ you agree to the{" "}
                            <span className="underline">Terms and Conditions</span> and to
                            receive updates about 'The Gypsy Travel Festival' via emails and
                            messages.
                        </span>
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-extrabold text-bright bg-pink transition-colors disabled:opacity-60"
                    disabled={status?.type === "sending"}
                >
                    {status?.type === "sending" ? "SUBMITTING..." : "SUBMIT"}
                </button>

                {errors.consent && (
                    <small className="text-[11px] text-red-600 -mt-2">{errors.consent}</small>
                )}
            </form>
        </>
    );
}
