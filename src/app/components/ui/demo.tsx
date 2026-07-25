import React from "react";
import { SignInPage, Testimonial } from "./sign-in";

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Sarah Chen",
    handle: "@sarah_techlead",
    text: "Hireloom's explainable scorecards cut our technical candidate review time by 75%."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    name: "Marcus Rivera",
    handle: "@marcus_vp_talent",
    text: "The AI video screening gave us objective evaluation signals without ATS keyword bias."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Nadia Osei",
    handle: "@nadia_headofpeople",
    text: "SOC 2 Type II compliance and objective evaluation built trust across our hiring team."
  }
];

export default function SignInPageDemo() {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In submitted:", data);
    alert(`Sign In Submitted! Email: ${data.email}`);
  };

  const handleGoogleSignIn = () => {
    alert("Continue with Google clicked");
  };

  const handleLinkedInSignIn = () => {
    alert("Continue with LinkedIn clicked");
  };

  const handleResetPassword = () => {
    alert("Reset Password clicked");
  };

  const handleCreateAccount = () => {
    alert("Create Account clicked");
  };

  return (
    <div className="bg-[#06060F] text-white">
      <SignInPage
        heroImageSrc="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80"
        testimonials={sampleTestimonials}
        onSignIn={handleSignIn}
        onGoogleSignIn={handleGoogleSignIn}
        onLinkedInSignIn={handleLinkedInSignIn}
        onResetPassword={handleResetPassword}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
}
