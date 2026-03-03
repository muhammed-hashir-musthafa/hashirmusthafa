"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Formik, Form, Field, FieldInputProps } from "formik";
import * as Yup from "yup";

// ─── Validation Schema ───────────────────────────────────────────────────────

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .max(500, "Message must be less than 500 characters")
 });

// ─── Sub-components ──────────────────────────────────────────────────────────

function MagneticCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-4deg", "4deg"]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingInput({
  id,
  label,
  type = "text",
  field,
  error,
  touched,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  field: FieldInputProps<string>;
  error?: string;
  touched?: boolean;
}) {
  const active = field.value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
          active
            ? "-top-2.5 text-[11px] font-semibold text-amber-400 bg-[#0d0d0d] px-1.5"
            : "top-3.5 text-sm text-white/30"
        }`}
      >
        {label}
      </label>
      <input
        {...field}
        id={id}
        type={type}
        placeholder=""
        className={`w-full h-12 bg-white/3 border rounded-xl px-4 pt-1 text-sm text-white placeholder:text-white/20
          focus:outline-none focus:bg-white/5 transition-all duration-300 ${
            error && touched
              ? "border-red-500/50"
              : "border-white/10 focus:border-amber-500/50"
          }`}
      />
      {error && touched && (
        <p className="text-red-400 text-xs mt-1.5 ml-1">{error}</p>
      )}
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  field,
  error,
  touched,
}: {
  id: string;
  label: string;
  placeholder: string;
  field: FieldInputProps<string>;
  error?: string;
  touched?: boolean;
}) {
  const active = field.value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
          active
            ? "-top-2.5 text-[11px] font-semibold text-amber-400 bg-[#0d0d0d] px-1.5"
            : "top-3.5 text-sm text-white/30"
        }`}
      >
        {label}
      </label>
      <textarea
        {...field}
        id={id}
        placeholder=""
        rows={5}
        className={`w-full bg-white/3 border rounded-xl px-4 pt-4 text-sm text-white placeholder:text-white/20
          focus:outline-none focus:bg-white/5 transition-all duration-300 resize-none ${
            error && touched
              ? "border-red-500/50"
              : "border-white/10 focus:border-amber-500/50"
          }`}
      />
      {error && touched && (
        <p className="text-red-400 text-xs mt-1.5 ml-1">{error}</p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="contact"
      className="relative py-36 overflow-hidden bg-[#0d0d0d]"
    >
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 bg-amber-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-yellow-400/8 rounded-full blur-[120px]" /> */}
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* ── Heading ── */}
        <motion.div {...fadeUp()} className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber-500/60" />
            <span className="text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Let&apos;s Talk
            </span>
          </div>
          <h2 className="text-5xl md:text-[72px] font-bold leading-[1.05] tracking-tight text-white">
            Build Something
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500">
              Extraordinary
            </span>
          </h2>
          <p className="mt-6 text-white/40 text-lg max-w-md leading-relaxed">
            Have an idea? I turn visions into polished digital products.
            Let&apos;s make it happen.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
          {/* ── Left: Form ── */}
          <motion.div {...fadeUp(0.15)}>
            <MagneticCard className="rounded-3xl">
              <div className="rounded-3xl border border-white/[0.07] bg-white/2 backdrop-blur-md p-8 md:p-12 relative overflow-hidden">
                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  validationSchema={contactSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    await new Promise((r) => setTimeout(r, 800));
                    window.location.href = `mailto:${portfolioData.email}?subject=Message from ${values.name}&body=${values.message}%0D%0A%0D%0AFrom: ${values.email}`;
                    setSubmitting(false);
                    resetForm();
                  }}
                >
                  {({ isSubmitting, isValid, errors, touched }) => (
                    <Form className="space-y-6 relative z-10">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field name="name">
                          {({ field }: { field: FieldInputProps<string> }) => (
                            <FloatingInput
                              id="name"
                              label="Your Name"
                              placeholder="John Doe"
                              field={field}
                              error={errors.name}
                              touched={touched.name}
                            />
                          )}
                        </Field>
                        <Field name="email">
                          {({ field }: { field: FieldInputProps<string> }) => (
                            <FloatingInput
                              id="email"
                              label="Email Address"
                              type="email"
                              placeholder="john@example.com"
                              field={field}
                              error={errors.email}
                              touched={touched.email}
                            />
                          )}
                        </Field>
                      </div>

                      <Field name="message">
                        {({ field }: { field: FieldInputProps<string> }) => (
                          <FloatingTextarea
                            id="message"
                            label="Your Message"
                            placeholder="Tell me about your project…"
                            field={field}
                            error={errors.message}
                            touched={touched.message}
                          />
                        )}
                      </Field>

                      <div className="flex items-center justify-between pt-2">
                        <p className="text-white/25 text-xs">
                          I respond within 24 hours
                        </p>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting || !isValid}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="relative h-12 px-8 rounded-xl font-semibold text-sm text-black overflow-hidden
                            bg-linear-to-r from-amber-400 to-yellow-400 disabled:opacity-50 transition-opacity"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? (
                              "Sending…"
                            ) : (
                              <>
                                Send Message <Send size={15} />
                              </>
                            )}
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-white/30 skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={
                              isSubmitting ? { x: "200%" } : { x: "-100%" }
                            }
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          />
                        </motion.button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </MagneticCard>
          </motion.div>

          {/* ── Right: Info stack ── */}
          <div className="flex flex-col gap-5">
            {/* availability badge */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 w-fit"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">
                Available for new projects
              </span>
            </motion.div>

            {/* email card */}
            <motion.a
              href={`mailto:${portfolioData.email}`}
              {...fadeUp(0.3)}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/[0.07] bg-white/2 p-7 flex items-center justify-between
                hover:border-amber-500/30 hover:bg-white/4 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl bg-linear-to-br from-amber-400/20 to-yellow-500/20 border border-amber-400/20
                  flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform"
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Email</p>
                  <p className="text-white text-sm font-medium">
                    {portfolioData.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/20 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </motion.a>

            {/* whatsapp card */}
            <motion.a
              href="https://wa.me/+971561159716"
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(0.35)}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/[0.07] bg-white/2 p-7 flex items-center justify-between
                hover:border-green-500/30 hover:bg-white/4 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl bg-linear-to-br from-green-400/20 to-emerald-500/20 border border-green-400/20
                  flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform"
                >
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">WhatsApp</p>
                  <p className="text-white text-sm font-medium">
                    +971 50 123 4567
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/20 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </motion.a>

            {/* location card */}
            <motion.div
              {...fadeUp(0.4)}
              className="rounded-2xl border border-white/[0.07] bg-white/2 p-7 flex items-center gap-4"
            >
              <div
                className="w-11 h-11 rounded-xl bg-linear-to-br from-amber-400/20 to-yellow-500/20 border border-amber-400/20
                flex items-center justify-center text-amber-400 shrink-0"
              >
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Based in</p>
                <p className="text-white text-sm font-medium">
                  Dubai, UAE · Remote Worldwide
                </p>
              </div>
            </motion.div>

            {/* decorative divider line */}
            <motion.div
              {...fadeUp(0.45)}
              className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-1"
            />

            {/* tagline */}
            <motion.p
              {...fadeUp(0.48)}
              className="text-white/20 text-xs text-center tracking-wider"
            >
              © {new Date().getFullYear()} — Crafted with precision
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
