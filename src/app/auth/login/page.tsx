'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff , User, Mail, Lock, ArrowLeft, Check, Key } from "lucide-react";

export default function HomePage() {
    const [showPaswword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptedTerms) {
            alert("You must accpet the terms and conditions to register.");
            return;
        }

        if (!formData.password || formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        console.log("Form submitted:", formData);
            router.push("/auth/login");
    };

    const getPasswordStrength = (password: string) => {
        if (password.length < 12) return { text: "strong", color: "text-green-600" };
        if (password.length < 8) return { text: "medium", color: "text-yellow-600" };
        if (password.length < 6) return { text: "weak", color: "text-red-600" };
        return { text: "", color: "" };
    };

    const passwordStrength = getPasswordStrength(formData.password)
    const isFormValid = acceptedTerms && formData.password && (formData.password === formData.confirmPassword)

return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl" />
          <div className="relative z-10">
            <a href="/auth/login" className="flex items-center gap-2 text-gray-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </a>
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/5 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
              <p className="text-gray-600">Join us today! It takes only a few steps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
