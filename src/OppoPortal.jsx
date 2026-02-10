import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Activity,
  Factory,
  Monitor,
  CheckCircle,
  Settings,
  Wrench,
  Database,
  BarChart3,
  TrendingUp,
  FileText,
  BookOpen,
  ChevronRight,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  Zap,
  Cpu,
  Server,
  Package,
  GitBranch,
  Users,
  Code,
  Shield,
  Terminal,
} from "lucide-react";

export default function OppoPortal() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [redirectProgress, setRedirectProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Progress animation for redirect
  useEffect(() => {
    if (redirecting) {
      setRedirectProgress(0);
      const interval = setInterval(() => {
        setRedirectProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [redirecting]);

  const categories = [
    {
      id: "production",
      name: "SMED",
      color: "#00A651",
      icon: <Factory className="w-6 h-6" />,
      websites: [
        {
          name: "SMED Dashboard",
          url: "http://10.121.26.24:5173",
          desc: "Manufacturing Execution System",
          icon: <Monitor className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "engineering",
      name: "RELIABLE",
      color: "#00A651",
      icon: <Settings className="w-6 h-6" />,
      websites: [
        {
          name: "Sparepart App",
          url: "http://10.121.26.50:5176",
          desc: "Machine and spare parts inventory, and tracking",
          icon: <Settings className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "analytics",
      name: "PLATFORM",
      color: "#00A651",
      icon: <BarChart3 className="w-6 h-6" />,
      websites: [
        {
          name: "Project Controlling",
          url: "http://10.121.26.50:5175",
          desc: "Monitor project progress in one place",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          name: "NPI Dashboard",
          url: "http://10.121.26.50:5174",
          desc: "Track new model introduction metrics and overall readiness",
          icon: <TrendingUp className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "documentation",
      name: "TPM",
      color: "#00A651",
      icon: <BookOpen className="w-6 h-6" />,
      websites: [],
    },
    {
      id: "other",
      name: "OTHER",
      color: "#059669",
      icon: <Code className="w-6 h-6" />,
      websites: [
        {
          name: "User Management",
          url: "http://10.121.26.50:5173",
          desc: "Manage user accounts, roles, and permissions",
          icon: <Users className="w-5 h-5" />,
        },
        {
          name: "Developer Portal",
          url: "http://10.121.26.50:3000/dev",
          desc: "API documentation, testing tools, and developer resources",
          icon: <Terminal className="w-5 h-5" />,
        },
        {
          name: "System Admin",
          url: "http://10.121.26.50:9000/admin",
          desc: "System configuration and administrative tools",
          icon: <Shield className="w-5 h-5" />,
        },
      ],
    },
  ];

  const handleRedirect = (url) => {
    setRedirectUrl(url);
    setRedirecting(true);

    // Open in new tab immediately
    const newWindow = window.open(url, "_blank");

    // Reset animation after completion
    setTimeout(() => {
      setRedirecting(false);
      setRedirectUrl("");
      setRedirectProgress(0);
    }, 1200);
  };

  const filteredCategories =
    activeTab === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeTab);

  const totalSystems = categories.reduce(
    (sum, cat) => sum + cat.websites.length,
    0,
  );

  // Floating icons for animation
  const floatingIcons = [
    { Icon: Factory, delay: "0s", duration: "3s" },
    { Icon: Settings, delay: "0.5s", duration: "3.5s" },
    { Icon: BarChart3, delay: "1s", duration: "4s" },
    { Icon: Database, delay: "1.5s", duration: "3.2s" },
    { Icon: Cpu, delay: "2s", duration: "3.8s" },
    { Icon: Server, delay: "0.3s", duration: "3.6s" },
    { Icon: Package, delay: "1.2s", duration: "3.4s" },
    { Icon: GitBranch, delay: "0.8s", duration: "3.9s" },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/336/423/non_2x/oppo-logo-oppo-icon-free-free-vector.jpg"
              alt="OPPO"
              className="h-10 w-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "block";
              }}
            />
            <div
              className="text-2xl font-bold"
              style={{
                display: "none",
                color: "#00A651",
                fontFamily: "Arial, sans-serif",
              }}
            >
              OPPO
            </div>
            <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
            <span className="text-sm font-semibold text-gray-700 hidden md:block">
              Manufacturing Engineering Portal
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>System Online</span>
          </div>
        </div>
      </div>

      {/* Improved Redirect Overlay */}
      {redirecting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            <div className="text-center space-y-6">
              {/* Animated Icon */}
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <ExternalLink className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Opening System
                </h3>
                <p className="text-sm text-gray-600 truncate px-4">
                  {redirectUrl}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-300 ease-out"
                  style={{ width: `${redirectProgress}%` }}
                ></div>
              </div>

              {/* Status Text */}
              <p className="text-xs text-gray-500">
                {redirectProgress < 100 ? "Please wait..." : "Opening in new tab"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {floatingIcons.map((item, idx) => {
            const Icon = item.Icon;
            const positions = [
              "top-10 left-10",
              "top-20 right-20",
              "bottom-20 left-1/4",
              "bottom-10 right-1/3",
              "top-1/3 left-1/2",
              "bottom-1/4 right-10",
              "top-1/2 left-10",
              "bottom-1/3 right-1/4",
            ];
            return (
              <div
                key={idx}
                className={`absolute ${positions[idx]} text-green-600`}
                style={{
                  animation: `floatIcon ${item.duration} ease-in-out infinite`,
                  animationDelay: item.delay,
                }}
              >
                <Icon className="w-12 h-12" />
              </div>
            );
          })}
        </div>

        {/* Inverted Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #00A651 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div
            className={`text-center mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-4 border border-green-200 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>{totalSystems} Systems Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Engineering Portal
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Access all manufacturing engineering systems and tools in one
              place
            </p>
          </div>

          {/* Stats Cards */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-50" style={{ color: cat.color }}>
                    {cat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {cat.websites.length}
                </div>
                <div className="text-xs text-gray-600">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-green-50/30 min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #00A651 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Tabs Navigation */}
          <div
            className={`mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 p-2 inline-flex gap-2 shadow-md overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === "all"
                  ? "bg-green-600 text-white shadow-md scale-105"
                  : "text-gray-700 hover:bg-green-50"
                  }`}
              >
                <LayoutGrid className="w-4 h-4" />
                All Apps
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === category.id
                    ? "bg-green-600 text-white shadow-md scale-105"
                    : "text-gray-700 hover:bg-green-50"
                    }`}
                >
                  <span className="w-4 h-4">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredCategories.map((category, catIndex) => (
              <div
                key={category.id}
                className={`transition-all duration-700 ${isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${catIndex * 100 + 300}ms` }}
              >
                {/* Category Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-green-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border-b border-green-200 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-lg bg-white border-2 border-green-200 shadow-sm"
                        style={{ color: category.color }}
                      >
                        {category.icon}
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-lg font-bold text-gray-900">
                          {category.name}
                        </h2>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {category.websites.length} system
                          {category.websites.length !== 1 ? "s" : ""} available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Systems List */}
                  <div className="divide-y divide-green-100">
                    {category.websites.length > 0 ? (
                      category.websites.map((website) => (
                        <button
                          key={website.name}
                          onClick={() => handleRedirect(website.url)}
                          className="w-full text-left px-6 py-4 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-4">
                            {/* Icon */}
                            <div
                              className="p-2.5 rounded-lg bg-green-50 group-hover:bg-white border border-green-200 group-hover:border-green-400 transition-all duration-300 group-hover:scale-110"
                              style={{ color: category.color }}
                            >
                              {website.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-grow min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-base font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                                  {website.name}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                {website.desc}
                              </p>
                              <p className="text-xs text-gray-400 mt-1 font-mono truncate group-hover:text-green-600 transition-colors">
                                {website.url}
                              </p>
                            </div>

                            {/* Arrow */}
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-green-100 group-hover:bg-green-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
                              </div>
                            </div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-6 py-8 text-center text-gray-500">
                        <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Coming soon</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <LayoutGrid className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No systems found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}

          {/* Footer */}
          <footer
            className={`mt-16 pt-8 border-t border-green-200 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  OPPO Indonesia
                </span>
                <span>|</span>
                <span>Manufacturing Engineering Department</span>
              </div>
              <div className="text-gray-500">© 2026 All Rights Reserved</div>
            </div>
          </footer>
        </div>

        {/* Bottom Wave Blend */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full opacity-30"
          >
            <path
              d="M0 30L60 25C120 20 240 10 360 8.3C480 6.7 600 13.3 720 16.7C840 20 960 20 1080 16.7C1200 13.3 1320 6.7 1380 3.3L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z"
              fill="#059669"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes floatIcon {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}