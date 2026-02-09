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
} from "lucide-react";

export default function OppoPortal() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const categories = [
    {
      id: "production",
      name: "Production Systems",
      color: "#00A651",
      icon: <Factory className="w-6 h-6" />,
      websites: [
        {
          name: "MES Dashboard",
          url: "https://mes.oppo-indonesia.com",
          desc: "Manufacturing Execution System",
          icon: <Monitor className="w-5 h-5" />,
        },
        {
          name: "Production Control",
          url: "https://production.oppo-indonesia.com",
          desc: "Real-time Production Monitoring",
          icon: <Activity className="w-5 h-5" />,
        },
        {
          name: "Quality Gate",
          url: "https://quality.oppo-indonesia.com",
          desc: "Quality Assurance Portal",
          icon: <CheckCircle className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "engineering",
      name: "Engineering Tools",
      color: "#00A651",
      icon: <Settings className="w-6 h-6" />,
      websites: [
        {
          name: "Process Planner",
          url: "https://process.oppo-indonesia.com",
          desc: "Manufacturing Process Planning",
          icon: <Settings className="w-5 h-5" />,
        },
        {
          name: "Equipment Manager",
          url: "https://equipment.oppo-indonesia.com",
          desc: "Equipment Maintenance System",
          icon: <Wrench className="w-5 h-5" />,
        },
        {
          name: "Tooling Database",
          url: "https://tooling.oppo-indonesia.com",
          desc: "Tooling & Fixture Management",
          icon: <Database className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "analytics",
      name: "Analytics Hub",
      color: "#00A651",
      icon: <BarChart3 className="w-6 h-6" />,
      websites: [
        {
          name: "Data Analytics",
          url: "https://analytics.oppo-indonesia.com",
          desc: "Manufacturing Data Insights",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          name: "KPI Monitor",
          url: "https://kpi.oppo-indonesia.com",
          desc: "Key Performance Indicators",
          icon: <TrendingUp className="w-5 h-5" />,
        },
      ],
    },
    {
      id: "documentation",
      name: "Documentation",
      color: "#00A651",
      icon: <BookOpen className="w-6 h-6" />,
      websites: [
        {
          name: "SOP Library",
          url: "https://sop.oppo-indonesia.com",
          desc: "Standard Operating Procedures",
          icon: <FileText className="w-5 h-5" />,
        },
        {
          name: "Tech Docs",
          url: "https://docs.oppo-indonesia.com",
          desc: "Technical Documentation Hub",
          icon: <BookOpen className="w-5 h-5" />,
        },
      ],
    },
  ];

  const handleRedirect = (url) => {
    setRedirectUrl(url);
    setRedirecting(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setTimeout(() => {
        setRedirecting(false);
        setRedirectUrl("");
      }, 500);
    }, 1500);
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

      {/* Redirect Overlay */}
      {redirecting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-green-200 rounded-full animate-ping opacity-75"></div>
              <div className="absolute w-24 h-24 border-4 border-green-300 rounded-full animate-pulse"></div>
            </div>

            <div className="relative text-center space-y-6 p-8">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Zap className="w-12 h-12 text-white animate-bounce" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 animate-pulse">
                  Opening System
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-lg max-w-md mx-auto border border-gray-200">
                  <p className="text-sm text-gray-600 font-mono truncate">
                    {redirectUrl}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Blend */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Content */}
            <div
              className={`text-white transition-all duration-1000 transform ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-green-200" />
                <span className="text-sm font-semibold text-green-100">
                  Welcome to Engineering Portal
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Manufacturing
                <span className="block text-green-200 mt-2">
                  Engineering Hub
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                Your unified gateway to all manufacturing systems, engineering
                tools, analytics platforms, and technical documentation.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">
                    {totalSystems}
                  </div>
                  <div className="text-sm text-green-200">Active Systems</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">
                    {categories.length}
                  </div>
                  <div className="text-sm text-green-200">Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-green-200">Availability</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-green-200">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Icons */}
            <div
              className={`relative h-[400px] md:h-[500px] transition-all duration-1000 transform ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              {/* Center Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, duration }, index) => {
                const positions = [
                  { top: "10%", left: "20%" },
                  { top: "25%", right: "15%" },
                  { top: "50%", left: "10%" },
                  { top: "60%", right: "25%" },
                  { top: "75%", left: "30%" },
                  { top: "15%", left: "50%" },
                  { top: "70%", right: "10%" },
                  { top: "40%", left: "45%" },
                ];

                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      ...positions[index],
                      animation: `floatIcon ${duration} ease-in-out infinite`,
                      animationDelay: delay,
                    }}
                  >
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/30 transition-all duration-300"></div>

                      {/* Icon Container */}
                      <div className="relative bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Connecting Lines */}
                      <div
                        className="absolute top-1/2 left-1/2 w-1 h-12 bg-gradient-to-b from-white/20 to-transparent"
                        style={{
                          transform: "translate(-50%, -50%) rotate(45deg)",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative bg-white/20 backdrop-blur-md p-8 rounded-full border-4 border-white/30">
                    <Zap className="w-16 h-16 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Blend Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="url(#gradient1)"
            />
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9FAFB" />
                <stop offset="100%" stopColor="#E0F2E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content Section - INVERTED GRADIENT */}
      <div className="relative bg-gradient-to-tl from-gray-50 via-green-50 to-emerald-100 overflow-hidden">
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

        {/* Floating Shapes - Reversed Position */}
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Tabs Navigation */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 p-2 inline-flex gap-2 shadow-md overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === "all"
                    ? "bg-green-600 text-white shadow-md scale-105"
                    : "text-gray-700 hover:bg-green-50"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                All Systems
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === category.id
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
                className={`transition-all duration-700 ${
                  isLoaded
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
                    {category.websites.map((website) => (
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
                    ))}
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
            className={`mt-16 pt-8 border-t border-green-200 transition-all duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
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

        {/* Bottom Wave Blend (Optional) */}
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
