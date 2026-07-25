import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { jakarta, inter } from '../sections/shared';
import Grainient from './Grainient';

// --- HELPER COMPONENTS (ICONS) ---

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" />
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
  </svg>
);

const HireloomBrandMark = () => (
  <div className="flex items-center gap-1">
    <svg width="48" height="38" viewBox="0 0 128 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.8792 0L39.677 8.38283L23.262 101.477L0 101.398L17.8792 0Z" fill="white" />
      <path d="M75.0511 0L96.8488 8.38283L80.4338 101.477L57.1719 101.398L75.0511 0Z" fill="white" />
      <path d="M127.296 62.9224C116.392 52.9839 102.319 45.8385 86.297 43.0785C44.3455 35.8518 6.68101 62.6235 0.000976562 101.401C8.10677 101.469 23.2608 101.469 23.2608 101.469C23.2608 101.469 56.5 45.8621 100.899 53.5106C110.45 55.1559 119.324 58.4019 127.296 62.9224Z" fill="white" />
    </svg>

    <span className="font-bold text-2xl lg:text-[26px] tracking-[-0.5px] text-white" style={jakarta}>
      Hireloom
    </span>
  </div>
);

// --- TYPE DEFINITIONS ---

export interface StepItem {
  number: number;
  title: string;
  active?: boolean;
}

export interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  steps?: StepItem[];
  onSignIn?: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleSignIn?: () => void;
  onLinkedInSignIn?: () => void;
  onResetPassword?: () => void;
  onCreateAccount?: () => void;
  onBackToHome?: () => void;
}

// --- SUB-COMPONENTS ---

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-colors focus-within:border-[#8028E4] focus-within:bg-[#8028E4]/10">
    {children}
  </div>
);

// --- MAIN COMPONENT ---

