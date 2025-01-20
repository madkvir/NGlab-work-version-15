import React, { useState, useMemo, useEffect, useCallback } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import {
  Briefcase,
  Calendar,
  Globe,
  Globe2,
  Languages,
  Mail,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import FullCalendar from "@fullcalendar/react";
import FormField from "./FormField";
import { format, zonedTimeToUtc } from "date-fns-tz";
import { BookingFormData } from "../types/booking";
import { CALENDAR_CONFIG } from "../config/calendar";
import { LANGUAGES, SUBJECTS, POSITIONS } from "../config/constants";
import { LanguageSelect } from "./LanguageSelect";
import { SuccessModal } from "./SuccessModal";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const validateUrl = (url: string) => {
  // Add protocol if missing
  const urlWithProtocol = url.match(/^https?:\/\//) ? url : `https://${url}`;
  try {
    new URL(urlWithProtocol);
    return true;
  } catch {
    return false;
  }
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [calendarKey, setCalendarKey] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<BookingFormData>();
  const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const selectedTimezone = watch("timezone", defaultTimezone);
  const selectedLanguage = watch("language", LANGUAGES[0]);
  const userEmail = watch("email");

  useEffect(() => {
    if (isOpen) {
      setCalendarKey((prev) => prev + 1);
      // Force calendar resize
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    }
  }, [isOpen]);

  const timezonesWithOffset = useMemo(() => {
    return Intl.supportedValuesOf("timeZone").map((tz) => ({
      value: tz,
      label: `${tz} (${format(new Date(), "xxx", { timeZone: tz })})`,
    }));
  }, []);

  const handleSelect = useCallback((info: { start: Date; end: Date }) => {
    const start = info.start;
    const hour = start.getHours();
    if (hour >= 9 && hour < 18) {
      setSelectedDate(start);
    }
  }, []);

  const handleClose = useCallback(() => {
    reset();
    setSelectedDate(null);
    onClose();
  }, [onClose, reset]);

  const onSubmit = useCallback(
    async (data: BookingFormData) => {
      if (!selectedDate) {
        alert("Please select a date and time");
        return;
      }

      setIsSubmitting(true);
      try {
        const utcDate = zonedTimeToUtc(selectedDate, selectedTimezone);

        const formattedDate = format(utcDate, "yyyy-MM-dd'T'HH:mm:ssXXX", {
          timeZone: "UTC",
        });

        const formData = {
          ...data,
          datetime: formattedDate,
          "form-name": "booking",
          selectedTimezone: selectedTimezone,
        };

        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(formData),
        });

        setShowSuccessModal(true);
        handleClose();
      } catch (error) {
        console.error("Booking failed:", error);
        alert("Failed to submit booking request. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [selectedDate, selectedTimezone, handleClose]
  );

  return (
    <>
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog onClose={handleClose} className="relative z-50">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
                className="w-full max-w-4xl"
              >
                <Dialog.Panel className="relative transform overflow-visible rounded-lg bg-[#0A1A1F] p-4 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <img src="/logo.png" alt="NGlab" className="h-16 w-auto" />
                      <Dialog.Title className="text-xl leading-6 font-bold text-white">
                        Book a Demo
                      </Dialog.Title>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-gray-400 hover:text-gray-300 transition-colors"
                      aria-label="Close dialog"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                    data-netlify="true"
                    name="booking"
                    method="POST"
                  >
                    <input type="hidden" name="form-name" value="booking" />
                    <input type="hidden" name="selectedTimezone" />

                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                      <div className="order-1 lg:order-1 space-y-4">
                        <div className="bg-[#152328] rounded-lg p-4 border border-[#3DFEA3]/20">
                          <h2 className="text-base leading-6 font-semibold text-white mb-1.5">
                            🚀 Book a consultation with NeuroGen Lab!
                          </h2>
                          <p className="text-sm leading-5 text-gray-300 mb-2">
                            Discover how AI Agents can automate your business, improve service, and
                            increase sales.
                          </p>
                          <p className="text-sm leading-5 text-gray-300 font-medium">
                            💡 Choose a convenient time – let's discuss how AI can help you!
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <FormField label="Name" icon={User} required>
                            <input
                              type="text"
                              {...register("name", { required: "Name is required" })}
                              className={`w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5 ${
                                errors.name ? "border-red-500" : ""
                              }`}
                            />
                            {errors.name && (
                              <p className="mt-1 text-xs leading-4 text-red-500">
                                {errors.name.message}
                              </p>
                            )}
                          </FormField>

                          <FormField label="Language" icon={Languages}>
                            <LanguageSelect
                              value={selectedLanguage}
                              onChange={(value) => setValue("language", value)}
                              register={register}
                            />
                          </FormField>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <FormField label="Email" icon={Mail} required>
                            <input
                              type="email"
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^\S+@\S+$/i,
                                  message: "Please enter a valid email",
                                },
                              })}
                              className={`w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5 ${
                                errors.email && "border-red-500"
                              }`}
                            />
                            {errors.email && (
                              <p className="mt-1 text-xs leading-4 text-red-500">
                                {errors.email.message}
                              </p>
                            )}
                          </FormField>

                          <FormField label="Website" icon={Globe2} required>
                            <input
                              type="text"
                              {...register("website", {
                                required: "Website is required",
                                validate: {
                                  validUrl: (value) =>
                                    validateUrl(value) || "Please enter a valid website URL",
                                },
                              })}
                              placeholder="example.com"
                              className={`w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5 ${
                                errors.website ? "border-red-500" : ""
                              }`}
                            />
                            {errors.website && (
                              <p className="mt-1 text-xs leading-4 text-red-500">
                                {errors.website.message}
                              </p>
                            )}
                          </FormField>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <FormField label="Subject" icon={Calendar}>
                            <select
                              {...register("subject", { required: true })}
                              className="w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5"
                            >
                              {SUBJECTS.map((subject) => (
                                <option key={subject} value={subject}>
                                  {subject}
                                </option>
                              ))}
                            </select>
                          </FormField>

                          <FormField label="Timezone" icon={Globe}>
                            <select
                              {...register("timezone")}
                              defaultValue={defaultTimezone}
                              className="w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5"
                            >
                              {timezonesWithOffset.map(({ value, label }) => (
                                <option key={value} value={value}>
                                  {label}
                                </option>
                              ))}
                            </select>
                          </FormField>
                        </div>

                        <FormField label="Position" icon={Briefcase}>
                          <select
                            {...register("position", { required: true })}
                            className="w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5"
                          >
                            {POSITIONS.map((position) => (
                              <option key={position} value={position}>
                                {position}
                              </option>
                            ))}
                          </select>
                        </FormField>

                        <FormField label="Comments" icon={MessageSquare}>
                          <textarea
                            {...register("comments")}
                            rows={1}
                            className="w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white placeholder-gray-500 shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5"
                          />
                        </FormField>
                      </div>

                      <div className="order-2 lg:order-2 space-y-2">
                        <div className="rounded border border-[#3DFEA3]/20 p-2">
                          <FullCalendar
                            key={calendarKey}
                            select={handleSelect}
                            {...CALENDAR_CONFIG}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                          />
                        </div>

                        {selectedDate && (
                          <div className="text-sm leading-5 font-medium text-gray-200">
                            Selected:{" "}
                            {format(selectedDate, "dd.MM.yyyy HH:mm", {
                              timeZone: selectedTimezone,
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-md bg-[#3DFEA3] px-6 py-2 text-sm leading-5 font-semibold text-[#0A1A1F] shadow-sm hover:bg-[#3DFEA3]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DFEA3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Booking..." : "Book Demo"}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        email={userEmail}
      />
    </>
  );
}