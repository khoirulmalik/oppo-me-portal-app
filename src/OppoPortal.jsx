import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Zap,
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
} from "lucide-react";

export default function OppoPortal() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const categories = [
    {
      name: "Production Systems",
      color: "#00C853",
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50",
      icon: <Factory className="w-8 h-8 text-green-600" />,
      websites: [
        {
          name: "MES Dashboard",
          url: "https://mes.oppo-indonesia.com",
          desc: "Manufacturing Execution System",
          icon: <Monitor className="w-8 h-8 text-green-600" />,
        },
        {
          name: "Production Control",
          url: "https://production.oppo-indonesia.com",
          desc: "Real-time Production Monitoring",
          icon: <Activity className="w-8 h-8 text-green-600" />,
        },
        {
          name: "Quality Gate",
          url: "https://quality.oppo-indonesia.com",
          desc: "Quality Assurance Portal",
          icon: <CheckCircle className="w-8 h-8 text-green-600" />,
        },
      ],
    },
    {
      name: "Engineering Tools",
      color: "#00C853",
      gradient: "from-green-600 to-green-400",
      bgGradient: "from-green-50 to-green-100",
      icon: <Settings className="w-8 h-8 text-green-700" />,
      websites: [
        {
          name: "Process Planner",
          url: "https://process.oppo-indonesia.com",
          desc: "Manufacturing Process Planning",
          icon: <Settings className="w-8 h-8 text-green-700" />,
        },
        {
          name: "Equipment Manager",
          url: "https://equipment.oppo-indonesia.com",
          desc: "Equipment Maintenance System",
          icon: <Wrench className="w-8 h-8 text-green-700" />,
        },
        {
          name: "Tooling Database",
          url: "https://tooling.oppo-indonesia.com",
          desc: "Tooling & Fixture Management",
          icon: <Database className="w-8 h-8 text-green-700" />,
        },
      ],
    },
    {
      name: "Analytics Hub",
      color: "#00C853",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
      icon: <BarChart3 className="w-8 h-8 text-emerald-700" />,
      websites: [
        {
          name: "Data Analytics",
          url: "https://analytics.oppo-indonesia.com",
          desc: "Manufacturing Data Insights",
          icon: <BarChart3 className="w-8 h-8 text-emerald-700" />,
        },
        {
          name: "KPI Monitor",
          url: "https://kpi.oppo-indonesia.com",
          desc: "Key Performance Indicators",
          icon: <TrendingUp className="w-8 h-8 text-emerald-700" />,
        },
      ],
    },
    {
      name: "Documentation",
      color: "#00C853",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      icon: <BookOpen className="w-8 h-8 text-green-700" />,
      websites: [
        {
          name: "SOP Library",
          url: "https://sop.oppo-indonesia.com",
          desc: "Standard Operating Procedures",
          icon: <FileText className="w-8 h-8 text-green-700" />,
        },
        {
          name: "Tech Docs",
          url: "https://docs.oppo-indonesia.com",
          desc: "Technical Documentation Hub",
          icon: <BookOpen className="w-8 h-8 text-green-700" />,
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
      }, 800);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 text-gray-900 overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 200, 83, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            animation: "patternMove 30s linear infinite",
          }}
        ></div>
      </div>

      {/* Glowing Green Orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-green-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="fixed bottom-20 left-20 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Redirect Overlay */}
      {redirecting && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-xl"
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div className="text-center space-y-6">
            <div className="relative">
              <div
                className="w-32 h-32 mx-auto rounded-full border-4 border-green-200"
                style={{ animation: "spin 1s linear infinite" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap
                  className="w-16 h-16 text-green-600"
                  style={{ animation: "pulse 0.5s ease-in-out infinite" }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3
                className="text-2xl font-bold text-green-600"
                style={{ animation: "slideUp 0.5s ease-out" }}
              >
                Opening System...
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto break-all px-4">
                {redirectUrl}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header with Entrance Animation */}
        <header
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          {/* System Status Badge */}
          <div className="inline-flex items-center gap-3 mb-6 bg-white px-8 py-3 rounded-full border-2 border-green-200 shadow-lg shadow-green-100">
            <Activity className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-sm font-bold text-green-700 uppercase tracking-wider">
              System Online
            </span>
          </div>

          {/* OPPO Logo */}
          <div
            className="flex justify-center mb-6"
            style={{ animation: "slideUp 0.8s ease-out 0.2s both" }}
          >
            {/* Using official OPPO logo - replace with actual logo file path */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8f/OPPO_LOGO_2019.svg"
              alt="OPPO Logo"
              className="h-16 w-auto drop-shadow-lg"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "block";
              }}
            />
            {/* Fallback text logo */}
            <div
              className="text-6xl font-bold"
              style={{
                display: "none",
                color: "#00AA4F",
                fontFamily: "Arial, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              oppo
            </div>
          </div>

          {/* Welcome Message */}
          <div
            className="mb-6"
            style={{ animation: "fadeIn 0.8s ease-out 0.3s both" }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Manufacturing Engineering Portal
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              Indonesia Manufacturing Division
            </p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Your gateway to all manufacturing engineering systems and tools.
              Select a system below to get started.
            </p>
          </div>

          {/* Stats */}
          <div
            className="mt-8 flex items-center justify-center gap-8 text-sm font-semibold"
            style={{ animation: "fadeIn 0.8s ease-out 0.8s both" }}
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700">10 Systems</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
              <div
                className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="text-gray-700">4 Categories</span>
            </div>
          </div>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {categories.map((category, catIndex) => (
            <div
              key={category.name}
              className={`transition-all duration-700 transform ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${catIndex * 150 + 1000}ms` }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.bgGradient} border-2 border-green-200 shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-800">
                      {category.name}
                    </h3>
                    <div
                      className={`h-1.5 w-24 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Websites List */}
              <div className="space-y-4">
                {category.websites.map((website, idx) => (
                  <button
                    key={website.name}
                    onClick={() => handleRedirect(website.url)}
                    onMouseEnter={() => setHoveredCard(`${catIndex}-${idx}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group w-full text-left relative overflow-hidden rounded-2xl border-2 border-green-100 bg-white hover:border-green-400 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-green-200/50"
                  >
                    {/* Hover Gradient Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    ></div>

                    {/* Animated Shine Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(0, 200, 83, 0.1), transparent)`,
                        animation:
                          hoveredCard === `${catIndex}-${idx}`
                            ? "borderSlide 1.5s linear infinite"
                            : "none",
                      }}
                    ></div>

                    <div className="relative p-6 flex items-center gap-5">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${category.bgGradient} border-2 border-green-200 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}
                        >
                          {website.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-grow">
                            <h4 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-green-700 transition-colors">
                              {website.name}
                            </h4>
                            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors line-clamp-1">
                              {website.desc}
                            </p>
                          </div>

                          {/* Arrow Icon */}
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                          >
                            <ExternalLink className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* URL Preview */}
                        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                          <span className="text-xs font-mono text-gray-500 truncate max-w-xs">
                            {website.url}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer
          className={`mt-20 text-center text-gray-600 text-sm transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.6s" }}
        >
          <div className="inline-flex items-center gap-3 mb-3 bg-white px-6 py-3 rounded-full border-2 border-green-100 shadow-md">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <span className="font-bold text-green-700">
              OPPO Indonesia Manufacturing
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
          </div>
          <p className="text-xs text-gray-500">
            © 2026 Manufacturing Engineering Department
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes patternMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.95); }
        }

        @keyframes borderSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </div>
  );
}