export const SignInPage: React.FC<SignInPageProps> = ({
  title = <span className="font-bold text-white tracking-tight" style={jakarta}>Welcome Back</span>,
  description = "Access your Hireloom recruiting workspace and candidate evaluation pipeline.",
  steps = [
    { number: 1, title: "Sign up your account", active: true },
    { number: 2, title: "Set up your profile", active: false },
    { number: 3, title: "Explore opportunities", active: false },
  ],
  onSignIn,
  onGoogleSignIn,
  onLinkedInSignIn,
  onResetPassword,
  onCreateAccount,
  onBackToHome,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSignIn) {
      onSignIn(e);
    } else {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log("Hireloom Sign-in:", data);
      alert(`Welcome back to Hireloom! (Demo Email: ${data.email})`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse font-sans bg-[#06060F] text-white w-full overflow-x-hidden relative">
      {/* Top Left Navigation Back Arrow Only */}
      <div className="absolute top-[50px] left-[50px] z-50">
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="size-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer backdrop-blur-md"
            aria-label="Back to home"
          >
            <ArrowLeft size={18} />
          </button>
        )}
      </div>

      {/* RIGHT COLUMN: Sign-in Form */}
      <section className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16 z-10 my-auto">
        <div className="w-full max-w-md pt-12 md:pt-0">
          <div className="flex flex-col gap-6">
            <div className="mb-2 md:hidden">
              <HireloomBrandMark />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-2" style={jakarta}>
                {title}
              </h1>
              <p className="text-[13.5px] text-[#9999AA] leading-relaxed" style={inter}>
                {description}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-[12px] font-medium text-[#9999AA] mb-1.5 block" style={inter}>
                  Work Email Address
                </label>
                <GlassInputWrapper>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-transparent text-sm p-3.5 text-white placeholder-[#6B6B80] focus:outline-none"
                    style={inter}
                  />
                </GlassInputWrapper>
              </div>

              <div>
                <label className="text-[12px] font-medium text-[#9999AA] mb-1.5 block" style={inter}>
                  Password
                </label>
                <GlassInputWrapper>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••••••"
                      className="w-full bg-transparent text-sm p-3.5 pr-12 text-white placeholder-[#6B6B80] focus:outline-none"
                      style={inter}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 flex items-center text-[#9999AA] hover:text-white transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </GlassInputWrapper>
              </div>

              <div className="flex items-center justify-between text-[12.5px]" style={inter}>
                <label className="flex items-center gap-2 cursor-pointer text-[#9999AA] hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="rounded border-white/20 bg-white/5 text-[#8028E4] focus:ring-[#8028E4] focus:ring-offset-0"
                  />
                  <span>Keep me signed in</span>
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onResetPassword?.();
                  }}
                  className="text-[#A855F7] hover:underline transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#8028E4] hover:bg-[#6B1FC8] text-white py-3.5 font-semibold text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(128,40,228,0.4)] cursor-pointer"
                style={inter}
              >
                Sign In to Workspace
              </button>
            </form>

            <div className="relative flex items-center justify-center my-1">
              <span className="w-full border-t border-white/10"></span>
              <span className="px-3 text-[12px] text-[#6B6B80] bg-[#06060F] absolute" style={inter}>
                Or continue with
              </span>
            </div>

            {/* DUAL QUICK LOGIN OPTIONS: GOOGLE & LINKEDIN */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={onGoogleSignIn || (() => alert("Google Sign-In initialized"))}
                className="flex items-center justify-center gap-2.5 border border-white/10 rounded-2xl py-3 text-[13px] text-white font-medium bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
                style={inter}
              >
                <GoogleIcon />
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={onLinkedInSignIn || (() => alert("LinkedIn Sign-In initialized"))}
                className="flex items-center justify-center gap-2.5 border border-white/10 rounded-2xl py-3 text-[13px] text-white font-medium bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
                style={inter}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </button>
            </div>

            <p className="text-center text-[13px] text-[#9999AA]" style={inter}>
              New to Hireloom?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onCreateAccount?.();
                }}
                className="text-[#A855F7] font-medium hover:underline transition-colors"
              >
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* LEFT COLUMN: React Bits <Grainient /> WebGL Gradient Canvas Panel with 3-Step Stepper */}
      <section className="hidden md:flex flex-1 relative p-6 items-center justify-center">
        <div className="w-full h-full min-h-[600px] rounded-3xl p-8 lg:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* React Bits Grainient Canvas Background */}
          <Grainient
            color1="#CEB3EC"
            color2="#2c0b51"
            color3="#080217"
            timeSpeed={0.25}
            colorBalance={0.11}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
            className="absolute inset-0 size-full rounded-3xl pointer-events-none"
          />

          {/* Centered Official Brand Mark */}
          <div className="mb-5 relative z-10">
            <HireloomBrandMark />
          </div>

          {/* Title & Subtitle */}
          <div className="max-w-lg mb-10 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight" style={jakarta}>
              Where Talent Meets Opportunity
            </h2>
            <p className="text-white/75 text-sm lg:text-[15px] leading-relaxed max-w-md mx-auto" style={inter}>
              Whether you’re hiring talent or becoming one, Hireloom helps you move forward with confidence
            </p>
          </div>

          {/* 3-STEP VERTICAL STEPPER CONTAINER */}
          <div className="w-full max-w-sm relative z-10 flex flex-col items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Stepper Item Card */}
                <div
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${step.active
                      ? "bg-white text-slate-950 font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                      : "bg-white/10 border border-white/15 text-white/90 font-medium backdrop-blur-md"
                    }`}
                >
                  <div
                    className={`size-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${step.active
                        ? "bg-[#0B061A] text-white"
                        : "bg-white/20 text-white"
                      }`}
                  >
                    {step.number}
                  </div>
                  <span className="text-[14px] leading-tight" style={inter}>
                    {step.title}
                  </span>
                </div>

                {/* Vertical Connecting Line between steps */}
                {index < steps.length - 1 && (
                  <div className="w-[2px] h-4 bg-white/20 my-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
