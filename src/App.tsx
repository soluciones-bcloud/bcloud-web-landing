import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server, Monitor, Wrench, ChevronRight, Database,
  ShieldCheck, Globe, ShoppingCart, Menu, X,
  Sun, Moon, CheckCircle2,
  Car, Stethoscope, Building, ArrowRight, Laptop, Network,
  BarChart3, Users, Plus, Minus, FileText, Star, Quote, HelpCircle, Phone,
  Zap, Activity, Lock, Mail, User, Smartphone, MapPin, Settings, Clock, Headset, Package,
  Wand2, Layout
} from "lucide-react";

// --- CONFIGURACIÓN ---
const WHATSAPP_NUMBER = "51919293319";
const WHATSAPP_MSG = "Hola Soluciones BCloud, me interesa modernizar mi empresa. Quisiera más información.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

// --- ICONO WHATSAPP ORIGINAL (SVG) ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// --- COMPONENTES VISUALES ---

// 1. Contador Animado
const Counter = ({ value, label }: { value: string, label: string }) => {
  return (
    <div className="text-center p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="text-3xl lg:text-4xl font-black text-blue-700 dark:text-white mb-1">{value}</div>
      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  );
};

// 2. Tablero Holográfico
const HolographicDashboard = () => (
  <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-2xl border-4 border-slate-900 overflow-hidden shadow-2xl group mx-auto max-w-2xl transform hover:scale-[1.02] transition-transform duration-500">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-[scan_3s_ease-in-out_infinite]"></div>

    <div className="absolute inset-0 p-6 flex flex-col z-10">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
          BCLOUD SYSTEM: ONLINE
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase">
            <BarChart3 size={14} className="text-blue-500" /> Ingresos Hoy
          </div>
          <div>
            <div className="text-3xl font-bold text-white tracking-tight">S/ 4,250</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
              <span className="bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">+18% vs ayer</span>
            </div>
          </div>
          <div className="flex gap-1 items-end h-10 mt-2">
            {[30, 50, 45, 80, 60, 90, 75].map((h, i) => (
              <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-500 rounded-sm hover:bg-blue-400 transition-colors"></div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-500/20 rounded text-indigo-400"><Database size={14} /></div>
              <div className="text-xs text-slate-300 font-medium">Backup R2</div>
            </div>
            <CheckCircle2 size={16} className="text-emerald-500" />
          </div>

          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700">
            <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-bold">
              <span>ALMACENAMIENTO</span> <span>42%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[42%]"></div>
            </div>
          </div>

          {/* Se usa Activity aquí para evitar errores si se usara */}
          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-pink-500/20 rounded text-pink-400"><Activity size={14} /></div>
              <div className="text-xs text-slate-300 font-medium">Uptime</div>
            </div>
            <span className="text-[10px] text-emerald-400">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- NAVIGATION (Navbar) ---
const Navbar = ({ isDark, toggleTheme }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Soluciones", href: "#soluciones" },
    { name: "Hardware", href: "#hardware" },
    { name: "Proceso", href: "#proceso" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled
      ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-lg"
      : "bg-transparent py-5"
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO REAL INTEGRADO */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo.jpg" alt="Soluciones BCloud" className="h-16 w-auto object-contain rounded-lg" />
          <div className="hidden sm:flex flex-col">
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white leading-none">
              Soluciones BCloud
            </span>
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mt-1">
              Tecnología Enterprise
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>

          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* BOTÓN WHATSAPP NAVBAR */}
          <a href={WHATSAPP_URL} target="_blank" className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black text-sm hover:shadow-xl hover:scale-105 transition-all">
            <WhatsAppIcon className="w-5 h-5" /> +51 919 293 319
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-300">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-lg font-bold text-slate-900 dark:text-slate-300 py-2 border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  {link.name}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 mt-4 bg-emerald-600 text-white rounded-xl font-bold">
                <WhatsAppIcon className="w-5 h-5" /> Contactar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- HERO SECTION ---
const Hero = ({ onNavigate }: { onNavigate: () => void }) => (
  <section className="relative min-h-[95vh] flex items-center pt-28 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 dark:opacity-5 mix-blend-multiply"></div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none opacity-60"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none opacity-60"></div>

    <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-black mb-8 border border-blue-200 dark:border-blue-800 shadow-sm">
          <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse"></span>
          INFRAESTRUCTURA INTEGRAL v2.0
        </div>

        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] mb-6 tracking-tight">
          La tecnología <br />
          que tu empresa <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">realmente necesita.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
          Dejamos atrás la era de sistemas lentos. Unificamos <strong>Software SaaS, Hardware y Soporte TI</strong> en un solo proveedor de confianza.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {/* BOTÓN WHATSAPP HERO */}
          <a href={WHATSAPP_URL} target="_blank" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
            <WhatsAppIcon className="w-5 h-5" /> Cotizar Solución
          </a>
          <a href="#planes" className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-lg hover:border-blue-300 dark:hover:border-slate-500 transition-all flex items-center justify-center">
            Ver Planes y Precios
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Counter value="+100" label="Clientes" />
          <Counter value="24/7" label="Soporte" />
          <Counter value="10TB" label="Datos" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2rem] opacity-20 blur-2xl animate-pulse"></div>
        <HolographicDashboard />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-4 z-20"
        >
          <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-700 dark:text-blue-400">
            <Server size={24} />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Stock</div>
            <div className="text-lg font-black text-slate-900 dark:text-white">HP / Dell</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-4 z-20"
        >
          <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl text-emerald-700 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Seguridad</div>
            <div className="text-lg font-black text-slate-900 dark:text-white">Encriptada</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// --- SECCIÓN MARCAS ---
// --- SECCIÓN MARCAS (NUEVO DISEÑO PREMIUM) ---
const Clients = () => {
  const clientsList = [
    { name: "TALLERES DEL PERÚ", desc: "MOVEMOS TU MUNDO", icon: Settings },
    { name: "CLÍNICA SAN JORGE", desc: "SALUD EN BUENAS MANOS", icon: Stethoscope },
    { name: "HOTEL MIRAFLORES", desc: "MÁS QUE UNA ESTADÍA", icon: Building },
    { name: "GRUPO LOGÍSTICO", desc: "CONECTAMOS OPORTUNIDADES", icon: Globe },
    { name: "IMPORTACIONES S.A.C", desc: "SOLUCIONES SIN FRONTERAS", icon: Package },
    { name: "RED MÉDICA LIMA", desc: "JUNTOS POR UNA VIDA MEJOR", icon: Activity }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#F4F7FF] dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      {/* Efectos de fondo sutiles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white dark:bg-blue-900/10 rounded-full blur-[100px] -ml-64 -mt-64 pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-indigo-900/10 rounded-full blur-[100px] -mr-64 -mb-64 pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] font-black tracking-widest uppercase mb-6">
            Empresas que impulsan el futuro
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0B1528] dark:text-white mb-6 tracking-tight">
            Empresas que confían en <span className="text-blue-600">BCloud</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Organizaciones de distintos sectores ya optimizan sus procesos con nuestras soluciones en la nube. Únete a las empresas que crecen con tecnología confiable.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientsList.map((client, i) => (
            <div key={i} className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="text-[#334155] dark:text-slate-300 shrink-0">
                <client.icon size={44} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-black text-[#0B1528] dark:text-white text-base md:text-lg leading-tight mb-1">{client.name}</h3>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-widest uppercase">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

// --- SECCIÓN SOFTWARE (TABS) ---
const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState("garage");

  const industries = {
    garage: {
      title: "Garage System",
      badge: "TALLERES",
      desc: "Control total para tu Centro Automotriz.",
      details: "Recepción vehicular con tablet, historial de placas, control de mecánicos, repuestos y facturación integrada.",
      features: ["Recepción con Fotos (Tablet)", "Alertas de Mantenimiento", "Control de Comisión Mecánicos"],
      icon: Car,
      color: "text-blue-700 dark:text-blue-400"
    },
    medic: {
      title: "Medic Cloud",
      badge: "CLÍNICAS",
      desc: "Gestión para Consultorios y Policlínicos.",
      details: "Historia clínica electrónica (HCE), agenda de citas por doctor, receta digital y control de caja diario.",
      features: ["Agenda Médica Visual", "Recetas PDF WhatsApp", "Reportes de Producción"],
      icon: Stethoscope,
      color: "text-emerald-700 dark:text-emerald-400"
    },
    hotel: {
      title: "Hotel Manager",
      badge: "HOTELES",
      desc: "Administración Hotelera Simplificada.",
      details: "Rack de habitaciones visual, check-in/out rápido, control de limpieza, frigobar y facturación a empresas.",
      features: ["Rack de Habitaciones", "Control de Frigobar", "Facturación Corporativa"],
      icon: Building,
      color: "text-indigo-700 dark:text-indigo-400"
    }
  };

  const ActiveData = industries[activeTab as keyof typeof industries];

  return (
    <section id="soluciones" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Software Especializado</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Elige el módulo diseñado para las reglas exactas de tu negocio.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Lateral */}
          <div className="lg:w-1/3 space-y-4">
            {Object.entries(industries).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${activeTab === key
                  ? "bg-slate-50 dark:bg-slate-800 border-blue-600 shadow-lg scale-105"
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-200"
                  }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${activeTab === key ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                  <data.icon size={28} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">{data.badge}</div>
                  <h3 className={`font-bold text-lg ${activeTab === key ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>{data.title}</h3>
                </div>
                <ChevronRight className={`ml-auto transition-all ${activeTab === key ? "opacity-100 translate-x-0 text-blue-600" : "opacity-0 -translate-x-2"}`} />
              </button>
            ))}
          </div>

          {/* Area de Contenido */}
          <div className="lg:w-2/3 bg-slate-50 dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[450px]">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-slate-800 rounded-full blur-3xl -mr-16 -mt-16 opacity-70"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-black mb-6 ${ActiveData.color}`}>
                  <ActiveData.icon size={14} /> MÓDULO {ActiveData.badge}
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{ActiveData.desc}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">{ActiveData.details}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {ActiveData.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={WHATSAPP_URL} target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/20">
                    <WhatsAppIcon className="w-5 h-5" /> Solicitar Demo
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SECCIÓN HARDWARE (STORE STYLE) ---
const Hardware = () => (
  <section id="hardware" className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Tienda BCloud</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Hardware Certificado</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
            Equipos probados para funcionar 24/7 con nuestro software. Garantía local en Perú.
          </p>
        </div>
        <a href={WHATSAPP_URL} className="group flex items-center gap-2 text-slate-900 dark:text-white font-bold bg-white dark:bg-slate-800 px-6 py-4 rounded-xl shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all">
          Descargar Catálogo PDF <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Servidores Rack", brand: "HP Enterprise", icon: Server, status: "Bajo Pedido", color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/20" },
          { title: "PC Corporativa", brand: "Lenovo / HP", icon: Monitor, status: "Stock Inmediato", color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
          { title: "Kit Redes", brand: "Ubiquiti / Mikrotik", icon: Network, status: "Proyectos", color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/20" },
          { title: "Laptops Pro", brand: "ThinkPad / Dell", icon: Laptop, status: "Stock Limitado", color: "text-emerald-600", bg: "bg-emerald-100 dark:bg-emerald-900/20" },
        ].map((item, i) => (
          <div key={i} className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}>
                <item.icon size={28} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded border ${item.status.includes("Stock")
                ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800"
                : "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700"
                }`}>
                {item.status}
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-6">{item.brand}</p>

              <a href={WHATSAPP_URL} target="_blank" className="w-full py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-900 dark:text-white text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm">
                <ShoppingCart size={16} /> Cotizar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- ÍCONOS PREMIUM PERSONALIZADOS PARA EL PROCESO ---
const CustomModuleIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-md">
    {/* Base suave */}
    <rect x="10" y="10" width="44" height="44" rx="12" fill="#F1F5F9" />
    <rect x="10" y="10" width="44" height="44" rx="12" fill="url(#grad_module)" opacity="0.5" />
    
    {/* Cuadrados internos */}
    <rect x="18" y="18" width="12" height="12" rx="4" fill="#CBD5E1" />
    <rect x="34" y="18" width="12" height="12" rx="4" fill="#2563EB" className="animate-pulse" /> {/* Acento Azul */}
    <rect x="18" y="34" width="12" height="12" rx="4" fill="#CBD5E1" />
    <rect x="34" y="34" width="12" height="12" rx="4" fill="#CBD5E1" />
    
    <defs>
      <linearGradient id="grad_module" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#E2E8F0" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const CustomTenantIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-md">
    {/* Disco 3 (Fondo/Gris) */}
    <path d="M16 42C16 45.3137 23.1634 48 32 48C40.8366 48 48 45.3137 48 42V48C48 51.3137 40.8366 54 32 54C23.1634 54 16 51.3137 16 48V42Z" fill="#94A3B8"/>
    <ellipse cx="32" cy="42" rx="16" ry="6" fill="#CBD5E1"/>
    
    {/* Disco 2 (Medio/Azul Claro) */}
    <path d="M16 32C16 35.3137 23.1634 38 32 38C40.8366 38 48 35.3137 48 32V38C48 41.3137 40.8366 44 32 44C23.1634 44 16 41.3137 16 38V32Z" fill="#3B82F6"/>
    <ellipse cx="32" cy="32" rx="16" ry="6" fill="#60A5FA"/>
    
    {/* Disco 1 (Tope/Azul Oscuro) */}
    <path d="M16 22C16 25.3137 23.1634 28 32 28C40.8366 28 48 25.3137 48 22V28C48 31.3137 40.8366 34 32 34C23.1634 34 16 31.3137 16 28V22Z" fill="#1D4ED8"/>
    <ellipse cx="32" cy="22" rx="16" ry="6" fill="#2563EB"/>

    {/* Ícono de engranaje (Gear) */}
    <circle cx="48" cy="46" r="10" fill="#F8FAFC" className="drop-shadow-sm" />
    <path d="M48 40.5V42M48 50V51.5M42.5 46H44M52 46H53.5M44.1109 42.1109L45.1716 43.1716M50.8284 48.8284L51.8891 49.8891M44.1109 49.8891L45.1716 48.8284M50.8284 43.1716L51.8891 42.1109" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="48" cy="46" r="3" stroke="#2563EB" strokeWidth="2"/>
  </svg>
);

const CustomGoLiveIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 drop-shadow-md">
    {/* Base de la Laptop */}
    <path d="M12 44H52V48C52 49.6569 50.6569 51 49 51H15C13.3431 51 12 49.6569 12 48V44Z" fill="#CBD5E1"/>
    <path d="M12 44H52L54 46H10L12 44Z" fill="#94A3B8"/>
    
    {/* Pantalla */}
    <rect x="16" y="20" width="32" height="24" rx="2" fill="#E2E8F0"/>
    <rect x="18" y="22" width="28" height="20" fill="#F8FAFC"/>
    
    {/* Gráfico de Barras */}
    <rect x="24" y="34" width="4" height="8" rx="1" fill="#94A3B8"/>
    <rect x="30" y="26" width="4" height="16" rx="1" fill="#2563EB"/>
    <rect x="36" y="30" width="4" height="12" rx="1" fill="#60A5FA"/>

    {/* Checkmark Flotante (Éxito) */}
    <circle cx="52" cy="20" r="9" fill="#2563EB" className="drop-shadow-md" />
    <path d="M48 20.5L50.5 23L56 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- SECCIÓN PROCESO (NUEVO DISEÑO PREMIUM) ---
const Process = () => (
  <section id="proceso" className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
    
    {/* Fondos de color difuminado */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none opacity-60 z-0"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-[100px] -ml-64 -mb-64 pointer-events-none opacity-60 z-0"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      
      {/* Cabecera del Proceso */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase mb-6 border border-blue-100 dark:border-blue-800 shadow-sm">
          <Wand2 size={14} /> IMPLEMENTACIÓN SIMPLE
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          ¿Cómo <span className="text-blue-600">implementamos</span> tu sistema?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">Activamos tu operación en 3 pasos simples.</p>

        {/* Nota dibujada a mano flotante (Solo visible en PC) */}
        <div className="hidden lg:flex absolute top-0 right-[15%] text-indigo-400 flex-col items-center transform rotate-6 opacity-80 pointer-events-none">
          <span className="text-sm font-bold tracking-wider mb-1 -ml-4" style={{ fontFamily: 'cursive' }}>De la idea <br/> a resultados</span>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform -scale-x-100 -rotate-45 ml-10 mt-1">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* Grid de 3 Pasos */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-16 max-w-6xl mx-auto pt-6">
        
        {/* Flechas conectoras de fondo (Solo en PC) */}
        <div className="hidden lg:flex absolute top-[35%] left-[22%] right-[22%] items-center justify-between pointer-events-none z-0">
          <ArrowRight className="text-slate-300 dark:text-slate-700 w-6 h-6" />
          <ArrowRight className="text-slate-300 dark:text-slate-700 w-6 h-6" />
        </div>

        {[
          { 
            num: "1", 
            title: "Elegimos tu módulo", 
            desc: "Seleccionamos juntos el módulo ideal para tu operación: Taller, Clínica, Hotel o tu negocio.", 
            badge: "SOLUCIÓN A TU MEDIDA",
            icon: CustomModuleIcon
          },
          { 
            num: "2", 
            title: "Configuramos tu tenant", 
            desc: "Creamos tu entorno multi-tenant, configuramos usuarios, sedes, branding y realizamos la migración de tus datos.", 
            badge: "TODO LISTO PARA TU EQUIPO",
            icon: CustomTenantIcon
          },
          { 
            num: "3", 
            title: "Capacitación y Go Live", 
            desc: "Capacitamos a tu equipo, te acompañamos con soporte y realizamos la salida en vivo.", 
            badge: "ÉXITO DESDE EL PRIMER DÍA",
            icon: CustomGoLiveIcon
          }
        ].map((step, i) => (
          <div key={i} className="bg-white dark:bg-slate-950 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative z-10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
            
            {/* Número Circular Flotante */}
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-base flex items-center justify-center absolute -top-5 left-8 shadow-lg shadow-blue-600/30 border-4 border-[#F8FAFC] dark:border-slate-900">
              {step.num}
            </div>
            
            {/* Ícono central (Usando los nuevos SVGs premium) */}
            <div className="bg-white dark:bg-slate-900 w-28 h-28 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-50 dark:border-slate-800">
              <step.icon />
            </div>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 text-center">{step.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center leading-relaxed flex-1 mb-8">{step.desc}</p>

            {/* Badge Inferior */}
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-[9px] font-black tracking-widest uppercase w-max mx-auto mt-auto">
              <CheckCircle2 size={12} className="text-blue-600" /> {step.badge}
            </div>
          </div>
        ))}
      </div>

      {/* Características Inferiores (3 columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-slate-800 max-w-5xl mx-auto">
        <div className="flex items-start gap-4 justify-center md:justify-start">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl shrink-0"><Building size={24}/></div>
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Multiempresa</h4>
            <p className="text-xs text-slate-500">Gestiona múltiples sedes y negocios desde un solo lugar.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center md:justify-start">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl shrink-0"><Users size={24}/></div>
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Implementación guiada</h4>
            <p className="text-xs text-slate-500">Te acompañamos en cada paso del proceso.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-center md:justify-start">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl shrink-0"><MapPin size={24}/></div>
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Soporte local en Perú</h4>
            <p className="text-xs text-slate-500">Equipo experto, atención en tu zona horaria.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

// --- SECCIÓN TESTIMONIOS ---
const Testimonials = () => (
  <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors border-y border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Nuestros Clientes Hablan</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { text: "El control que tenemos ahora sobre el inventario es impresionante. Antes perdíamos repuestos, ahora todo cuadra.", author: "Ing. Carlos M.", role: "Gerente Taller Multimarca" },
          { text: "La facturación electrónica es rapidísima. Y lo mejor es que puedo ver las ventas desde mi celular cuando no estoy.", author: "Dra. Sofia L.", role: "Directora Clínica Dental" },
          { text: "El soporte técnico es real. Tuvimos un problema con la red un domingo y nos ayudaron a resolverlo en minutos.", author: "Roberto G.", role: "Dueño Hotel 3 Estrellas" },
        ].map((t, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow">
            <Quote size={40} className="text-blue-100 dark:text-blue-900/30 absolute top-6 right-6" />
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="text-yellow-400 fill-current" />)}
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed relative z-10 font-medium">"{t.text}"</p>
            <div>
              <div className="font-bold text-slate-900 dark:text-white">{t.author}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- SECCIÓN FAQ EXTENDIDA ---
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    { q: "¿Es un pago único o mensual?", a: "Es una suscripción mensual (SaaS) que incluye: alojamiento en nube, actualizaciones, soporte y backups diarios. Sin contratos forzosos." },
    { q: "¿Necesito comprar un servidor?", a: "No. BCloud se encarga de la infraestructura en la nube. Solo necesitas una PC o Laptop con internet para acceder." },
    { q: "¿Venden los equipos también?", a: "Sí. Somos proveedores integrales. Vendemos servidores, computadoras, impresoras térmicas y cableado de red." },
    { q: "¿Mis datos están seguros?", a: "Sí. Usamos encriptación SSL y tus archivos se guardan en Cloudflare R2 con copias de seguridad automáticas." },
    { q: "¿Qué pasa si se malogra mi equipo?", a: "Si compraste el hardware con nosotros, tramitamos la garantía directamente con la marca (HP, Dell, Lenovo). Te damos equipo de respaldo si es crítico." },
    { q: "¿Hay contrato de permanencia?", a: "No. Creemos en mantener clientes por calidad, no por obligación. Puedes cancelar el servicio de software cuando desees." },
    { q: "¿Puedo usar mi propio dominio?", a: "Por supuesto. Configuramos el sistema para que funcione en 'app.tueempresa.com' para mantener tu imagen corporativa." },
    { q: "¿El soporte incluye visitas?", a: "El plan estándar incluye soporte remoto ilimitado. Las visitas presenciales se pueden agendar por un costo preferencial o contratar un plan híbrido." },
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 hover:border-blue-300 transition-colors">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-blue-500 shrink-0" /> {item.q}
                </span>
                {activeIndex === i ? <Minus size={20} className="text-blue-500 shrink-0" /> : <Plus size={20} className="text-slate-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 ml-8">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- DATOS DE LOS PLANES ---
const planesData = [
  {
    id: "basico",
    name: "Básico",
    desc: "Empieza con lo esencial, sin complicaciones.",
    price: "149",
    implementation: "300 pago único",
    features: ["Recepción vehicular con fotos", "Historial de placas", "Soporte en horario de oficina", "1 usuario incluido"],
    popular: false,
    color: "bg-white text-slate-900"
  },
  {
    id: "pro",
    name: "Pro",
    desc: "Gestiona todo tu negocio desde un solo lugar.",
    price: "279",
    implementation: "500 pago único",
    features: ["Todo lo de Básico", "Control de mecánicos y comisiones", "Facturación electrónica (SUNAT)", "Soporte 24/7", "3 usuarios incluidos"],
    popular: true,
    color: "bg-[#0B1528] text-white"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    desc: "Escala tu empresa y automatiza el crecimiento.",
    price: "479",
    implementation: "A convenir",
    features: ["Todo lo de Pro", "Gestión multi-sucursal", "Módulo de contabilidad avanzada", "API para integraciones", "Usuarios ilimitados"],
    popular: false,
    color: "bg-white text-slate-900"
  }
];


// --- VISTA PREMIUM DE PLANES ---
const PlanesView = ({ onSelectPlan }: { onSelectPlan: (plan: any) => void }) => {
  const [billingCycle, setBillingCycle] = useState<'mensual' | 'anual'>('mensual');

  return (
    <section id="planes" className="py-24 bg-slate-50/50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-xs font-black text-blue-600 uppercase tracking-widest">PLANES Y PRECIOS</span>
            <div className="h-px w-8 bg-blue-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Elige tu plan. <span className="text-blue-600">Escala sin perder el control.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Implementación segura y soporte continuo para talleres, clínicas y negocios en crecimiento.
          </p>

          {/* Botón Toggle Mensual / Anual */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="bg-white border border-slate-200 dark:border-slate-800 p-1 rounded-full flex items-center shadow-sm">
              <button
                onClick={() => setBillingCycle('mensual')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${billingCycle === 'mensual' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Mensual
              </button>
              <button
                onClick={() => setBillingCycle('anual')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${billingCycle === 'anual' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                Anual
              </button>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              Ahorra 15%
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3"><Clock className="text-blue-600 w-5 h-5" /><div className="text-left"><p className="text-sm font-bold text-slate-900 dark:text-white">Sin permanencia</p><p className="text-xs text-slate-500">Cancela cuando quieras</p></div></div>
            <div className="flex items-center gap-3"><MapPin className="text-blue-600 w-5 h-5" /><div className="text-left"><p className="text-sm font-bold text-slate-900 dark:text-white">Soporte local en Perú</p><p className="text-xs text-slate-500">Atención en tu zona horaria</p></div></div>
            <div className="flex items-center gap-3"><Settings className="text-blue-600 w-5 h-5" /><div className="text-left"><p className="text-sm font-bold text-slate-900 dark:text-white">Implementación guiada</p><p className="text-xs text-slate-500">Te acompañamos en todo el proceso</p></div></div>
            <div className="flex items-center gap-3"><Lock className="text-blue-600 w-5 h-5" /><div className="text-left"><p className="text-sm font-bold text-slate-900 dark:text-white">Pago seguro</p><p className="text-xs text-slate-500">Con Izipay y encriptación SSL</p></div></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-end">
          {planesData.map((plan, i) => {
            const basePrice = parseInt(plan.price);
            const displayPrice = billingCycle === 'anual' ? Math.round(basePrice * 0.85) : basePrice;

            return (
              <div key={i} className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${plan.popular ? 'bg-[#0B1528] text-white border-[#1A56DB] shadow-2xl shadow-blue-900/20 scale-105 z-10 pb-12' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}>
                {/* SOLUCIÓN: whitespace-nowrap y w-max previenen el salto de línea */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1A56DB] text-white px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-lg flex items-center justify-center gap-2 border-2 border-white dark:border-slate-950 whitespace-nowrap w-max">
                    <Star size={14} className="text-yellow-400 fill-current" /> EL MÁS ELEGIDO
                  </div>
                )}

                <div className="mb-6 flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${plan.popular ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {plan.id === 'basico' ? <Database size={24} /> : plan.id === 'pro' ? <BarChart3 size={24} /> : <Building size={24} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-1">Plan {plan.name}</h3>
                    <p className={`text-xs ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
                  </div>
                </div>

                <div className={`mb-6 p-5 rounded-2xl ${plan.popular ? 'bg-slate-800/50' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Implementación</div>
                  <div className="text-sm font-bold mb-4">S/ {plan.implementation}</div>

                  <div className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Plan Mensual</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">S/ {displayPrice}</span>
                    <span className="text-sm font-bold opacity-70">/mes</span>
                  </div>
                  {billingCycle === 'anual' && (
                    <div className="text-[10px] text-emerald-400 mt-2 font-bold">Facturado anual (S/ {displayPrice * 12})</div>
                  )}
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-70">Principales Funcionalidades:</div>
                  {plan.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-blue-400' : 'text-emerald-500'}`} />
                      <span className="text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectPlan({ ...plan, billingCycle })}
                  className={`w-full py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-white border border-slate-200 hover:border-blue-600 text-slate-900"
                    }`}
                >
                  Suscribirse al {plan.name} {plan.popular && <ArrowRight size={18} />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


// --- VISTA COMPLETA DE CHECKOUT PREMIUM ---
const CheckoutView = ({ plan, onBack, onPlanChange }: { plan: any, onBack: () => void, onPlanChange: (p: any) => void }) => {
  const [billingCycle, setBillingCycle] = useState<'mensual' | 'anual'>(plan.billingCycle || 'mensual');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const basePrice = parseInt(plan.price);
  const currentPrice = billingCycle === 'anual' ? Math.round(basePrice * 0.85) : basePrice;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 pt-28 pb-20 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Botón Volver al inicio */}
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors w-max">
          <ChevronRight className="rotate-180 w-4 h-4" /> Volver al inicio
        </button>

        {/* Cabecera Principal */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Activa tu plan y lleva tu negocio al <span className="text-blue-600">siguiente nivel</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm md:text-base">Completa tus datos de forma segura. En minutos estarás listo para comenzar.</p>
        </div>

        {/* Contenedor Grid Principal - ITEMS-STRETCH FUERZA LA MISMA ALTURA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* COLUMNA IZQUIERDA: Formulario */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800 h-full flex flex-col">

            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><User size={24} /></div>
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">Finalizar Suscripción</h2>
                <p className="text-xs text-slate-500">Completa tus datos para activar tu plan.</p>
              </div>
            </div>

            <form className="space-y-6 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Razón Social / Nombre</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input type="text" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all font-medium text-sm" placeholder="Ej. Camaro Car Service" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">RUC / DNI</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input type="text" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all font-medium text-sm" placeholder="Ej. 10436050335" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Correo Electrónico</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input type="email" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all font-medium text-sm" placeholder="tucorreo@empresa.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Teléfono / WhatsApp</label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input type="tel" className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all font-medium text-sm" placeholder="Ej. +51 919 293 319" required />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Plan seleccionado</label>
                  <div className="relative">
                    <Database className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 pointer-events-none" />
                    <select
                      value={plan.id}
                      onChange={(e) => {
                        const newPlan = planesData.find(p => p.id === e.target.value);
                        if (newPlan) onPlanChange({ ...newPlan, billingCycle });
                      }}
                      className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all font-bold appearance-none cursor-pointer text-sm"
                    >
                      {planesData.map((p) => (
                        <option key={p.id} value={p.id}>Plan {p.name}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Ciclo de Facturación</label>
                  <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 h-[50px]">
                    <button
                      type="button"
                      onClick={() => { setBillingCycle('mensual'); onPlanChange({ ...plan, billingCycle: 'mensual' }); }}
                      className={`text-xs font-bold rounded-lg transition-all flex items-center justify-center ${billingCycle === 'mensual' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Mensual
                    </button>
                    <button
                      type="button"
                      onClick={() => { setBillingCycle('anual'); onPlanChange({ ...plan, billingCycle: 'anual' }); }}
                      className={`text-xs font-bold rounded-lg transition-all flex items-center justify-center ${billingCycle === 'anual' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      Anual (-15%)
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" required defaultChecked />
                <label htmlFor="terms" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                  Acepto los <span className="text-blue-600 underline">Términos y Condiciones</span> y la <span className="text-blue-600 underline">Política de Privacidad</span>.
                </label>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-xs font-bold">i</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Al hacer clic en pagar, serás redirigido a la pasarela segura de Izipay.</p>
              </div>

              <button className="w-full py-4 bg-[#3B5BDB] hover:bg-[#2c45ab] text-white font-black rounded-xl flex items-center justify-between px-6 transition-all shadow-lg shadow-blue-600/20 group mt-4">
                <div className="flex items-center gap-2">
                  <Lock size={18} /> <span className="text-base">Pagar con Izipay</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-xl italic tracking-tighter">izipay</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* mt-auto empuja los logos hacia el fondo para alinear la tarjeta */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 mt-auto gap-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-500 text-white p-1 rounded-full"><CheckCircle2 size={12} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase">Pago 100% seguro</p>
                    <p className="text-[10px] text-slate-500">Procesado por Izipay</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 h-6">
                  <img src="/Visa_Inc._logo.svg" alt="Visa" className="h-full object-contain" />
                  <img src="/Mastercard_logo.svg" alt="Mastercard" className="h-full object-contain" />
                  <img src="/American_Express_logo.svg" alt="Amex" className="h-full object-contain" />
                  <img src="/Diners_Club_Logo.svg" alt="Diners Club" className="h-full object-contain" />
                </div>
              </div>
            </form>
          </div>

          {/* COLUMNA DERECHA: Resumen de Orden */}
          <div className="lg:col-span-5 flex flex-col h-full">

            {/* Caja Blanca de Resumen - FLEX-1 PERMITE QUE SE ESTIRE EXACTAMENTE A LA ALTURA REQUERIDA */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 flex-1 flex flex-col mb-6">

              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><FileText size={24} /></div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">Resumen de tu suscripción</h3>
                  <p className="text-xs text-slate-500">Revisa los detalles de tu plan.</p>
                </div>
              </div>

              {/* Tarjeta Oscura de Plan - Badge Flotante en el borde */}
              <div className="bg-gradient-to-br from-[#0B1528] to-[#1e3a8a] rounded-2xl p-6 text-white relative mb-8 shadow-xl shadow-blue-900/20 mt-4">

                {/* Etiqueta Flotante */}
                <div className="absolute -top-3 right-6 bg-blue-600 text-[9px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg border border-blue-500/30 z-20">
                  PLAN SELECCIONADO
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10 pt-2">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/20 shrink-0">
                    <Database size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black whitespace-nowrap">Plan {plan.name}</h4>
                    <p className="text-[11px] text-blue-200 mt-1 leading-relaxed">{plan.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 pt-6 relative z-10">
                  <div className="pr-4">
                    <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mb-1">PLAN {billingCycle === 'anual' ? 'ANUAL' : 'MENSUAL'}</p>
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="text-3xl font-black whitespace-nowrap">S/ {currentPrice}</span>
                      <span className="text-xs font-normal text-blue-200">/mes</span>
                    </div>
                    {billingCycle === 'anual' && <p className="text-[10px] text-emerald-400 mt-1 font-bold">S/ {currentPrice * 12} al año</p>}
                  </div>
                  <div className="pl-6">
                    <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mb-1">IMPLEMENTACIÓN</p>
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="text-2xl font-black whitespace-nowrap">
                        {plan.implementation === 'A convenir' ? 'A convenir' : `S/ ${parseInt(plan.implementation)}`}
                      </span>
                      {plan.implementation !== 'A convenir' && (
                        <span className="text-[10px] text-blue-200 font-normal">pago único</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Incluye todo lo que necesitas:</h4>
              <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
                {plan.features.map((feat: string, j: number) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 bg-emerald-50 dark:bg-emerald-900/30 rounded-full" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              {/* mt-auto empuja los badges hacia abajo para que el fondo blanco coincida en altura */}
              <div className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className="flex flex-col items-center text-center"><ShieldCheck className="w-5 h-5 text-emerald-500 mb-1.5" /><div className="text-[10px] font-bold text-slate-900 dark:text-white">Pago seguro</div><div className="text-[10px] text-slate-500">Datos encriptados</div></div>
                <div className="flex flex-col items-center text-center"><Phone className="w-5 h-5 text-blue-600 mb-1.5" /><div className="text-[10px] font-bold text-slate-900 dark:text-white">Soporte local</div><div className="text-[10px] text-slate-500">En todo el Perú</div></div>
                <div className="flex flex-col items-center text-center"><Zap className="w-5 h-5 text-indigo-600 mb-1.5" /><div className="text-[10px] font-bold text-slate-900 dark:text-white">Activación rápida</div><div className="text-[10px] text-slate-500">En menos de 24h</div></div>
              </div>
            </div>

            {/* Caja de Contacto WhatsApp (shrink-0 mantiene su altura fija abajo) */}
            <div className="bg-[#E6FCF5] dark:bg-emerald-900/20 p-6 rounded-3xl flex items-center justify-between border border-emerald-100 dark:border-emerald-900/50 shadow-sm shrink-0">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500 text-white p-3 rounded-2xl shadow-lg shadow-emerald-500/30"><Phone size={24} /></div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-400">¿Necesitas ayuda?</h4>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-500 mt-0.5">Escríbenos por WhatsApp, nuestro equipo<br />te asesorará en todo el proceso.</p>
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" className="text-xs font-bold bg-white text-emerald-600 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2">Contactar <ChevronRight size={14} /></a>
            </div>

          </div>
        </div>

        {/* Footer de Confianza */}
        <div className="mt-12 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-center md:justify-start gap-4 text-slate-500 md:pr-8">
            <ShieldCheck size={32} className="text-blue-600 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Tus datos están protegidos</p>
              <p className="text-xs mt-0.5">Utilizamos encriptación SSL de nivel bancario.</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-slate-500 md:border-x md:border-slate-200 dark:md:border-slate-700 md:px-8">
            <Users size={32} className="text-blue-600 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Más de 100 empresas confían en nosotros</p>
              <p className="text-xs mt-0.5">Soluciones que impulsan negocios reales.</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-4 text-slate-500 md:pl-8">
            <Headset size={32} className="text-blue-600 shrink-0" />
            <div className="text-left">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">¿Dudas antes de pagar?</p>
              <p className="text-xs mt-0.5">Te asesoramos por WhatsApp al +51 919 293 319</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


// --- APP PRINCIPAL ---
function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'checkout'>('landing');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 font-sans selection:bg-blue-500/30">

      <div onClick={() => setCurrentView('landing')}>
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      </div>

      {currentView === 'landing' && (
        <main>
          <Hero onNavigate={() => { }} />
          <Clients />
          <IndustryTabs />
          <Hardware />
          <Process />

          <PlanesView onSelectPlan={(plan) => {
            setSelectedPlan(plan);
            setCurrentView('checkout');
          }} />

          <Testimonials />
          <FAQ />

          <div className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-indigo-700 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-50"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-50"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">¿Listo para transformar <br /> tu negocio?</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
                  Agenda una consultoría gratuita de 15 minutos con nuestros ingenieros.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={WHATSAPP_URL} target="_blank" className="px-10 py-5 bg-white text-blue-800 rounded-full font-black text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <WhatsAppIcon className="w-6 h-6" /> Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {currentView === 'checkout' && selectedPlan && (
        <CheckoutView
          plan={selectedPlan}
          onBack={() => setCurrentView('landing')}
          onPlanChange={(newPlan) => setSelectedPlan(newPlan)} // Aquí actualiza la vista si cambian el select
        />
      )}

      {currentView === 'landing' && (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-24 pb-12 transition-colors">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <img src="/logo.jpg" alt="Logo Footer" className="h-8 rounded" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Soluciones BCloud</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg leading-relaxed">
                Infraestructura tecnológica integral para el Perú. Software + Hardware + Servicios.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">Contacto</h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-3">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold">+51 919 293 319</span>
                </li>
                <li className="flex items-center gap-3"><Users size={18} className="text-blue-600" /> Ventas Corporativas</li>
                <li>Ate, Lima - Perú</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-lg">Legal</h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                <li>RUC: 20609603691</li>
                <li>Política de Privacidad</li>
                <li>Términos y Condiciones</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-400 text-sm pt-8 border-t border-slate-200 dark:border-slate-900">
            © 2026 Soluciones BCloud SAC.
          </div>
        </footer>
      )}

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all hover:scale-110 animate-bounce">
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;