"use client";
import React from "react";
import { useState } from "react";
import { Lock } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AdminLogin from "../../../components/admin/AdminLogin";
import AdminDashboard from "../../../components/admin/AdminDashboard";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">Manage your blog posts and content</p>
          </div>

          {isAuthenticated ? (
            <AdminDashboard />
          ) : (
            <AdminLogin onLogin={() => setIsAuthenticated(true)} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
