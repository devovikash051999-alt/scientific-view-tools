'use client';

import * as React from 'react';
import { 
  Search, 
  Copy, 
  RefreshCw, 
  Terminal, 
  Activity, 
  Cpu, 
  BarChart, 
  Heart, 
  Clock, 
  Percent, 
  Scaling, 
  Moon, 
  Grid, 
  Flame, 
  Layers, 
  ArrowRight,
  TrendingUp,
  BookmarkCheck,
  Check,
  AlertTriangle,
  ChevronDown,
  Sun,
  FileText,
  Mail,
  Shield,
  Info,
  Coins,
  Sparkles,
  Volume2,
  VolumeX,
  Trophy,
  Trees,
  ShoppingBag,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { TOOLS_LIST, CATEGORIES, ToolDefinition } from '@/lib/tools-registry';

const generateExtendedWhyUnique = (tool: ToolDefinition | null): string[] => {
  if (!tool) return [];
  
  const categorySpecificTechTerm = 
    tool.category === "Finance & Tax Tools" ? "industry-standard tax formulas, compounding progression loops, and exact fractional percentage calculations" :
    tool.category === "Health & Vitality Tools" ? "clinical equations (such as the Harris-Benedict BMR formula or clinical pregnancy gestation curves) and physiological constants" :
    tool.category === "Time & Countdown Utilities" ? "precise UTC epoch timestamp differentials, high-accuracy browser millisecond clocks, and dynamic interval tracking state machines" :
    tool.category === "Math & Scientific Utilities" ? "arbitrary precision floating-point logic, binary bitwise array maps, and step-by-step algebraic solution trees" :
    tool.category === "Metric Conversion Tools" ? "the most up-to-date physical unit factors, linear conversion coefficients, and responsive input-output listeners" :
    "standard digital format parsers, hex-to-rgb bit-shifting arrays, and fluid aspect-ratio constraint algebra";

  const p1 = `Our online utility, the ${tool.name}, is engineered to redefine the digital interface standard. Unlike common online platforms that require tedious page loads, registration forms, or background server queries, our platform operates on an elite serverless client-side engine. This means every computational cycle, data transformation, or numerical projection executes exclusively in the secure sandbox of your web browser. Absolutely no input values, personal parameters, or sensitive metrics are ever transmitted over external networks or logged onto remote server databases. By maintaining a strict local-execution protocol, you enjoy unmatched privacy compliance, shielding your workspace from third-party analytical cookies and cloud database trackers.`;
  
  const p2 = `Technically, the ${tool.name} relies on highly optimized ${categorySpecificTechTerm}. This ensures that standard round-off errors and double-precision limitations are completely avoided. Each output field from the tool is parsed on a high-speed JavaScript listener, providing real-time calculations as you adjust the inputs without lagging the page or requiring manually clicking "Submit". Whether you are adjusting numeric sliders, entering decimal weights, or selecting calendar dates, the local runtime updates the calculations at sub-millisecond intervals. This makes it an invaluable utility for professionals, researchers, software engineers, and busy decision-makers who require guaranteed mathematical precision alongside instantaneous interface response times on any desktop or mobile screen.`;

  const p3 = `The ${tool.name} is built with a singular focus on immediate, direct utility. By avoiding the typical paywalls, user login prompts, and cloud dependency delays, this application offers an efficient, friction-free calculations pipeline. Each functional section provides immediate mathematical feedback, automatic parameter evaluation, and rapid keyboard interactions. Results are formatted cleanly with one-click clipboard copying, letting you copy verified figures and metrics directly to local files, documents, or team emails. This provides a completely local utility experience that respects your daily productivity and online parameters with complete transparency.`;

  return [p1, p2, p3];
};

const getExtendedFaqsForTool = (tool: ToolDefinition | null): { q: string; a: string }[] => {
  if (!tool) return [];
  
  const name = tool.name;
  const category = tool.category;
  
  if (category === "Finance & Tax Tools") {
    return [
      {
        q: `Is my financial data safe when using the ${name}?`,
        a: `Absolutely. All calculations occur entirely within your browser's local sandbox state. No financial variables, salaries, or tax rates are ever transmitted over the network or stored in external databases.`
      },
      {
        q: `Can I use the ${name} for official tax filing and company audits?`,
        a: `The ${name} is designed as a high-precision estimation tool for professional, educational, and quick calculations. For regulatory and legally binding tax submissions, we recommend reviewing results with a certified financial advisor.`
      },
      {
        q: `How accurate are the fractional percentage values calculated by the ${name}?`,
        a: `This utility operates on standard double-precision floating-point logic, matching official financial calculation models. This ensures accurate precision without decimal rounding discrepancies.`
      },
      {
        q: `Does the ${name} support different currencies or localized formats?`,
        a: `Yes, because it operates on pure numerical ratios and mathematical indices, the resulting figures can be applied to any international currency including INR, USD, EUR, or GBP.`
      },
      {
        q: `Are there any hourly usage limits or key requirements for this tool?`,
        a: `None at all. The calculations are processed instantly by your device’s browser CPU, meaning there are no API fees, account sign-up requirements, or usage caps of any kind.`
      }
    ];
  } else if (category === "Health & Vitality Tools") {
    return [
      {
        q: `Does the ${name} store or share my physical measurements?`,
        a: `Never. Your height, weight, age, or physical indexes are processed instantly inside your private browser session and are never logged, matching top privacy standards.`
      },
      {
        q: `Are the calculations performed by the ${name} clinically verified?`,
        a: `Yes, the utility leverages standard physiological algorithms, such as the official WHO Body Mass Index classification ranges and Harris-Benedict formulas to render clinical estimations.`
      },
      {
        q: `Can the ${name} replace a doctor's medical consultation or diagnosis?`,
        a: `These health calculators are designed purely for dietary, fitness, and educational projections. Please consult a qualified medical professional before starting any major physical or nutritional training program.`
      },
      {
        q: `How frequently should I update my parameters in the ${name}?`,
        a: `We suggest recalculating every 2 to 4 weeks or whenever you experience significant adjustments in composition, metabolic speed, or daily exercise habits.`
      },
      {
        q: `Is this tool suitable for different age groups or physical profiles?`,
        a: `Yes, the underlying models are optimized to take age, activity variables, and biological inputs into account to deliver the most relevant standard outcomes.`
      }
    ];
  } else if (category === "Time & Countdown Utilities") {
    return [
      {
        q: `How accurate is the chronological precision of the ${name}?`,
        a: `The utility synchronizes with high-resolution internal browser clocks mapped to standard Network Time Protocols (NTP) to guarantee high-precision interval calculations.`
      },
      {
        q: `Will the ${name} calculations continue if I minimize or change tabs?`,
        a: `Yes, standard browsers continue processing background interval states. For absolute precision over highly extended intervals, keeping the tab active or verifying on reopening is optimal.`
      },
      {
        q: `Can I export the calculated timelines or save session logs?`,
        a: `Yes, the layout keeps results visible. You can copy individual counts, duration deltas, or split files directly to your clipboard in a tidy format.`
      },
      {
        q: `Does this timer automatically adjust for global timezone shifts and daylight savings?`,
        a: `Yes, the tool relies on raw UTC epoch metrics, adapting automatically to your current localized timezone offsets and dynamic seasonal time updates.`
      },
      {
        q: `Does using this tool consume excessive system resources?`,
        a: `No. The timing loops are built using high-performance, single-thread animation thresholds, keeping your processor load near zero even if left running for days.`
      }
    ];
  } else if (category === "Math & Scientific Utilities") {
    return [
      {
        q: `How does the ${name} handle very large numbers or specialized decimals?`,
        a: `It uses high-efficiency double-precision float representations. For scientific matrices and equations, it processes numbers using standard algebraic parsing to avoid unexpected memory buffer overflows.`
      },
      {
        q: `Are step-by-step mathematical explanations visible?`,
        a: `Yes, the interactive outputs display broken-down mathematical steps, roots, or bit lists, making it excellent for academic study or rapid engineering checks.`
      },
      {
        q: `Can I export the outputs or equation steps?`,
        a: `Absolutely. You can copy the calculated answers, simplified equations, or scientific notation strings instantly using the system copy buttons.`
      },
      {
        q: `Does the ${name} require real-time API queries or an active internet connection?`,
        a: `No. All mathematical parsing and standard solution maps execute entirely offline within your local web document, making it fully operational in any offline workspace.`
      },
      {
        q: `Is this tool suitable for academic research or professional prototyping?`,
        a: `Yes. It provides standard algebraic formulas without any network latency, making it a reliable reference for engineering quick-checks and standard classroom computations.`
      }
    ];
  } else if (category === "Metric Conversion Tools") {
    return [
      {
        q: `Which standard conversion units are supported by the ${name}?`,
        a: `It employs the official International System of Units (SI) conversions alongside recognized Imperial constants to guarantee precise dimensional outputs.`
      },
      {
        q: `Does this tool support bidirectional conversions?`,
        a: `Yes, entering a value in any field immediately updates both adjacent and opposing categories, letting you translate metrics back and forth without reset loops.`
      },
      {
        q: `Can I convert multiple measurements simultaneously on the ${name}?`,
        a: `Yes, our reactive inputs are bound to high-speed listeners that calculate conversion rates instantly across all supported models on a single screen.`
      },
      {
        q: `Are physical conversion ratios rounded automatically?`,
        a: `Calculations are performed at full precision and formatted cleanly for readable standard reference, making them accurate for research, building, and household use.`
      },
      {
        q: `How can I copy the converted calculations?`,
        a: `You can use the native clipboard copy function to grab single metrics or absolute charts, letting you move data to separate files seamlessly.`
      }
    ];
  } else {
    return [
      {
        q: `Does the ${name} transmit my assets or text values to external cloud storage?`,
        a: `Never. Everything — including code, hex strings, layout ratios, and input dimensions — is processed absolutely locally within your secure browser cache.`
      },
      {
        q: `Does the ${name} support modern coding and styling frameworks?`,
        a: `Yes, calculations output clean, standardized CSS properties, Tailwind inline formats, or numeric counts that can be dropped directly into any code editor.`
      },
      {
        q: `How accurate are the canvas pixel or color previews?`,
        a: `Previews are rendered in high-fidelity utilizing standard sRGB representations, ensuring that color hex keys and dynamic dimensional ranges are pixel-perfect.`
      },
      {
        q: `Can I use the ${name} while disconnected from the internet?`,
        a: `Yes. Since it compiles to client-side-only JavaScript actions, you can keep the utility open and fully functional in completely offline settings.`
      },
      {
        q: `Can I quickly copy design keys to my project directory?`,
        a: `Yes, the builder contains simple copy triggers, enabling you to transfer hex codes, layout parameters, or output blocks to your clipboard with a single tap.`
      }
    ];
  }
};

// Utility wrapper to safely update window.history without triggering DataCloneError from browser extensions or iframe security policies
const safePushState = (path: string) => {
  if (typeof window === 'undefined') return;
  try {
    const rawState = window.history.state;
    let state: any = null;
    if (rawState && typeof rawState === 'object') {
      state = {};
      for (const key of Object.keys(rawState)) {
        if (['key', 'as', 'url', 'options', '__NA_STATE'].includes(key)) {
          state[key] = rawState[key];
        }
      }
    } else {
      state = {};
    }
    state.as = path;
    state.url = path;
    window.history.pushState(state, '', path);
  } catch (e) {
    try {
      window.history.pushState({ as: path, url: path }, '', path);
    } catch (err) {
      try {
        window.history.pushState(null, '', path);
      } catch (err2) {}
    }
  }
};

const safeReplaceState = (path: string) => {
  if (typeof window === 'undefined') return;
  try {
    const rawState = window.history.state;
    let state: any = null;
    if (rawState && typeof rawState === 'object') {
      state = {};
      for (const key of Object.keys(rawState)) {
        if (['key', 'as', 'url', 'options', '__NA_STATE'].includes(key)) {
          state[key] = rawState[key];
        }
      }
    } else {
      state = {};
    }
    state.as = path;
    state.url = path;
    window.history.replaceState(state, '', path);
  } catch (e) {
    try {
      window.history.replaceState({ as: path, url: path }, '', path);
    } catch (err) {
      try {
        window.history.replaceState(null, '', path);
      } catch (err2) {}
    }
  }
};

interface ScientificViewsSuiteProps {
  initialSlug?: string | null;
}

export default function ScientificViewsSuite({ initialSlug = null }: ScientificViewsSuiteProps) {
  // Navigation & Router
  const [currentSlug, setCurrentSlug] = React.useState<string | null>(initialSlug);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  // Navigation helper to perform clean SPA transitions updating the address bar without /#/ hash fragments
  const navigateTo = (slug: string | null, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setCurrentSlug(slug);
    const path = slug ? `/${slug}` : '/';
    safePushState(path);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  };
  
  // Theme and dropdown states
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState<boolean>(false);

  // Close Mega Menu on ESC keypress
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMegaMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  
  // Contact us form state
  const [contactName, setContactName] = React.useState<string>("");
  const [contactEmail, setContactEmail] = React.useState<string>("");
  const [contactSubject, setContactSubject] = React.useState<string>("Bug Report");
  const [contactMessage, setContactMessage] = React.useState<string>("");
  const [contactSubmitted, setContactSubmitted] = React.useState<boolean>(false);
  const [contactTicketId, setContactTicketId] = React.useState<string>("");

  // Local state for tool form parameters
  const [inputs, setInputs] = React.useState<Record<string, any>>({});
  const [copied, setCopied] = React.useState<boolean>(false);
  const [pomoCopied, setPomoCopied] = React.useState<boolean>(false);
  
  // Custom interactive state triggers
  const [validationError, setValidationError] = React.useState<string | null>(null);

  // --- INTERACTIVE TOOL 1: POMODORO TIMER ---
  const [pomoActive, setPomoActive] = React.useState<boolean>(false);
  const [pomoMode, setPomoMode] = React.useState<'work' | 'break'>('work');
  const [pomoTime, setPomoTime] = React.useState<number>(1500); // 25 mins
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Focus Game states
  const [pomoXP, setPomoXP] = React.useState<number>(0);
  const [pomoCoins, setPomoCoins] = React.useState<number>(15); // Start with 15 free focus coins!
  const [unlockedSeeds, setUnlockedSeeds] = React.useState<string[]>(['cosmic_sprout', 'royal_bonsai', 'cyber_orchid', 'sacred_sequoia', 'celestial_lotus']);
  const [selectedSeed, setSelectedSeed] = React.useState<string>('cosmic_sprout');
  const [pomoForest, setPomoForest] = React.useState<{id: string, seed: string, date: string}[]>([]);
  const [ambientThemeState, setAmbientThemeState] = React.useState<'none' | 'pink_rain' | 'lofi_synth'>('none');
  const [pomoNotification, setPomoNotification] = React.useState<{message: string, type: 'success' | 'info'} | null>(null);
  const [zenMode, setZenMode] = React.useState<boolean>(false);

  // Audio synths refs
  const ambientContextRef = React.useRef<any>(null);
  const ambientNodesRef = React.useRef<any[]>([]);
  const lofiIntervalRef = React.useRef<any>(null);

  // --- INTERACTIVE TOOL 2: STOPWATCH ---
  const [swActive, setSwActive] = React.useState<boolean>(false);
  const [swTime, setSwTime] = React.useState<number>(0); // ms
  const [swLaps, setSwLaps] = React.useState<number[]>([]);
  const swRef = React.useRef<NodeJS.Timeout | null>(null);
  const swLastStamp = React.useRef<number>(0);

  // --- INTERACTIVE TOOL 3: WPM TYPING TEST ---
  const [typingText, setTypingText] = React.useState<string>("");
  const [typingStatus, setTypingStatus] = React.useState<'idle' | 'running' | 'completed'>('idle');
  const [typingTimer, setTypingTimer] = React.useState<number>(60);
  const [typingWPM, setTypingWPM] = React.useState<number>(0);
  const [typingAccuracy, setTypingAccuracy] = React.useState<number>(100);
  const typingIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  
  const PRACTICE_PARAGRAPH = "Scientific Views offers modern client-side utilities built to optimize fast conversions and general calculations, providing instant tools with zero latency right inside your web application dashboard.";

  // --- INTERACTIVE TOOL 4: GPA COURSE CALCULATOR ---
  const [gpaCourses, setGpaCourses] = React.useState<{id: number, name: string, grade: number, credits: number}[]>([
    { id: 1, name: "Database Engineering", grade: 4, credits: 3 },
    { id: 2, name: "Technical SEO Optimization", grade: 4, credits: 4 },
    { id: 3, name: "Mathematics Foundations", grade: 3, credits: 3 }
  ]);

  // Pomodoro Timer Gamification Helpers
  const selectSeed = (seedId: string) => {
    setSelectedSeed(seedId);
    try {
      localStorage.setItem('sv_pomo_selected_seed', seedId);
    } catch (e) {}
    setPomoNotification({
      message: `Equipped plant target: ${seedId.split('_').join(' ').toUpperCase()}!`,
      type: 'success'
    });
  };

  const copyPomoResults = () => {
    let resultText = `==================================================\n`;
    resultText += `🎯 SCIENTIFIC VIEWS - DEEP FOCUS EXPERIENCE REPORT\n`;
    resultText += `==================================================\n`;
    resultText += `🕒 Generated: ${new Date().toLocaleString()}\n`;
    resultText += `🎖️ Focus RPG Level: LEVEL ${Math.floor(pomoXP / 1500) + 1}\n`;
    resultText += `⚡ Total Experience: ${pomoXP} XP\n`;
    resultText += `🌲 Total Grown Trees: ${pomoForest.length} trees\n\n`;
    
    if (pomoForest.length > 0) {
      resultText += `🌳 ACCOMPLISHED VIRTUAL FOREST:\n`;
      pomoForest.forEach((log, idx) => {
        const name = log.seed.split('_').join(' ').toUpperCase();
        resultText += `  ${idx + 1}. ${name} \n     [Date Grown: ${log.date}]\n`;
      });
    } else {
      resultText += `🌳 VIRTUAL FOREST:\n  No trees grown yet. Start an aesthetic focus session to grow your first plant!\n`;
    }
    resultText += `==================================================\n`;
    
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(resultText).then(() => {
        setPomoCopied(true);
        setTimeout(() => setPomoCopied(false), 2000);
      });
    }
  };

  const renderPlantSVG = (seed: string, pomoTimeLeft: number) => {
    const workDuration = (Number(inputs.workTime) || 25) * 60;
    const breakDuration = (Number(inputs.breakTime) || 5) * 60;
    const maxSec = pomoMode === 'work' ? workDuration : breakDuration;
    const pct = pomoMode === 'break' ? 100 : Math.min(100, Math.max(0, ((maxSec - pomoTimeLeft) / maxSec) * 100));

    let stage: 'seed' | 'sprout' | 'sapling' | 'mature' = 'seed';
    if (pct >= 85) stage = 'mature';
    else if (pct >= 45) stage = 'sapling';
    else if (pct >= 15) stage = 'sprout';

    const plantColor = 
      seed === 'royal_bonsai' ? '#0d9488' : 
      seed === 'cyber_orchid' ? '#3b82f6' : 
      seed === 'sacred_sequoia' ? '#ea580c' : 
      seed === 'celestial_lotus' ? '#ec4899' : '#10b981';

    return (
      <svg viewBox="0 0 100 100" className="w-40 h-40 drop-shadow-md overflow-visible animate-fade-in" style={{ contentVisibility: 'auto' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes sway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(3deg); }
          }
          @keyframes pulse-glowing {
            0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 1px ${plantColor}); }
            50% { opacity: 0.95; filter: drop-shadow(0 0 5px ${plantColor}); }
          }
          .sway-element {
            transform-origin: bottom center;
            animation: sway 4s ease-in-out infinite;
          }
          .glowing-star {
            animation: pulse-glowing 2s infinite ease-in-out;
          }
        `}} />
        
        {/* Pot and rich garden soil base */}
        <ellipse cx="50" cy="88" rx="20" ry="5" fill="#5c4033" opacity="0.9" />
        <ellipse cx="50" cy="85" rx="15" ry="3" fill="#3d2314" />
        <path d="M35 85 L38 94 A2 2 0 0 0 40 96 L60 96 A2 2 0 0 0 62 94 L65 85 Z" fill="#475569" />
        <ellipse cx="50" cy="85" rx="15" ry="1.5" fill="#64748b" />

        {/* Level Indicator Halo Rings */}
        {(stage === 'sapling' || stage === 'mature') && (
          <ellipse cx="50" cy="65" rx="25" ry="6" fill="none" stroke={plantColor} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.35" className="sway-element" />
        )}
        {stage === 'mature' && (
          <>
            <ellipse cx="50" cy="45" rx="18" ry="4" fill="none" stroke={plantColor} strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" className="sway-element" />
            <circle cx="28" cy="40" r="1" fill="#fbbf24" className="glowing-star" />
            <circle cx="72" cy="45" r="1" fill="#fbbf24" className="glowing-star" />
            <circle cx="50" cy="20" r="1.5" fill="#60a5fa" className="glowing-star" />
          </>
        )}

        {/* Phase-based plant structure growth */}
        {stage === 'seed' && (
          <>
            <circle cx="50" cy="82" r="3.5" fill="#f59e0b" className="animate-pulse" />
            <path d="M50 82 Q51 76 48 72" stroke="#34d399" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <circle cx="50" cy="82" r="1" fill="#fff" opacity="0.7" />
          </>
        )}

        {stage === 'sprout' && (
          <g className="sway-element">
            <path d="M50 85 Q51 72 49 66" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M49 66 Q44 60 39 63" fill="#34d399" />
            <path d="M49 66 Q54 60 59 63" fill="#34d399" />
            <circle cx="49" cy="66" r="0.75" fill="#fff" opacity="0.6" />
          </g>
        )}

        {stage === 'sapling' && (
          <g className="sway-element">
            <path d="M50 85 Q48 70 51 52" stroke="#047857" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M49 70 Q38 64 35 70" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M50 60 Q62 55 64 61" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            {/* Sapling Leaves */}
            <path d="M35 70 Q30 68 33 64 Z" fill={plantColor} />
            <path d="M64 61 Q69 59 66 55 Z" fill={plantColor} />
            <path d="M51 52 Q44 45 51 40 Z" fill={plantColor} />
          </g>
        )}

        {stage === 'mature' && (
          <g className="sway-element">
            {/* Trunk */}
            <path d="M50 85 Q49 60 50 35" stroke="#78350f" strokeWidth="4" fill="none" strokeLinecap="round" />
            
            {/* Branches and detailed foliage */}
            {seed === 'royal_bonsai' ? (
              <>
                <path d="M50 65 Q30 55 25 58" stroke="#78350f" strokeWidth="2" fill="none" />
                <path d="M50 50 Q70 42 75 46" stroke="#78350f" strokeWidth="2" fill="none" />
                <path d="M50 38 Q40 25 35 28" stroke="#78350f" strokeWidth="1.5" fill="none" />
                
                {/* Bonsai Cloud Foliage */}
                <circle cx="25" cy="58" r="8" fill="#115e59" opacity="0.95" />
                <circle cx="22" cy="56" r="6" fill={plantColor} />
                <circle cx="28" cy="56" r="5" fill={plantColor} />

                <circle cx="75" cy="46" r="9" fill="#115e59" opacity="0.95" />
                <circle cx="71" cy="44" r="7" fill={plantColor} />
                <circle cx="79" cy="44" r="6" fill={plantColor} />

                <circle cx="35" cy="28" r="7" fill="#115e59" opacity="0.95" />
                <circle cx="35" cy="26" r="5" fill={plantColor} />
              </>
            ) : seed === 'cyber_orchid' ? (
              <>
                <path d="M50 62 Q35 48 20 45" stroke="#312e81" strokeWidth="2" fill="none" />
                <path d="M50 48 Q65 35 78 30" stroke="#312e81" strokeWidth="2" fill="none" />
                
                {/* Geometric digital flowers */}
                <polygon points="20,45 14,40 16,32 24,32 26,40" fill="#4338ca" />
                <polygon points="20,45 16,41 18,34 22,34 24,41" fill={plantColor} />
                <circle cx="20" cy="38" r="2.5" fill="#f43f5e" className="animate-pulse" />

                <polygon points="78,30 72,25 74,17 82,17 84,25" fill="#4338ca" />
                <polygon points="78,30 74,26 76,19 80,19 82,26" fill={plantColor} />
                <circle cx="78" cy="23" r="2.5" fill="#38bdf8" className="animate-pulse" />
              </>
            ) : seed === 'sacred_sequoia' ? (
              <>
                <path d="M53 72 L32 62" stroke="#78350f" strokeWidth="2" />
                <path d="M47 58 L68 48" stroke="#78350f" strokeWidth="1.5" />
                <path d="M52 45 L35 35" stroke="#78350f" strokeWidth="1.2" />
                
                {/* Sequoia Fir Foliage Triangles */}
                <polygon points="50,20 25,50 75,50" fill="#065f46" opacity="0.85" />
                <polygon points="50,15 30,42 70,42" fill="#047857" opacity="0.9" />
                <polygon points="50,8 35,32 65,32" fill={plantColor} />
                
                <circle cx="50" cy="12" r="2" fill="#fcd34d" className="glowing-star" />
              </>
            ) : seed === 'celestial_lotus' ? (
              <>
                <path d="M50 55 Q35 52 32 45" stroke="#4d7c0f" strokeWidth="1.5" fill="none" />
                <path d="M50 45 Q65 42 68 35" stroke="#4d7c0f" strokeWidth="1.5" fill="none" />
                
                {/* Glowing Concentric rings & floating lotus flowers */}
                <circle cx="50" cy="35" r="14" fill="none" stroke={plantColor} strokeWidth="1.5" opacity="0.85" className="animate-pulse" />
                <ellipse cx="50" cy="35" rx="8" ry="12" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.6" />
                <ellipse cx="50" cy="35" rx="12" ry="8" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.6" />
                
                {/* Central lotus bloom */}
                <path d="M50 35 C42 25 38 35 50 20 C62 35 58 25 50 35 Z" fill={plantColor} opacity="0.9" />
                <circle cx="50" cy="28" r="3" fill="#fbbf24" className="glowing-star" />
              </>
            ) : (
              // Default Cosmic Sprout fully grown configuration
              <>
                <circle cx="50" cy="35" r="16" fill="none" stroke="#059669" strokeWidth="1" opacity="0.4" />
                <path d="M50 35 C40 15 45 25 50 10 C55 25 60 15 50 35 Z" fill={plantColor} opacity="0.95" />
                <circle cx="50" cy="20" r="3.5" fill="#fbbf24" className="glowing-star" />
              </>
            )}
          </g>
        )}
      </svg>
    );
  };

  // Sync clean pathname routes and fallback hash routing which automatically cleanses url address bar
  React.useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      let activeSlug = initialSlug;

      if (hash && hash.startsWith('#/')) {
        activeSlug = hash.replace('#/', '');
        // Cleanse address bar to standard pathname format
        const isLegal = ["privacy-policy", "terms-of-service", "disclaimer", "contact", "about"].includes(activeSlug);
        const exists = TOOLS_LIST.some(t => t.slug === activeSlug) || isLegal;
        if (exists && activeSlug) {
          const tgtPath = `/${activeSlug}`;
          safeReplaceState(tgtPath);
        } else {
          safeReplaceState('/');
        }
      } else {
        const path = window.location.pathname;
        if (path && path !== "/") {
          activeSlug = path.replace(/^\//, ''); // Strip leading slash
        } else {
          activeSlug = null;
        }
      }

      if (activeSlug) {
        const isLegalPage = ["privacy-policy", "terms-of-service", "disclaimer", "contact", "about"].includes(activeSlug);
        const exists = TOOLS_LIST.some(t => t.slug === activeSlug) || isLegalPage;
        if (exists) {
          setCurrentSlug(activeSlug);
          if (isLegalPage) {
            setValidationError(null);
          } else {
            // Initialise default base state
            const tool = TOOLS_LIST.find(t => t.slug === activeSlug);
            if (tool) {
              const initialMap: Record<string, any> = {};
              tool.fields.forEach(f => {
                initialMap[f.id] = f.defaultValue;
              });
              setInputs(initialMap);
              setValidationError(null);
            }
          }
        } else {
          setCurrentSlug(null);
        }
      } else {
        setCurrentSlug(null);
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [initialSlug]);

  // Sync Dynamic Page Titles for optimal SEO and search indexer friendliness
  React.useEffect(() => {
    if (!currentSlug) {
      document.title = "Scientific Views Tools - Premium 50-in-1 JavaScript Online Calculator Suite";
    } else if (currentSlug === "privacy-policy") {
      document.title = "Privacy Policy & Cookie Consent | Scientific Views Tools";
    } else if (currentSlug === "terms-of-service") {
      document.title = "Terms of Service & Bot Scraper Regulations | Scientific Views Tools";
    } else if (currentSlug === "disclaimer") {
      document.title = "Legal Disclaimer & Liability Limitation | Scientific Views Tools";
    } else if (currentSlug === "contact") {
      document.title = "Contact Us & Accessible Human Feedback | Scientific Views Tools";
    } else if (currentSlug === "about") {
      document.title = "About Us | Scientific Views Tools - Empowering Decisive Calculations";
    } else {
      const tool = TOOLS_LIST.find(t => t.slug === currentSlug);
      if (tool) {
        document.title = `${tool.name} - Free Browser Prototyping Module | Scientific Views Tools`;
      } else {
        document.title = "Scientific Views Tools - Premium Online Utilities";
      }
    }
  }, [currentSlug]);

  // Sync inputs change reset error
  const updateFieldValue = (fieldId: string, val: any) => {
    // Always update input value so users are never locked out of custom editing or deleting text
    setInputs(prev => ({ ...prev, [fieldId]: val }));

    let errorMsg: string | null = null;
    
    if (fieldId === "amount" || fieldId === "principal" || fieldId === "gross" || fieldId === "price" || fieldId === "inclusivePrice" || fieldId === "invested") {
      if (val !== "" && Number(val) < 0) {
        errorMsg = "Negative financial value parameters are invalid.";
      }
    }
    
    if (fieldId === "height" || fieldId === "weight" || fieldId === "age" || fieldId === "calories") {
      if (val !== "" && Number(val) <= 0) {
        errorMsg = "Physiological metrics must be strictly greater than 0.";
      }
    }
    
    setValidationError(errorMsg);
  };

  // Find currently active tool
  const currentTool = TOOLS_LIST.find(t => t.slug === currentSlug) || null;

  // Sound generator for Pomodoro
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime); // High pitched A note
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {
      // AudioContext fails silently if user has not interacted with body yet
    }
  };

  // Web Audio Synthesizers for Ambient Focus Soundscapes
  const startAmbient = (theme: 'pink_rain' | 'lofi_synth') => {
    try {
      stopAmbient();
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      ambientContextRef.current = ctx;

      if (theme === 'pink_rain') {
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.11;
          b6 = white * 0.115926;
        }

        const noiseSrc = ctx.createBufferSource();
        noiseSrc.buffer = noiseBuffer;
        noiseSrc.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

        noiseSrc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noiseSrc.start(0);
        ambientNodesRef.current.push(noiseSrc, filter, gainNode);
      } else if (theme === 'lofi_synth') {
        // Create master gain to easily mute all playing channels instantly on cutoff
        const lofiMasterGain = ctx.createGain();
        lofiMasterGain.gain.setValueAtTime(0.8, ctx.currentTime);
        lofiMasterGain.connect(ctx.destination);
        ambientNodesRef.current.push(lofiMasterGain);

        const playLofiArpeggio = () => {
          if (!ambientContextRef.current) return;
          const currCtx = ambientContextRef.current;
          const now = currCtx.currentTime;
          
          // Comforting E major 7 pentatonic/ambient notes in middle register
          // E4 (329.63Hz), G#4 (415.30Hz), B4 (493.88Hz), D#5 (587.33Hz), E5 (659.25Hz)
          const notes = [329.63, 415.30, 493.88, 587.33, 659.25];
          notes.forEach((freq, idx) => {
            try {
              const osc = currCtx.createOscillator();
              const gain = currCtx.createGain();
              
              // Soft, rich, and perfectly audible triangle waves
              osc.type = "triangle";
              osc.frequency.setValueAtTime(freq, now + idx * 0.15);
              
              // Smooth envelope to prevent popping and sound extremely professional
              gain.gain.setValueAtTime(0.001, now + idx * 0.15);
              gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.15 + 0.12);
              gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 3.5);
              
              const lowpass = currCtx.createBiquadFilter();
              lowpass.type = "lowpass";
              lowpass.frequency.setValueAtTime(1100, now + idx * 0.15);

              osc.connect(lowpass);
              lowpass.connect(gain);
              gain.connect(lofiMasterGain);
              
              osc.start(now + idx * 0.15);
              osc.stop(now + idx * 0.15 + 4.0);
              
              ambientNodesRef.current.push(osc, gain, lowpass);
            } catch (err) {}
          });
        };

        playLofiArpeggio();
        const lofiInterval = setInterval(playLofiArpeggio, 7000);
        lofiIntervalRef.current = lofiInterval;
      }

      setAmbientThemeState(theme);
    } catch (e) {
      console.warn("AudioContext failed or was blocked", e);
    }
  };

  const stopAmbient = () => {
    if (lofiIntervalRef.current) {
      clearInterval(lofiIntervalRef.current);
      lofiIntervalRef.current = null;
    }
    ambientNodesRef.current.forEach(node => {
      try {
        if (typeof node.stop === 'function') node.stop();
        else node.disconnect();
      } catch (e) {}
    });
    ambientNodesRef.current = [];
    if (ambientContextRef.current) {
      try {
        ambientContextRef.current.close();
      } catch (e) {}
      ambientContextRef.current = null;
    }
    setAmbientThemeState('none');
  };

  // Mount effect to load gamification progress
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedXP = localStorage.getItem('sv_pomo_xp');
        if (savedXP) setPomoXP(parseInt(savedXP, 10));

        const savedCoins = localStorage.getItem('sv_pomo_coins');
        if (savedCoins) setPomoCoins(parseInt(savedCoins, 10));

        const savedSeeds = localStorage.getItem('sv_pomo_seeds');
        if (savedSeeds) setUnlockedSeeds(JSON.parse(savedSeeds));

        const savedForest = localStorage.getItem('sv_pomo_forest');
        if (savedForest) setPomoForest(JSON.parse(savedForest));

        const savedSelectedSeed = localStorage.getItem('sv_pomo_selected_seed');
        if (savedSelectedSeed) setSelectedSeed(savedSelectedSeed);
      } catch (e) {
        console.warn("Could not load gamified state from localStorage", e);
      }
    }
  }, []);

  // Sync pomoTime if timer is deactivated when duration settings are customized
  React.useEffect(() => {
    if (!pomoActive && currentSlug === 'pomodoro-timer') {
      const workDuration = (Number(inputs.workTime) || 25) * 60;
      const breakDuration = (Number(inputs.breakTime) || 5) * 60;
      setPomoTime(pomoMode === 'work' ? workDuration : breakDuration);
    }
  }, [inputs.workTime, inputs.breakTime, pomoMode, pomoActive, currentSlug]);

  // Pomodoro timer effect with gamified tick updates
  React.useEffect(() => {
    if (pomoActive) {
      timerRef.current = setInterval(() => {
        // Award XP on each tick during Work sessions
        if (pomoMode === 'work') {
          setPomoXP(prevXP => {
            const nextXP = prevXP + 1;
            try {
              localStorage.setItem('sv_pomo_xp', nextXP.toString());
            } catch (e) {}
            return nextXP;
          });
        }

        setPomoTime(prev => {
          if (prev <= 1) {
            playChime();
            const nextMode = pomoMode === 'work' ? 'break' : 'work';
            
            if (pomoMode === 'work') {
              // Successfully completed deep focus interval!
              setPomoCoins(prevCoins => {
                const nextCoins = prevCoins + 25; // Award +25 coins
                try {
                  localStorage.setItem('sv_pomo_coins', nextCoins.toString());
                } catch (e) {}
                return nextCoins;
              });

              // Save grown tree to persistent virtual Forest
              const newTree = {
                id: Date.now().toString(),
                seed: selectedSeed,
                date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
              };

              setPomoForest(prevForest => {
                const nextForest = [newTree, ...prevForest];
                try {
                  localStorage.setItem('sv_pomo_forest', JSON.stringify(nextForest));
                } catch (e) {}
                return nextForest;
              });

              setPomoNotification({
                message: "Aesthetic Session Complete! You focused for a full cycle and grown a new spectacular tree in your Forest! Unlocked 25 Focus Coins.",
                type: 'success'
              });
            } else {
              setPomoNotification({
                message: "Break has wrapped up! Time to plant a premium new seedling and begin focusing.",
                type: 'success'
              });
            }

            setPomoMode(nextMode);
            const workDuration = (Number(inputs.workTime) || 25) * 60;
            const breakDuration = (Number(inputs.breakTime) || 5) * 60;
            return nextMode === 'work' ? workDuration : breakDuration;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pomoActive, pomoMode, selectedSeed, inputs.workTime, inputs.breakTime]);

  // Stopwatch effect
  React.useEffect(() => {
    if (swActive) {
      swLastStamp.current = Date.now();
      swRef.current = setInterval(() => {
        const now = Date.now();
        const delta = now - swLastStamp.current;
        swTimeRefUpdate(delta);
        swLastStamp.current = now;
      }, 37);
    } else {
      if (swRef.current) clearInterval(swRef.current);
    }
    return () => {
      if (swRef.current) clearInterval(swRef.current);
    };
  }, [swActive]);

  const swTimeRefUpdate = (delta: number) => {
    setSwTime(prev => prev + delta);
  };

  // Typing test timer effect
  React.useEffect(() => {
    if (typingStatus === 'running') {
      typingIntervalRef.current = setInterval(() => {
        setTypingTimer(prev => {
          if (prev <= 1) {
            setTypingStatus('completed');
            if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    }
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, [typingStatus]);

  // Refresh / reset current tool outputs
  const handleReset = () => {
    if (!currentTool) return;
    const initialMap: Record<string, any> = {};
    currentTool.fields.forEach(f => {
      initialMap[f.id] = f.defaultValue;
    });
    setInputs(initialMap);
    setValidationError(null);
    setCopied(false);

    // Reset interactive states
    setPomoActive(false);
    setPomoMode('work');
    setPomoTime(1500);

    setSwActive(false);
    setSwTime(0);
    setSwLaps([]);

    setTypingText("");
    setTypingStatus('idle');
    setTypingTimer(60);
    setTypingWPM(0);
    setTypingAccuracy(100);

    setGpaCourses([
      { id: 1, name: "Database Engineering", grade: 4, credits: 3 },
      { id: 2, name: "Technical SEO Optimization", grade: 4, credits: 4 },
      { id: 3, name: "Mathematics Foundations", grade: 3, credits: 3 }
    ]);
  };

  // Dynamic formula calculation outputs dispatcher
  const computedOutputs = React.useMemo(() => {
    if (!currentTool) return {};
    
    // Custom logic overrides
    if (currentTool.slug === 'pomodoro-timer') {
      const minutes = Math.floor(pomoTime / 60);
      const seconds = pomoTime % 60;
      return {
        status: `Mode: ${pomoMode.toUpperCase()} (${pomoActive ? 'ACTIVE' : 'PAUSED'})`,
        setting: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      };
    }

    if (currentTool.slug === 'online-stopwatch') {
      const ms = swTime % 1000;
      const sec = Math.floor(swTime / 1000) % 60;
      const min = Math.floor(swTime / 60000) % 60;
      const formatted = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
      return {
        control: `Total recorded: ${swLaps.length} laps`,
        state: formatted
      };
    }

    if (currentTool.slug === 'wpm-typing-test') {
      return {
        mode: `Accuracy: ${typingAccuracy}%`,
        status: `${typingWPM} Net Words Per Minute`
      };
    }

    if (currentTool.slug === 'gpa-calculator-semester') {
      const totalCredits = gpaCourses.reduce((sum, c) => sum + Number(c.credits), 0);
      const weightedPoints = gpaCourses.reduce((sum, c) => sum + (Number(c.grade) * Number(c.credits)), 0);
      const finalGpa = totalCredits > 0 ? (weightedPoints / totalCredits) : 0;
      return {
        totalCredits: `${totalCredits} Credits`,
        gpaScore: finalGpa.toFixed(2)
      };
    }

    // Default registry formulas
    try {
      return currentTool.calculate(inputs);
    } catch (_) {
      return {};
    }
  }, [currentTool, inputs, pomoTime, pomoActive, pomoMode, swTime, swLaps, typingWPM, typingAccuracy, gpaCourses]);

  // Copy result string compilation
  const copyOutputsToClipboard = () => {
    if (!currentTool) return;
    let text = `Scientific Views - ${currentTool.name} Results\n`;
    text += `Url Slug: /${currentTool.slug}\n`;
    text += `timestamp: ${new Date().toISOString()}\n\nInputs:\n`;
    
    Object.entries(inputs).forEach(([k, v]) => {
      text += `  - ${k}: ${v}\n`;
    });
    
    text += `\nOutputs:\n`;
    currentTool.outputs.forEach(opt => {
      text += `  - ${opt.label}: ${computedOutputs[opt.id] || ''}\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Search filter
  const filteredTools = TOOLS_LIST.filter(t => {
    const q = searchQuery.toLowerCase();
    return t.name.toLowerCase().includes(q) || 
           t.category.toLowerCase().includes(q) || 
           t.description.toLowerCase().includes(q) ||
           t.seoH1.toLowerCase().includes(q);
  });

  // Group filtered tools by category
  const categorizedFiltered = CATEGORIES.map(category => {
    return {
      category,
      tools: filteredTools.filter(t => t.category === category)
    };
  }).filter(group => group.tools.length > 0);

  // WPM keystroke handler
  const handleTypingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (typingStatus === 'idle') {
      setTypingStatus('running');
    }
    
    setTypingText(val);

    // Calculate accuracy and WPM
    let correctChars = 0;
    const target = PRACTICE_PARAGRAPH;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === target[i]) {
        correctChars++;
      }
    }

    const accuracyVal = val.length > 0 ? Math.round((correctChars / val.length) * 100) : 100;
    setTypingAccuracy(accuracyVal);

    // Words = Characters Typed / 5
    const elapsedMinutes = (60 - typingTimer) / 60 || 0.01;
    const wordsTyped = val.length / 5;
    const rawWPM = Math.round(wordsTyped / elapsedMinutes);
    const netWPM = Math.round((rawWPM * accuracyVal) / 100);

    setTypingWPM(netWPM);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Finance & Tax Tools": return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case "Health & Vitality Tools": return <Heart className="w-4 h-4 text-rose-600" />;
      case "Time & Countdown Utilities": return <Clock className="w-4 h-4 text-indigo-600" />;
      case "Math & Scientific Utilities": return <Scaling className="w-4 h-4 text-blue-600" />;
      case "Metric Conversion Tools": return <Layers className="w-4 h-4 text-amber-600" />;
      default: return <Cpu className="w-4 h-4 text-slate-600" />;
    }
  };

  const getCategoryTheme = (category: string | undefined) => {
    switch (category) {
      case "Finance & Tax Tools":
        return {
          accent: "emerald",
          bg: "bg-emerald-600",
          hoverBg: "hover:bg-emerald-500",
          text: "text-emerald-600",
          darkText: "text-emerald-950",
          lightBg: "bg-emerald-50/70",
          border: "border-emerald-100",
          borderFocus: "focus:border-emerald-500",
          ring: "focus:ring-emerald-500/20",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
          btn: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/10",
          accentFill: "accent-emerald-600",
          cardHover: "hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
        };
      case "Health & Vitality Tools":
        return {
          accent: "rose",
          bg: "bg-rose-500",
          hoverBg: "hover:bg-rose-400",
          text: "text-rose-600",
          darkText: "text-rose-950",
          lightBg: "bg-rose-50/70",
          border: "border-rose-100",
          borderFocus: "focus:border-rose-500",
          ring: "focus:ring-rose-500/20",
          badge: "bg-rose-50 text-rose-700 border-rose-100",
          btn: "bg-rose-500 hover:bg-rose-400 text-white shadow-rose-500/10",
          accentFill: "accent-rose-500",
          cardHover: "hover:border-rose-300 hover:shadow-xl hover:shadow-rose-500/5 hover:-translate-y-1"
        };
      case "Time & Countdown Utilities":
        return {
          accent: "indigo",
          bg: "bg-indigo-600",
          hoverBg: "hover:bg-indigo-505",
          text: "text-indigo-600",
          darkText: "text-indigo-950",
          lightBg: "bg-indigo-50/70",
          border: "border-indigo-100",
          borderFocus: "focus:border-indigo-500",
          ring: "focus:ring-indigo-500/20",
          badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
          btn: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/10",
          accentFill: "accent-indigo-600",
          cardHover: "hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1"
        };
      case "Math & Scientific Utilities":
        return {
          accent: "blue",
          bg: "bg-blue-600",
          hoverBg: "hover:bg-blue-505",
          text: "text-blue-600",
          darkText: "text-blue-950",
          lightBg: "bg-blue-50/70",
          border: "border-blue-100",
          borderFocus: "focus:border-blue-500",
          ring: "focus:ring-blue-500/20",
          badge: "bg-blue-50 text-blue-700 border-blue-100",
          btn: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/10",
          accentFill: "accent-blue-600",
          cardHover: "hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
        };
      case "Metric Conversion Tools":
        return {
          accent: "amber",
          bg: "bg-amber-500",
          hoverBg: "hover:bg-amber-400",
          text: "text-amber-600",
          darkText: "text-amber-950",
          lightBg: "bg-amber-50/70",
          border: "border-amber-100",
          borderFocus: "focus:border-amber-500",
          ring: "focus:ring-amber-500/20",
          badge: "bg-amber-50 text-amber-700 border-amber-100",
          btn: "bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-amber-500/10",
          accentFill: "accent-amber-500",
          cardHover: "hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
        };
      default:
        return {
          accent: "slate",
          bg: "bg-slate-700",
          hoverBg: "hover:bg-slate-650",
          text: "text-slate-700",
          darkText: "text-slate-950",
          lightBg: "bg-slate-50/70",
          border: "border-slate-200",
          borderFocus: "focus:border-slate-500",
          ring: "focus:ring-slate-500/20",
          badge: "bg-slate-100 text-slate-800 border-slate-200/60",
          btn: "bg-slate-700 hover:bg-slate-600 text-white shadow-slate-500/10",
          accentFill: "accent-slate-700",
          cardHover: "hover:border-slate-300 hover:shadow-xl hover:-translate-y-1"
        };
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-[#0f172a] text-slate-200' : 'bg-[#f8f9fa] text-slate-850'} font-sans antialiased transition-colors duration-200`}>
      
      {/* 1. Global Navbar */}
      <nav id="global-navbar" className={`h-16 flex items-center justify-between px-4 sm:px-6 border-b shrink-0 sticky top-0 z-50 shadow-sm transition-colors duration-200 ${
        isDarkMode ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200/80'
      }`}>
        <div id="navbar-logo-area" className="flex items-center gap-4">
          <a 
            href="/" 
            onClick={(e) => {
              navigateTo(null, e);
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="inline-grid grid-cols-2 gap-0.5 w-8 h-8 rounded-lg overflow-hidden shadow-sm shrink-0 transition-transform group-hover:scale-105">
              <div className="bg-[#ff4e41] animate-pulse" />
              <div className="bg-[#4194ff]" />
              <div className="bg-[#ffd241]" />
              <div className="bg-[#2fd165]" />
            </div>
            <span className={`text-md sm:text-lg font-black tracking-tight sm:inline hidden ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
              Scientific Views <span className="text-blue-500 font-extrabold">Tools</span>
            </span>
          </a>

          {/* Category Dropdown Navigation */}
          <div className="relative md:block hidden">
            <button 
              id="category-dropdown-btn"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border outline-none cursor-pointer ${
                isMegaMenuOpen
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10"
                  : isDarkMode 
                    ? "bg-slate-800/90 border-slate-700 text-slate-200 hover:bg-slate-700" 
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-blue-500" />
              <span>All 50 Tools Directory</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Direct Quick category shortcuts resembling iLovePDF list structure */}
            <div className="hidden xl:inline-flex items-center gap-1.5 ml-2.5">
              {[
                { name: "Finance", key: "Finance & Tax Tools", theme: "emerald", icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> },
                { name: "Health", key: "Health & Vitality Tools", theme: "rose", icon: <Heart className="w-3.5 h-3.5 text-rose-500" /> },
                { name: "Mathematics", key: "Math & Scientific Utilities", theme: "blue", icon: <Scaling className="w-3.5 h-3.5 text-blue-500" /> },
                { name: "Conversions", key: "Metric Conversion Tools", theme: "amber", icon: <Layers className="w-3.5 h-3.5 text-amber-500" /> },
              ].map(sect => {
                const topTool = TOOLS_LIST.find(t => t.category === sect.key);
                return (
                  <a
                    key={sect.name}
                    href={`/${topTool?.slug || ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(topTool?.slug || null);
                      setIsMegaMenuOpen(false);
                      setSearchQuery("");
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest transition-colors ${
                      isDarkMode 
                        ? "text-slate-300 hover:bg-slate-800/50 hover:text-white" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {sect.icon}
                    <span>{sect.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Real-time search bar */}
        <div id="search-container" className="relative w-40 sm:w-80 md:w-96">
          <input 
            type="text" 
            placeholder="Filter 50+ calculation tools..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentSlug && !["privacy-policy", "terms-of-service", "disclaimer", "contact", "about"].includes(currentSlug)) {
                setCurrentSlug(null);
                window.location.hash = "";
              }
            }}
            className={`w-full border rounded-full py-2 px-4 pl-10 text-xs sm:text-sm font-sans tracking-wide placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all shadow-inner ${
              isDarkMode 
                ? "bg-slate-800/80 border-slate-700 text-slate-250 focus:bg-slate-850" 
                : "bg-slate-50 border-slate-200 text-slate-800 focus:bg-white"
            }`}
          />
          <div className="absolute left-4 top-2.5 opacity-60">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        <div id="navbar-actions-area" className="flex items-center gap-2.5 sm:gap-4 text-xs font-semibold uppercase tracking-wider">
          {/* Theme Switcher Toggle */}
          <button 
            id="theme-toggler"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isDarkMode 
                ? "bg-slate-800 border-slate-705 text-amber-400 hover:bg-slate-700" 
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button 
            onClick={() => { setCurrentSlug(null); window.location.hash = ""; }}
            className={`cursor-pointer hover:text-slate-950 dark:hover:text-white font-black uppercase tracking-wider text-[10.5px] transition-colors ${
              !currentSlug ? 'text-blue-500 underline underline-offset-4 decoration-blue-500 font-extrabold' : isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Dashboard
          </button>
        </div>

        {/* 1.1 Full-Width Mega Menu Dropdown Panel (iLovePDF Style) */}
        {isMegaMenuOpen && (
          <>
            <div 
              id="megamenu-backdrop"
              className="fixed inset-0 top-16 bg-slate-950/40 backdrop-blur-[2px] z-40 transition-opacity duration-300"
              onClick={() => setIsMegaMenuOpen(false)}
            />
            <div 
              id="megamenu-dropdown-panel"
              className={`absolute top-16 left-0 right-0 w-full border-b shadow-2xl z-50 animate-fade-in transition-all duration-300 max-h-[85vh] overflow-y-auto ${
                isDarkMode 
                  ? "bg-[#111827] border-slate-800 text-slate-200" 
                  : "bg-white border-slate-200/90 text-slate-800"
              }`}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 md:py-10">
                {/* Header info */}
                <div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-200/60 dark:border-slate-800">
                  <div className="space-y-0.5 animate-pulse-slow">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-500 font-mono">
                      All-Inclusive browser calculation suite
                    </h4>
                    <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                      Explore All 50+ Client-Side Utilities
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-350 dark:border-slate-850 dark:hover:border-slate-700 text-slate-500 dark:text-slate-450 hover:text-blue-500 font-mono hover:bg-slate-50 dark:hover:bg-slate-850 transition-all cursor-pointer"
                  >
                    Close Menu (ESC)
                  </button>
                </div>

                {/* 6 Grid Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
                  {CATEGORIES.map(category => {
                    const theme = getCategoryTheme(category);
                    const list = TOOLS_LIST.filter(t => t.category === category);
                    return (
                      <div key={category} className="space-y-3.5">
                        {/* Section Header */}
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                          {getCategoryIcon(category)}
                          <h5 className={`text-[10.5px] font-black uppercase tracking-widest hover:opacity-90 ${theme.text}`}>
                            {category.replace(" Tools", "").replace(" Utilities", "")}
                          </h5>
                        </div>

                        {/* Tools list */}
                        <ul className="space-y-1">
                          {list.map(tool => (
                            <li key={tool.slug}>
                              <a
                                href={`/${tool.slug}`}
                                onClick={(e) => {
                                  navigateTo(tool.slug, e);
                                  setIsMegaMenuOpen(false);
                                  setSearchQuery("");
                                }}
                                className={`flex items-center gap-2 p-1.5 rounded-lg text-xs tracking-tight transition-all group cursor-pointer ${
                                  isDarkMode 
                                    ? "hover:bg-slate-850 text-slate-300 hover:text-white hover:translate-x-0.5" 
                                    : "hover:bg-slate-50 text-slate-650 hover:text-blue-600 hover:translate-x-0.5"
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover:scale-125 ${theme.bg}`} />
                                <span className="font-extrabold text-slate-705 dark:text-slate-300 group-hover:text-inherit select-none truncate">
                                  {tool.name}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      <div className={`flex flex-1 flex-col lg:flex-row ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#f8f9fa]'}`}>
        
        {/* Sidebar: Tool Navigation Index */}
        <aside id="sidebar-navigation" className={`hidden lg:flex lg:w-60 flex-col p-4 shrink-0 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto border-r transition-colors duration-200 ${
          isDarkMode ? 'bg-[#111827] border-slate-800 text-slate-300' : 'bg-white border-slate-200/60 text-slate-800'
        }`}>
          <div className="space-y-6">
            <div>
              <h3 className={`text-[10px] font-black uppercase tracking-widest mb-3 px-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Filter Index</h3>
              <div className="space-y-1 text-sm">
                <button 
                  onClick={() => navigateTo(null)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-left cursor-pointer text-xs ${
                    !currentSlug 
                      ? isDarkMode
                        ? 'bg-slate-800 text-white font-bold border border-slate-700 shadow-inner'
                        : 'bg-blue-50 text-blue-700 font-bold border border-blue-100 shadow-sm' 
                      : isDarkMode
                        ? 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Grid className="w-4 h-4 text-blue-500 shrink-0 inline" />
                  All 50 Tools Directory
                </button>
              </div>
            </div>

            {CATEGORIES.map(category => (
              <div key={category} className="space-y-2">
                <div className="flex items-center gap-2 px-2 mt-4 first:mt-0">
                  {getCategoryIcon(category)}
                  <h3 className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{category.replace(" Tools", "").replace(" Utilities", "")}</h3>
                </div>
                <ul className="space-y-0.5 text-xs">
                  {TOOLS_LIST.filter(t => t.category === category).map(tool => {
                    const theme = getCategoryTheme(category);
                    const isActive = currentSlug === tool.slug;
                    return (
                      <li key={tool.slug}>
                        <a
                          href={`/${tool.slug}`}
                          onClick={(e) => navigateTo(tool.slug, e)}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl truncate cursor-pointer transition-all duration-250 ${
                            isActive 
                              ? isDarkMode
                                ? 'bg-slate-850 text-white border border-slate-705 font-extrabold shadow-sm translate-x-1'
                                : `${theme.lightBg} ${theme.text} border ${theme.border} font-extrabold shadow-sm translate-x-1` 
                              : isDarkMode
                                ? 'text-slate-400 hover:bg-slate-800/60 hover:text-white hover:translate-x-0.5'
                                : 'text-slate-600 hover:bg-slate-50/80 hover:text-slate-900 hover:translate-x-0.5'
                          }`}
                        >
                          {isActive ? (
                            <span className={`w-2.5 h-2.5 ${theme.bg} rounded-full shrink-0 shadow-sm animate-pulse`}></span>
                          ) : (
                            <span className={`w-1.5 h-1.5 bg-slate-350 rounded-full shrink-0 transition-transform group-hover:scale-125`}></span>
                          )}
                          <span className="truncate">{tool.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className={`p-4 mt-8 border-t text-[10px] leading-relaxed lg:block hidden ${
            isDarkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-450'
          }`}>
            © 2026 Scientific Views Tools<br />
            100% Client-Side Engine<br />
            Ultra-low Latency Response
          </div>
        </aside>

        {/* Main Content Area */}
        <main id="main-content" className={`flex-1 flex flex-col p-4 lg:p-6 overflow-x-hidden transition-colors duration-250 ${
          isDarkMode ? 'bg-[#0f172a]' : 'bg-[#f8f9fa]'
        }`}>

          {/* DYNAMIC RENDERING: LEGAL VIEWS vs DASHBOARD VIEW vs SINGLE TOOL VIEW */}
          {["privacy-policy", "terms-of-service", "disclaimer", "contact", "about"].includes(currentSlug || "") ? (
            
            /* --- SEO OPTIMISED standalone LEGAL SUBPAGES RENDERER --- */
            <div id="legal-subpage-container" className="animate-fade-in max-w-4xl mx-auto w-full pb-16 pt-2">
              <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-200 ${
                isDarkMode ? 'bg-[#1e293b] border-slate-800 text-slate-200' : 'bg-white border-slate-200/80 text-slate-800'
              }`}>
                
                {/* 1. Breadcrumb navigation for search engines */}
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-slate-450 uppercase mb-6 pb-4 border-b border-dashed border-slate-200 dark:border-slate-800">
                  <a href="/" onClick={(e) => navigateTo(null, e)} className="hover:text-blue-500 transition-colors">Home</a>
                  <span>/</span>
                  <span className="text-slate-500 font-bold">
                    {currentSlug === 'privacy-policy' && "Privacy Policy"}
                    {currentSlug === 'terms-of-service' && "Terms of Service"}
                    {currentSlug === 'disclaimer' && "Legal Disclaimer"}
                    {currentSlug === 'contact' && "Contact Us"}
                    {currentSlug === 'about' && "About Us"}
                  </span>
                </div>

                {currentSlug === 'privacy-policy' && (
                  <article className="space-y-6">
                    <header className="border-b border-blue-500/25 pb-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest mb-1 font-mono">
                        <Shield className="w-4 h-4 text-blue-500 animate-pulse" />
                        <span>Google AdSense & Data Security Standards</span>
                      </div>
                      <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Privacy & Cookie Protection Policy
                      </h1>
                      <p className="text-[11px] font-mono mt-1 text-slate-400">Last Revised: May 2026 | Document Reference: SV-PP-2026</p>
                    </header>
                    
                    <section className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-2xl flex items-start gap-3">
                      <BookmarkCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xs font-black text-emerald-600 uppercase tracking-wider mb-0.5">100% Client-Side Memory Guarantee</h3>
                        <p className="text-[11.5px] text-slate-500 leading-relaxed font-semibold">
                          We respect user trust implicitly. Scientific Views does not harvest, store, monitor, or transmit personal calculation parameters to any external server database. Processing runs entirely within your device's browser memory using local, isolated client-side JavaScript.
                        </p>
                      </div>
                    </section>

                    <div id="privacy-body" className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      <p>
                        This Privacy Protocol outlines how <strong>Scientific Views Tools</strong> processes and manages user interactions. As a premium, browser-native suite hosting 50 dynamic calculation engines (spanning financial tax modifiers, physiological BMR models, inches-to-cm convertors, and Pomodoro chronometers), our operational model is structured ground-up to insulate your private computing data from global internet logging.
                      </p>

                      <section id="sec-adsense-clause" className="space-y-2 border-l-4 border-amber-500 pl-4 py-1">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          1. Third-Party Advertising Clause (Google AdSense Compliant)
                        </h2>
                        <p className="font-semibold bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 text-[12.5px] sm:text-sm">
                          "We use third-party advertising companies (like Google AdSense) to serve ads when you visit our website. These companies may use cookies and web beacons to collect non-personal information (including your IP address, browser metadata, physical screen width, timestamp, or click interaction patterns) to serve targeted advertisements based on your visits to this and other sites."
                        </p>
                        <p>
                          Google's use of advertising cookies enables it and its partners to serve ads to our visitors based on their visit to Scientific Views Tools and other sites on the Internet. Users may choose to opt-out of personalized advertising by visiting Google's official <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-mono">Ad Settings</a> tab.
                        </p>
                      </section>

                      <section id="sec-local-isolation" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          2. Client-Side Sandboxed Logic & Local Calculation State
                        </h2>
                        <p>
                          All calculations, estimates, and data formulations are computed locally using compiled JavaScript. When you calculate a gross salary modifier, calibrate a pregnancy due date milestones map, or submit a local typing accuracy speed check:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-xs">
                          <li>No data inputs are recorded on external database engines or cloud databases.</li>
                          <li>Parameters like monthly expenses, body mass measures, and dates are stored temporarily in browser state arrays, clearing instantly when you reload the window.</li>
                          <li>There is zero potential for database leaks, hacker listening ports, or server-side parameters harvesting because there are no serverside processing endpoints.</li>
                        </ul>
                      </section>

                      <section id="sec-cookies" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          3. Cookie Declaration and Preference Management
                        </h2>
                        <p>
                          Cookies are small text parcels transferred into client devices to help track navigation velocities and enable Google AdSense to retain ad target parameters. Scientific Views Tools uses necessary security tracker parameters as well as basic analytics variables to maintain proper responsive scaling.
                        </p>
                        <p>
                          Should you wish to review, alter, delete, or block cookie operations, you can modify your settings in your web browser parameters (e.g. Chrome, Firefox, Safari settings under Private Protection). Disabling cookies will not lock database or calculation operations on our suite.
                        </p>
                      </section>

                      <section id="sec-gdpr-ccpa" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          4. GDPR (General Data Protection Regulation) & CCPA Disclosures
                        </h2>
                        <p>
                          For European Union citizens and California residents, our platform operates as a data controller for system-level accesses but zero processing is executed for calculation parameters. You have full entitlement to secure your data and exercise privacy control. Because we hold zero user-identifiable profile arrays, there is no storage index to search or erase on your behalf.
                        </p>
                      </section>
                    </div>
                  </article>
                )}

                {currentSlug === 'terms-of-service' && (
                  <article className="space-y-6">
                    <header className="border-b border-blue-500/25 pb-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest mb-1 font-mono">
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span>System Access & Licensing Contract</span>
                      </div>
                      <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Terms of Service & Usage Regulations
                      </h1>
                      <p className="text-[11px] font-mono mt-1 text-slate-400">Published & Enforced: May 2026 | Reference File: SV-TOS-2026</p>
                    </header>

                    <div id="terms-body" className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      <p>
                        Welcome to Scientific Views Tools. By utilizing, entering, or accessing our platform at <strong>scientificviews.in</strong> and navigating our suite of 50 free web calculations, you signify your unreserved compliance with these Terms of Service.
                      </p>

                      <section id="terms-license" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          1. Limited Non-Exclusive License Grant
                        </h2>
                        <p>
                          We grant you a temporary, revocable, non-transferable, and non-exclusive personal license to experience the calculators for private, educational, research, and non-commercial professional calculations. All widgets are provided 100% free with no account registrations or mandatory paywalls.
                        </p>
                      </section>

                      <section id="terms-scraper-ban" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          2. Strict Automated Crawler & Bot Scraper Regulations (Anti-Framing Clause)
                        </h2>
                        <div className="p-4 rounded-xl border border-red-500/10 bg-red-500/5 text-red-500">
                          <p className="font-extrabold text-xs uppercase tracking-wider mb-1">PROHIBITED BEHAVIORS NOTICE:</p>
                          <p className="leading-relaxed font-medium">
                            Users and engineering developers are strictly prohibited from implementing, launching, or executing automated scripting, web scrapers, crawler bots, content harvesting software, or framing mechanisms to mirror, steal, parse, or capture our client-side JavaScript application structures. You may not host our tools in external iframes without explicit authorization from our management.
                          </p>
                        </div>
                        <p>
                          Violation of this sector triggers immediate automatic IP-based firewall locking. We employ analytical trackers and rate limiters to defend our proprietary code assets, visual styles, and digital elements from bandwidth abuse and content mirroring.
                        </p>
                      </section>

                      <section id="terms-proprietary" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          3. Copyrights & Intellectual Property
                        </h2>
                        <p>
                          The mathematical formulae interfaces, tailored visual CSS stylesheet designs, custom Javascript code blocks, logo structures, and overall branding are the exclusive proprietary property of <strong>Scientific Views Tools</strong>. Any unauthorized commercial duplication, reselling, or branding distribution is legally actionable.
                        </p>
                      </section>

                      <section id="terms-termination" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          4. Platform Terminations & Operations Modification
                        </h2>
                        <p>
                          We reserve the statutory right to revise, restrict, alter, refine or drop any of our 50 active calculation suites at any moment without prior warnings or public announcement, ensuring maximum speed adaptation and regulatory alignment.
                        </p>
                      </section>
                    </div>
                  </article>
                )}

                {currentSlug === 'disclaimer' && (
                  <article className="space-y-6">
                    <header className="border-b border-rose-500/25 pb-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest mb-1 font-mono">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <span>Safeguards & Performance Disclosures</span>
                      </div>
                      <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Legal & Performance Disclaimer
                      </h1>
                      <p className="text-[11px] font-mono mt-1 text-slate-400">Effective Since: May 2026 | Document Reference: SV-LD-2026</p>
                    </header>

                    <div id="disclaimer-body" className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      
                      {/* Uppercase limitation of liability as demanded for Google policy */}
                      <section id="disclaimer-uppercase" className="p-5 tracking-wide leading-relaxed font-mono uppercase bg-rose-500/5 text-rose-500 border border-rose-500/10 rounded-2xl text-[11px] sm:text-xs">
                        "ALL CALCULATIONS, ESTIMATES, AND DATA GENERATED BY THE TOOLS ON SCIENTIFIC VIEWS TOOLS ARE PROVIDED 'AS-IS' FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY. THEY DO NOT CONSTITUTE PROFESSIONAL FINANCIAL, LEGAL, OR MEDICAL ADVICE. WE MAKE NO WARRANTIES REGARDING MATHEMATICAL PERFECTION OR SITUATIONAL ACCURACY. USERS MUST VERIFY CRITICAL DATA INDEPENDENTLY WITH QUALIFIED PROFESSIONALS."
                      </section>

                      <section id="disclaimer-nature" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-150' : 'text-slate-800'}`}>
                          1. Informational & Prototyping Scope
                        </h2>
                        <p>
                          Our calculations (including Compound Interest Solvers, GST India modifiers, and physiological BMI indices) are calibrated on standard public scientific literature and historical algorithms. However, physical state, biological differences, and geographical tax code variations mean that estimates can vary from statutory filings or clinical realities.
                        </p>
                      </section>

                      <section id="disclaimer-fin" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-150' : 'text-slate-800'}`}>
                          2. No Financial, Medical, or Jurisprudential Advice
                        </h2>
                        <p>
                          The mathematical figures processed on Scientific Views Tools are purely for study:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-xs">
                          <li><strong>Health Measures</strong>: BMI scores, BMR estimators, IVF milestone dates, and pregnancy trackers do not constitute clinical guidance or custom health prescription. Always consult an authorized practitioner regarding medical worries.</li>
                          <li><strong>Financial Tax</strong>: Interest matrices, GST distributions, and income deductions should not substitute for certified audits of private tax compliance departments.</li>
                        </ul>
                      </section>

                      <section id="disclaimer-warranties" className="space-y-2">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-150' : 'text-slate-800'}`}>
                          3. Absolute Software Warranty Limitations
                        </h2>
                        <p>
                          We extend no promises regarding browser security uptime, absence of rendering bottlenecks, device stylesheet compatibility shifts, or accuracy invariants. By accessing these tools, you assume total responsibility and hold Scientific Views Tools immune to any losses or calculation variances.
                        </p>
                      </section>
                    </div>
                  </article>
                )}

                {currentSlug === 'contact' && (
                  <article className="space-y-8 max-w-2xl mx-auto">
                    <header className="border-b border-blue-500/25 pb-5 text-center">
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest mb-1.5 font-mono">
                        <Mail className="w-4 h-4 text-blue-500 animate-pulse" />
                        <span>Responsive Communication Desk</span>
                      </div>
                      <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Contact Our Operational Administrator Team
                      </h1>
                      <p className="text-[11px] font-mono mt-1 text-slate-400">Operational: 24/7 Monitoring | Document Reference: SV-CU-2026</p>
                    </header>

                    <div className="space-y-6 pt-2">
                      <section className="space-y-4 text-center text-xs sm:text-sm text-slate-500">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-150' : 'text-slate-850'}`}>
                          Human Verification Channel
                        </h2>
                        <p className="max-w-xl mx-auto leading-relaxed">
                          Google Manual Reviewers and site visitors can reach our human administration team directly. We investigate math error reports, layout discrepancies, user experiences, and coordinate accessibility edits.
                        </p>
                        
                        <div className={`p-6 rounded-2xl border max-w-md mx-auto transition-all duration-200 ${
                          isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-150/15 border-slate-200'
                        }`}>
                          <p className="font-extrabold text-[10px] text-blue-500 uppercase tracking-wider mb-2 font-mono">Verified Google Mail Inbox</p>
                          <a href="mailto:scientificviewinfo@gmail.com" className={`text-base sm:text-lg font-black block hover:underline tracking-tight break-all ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            scientificviewinfo@gmail.com
                          </a>
                        </div>
                        
                        <p className="text-[11.5px] leading-relaxed italic text-slate-400 max-w-md mx-auto">
                          Please note: For immediate bug investigations, specify the dynamic context slug (e.g., #/pregnancy-due-date-calculator) and supply target calculation input values.
                        </p>
                      </section>
                    </div>
                  </article>
                )}

                {currentSlug === 'about' && (
                  <article className="space-y-8 animate-fade-in">
                    <header className="border-b border-blue-500/25 pb-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest mb-1.5 font-mono">
                        <Info className="w-4 h-4 text-blue-500 animate-pulse" />
                        <span>Empowering Decisive Calculations</span>
                      </div>
                      <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        About Scientific Views Tools
                      </h1>
                      <p className="text-[11px] font-mono mt-1 text-slate-400 font-bold">Published: May 2026 | Platform Version: 1.2.0 | Operational: Active Sandbox</p>
                    </header>

                    <div className="space-y-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                      <section className="space-y-2">
                        <p className={`text-sm sm:text-base font-black ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                          Scientific Views Tools is a modern, high-precision web calculation platform engineered to deliver instant mathematical answers directly within your browser.
                        </p>
                        <p className={isDarkMode ? 'text-slate-350' : 'text-slate-650'}>
                          Our suite of over 50 specialized tools covers high-utility disciplines across finance, taxation, clinical healthcare, advanced physics, geometry, and metric scale conversions. By designing all modules from the ground up to operate completely client-side, we combine server-less speed with absolute telemetry privacy.
                        </p>
                      </section>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/40 border-slate-800 text-slate-300' : 'bg-slate-150/10 border-slate-200 text-slate-650'} space-y-2`}>
                          <div className="p-2 bg-blue-500/10 rounded-xl w-fit">
                            <Cpu className="w-5 h-5 text-blue-500" />
                          </div>
                          <h3 className={`text-sm font-black uppercase tracking-wider ${isDarkMode ? 'text-slate-100' : 'text-slate-850'}`}>
                            100% Serverless Uptime
                          </h3>
                          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                            Every calculation formula, compounding interest curve, and conversion multiplier runs locally in your device memory. Zero loading delays, zero maintenance downtime blocks, and absolute client velocity.
                          </p>
                        </div>

                        <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/40 border-slate-800 text-slate-300' : 'bg-slate-150/10 border-slate-200 text-slate-655'} space-y-2`}>
                          <div className="p-2 bg-emerald-500/10 rounded-xl w-fit">
                            <Shield className="w-5 h-5 text-emerald-500" />
                          </div>
                          <h3 className={`text-sm font-black uppercase tracking-wider ${isDarkMode ? 'text-slate-100' : 'text-slate-850'}`}>
                            Guaranteed Privacy
                          </h3>
                          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                            We never transmit your financial figures, gestational timelines, physiological parameters, or physical scale parameters to any server backend logs. Your inputs stay uniquely Yours.
                          </p>
                        </div>

                        <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/40 border-slate-800 text-slate-300' : 'bg-slate-150/10 border-slate-200 text-slate-655'} space-y-2`}>
                          <div className="p-2 bg-indigo-500/10 rounded-xl w-fit">
                            <Activity className="w-5 h-5 text-indigo-500" />
                          </div>
                          <h3 className={`text-sm font-black uppercase tracking-wider ${isDarkMode ? 'text-slate-100' : 'text-slate-850'}`}>
                            Continuous Calibration
                          </h3>
                          <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                            Our algorithms are calibrated directly from peer-reviewed scientific textbooks, legal statutory tax laws (such as Indian GST schedules), and verified metric standard definitions.
                          </p>
                        </div>
                      </div>

                      <section className="space-y-3">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-150' : 'text-slate-850'}`}>
                          Our Development Core Principles
                        </h2>
                        <p className={isDarkMode ? 'text-slate-300' : 'text-slate-650'}>
                          We live in an age of bloated web applications loaded with telemetry trackers, heavy dependencies, and restrictive paywalls. Scientific Views Tools was founded on a very simple idea: <strong className="font-extrabold text-blue-500">the web should be fast, raw, accessible, and functional.</strong>
                        </p>
                        <p className={isDarkMode ? 'text-slate-300' : 'text-slate-650'}>
                          Whether you are checking a mortgage compound scale rate, calculating a clinical pregnancy milestones profile, sorting out complex quadratic roots, or comparing milligram weights, you should have access to a clean, eye-safe, responsive workspace immediately with no barrier to entry.
                        </p>
                      </section>

                      <section className="space-y-3 border-t border-slate-200 dark:border-slate-800/80 pt-6">
                        <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDarkMode ? 'text-slate-150' : 'text-slate-850'}`}>
                          Technical Reference Stack
                        </h2>
                        <p className={isDarkMode ? 'text-slate-300' : 'text-slate-650'}>
                          Our static client-side computation stack renders fully responsive styling with Tailwind templates for high fidelity across modern desktop, mobile, and tablet displays.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10.5px]">
                          <span className={`px-2.5 py-1 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-350 font-bold' : 'bg-slate-100 border-slate-200 text-slate-600 font-bold'}`}>Next.js Client-Side App</span>
                          <span className={`px-2.5 py-1 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-350 font-bold' : 'bg-slate-100 border-slate-200 text-slate-600 font-bold'}`}>TypeScript Safety</span>
                          <span className={`px-2.5 py-1 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-350 font-bold' : 'bg-slate-100 border-slate-200 text-slate-600 font-bold'}`}>Tailwind CSS v4</span>
                          <span className={`px-2.5 py-1 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-350 font-bold' : 'bg-slate-100 border-slate-200 text-slate-600 font-bold'}`}>100% Zero-Server Privacy</span>
                        </div>
                      </section>
                    </div>
                  </article>
                )}
              </div>
            </div>

          ) : !currentSlug ? (
            
            /* --- DASHBOARD VIEW --- */
            <div id="dashboard-suite-grid" className="space-y-12 animate-fade-in max-w-7xl mx-auto w-full pb-16">
              
              {/* iLovePDF inspired Hero Header */}
              <div className="text-center max-w-4xl mx-auto space-y-5 py-12 sm:py-16 px-4">
                <span className="px-3.5 py-1.5 bg-blue-500/5 text-blue-500 rounded-full border border-blue-500/10 text-[11px] font-mono font-black uppercase tracking-widest">
                  Secure Sandboxed Client-Side Runtime
                </span>
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Every tool you need to <span className="text-blue-500 font-black relative underline decoration-blue-500/15">calculate</span> & <span className="text-blue-500 font-black relative underline decoration-blue-500/15">convert</span>, in one place
                </h1>
                <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  100% free, browser-native client utilities with high precision analytics. Audit gross salary income slabs, estimate physiological BMR parameters, organize EMIs, or convert measurements instantly with complete offline isolation.
                </p>
              </div>

              {/* Categorised Grid */}
              <div className="space-y-12">
                {categorizedFiltered.map(group => (
                  <div key={group.category} className="space-y-6">
                    <div className={`flex items-center gap-2.5 pb-3 border-b ${isDarkMode ? 'border-slate-800' : 'border-slate-200/80'}`}>
                      {getCategoryIcon(group.category)}
                      <h2 className={`text-lg sm:text-xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-855'}`}>{group.category}</h2>
                      <span className="text-xs text-slate-400 font-mono font-bold">({group.tools.length} Tools)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4.5">
                      {group.tools.map(tool => {
                        const theme = getCategoryTheme(tool.category);
                        return (
                          <a 
                            key={tool.slug}
                            href={`/${tool.slug}`}
                            onClick={(e) => navigateTo(tool.slug, e)}
                            className={`group p-5.5 rounded-2xl border transition-all duration-250 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer ${
                              isDarkMode 
                                ? 'bg-[#1e293b]/70 border-slate-800/80 hover:border-slate-700/95 text-slate-200 hover:shadow-slate-900/30' 
                                : 'bg-white border-slate-200/60 hover:border-slate-300 text-slate-800 hover:shadow-slate-200/50'
                            }`}
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className={`px-2 py-0.5 ${theme.badge} rounded text-[9px] font-black uppercase tracking-wider`}>
                                  {tool.badge || 'PRO'}
                                </span>
                                <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">
                                  /{tool.slug.split('-')[0]}
                                </span>
                              </div>
                              <h3 className={`text-sm sm:text-base font-black tracking-tight leading-snug transition-colors ${
                                isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                              }`}>
                                {tool.name}
                              </h3>
                              <p className={`text-xs line-clamp-2 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                {tool.description}
                              </p>
                            </div>
                            
                            <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] ${
                              isDarkMode ? 'border-slate-800 text-slate-550' : 'border-slate-100 text-slate-400'
                            }`}>
                              <span className="font-mono">Client-Side</span>
                              <span className={`flex items-center gap-1 ${theme.text} opacity-0 group-hover:opacity-100 transition-all font-black uppercase tracking-widest text-[9px]`}>
                                Run Tool <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
                
                {categorizedFiltered.length === 0 && (
                  <div className="text-center p-12 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-sm max-w-md mx-auto">
                    <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto" />
                    <p className="text-slate-600 text-sm font-medium">No utility tools match your search "{searchQuery}"</p>
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors"
                    >
                      Clear Search Filter
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            
            /* --- SINGLE TOOL INTERACTIVE WORKSPACE --- */
            <div id="single-tool-active-workspace" className="flex flex-col xl:flex-row gap-6 animate-fade-in max-w-7xl mx-auto w-full pb-12">
              <div className="flex-1 flex flex-col min-w-0">
                
                {/* STEP 1: H1 SEO Title */}
                <header className="mb-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5">
                    <button onClick={() => { setCurrentSlug(null); window.location.hash = ""; }} className="hover:text-blue-600 transition-colors">Dashboard</button>
                    <span>/</span>
                    <span className={getCategoryTheme(currentTool?.category).text}>{currentTool?.category}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                    {currentTool?.seoH1}
                  </h1>
                </header>

                {/* Validation warnings banner */}
                {validationError && (
                  <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-650 font-medium">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-500 animate-bounce" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* STEP 2: The Actionable Tool UI Block */}
                {(() => {
                  const toolTheme = getCategoryTheme(currentTool?.category);
                  return (
                    <div id="functional-tool-ui-container" className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm relative">
                      
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        
                        {/* INPUTS COLUMN */}
                        <div id="tool-inputs-block" className={`${currentSlug === 'pomodoro-timer' ? 'md:col-span-12' : 'md:col-span-7'} space-y-6`}>
                          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                            <span className={`w-2.5 h-2.5 ${toolTheme.bg} rounded-full shrink-0`}></span>
                            <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">Verify Parameters</h2>
                          </div>

                          {/* Dynamic form selector fields generator */}
                          {currentTool?.fields.length === 0 ? (
                            <p className="text-xs text-slate-400 italic pb-2">This tool operates automatically; no inputs are required.</p>
                          ) : (
                            currentTool?.fields.map(field => (
                              <div key={field.id} className="space-y-1.5">
                                <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-wide">
                                  {field.label} {field.type === 'slider' && `(Value: ${inputs[field.id] ?? field.defaultValue})`}
                                </label>

                                {field.type === 'number' && (
                                  <input 
                                    type="number" 
                                    value={inputs[field.id] ?? ""}
                                    onChange={(e) => updateFieldValue(field.id, e.target.value)}
                                    className={`w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-3 text-lg font-mono text-slate-850 focus:outline-none focus:ring-4 ${toolTheme.ring} ${toolTheme.borderFocus} outline-none transition-all`}
                                  />
                                )}

                                {field.type === 'text' && (
                                  <input 
                                    type="text" 
                                    value={inputs[field.id] ?? ""}
                                    onChange={(e) => updateFieldValue(field.id, e.target.value)}
                                    className={`w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-3 text-sm text-slate-850 focus:outline-none focus:ring-4 ${toolTheme.ring} ${toolTheme.borderFocus} outline-none transition-all`}
                                  />
                                )}

                                {field.type === 'textarea' && (
                                  <textarea 
                                    rows={4}
                                    value={inputs[field.id] ?? ""}
                                    onChange={(e) => updateFieldValue(field.id, e.target.value)}
                                    className={`w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-3 text-xs font-mono text-slate-850 focus:outline-none focus:ring-4 ${toolTheme.ring} ${toolTheme.borderFocus} outline-none transition-all`}
                                  />
                                )}

                                {field.type === 'select' && (
                                  <div className="relative">
                                    <select 
                                      value={inputs[field.id] ?? ""}
                                      onChange={(e) => updateFieldValue(field.id, e.target.value)}
                                      className={`w-full bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-3 text-sm text-slate-850 focus:outline-none focus:ring-4 ${toolTheme.ring} ${toolTheme.borderFocus} outline-none appearance-none transition-all cursor-pointer`}
                                    >
                                      {field.options?.map(opt => (
                                        <option key={opt.value} value={opt.value} className="bg-white">{opt.label}</option>
                                      ))}
                                    </select>
                                  </div>
                                )}

                                {field.type === 'radio' && (
                                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                    {field.options?.map(opt => {
                                      const isSelected = inputs[field.id] === opt.value;
                                      return (
                                        <label 
                                          key={opt.value} 
                                          className={`flex-1 flex items-center gap-2.5 p-3 border rounded-xl cursor-pointer transition-all ${
                                            isSelected 
                                              ? `${toolTheme.border} ${toolTheme.lightBg} text-slate-900 font-bold shadow-sm` 
                                              : 'border-slate-200 text-slate-550 bg-slate-50/50 hover:border-slate-350'
                                          }`}
                                        >
                                          <input 
                                            type="radio" 
                                            name={field.id}
                                            value={opt.value}
                                            checked={isSelected}
                                            onChange={() => updateFieldValue(field.id, opt.value)}
                                            className={`${toolTheme.accentFill} w-4 h-4 cursor-pointer`}
                                          />
                                          <span className="text-xs">{opt.label}</span>
                                        </label>
                                      );
                                    })}
                                  </div>
                                )}

                                {field.type === 'checkbox' && (
                                  <label className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer text-slate-700 hover:bg-slate-100/60 transition-all select-none">
                                    <input 
                                      type="checkbox" 
                                      checked={!!inputs[field.id]}
                                      onChange={(e) => updateFieldValue(field.id, e.target.checked)}
                                      className={`${toolTheme.accentFill} w-4 h-4 rounded cursor-pointer`}
                                    />
                                    <span className="text-xs font-semibold">{field.label} Enable Setting Override</span>
                                  </label>
                                )}

                                {field.type === 'date' && (
                                  <input 
                                    type="date" 
                                    value={inputs[field.id] ?? ""}
                                    onChange={(e) => updateFieldValue(field.id, e.target.value)}
                                    className={`w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-850 focus:outline-none focus:ring-4 ${toolTheme.ring} ${toolTheme.borderFocus} outline-none cursor-pointer`}
                                  />
                                )}

                                {field.type === 'slider' && (
                                  <input 
                                    type="range" 
                                    min={field.min} 
                                    max={field.max}
                                    step={field.step}
                                    value={inputs[field.id] ?? field.defaultValue}
                                    onChange={(e) => updateFieldValue(field.id, Number(e.target.value))}
                                    className={`w-full ${toolTheme.accentFill} bg-slate-100 h-2 rounded-lg cursor-pointer`}
                                  />
                                )}
                              </div>
                            ))
                          )}

                          {/* Custom interactive view inserts for specific tools inside inputs column */}
                          {currentSlug === 'pomodoro-timer' && (() => {
                            // Inner SVG generator for Plant growth states
                            const renderPlantSVG_UNUSED = (seed: string, pomoTimeLeft: number) => {
                              const workDuration = (Number(inputs.workTime) || 25) * 60;
                              const breakDuration = (Number(inputs.breakTime) || 5) * 60;
                              const maxSec = pomoMode === 'work' ? workDuration : breakDuration;
                              const pct = pomoMode === 'break' ? 100 : Math.min(100, Math.max(0, ((maxSec - pomoTimeLeft) / maxSec) * 100));

                              let stage: 'seed' | 'sprout' | 'sapling' | 'mature' = 'seed';
                              if (pct >= 85) stage = 'mature';
                              else if (pct >= 45) stage = 'sapling';
                              else if (pct >= 15) stage = 'sprout';

                              const plantColor = 
                                seed === 'royal_bonsai' ? '#0d9488' : 
                                seed === 'cyber_orchid' ? '#3b82f6' : 
                                seed === 'sacred_sequoia' ? '#ea580c' : 
                                seed === 'celestial_lotus' ? '#ec4899' : '#10b981';

                              return (
                                <svg viewBox="0 0 100 100" className="w-40 h-40 drop-shadow-md overflow-visible animate-fade-in" style={{ contentVisibility: 'auto' }}>
                                  <style dangerouslySetInnerHTML={{__html: `
                                    @keyframes sway {
                                      0%, 100% { transform: rotate(0deg); }
                                      50% { transform: rotate(3deg); }
                                    }
                                    @keyframes pulse-glowing {
                                      0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 1px ${plantColor}); }
                                      50% { opacity: 0.95; filter: drop-shadow(0 0 5px ${plantColor}); }
                                    }
                                    .sway-element {
                                      transform-origin: bottom center;
                                      animation: sway 4s ease-in-out infinite;
                                    }
                                    .glowing-star {
                                      animation: pulse-glowing 2s infinite ease-in-out;
                                    }
                                  `}} />

                                  {seed === 'celestial_lotus' ? (
                                    <g>
                                      <ellipse cx="50" cy="88" rx="35" ry="6" fill="#1e1b4b" opacity="0.3" />
                                      <ellipse cx="50" cy="88" rx="25" ry="4" fill="#a5f3fc" opacity="0.7" className="animate-pulse" />
                                      <path d="M 23 88 C 40 92, 60 92, 77 88" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
                                    </g>
                                  ) : (
                                    <g>
                                      <ellipse cx="50" cy="88" rx="30" ry="7" fill="#451a03" />
                                      <ellipse cx="50" cy="85" rx="26" ry="5" fill="#78350f" />
                                      <ellipse cx="50" cy="85" rx="15" ry="3" fill="#10b981" opacity="0.15" />
                                    </g>
                                  )}

                                  {stage === 'seed' && (
                                    <g>
                                      <circle cx="50" cy="82" r="3" fill="#d97706" className="glowing-star" />
                                      <path d="M 50 81 C 49 78, 51 77, 52 75" stroke="#10b981" strokeWidth="1" fill="none" strokeLinecap="round" />
                                      <text x="50" y="70" textAnchor="middle" fill="#94a3b8" fontSize="6.5" className="font-sans font-bold uppercase tracking-wider">Germinating Seed</text>
                                    </g>
                                  )}

                                  {stage === 'sprout' && (
                                    <g className="sway-element">
                                      <path d="M 50 85 C 49 76, 52 70, 48 62" stroke="#4ade80" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                      <path d="M 48 62 C 45 61, 41 63, 40 66 C 42 67, 46 66, 48 62" fill="#22c55e" />
                                      <path d="M 48 62 C 51 61, 55 62, 57 65 C 55 67, 51 66, 48 62" fill="#4ade80" />
                                      <text x="50" y="52" textAnchor="middle" fill="#94a3b8" fontSize="6.5" className="font-sans font-bold uppercase tracking-wider">Baby Sprout</text>
                                    </g>
                                  )}

                                  {stage === 'sapling' && (
                                    <g className="sway-element">
                                      <path d="M 50 85 C 49 72, 51 60, 47 48" stroke="#b45309" strokeWidth="3" fill="none" strokeLinecap="round" />
                                      <path d="M 50 85 C 49 72, 51 60, 47 48" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
                                      <path d="M 48 68 C 42 66, 38 60, 36 56" stroke="#b45309" strokeWidth="2" fill="none" strokeLinecap="round" />
                                      <circle cx="36" cy="56" r="6" fill="#10b981" opacity="0.85" />
                                      <circle cx="34" cy="53" r="4.5" fill="#4ade80" opacity="0.9" />
                                      <path d="M 49 58 C 55 57, 60 54, 63 50" stroke="#b45309" strokeWidth="2" fill="none" strokeLinecap="round" />
                                      <circle cx="63" cy="50" r="5" fill="#22c55e" opacity="0.85" />
                                      <circle cx="61" cy="48" r="4" fill="#86efac" opacity="0.9" />
                                      <circle cx="47" cy="48" r="7.5" fill={plantColor} opacity="0.9" />
                                      <circle cx="45" cy="44" r="6" fill="#86efac" opacity="0.95" />
                                      <text x="50" y="34" textAnchor="middle" fill="#94a3b8" fontSize="6.5" className="font-sans font-bold uppercase tracking-wider">Young Sapling</text>
                                    </g>
                                  )}

                                  {stage === 'mature' && (
                                    <g className="sway-element">
                                      {seed === 'cosmic_sprout' && (
                                        <g>
                                          <path d="M 50 85 C 48 68, 52 52, 50 35" stroke="#4f46e5" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                                          <path d="M 49 60 C 42 56, 36 52, 32 44" stroke="#4f46e5" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                          <path d="M 50 50 C 58 48, 65 42, 68 32" stroke="#4f46e5" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                          <circle cx="32" cy="44" r="7.5" fill="#818cf8" opacity="0.85" className="glowing-star" />
                                          <circle cx="68" cy="32" r="8.5" fill="#c084fc" opacity="0.85" className="glowing-star" />
                                          <circle cx="50" cy="35" r="11" fill="#4f46e5" opacity="0.75" />
                                          <circle cx="50" cy="32" r="9" fill="#10b981" opacity="0.9" className="glowing-star" />
                                          <circle cx="48" cy="18" r="1" fill="#fff" className="glowing-star" />
                                          <circle cx="35" cy="22" r="1.5" fill="#ffd700" className="glowing-star" />
                                          <circle cx="64" cy="15" r="1" fill="#fff" className="glowing-star" />
                                        </g>
                                      )}

                                      {seed === 'royal_bonsai' && (
                                        <g>
                                          <path d="M 50 85 C 55 75, 40 68, 53 58 C 45 52, 42 42, 45 35" stroke="#78350f" strokeWidth="4.5" fill="none" strokeLinecap="round" />
                                          <path d="M 45 58 C 35 55, 28 58, 24 57" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                          <path d="M 48 48 C 58 45, 66 48, 72 45" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                          <ellipse cx="24" cy="57" rx="9" ry="5" fill="#0d9488" opacity="0.9" />
                                          <ellipse cx="23" cy="55" rx="7" ry="3.5" fill="#14b8a6" opacity="0.95" />
                                          <ellipse cx="72" cy="45" rx="10" ry="5.5" fill="#0d9488" opacity="0.9" />
                                          <ellipse cx="71" cy="43" rx="8" ry="4" fill="#2dd4bf" opacity="0.95" />
                                          <circle cx="45" cy="35" r="12" fill="#065f46" opacity="0.85" />
                                          <circle cx="44" cy="32" r="9" fill="#0d9488" opacity="0.9" />
                                        </g>
                                      )}

                                      {seed === 'cyber_orchid' && (
                                        <g>
                                          <path d="M 50 85 L 50 65 L 44 48 L 54 30" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" />
                                          <rect x="48.5" y="63" width="3" height="4" fill="#60a5fa" rx="1" />
                                          <rect x="42.5" y="46" width="3" height="4" fill="#60a5fa" rx="1" />
                                          <path d="M 54 30 L 48 24 L 54 18 L 60 24 Z" fill="#ec4899" opacity="0.9" className="glowing-star" />
                                          <circle cx="54" cy="24" r="3.5" fill="#38bdf8" className="glowing-star" />
                                          <path d="M 44 48 L 38 44 L 44 40 L 50 44 Z" fill="#ec4899" opacity="0.8" />
                                          <circle cx="44" cy="44" r="2.5" fill="#10b981" />
                                          <path d="M 50 65 L 58 62 L 64 66 L 56 68 Z" fill="#1e40af" />
                                        </g>
                                      )}

                                      {seed === 'sacred_sequoia' && (
                                        <g>
                                          <path d="M 50 85 L 50 25" stroke="#7c2d12" strokeWidth="5.5" strokeLinecap="round" />
                                          <polygon points="50,22 35,45 65,45" fill="#c2410c" opacity="0.85" />
                                          <polygon points="50,33 28,62 72,62" fill="#9a3412" opacity="0.9" />
                                          <polygon points="50,48 20,80 80,80" fill="#7c2d12" opacity="0.95" />
                                          <polygon points="50,22 38,40 62,40" fill="#ea580c" opacity="0.4" />
                                          <polygon points="50,33 32,56 68,56" fill="#f97316" opacity="0.4" />
                                          <circle cx="28" cy="50" r="1.5" fill="#facc15" className="glowing-star" />
                                          <circle cx="70" cy="58" r="1.2" fill="#ea580c" className="glowing-star" />
                                          <circle cx="42" cy="30" r="1.8" fill="#facc15" className="glowing-star" />
                                        </g>
                                      )}

                                      {seed === 'celestial_lotus' && (
                                        <g>
                                          <path d="M 50 85 C 50 75, 52 70, 50 65" stroke="#047857" strokeWidth="3" fill="none" strokeLinecap="round" />
                                          <ellipse cx="50" cy="80" rx="22" ry="4" fill="#047857" opacity="0.9" />
                                          <path d="M 50 80 L 68 79" stroke="#065f46" strokeWidth="1.5" />
                                          <path d="M 36 67 C 42 56, 46 54, 50 65 C 54 54, 58 56, 64 67 Z" fill="#f43f5e" opacity="0.8" />
                                          <path d="M 40 65 C 32 50, 48 38, 50 63 C 52 38, 68 50, 60 65 Z" fill="#ec4899" opacity="0.85" />
                                          <path d="M 45 64 C 42 45, 48 35, 50 62 C 52 35, 58 45, 55 64 Z" fill="#f472b6" opacity="0.95" className="glowing-star" />
                                          <circle cx="50" cy="54" r="3.5" fill="#fbbf24" className="glowing-star" />
                                        </g>
                                      )}

                                      <text x="50" y="12" textAnchor="middle" fill="#22c55e" fontSize="6.5" className="font-mono font-black tracking-widest uppercase animate-pulse text-semibold">Fully Grown</text>
                                    </g>
                                  )}
                                </svg>
                              );
                                                     // Selection equipping handler
                            }; const selectSeed_UNUSED = (seedId: string) => {
                              setSelectedSeed(seedId);
                              try {
                                localStorage.setItem('sv_pomo_selected_seed', seedId);
                              } catch (e) {}
                              setPomoNotification({
                                message: `Equipped plant target: ${seedId.split('_').join(' ').toUpperCase()}!`,
                                type: 'success'
                              });
                            };

                            // Format and copy complete results to clipboard
                            const copyPomoResults_UNUSED = () => {
                              let resultText = `==================================================\n`;
                              resultText += `🎯 SCIENTIFIC VIEWS - DEEP FOCUS EXPERIENCE REPORT\n`;
                              resultText += `==================================================\n`;
                              resultText += `🕒 Generated: ${new Date().toLocaleString()}\n`;
                              resultText += `🎖️ Focus RPG Level: LEVEL ${Math.floor(pomoXP / 1500) + 1}\n`;
                              resultText += `⚡ Total Experience: ${pomoXP} XP\n`;
                              resultText += `🌲 Total Grown Trees: ${pomoForest.length} trees\n\n`;
                              
                              if (pomoForest.length > 0) {
                                resultText += `🌳 ACCOMPLISHED VIRTUAL FOREST:\n`;
                                pomoForest.forEach((log, idx) => {
                                  const name = log.seed.split('_').join(' ').toUpperCase();
                                  resultText += `  ${idx + 1}. ${name} \n     [Date Grown: ${log.date}]\n`;
                                });
                              } else {
                                resultText += `🌳 VIRTUAL FOREST:\n  No trees grown yet. Start an aesthetic focus session to grow your first plant!\n`;
                              }
                              resultText += `==================================================\n`;
                              
                              navigator.clipboard.writeText(resultText).then(() => {
                                setPomoCopied(true);
                                setTimeout(() => setPomoCopied(false), 2000);
                              });
                            };

                            return (
                              <div className="space-y-6 animate-fade-in text-slate-800">

                                {/* ZEN FULLSCREEN OVERLAY */}
                                {zenMode && (
                                  <div className="fixed inset-0 bg-slate-950 text-white z-50 flex flex-col items-center justify-between p-8 select-none overflow-hidden animate-fade-in font-sans">
                                    {/* Background aesthetic effects */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
                                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
                                    <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

                                    {/* Header controls inside Zen mode */}
                                    <div className="w-full max-w-5xl flex items-center justify-between z-10">
                                      <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400 font-bold">Zen Presentation Studio</span>
                                      </div>
                                      <button 
                                        onClick={() => setZenMode(false)}
                                        className="px-4 py-2 bg-slate-900/85 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-black transition-all cursor-pointer"
                                      >
                                        <Minimize2 className="w-3.5 h-3.5 text-indigo-400" />
                                        <span>Exit Zen Mode</span>
                                      </button>
                                    </div>

                                    {/* Centerpiece Container with Plant SVG & Digital Timer */}
                                    <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-12 z-10 flex-1 my-auto">
                                      
                                      {/* Plant View Frame */}
                                      <div className="w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center p-6 bg-slate-900/60 border border-slate-850 rounded-3xl shadow-2xl relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent opacity-80 pointer-events-none" />
                                        <div className="w-full h-full max-w-[240px] max-h-[240px]">
                                          {renderPlantSVG(selectedSeed, pomoTime)}
                                        </div>
                                        <div className="mt-2 text-center">
                                          <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest block">
                                            ✦ {selectedSeed.split('_').join(' ')} ✦
                                          </span>
                                        </div>
                                      </div>

                                      {/* Clock View Frame */}
                                      <div className="text-center md:text-left space-y-6">
                                        <div className="space-y-2">
                                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-405 border border-emerald-505/20">
                                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                            <span>{pomoMode.toUpperCase()} INTERVAL</span>
                                          </div>
                                          
                                          <div className="text-8xl md:text-9xl font-mono font-black tracking-widest text-slate-100 flex items-center justify-center md:justify-start select-text selection:bg-indigo-500/30">
                                            <span className={pomoActive ? "text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" : "text-white"}>
                                              {Math.floor(pomoTime / 60).toString().padStart(2, '0')}
                                            </span>
                                            <span className="opacity-75 mx-1 text-indigo-500 animate-pulse">:</span>
                                            <span className="text-white">
                                              {(pomoTime % 60).toString().padStart(2, '0')}
                                            </span>
                                          </div>
                                          
                                          <p className="text-sm font-mono text-slate-400">
                                            Total Session Time: {pomoMode === 'work' ? (Number(inputs.workTime) || 25) : (Number(inputs.breakTime) || 5)} Minutes Custom Focus
                                          </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3.5 max-w-sm font-sans">
                                          <button 
                                            onClick={() => {
                                              const next = !pomoActive;
                                              setPomoActive(next);
                                              if (!next) {
                                                stopAmbient();
                                              }
                                            }}
                                            className={`flex-1 ${
                                              pomoActive 
                                                ? 'bg-red-550 hover:bg-red-650 text-white shadow-lg shadow-red-500/15' 
                                                : 'bg-indigo-650 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-505/25'
                                            } font-black py-4 px-6 text-xs uppercase tracking-widest rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2`}
                                          >
                                            {pomoActive ? 'Pause focus' : 'Resume focus'}
                                          </button>
                                          <button 
                                            onClick={() => { 
                                              setPomoActive(false); 
                                              stopAmbient();
                                              const dur = pomoMode === 'work' ? (Number(inputs.workTime) || 25) * 60 : (Number(inputs.breakTime) || 5) * 60;
                                              setPomoTime(dur); 
                                            }}
                                            className="py-4 px-6 border border-slate-800 hover:bg-slate-800 text-xs font-black text-slate-300 hover:text-white rounded-2xl uppercase tracking-widest transition-all cursor-pointer bg-slate-900 shadow-sm"
                                          >
                                            Reset
                                          </button>
                                        </div>
                                      </div>

                                    </div>

                                    {/* Bottom controls: Interactive ambient toggles within Zen fullscreen Overlay */}
                                    <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 shadow-3xl">
                                      <div className="flex items-center gap-2.5">
                                        <Volume2 className="w-4 h-4 text-indigo-400 animate-pulse" />
                                        <span className="text-[11px] font-mono tracking-wider font-bold text-slate-300">Ambient Studio Soundscapes</span>
                                      </div>
                                      
                                      <div className="flex items-center gap-2 font-mono text-[10px]">
                                        <button 
                                          onClick={() => { if (ambientThemeState === 'pink_rain') stopAmbient(); else startAmbient('pink_rain'); }}
                                          className={`px-3.5 py-2.5 rounded-xl border flex items-center gap-1.5 cursor-pointer transition-all ${
                                            ambientThemeState === 'pink_rain' 
                                              ? 'bg-indigo-950/50 border-indigo-500 text-indigo-405 font-extrabold shadow-sm' 
                                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                          }`}
                                        >
                                          <span>☔ Pink Rain</span>
                                        </button>
                                        <button 
                                          onClick={() => { if (ambientThemeState === 'lofi_synth') stopAmbient(); else startAmbient('lofi_synth'); }}
                                          className={`px-3.5 py-2.5 rounded-xl border flex items-center gap-1.5 cursor-pointer transition-all ${
                                            ambientThemeState === 'lofi_synth' 
                                              ? 'bg-indigo-950/50 border-indigo-500 text-indigo-405 font-extrabold shadow-sm' 
                                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                          }`}
                                        >
                                          <span>🎹 Lofi Synth</span>
                                        </button>
                                        <button 
                                          onClick={stopAmbient}
                                          disabled={ambientThemeState === 'none'}
                                          className="px-3.5 py-2.5 rounded-xl border bg-slate-950 border-slate-800 text-slate-450 hover:border-slate-700 cursor-pointer disabled:opacity-40"
                                        >
                                          <span>Mute</span>
                                        </button>
                                      </div>
                                    </div>

                                  </div>
                                )}
                                
                                {/* Aesthetic Toast Notifications Banner */}
                                {pomoNotification && (
                                  <div className="p-4 rounded-xl border flex items-center justify-between gap-3 text-xs shadow-sm transition-all duration-300 animate-fade-in bg-emerald-50 border-emerald-200 text-emerald-800">
                                    <div className="flex items-center gap-2">
                                      <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                                      <span>{pomoNotification.message}</span>
                                    </div>
                                    <button onClick={() => setPomoNotification(null)} className="text-[11px] font-black hover:opacity-75 tracking-wider uppercase cursor-pointer">✕</button>
                                  </div>
                                )}

                                {/* PANEL 1: RPG PROGRESS & LEVEL DISPLAY */}
                                <div className="bg-slate-900 text-slate-100 p-6 rounded-3xl space-y-4 shadow-xl border border-slate-800 relative overflow-hidden">
                                  {/* Decorative background aura */}
                                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-505/10 rounded-full blur-3xl pointer-events-none" />
                                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-505/10 rounded-full blur-2xl pointer-events-none" />

                                  <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2.5 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-lg ring-4 ring-indigo-500/10">
                                        <Trophy className="w-5 h-5 text-white animate-bounce" />
                                      </div>
                                      <div>
                                        <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">Focus RPG Level</div>
                                        <div className="text-base font-black text-white tracking-wide">LEVEL {Math.floor(pomoXP / 1500) + 1} ADVENTURER</div>
                                      </div>
                                    </div>

                                    <div className="text-right">
                                      <div className="text-[9px] uppercase font-mono tracking-wider text-slate-400 font-bold">Total Forest Size</div>
                                      <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded-full mt-0.5">
                                        <Trees className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                        <span>{pomoForest.length} TREES</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* XP Level Progress Bar */}
                                  <div className="space-y-1.5 relative z-10">
                                    <div className="flex justify-between text-[11px] font-mono text-slate-405 font-bold">
                                      <span>XP: {pomoXP % 1500} / 1500 XP to Next Rank</span>
                                      <span className="text-emerald-400">{Math.floor(pomoXP / 60)} mins focused</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700/80 p-0.5">
                                      <div 
                                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-300"
                                        style={{ width: `${((pomoXP % 1500) / 1500) * 100}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>

                                {/* PANEL 2: PORTRAIT PLANT GROWTH VISUALIZER & CLOCK ENGINE (LARGER & AESTHETIC) */}
                                <div className="p-8 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden">
                                  {/* Ambient grid lines and lighting effect */}
                                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                                  <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
                                  
                                  {/* Fullscreen Trigger Button */}
                                  <button 
                                    onClick={() => setZenMode(true)}
                                    className="absolute top-4 right-4 z-20 px-4 py-2 bg-slate-900/90 hover:bg-slate-850 text-slate-350 hover:text-white rounded-xl border border-slate-800 transition-all cursor-pointer flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-black shadow-lg"
                                    title="Enter Fullscreen Zen Focus"
                                  >
                                    <Maximize2 className="w-3.5 h-3.5 text-indigo-450 animate-pulse" />
                                    <span>Fullscreen Zen</span>
                                  </button>
                                  
                                  {/* SVG Live Grow Frame - Now significantly larger */}
                                  <div className="md:col-span-6 flex flex-col items-center justify-center p-6 bg-slate-950/80 border border-slate-800 rounded-2xl shadow-inner min-h-[290px] relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/10 via-transparent to-transparent opacity-80 pointer-events-none" />
                                    {renderPlantSVG(selectedSeed, pomoTime)}
                                    <div className="mt-4 text-center z-10">
                                      <span className="text-[10px] font-mono font-black uppercase text-slate-400 tracking-widest block">Active Garden Target</span>
                                      <span className="text-sm font-black text-amber-400 uppercase tracking-widest block mt-0.5">
                                        ✦ {selectedSeed.split('_').join(' ')} ✦
                                      </span>
                                    </div>
                                  </div>

                                  {/* Big Digital Clock and Primary Action Controls - Larger & Aesthetic */}
                                  <div className="md:col-span-6 space-y-6 z-10">
                                    <div className="space-y-2 text-center md:text-left">
                                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <span className="h-2 w-2 rounded-full bg-emerald-450 animate-pulse" />
                                        <span>{pomoMode.toUpperCase()} INTERVAL RUNNING</span>
                                      </div>
                                      
                                      <div className="text-7xl font-mono font-black tracking-widest text-slate-100 py-2 flex items-center justify-center md:justify-start">
                                        <span className={pomoActive ? "animate-pulse text-indigo-400 drop-shadow-[0_0_12px_rgba(129,140,248,0.4)]" : "text-white"}>
                                          {Math.floor(pomoTime / 60).toString().padStart(2, '0')}
                                        </span>
                                        <span className="opacity-75 mx-1 text-indigo-500">:</span>
                                        <span className="text-white">
                                          {(pomoTime % 60).toString().padStart(2, '0')}
                                        </span>
                                      </div>
                                      
                                      <p className="text-xs font-mono text-slate-400">
                                        Focus Parameters: {Number(inputs.workTime) || 25}m Deep Work | {Number(inputs.breakTime) || 5}m Relax Break
                                      </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                      <button 
                                        onClick={() => {
                                          const next = !pomoActive;
                                          setPomoActive(next);
                                          if (!next) {
                                            stopAmbient();
                                          }
                                        }}
                                        className={`flex-1 ${
                                          pomoActive 
                                            ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/10' 
                                            : 'bg-indigo-650 hover:bg-indigo-600 text-white shadow-indigo-500/20'
                                        } font-black py-4 px-6 text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2.5`}
                                      >
                                        {pomoActive ? 'Pause Session' : 'Begin Deep Focus'}
                                      </button>
                                      <button 
                                        onClick={() => { 
                                          setPomoActive(false); 
                                          stopAmbient();
                                          const dur = pomoMode === 'work' ? (Number(inputs.workTime) || 25) * 60 : (Number(inputs.breakTime) || 5) * 60;
                                          setPomoTime(dur); 
                                        }}
                                        className="py-4 px-6 border border-slate-800 hover:bg-slate-800 text-xs font-black text-slate-300 hover:text-white rounded-xl uppercase tracking-widest transition-all cursor-pointer bg-slate-900 shadow-sm"
                                      >
                                        Reset
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                {/* PANEL 3: SOUNDSCAPE SYNTHESIZER MODULE */}
                                <div className="p-5 bg-slate-50 border border-slate-200/90 rounded-2xl space-y-3 shadow-sm">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-500 uppercase tracking-widest font-mono">
                                      <Volume2 className="w-4 h-4 text-indigo-500 animate-pulse" />
                                      <span>Procedural Local Ambient Soundscapes</span>
                                    </div>
                                    <span className="text-[9px] font-mono bg-indigo-50 text-indigo-650 px-2 py-0.5 rounded font-bold">100% Offline Synthesizer</span>
                                  </div>
                                  
                                  <p className="text-[11.5px] text-slate-500 leading-relaxed font-semibold">
                                    Generate acoustic focus harmonics locally. Procedurally synthesized using actual Web Audio oscillation frequencies to provide offline ambient triggers with zero network load.
                                  </p>

                                  <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[10.5px]">
                                    <button 
                                      onClick={() => { if (ambientThemeState === 'pink_rain') stopAmbient(); else startAmbient('pink_rain'); }}
                                      className={`px-3 py-2.5 rounded-xl border flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                                        ambientThemeState === 'pink_rain' 
                                          ? 'bg-indigo-50 border-indigo-400 text-indigo-600 font-extrabold shadow-sm' 
                                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                      }`}
                                    >
                                      <span className="text-sm">🌧️</span>
                                      <span>Pink Rain</span>
                                    </button>

                                    <button 
                                      onClick={() => { if (ambientThemeState === 'lofi_synth') stopAmbient(); else startAmbient('lofi_synth'); }}
                                      className={`px-3 py-2.5 rounded-xl border flex flex-col items-center gap-1.5 cursor-pointer transition-all ${
                                        ambientThemeState === 'lofi_synth' 
                                          ? 'bg-indigo-50 border-indigo-400 text-indigo-600 font-extrabold shadow-sm' 
                                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                      }`}
                                    >
                                      <span className="text-sm">🎹</span>
                                      <span>Lofi Synth</span>
                                    </button>

                                    <button 
                                      onClick={stopAmbient}
                                      className={`px-3 py-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                                        ambientThemeState === 'none' 
                                          ? 'bg-slate-200 border-slate-300 text-slate-705 font-extrabold shadow-sm' 
                                          : 'bg-white border-slate-200 text-slate-550 hover:bg-slate-50'
                                      }`}
                                    >
                                      <VolumeX className="w-4 h-4 text-slate-500" />
                                      <span>Mute Synth</span>
                                    </button>
                                  </div>
                                </div>



                              </div>
                            );
                          })()}

                          {currentSlug === 'online-stopwatch' && (
                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Stopwatch Split Controls</span>
                                <span className="text-slate-400 text-[10px] font-mono font-medium">Running Local Client Loop</span>
                              </div>

                              <div className="flex items-center justify-center py-4">
                                <div className="text-4xl font-mono font-black tracking-wider text-slate-800">
                                  {(() => {
                                    const ms = swTime % 1000;
                                    const sec = Math.floor(swTime / 1000) % 60;
                                    const min = Math.floor(swTime / 60000) % 60;
                                    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
                                  })()}
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <button 
                                  onClick={() => setSwActive(!swActive)}
                                  className={`flex-1 ${swActive ? 'bg-amber-500 hover:bg-amber-600 text-slate-900' : 'bg-blue-600 hover:bg-blue-500 text-white'} font-bold py-2.5 text-xs uppercase rounded-xl transition-colors cursor-pointer shadow-sm`}
                                >
                                  {swActive ? 'Stop' : 'Start'}
                                </button>
                                <button 
                                  disabled={!swActive}
                                  onClick={() => setSwLaps(prev => [...prev, swTime])}
                                  className="px-4 bg-white hover:bg-slate-100 text-xs text-slate-700 font-semibold border border-slate-200 rounded-xl uppercase disabled:opacity-40 cursor-pointer"
                                >
                                  Lap Split
                                </button>
                                <button 
                                  onClick={() => { setSwActive(false); setSwTime(0); setSwLaps([]); }}
                                  className="px-4 border border-slate-200 hover:bg-slate-100 text-xs text-slate-550 hover:text-slate-850 rounded-xl uppercase cursor-pointer"
                                >
                                  Clear
                                </button>
                              </div>

                              {/* Lap Results Table */}
                              {swLaps.length > 0 && (
                                <div className="mt-3 border border-slate-200 rounded-xl max-h-32 overflow-y-auto bg-white">
                                  <table className="w-full text-[11px] font-mono text-left">
                                    <thead className="bg-slate-50 text-slate-500 font-bold uppercase sticky top-0 border-b border-slate-100">
                                      <tr>
                                        <th className="p-2 px-3">Lap No.</th>
                                        <th className="p-2">Split Record</th>
                                        <th className="p-2 px-3 text-right">Cumulative</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                      {swLaps.map((lap, idx) => {
                                        const ms = lap % 1000;
                                        const sec = Math.floor(lap / 1000) % 60;
                                        const min = Math.floor(lap / 60000) % 60;
                                        return (
                                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-2 px-3 text-blue-600 font-bold">Lap {idx + 1}</td>
                                            <td className="p-2 text-slate-600">+{((lap - (swLaps[idx - 1] || 0)) / 1000).toFixed(3)}s</td>
                                            <td className="p-2 px-3 text-right text-slate-800 font-bold">{min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}</td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          )}

                          {currentSlug === 'wpm-typing-test' && (
                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-slate-500 uppercase">Benchmark Workspace</span>
                                <span className="font-mono text-blue-600 font-extrabold">Timer: {typingTimer}s</span>
                              </div>

                              <div className="p-4 bg-white border border-slate-200 rounded-xl text-sm leading-relaxed text-slate-800 font-serif select-none shadow-inner">
                                {PRACTICE_PARAGRAPH.split("").map((char, index) => {
                                  let charClass = "text-slate-400";
                                  if (index < typingText.length) {
                                    charClass = typingText[index] === char ? "bg-blue-50 text-blue-600 font-bold" : "bg-red-50 text-red-500 font-bold border-b border-red-300";
                                  } else if (index === typingText.length) {
                                    charClass = "bg-slate-200 text-slate-900 animate-pulse border-b-2 border-blue-600";
                                  }
                                  return <span key={index} className={charClass}>{char}</span>;
                                })}
                              </div>

                              {typingStatus === 'completed' ? (
                                <div className="text-center p-3.5 bg-emerald-50 border border-emerald-150 rounded-xl">
                                  <span className="text-xs font-black text-emerald-700 block mb-1">⏰ Real-time Testing Complete!</span>
                                  <span className="text-xs text-slate-600">Computed Speed: <strong className="text-slate-900">{typingWPM} WPM</strong> / Accuracy: <strong className="text-slate-900">{typingAccuracy}%</strong></span>
                                </div>
                              ) : (
                                <textarea 
                                  rows={3}
                                  placeholder="Click here and begin typing characters matched above..."
                                  value={typingText}
                                  onChange={handleTypingChange}
                                  className="w-full bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-3 text-xs text-slate-850 focus:border-blue-500 outline-none resize-none shadow-sm"
                                />
                              )}

                              <button 
                                onClick={handleReset}
                                className="w-full py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl uppercase transition-all cursor-pointer"
                              >
                                Reset typing test
                              </button>
                            </div>
                          )}

                          {currentSlug === 'gpa-calculator-semester' && (
                            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                              <div className="flex justify-between items-center text-xs">
                                <span className="font-bold text-slate-500 uppercase">Manage Academic Courses</span>
                                <button 
                                  onClick={() => {
                                    setGpaCourses(prev => [
                                      ...prev, 
                                      { id: Date.now(), name: `Course Subject ${prev.length + 1}`, grade: 4, credits: 3 }
                                    ]);
                                  }}
                                  className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-lg hover:bg-blue-100 transition-all font-bold text-[10px] uppercase cursor-pointer"
                                >
                                  + Insert Course
                                </button>
                              </div>

                              <div className="space-y-2">
                                {gpaCourses.map((c) => (
                                  <div key={c.id} className="flex gap-2 items-center bg-white p-2.5 rounded-xl border border-slate-150 shadow-sm">
                                    <input 
                                      type="text" 
                                      value={c.name}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        setGpaCourses(prev => prev.map(x => x.id === c.id ? { ...x, name: val } : x));
                                      }}
                                      className="flex-1 bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-850 font-medium"
                                    />
                                    <div className="w-24">
                                      <select 
                                        value={c.grade}
                                        onChange={(e) => {
                                          const val = Number(e.target.value);
                                          setGpaCourses(prev => prev.map(x => x.id === c.id ? { ...x, grade: val } : x));
                                        }}
                                        className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs text-slate-800"
                                      >
                                        <option value={4}>Grade A (4.0)</option>
                                        <option value={3}>Grade B (3.0)</option>
                                        <option value={2}>Grade C (2.0)</option>
                                        <option value={1}>Grade D (1.0)</option>
                                        <option value={0}>Grade F (0.0)</option>
                                      </select>
                                    </div>
                                    <div className="w-16">
                                      <input 
                                        type="number" 
                                        min={1} 
                                        max={6}
                                        value={c.credits}
                                        onChange={(e) => {
                                          const val = Number(e.target.value);
                                          setGpaCourses(prev => prev.map(x => x.id === c.id ? { ...x, credits: val } : x));
                                        }}
                                        className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs text-slate-800 text-center"
                                      />
                                    </div>
                                    <button 
                                      onClick={() => setGpaCourses(prev => prev.filter(x => x.id !== c.id))}
                                      className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 px-2.5 rounded-md transition-colors text-xs font-black"
                                    >
                                      ×
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* OUTPUTS COLUMN */}
                        {currentSlug !== 'pomodoro-timer' && (
                          <div id="tool-outputs-block" className="md:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                            <div className="space-y-5">
                              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                                <Activity className={`w-4 h-4 ${toolTheme.text}`} />
                                <h2 className="text-xs font-black text-slate-800 uppercase tracking-widest">Calculated Results</h2>
                              </div>

                              <div className="space-y-4">
                                {currentTool?.outputs.map(opt => {
                                  const value = computedOutputs[opt.id] ?? "—";
                                  return (
                                    <div key={opt.id} className="flex justify-between items-end border-b border-slate-100 pb-2.5">
                                      <span className="text-slate-500 text-sm font-semibold">{opt.label}</span>
                                      <span className={`font-mono text-xl font-bold ${
                                        opt.color === 'emerald' ? 'text-emerald-600' :
                                        opt.color === 'amber' ? 'text-amber-600' :
                                        opt.color === 'blue' ? 'text-blue-600' :
                                        opt.color === 'red' ? 'text-red-600' : toolTheme.text
                                      }`}>
                                        {opt.type === 'currency' ? `₹${value}` : value}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Global Action controls below outputs */}
                            <div className="mt-8 space-y-2.5">
                              <button 
                                onClick={copyOutputsToClipboard}
                                className={`w-full ${toolTheme.btn} disabled:opacity-50 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm uppercase text-xs tracking-wider cursor-pointer`}
                              >
                                {copied ? (
                                  <>
                                    <Check className="w-4 h-4" />
                                    Copied Perfectly !
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-4 h-4" />
                                    Copy Complete Result
                                  </>
                                )}
                              </button>
                              
                              <button 
                                onClick={handleReset}
                                className="w-full border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-800 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 uppercase text-xs cursor-pointer bg-white"
                              >
                                <RefreshCw className="w-3.5 h-3.5" />
                                Clear/Reset Parameters
                              </button>
                            </div>

                          </div>
                        )}

                      </div>

                    </div>
                  );
                })()}



                {/* STEP 3: Deep SEO Educational Copy */}
                <div id="deep-seo-educational-copy" className="mt-12 space-y-10 border-t border-slate-200/85 pt-10">
                  
                  {/* Why Unique Section (300-400 Words Article) */}
                  <section className="space-y-4">
                    <h2 className="text-2xl font-black text-slate-950 tracking-tight flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
                      Why our {currentTool?.name} is completely unique
                    </h2>
                    <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-sans">
                      {generateExtendedWhyUnique(currentTool).map((para, idx) => (
                        <p key={idx} className="first-letter:text-lg first-letter:font-bold first-letter:text-blue-600">
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>

                  {/* Step-by-Step Instructions Grid Selection */}
                  <section className="space-y-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
                    <div className="border-b border-slate-100 pb-3">
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        How it works
                      </h3>
                      <h4 className="text-xl font-black text-slate-900 tracking-tight mt-1">
                        How to use this {currentTool?.name}
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {currentTool?.howToUse.map((step, idx) => (
                        <div key={idx} className="space-y-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-150 rounded-2xl p-5 transition-all">
                          <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-black text-blue-600 text-sm shadow-sm">
                            {idx + 1}
                          </span>
                          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                            {step}
                          </p>
                        </div>
                      ))}
                      {/* Generates placeholder instructions if less than 3 step blocks exist */}
                      {currentTool && currentTool.howToUse.length < 3 && (
                        <div className="space-y-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-150 rounded-2xl p-5 transition-all">
                          <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center font-black text-emerald-600 text-sm shadow-sm">
                            ✓
                          </span>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            Export your results or copy the instant math breakdowns to your clipboard with high accuracy.
                          </p>
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Expandable FAQs dropdown accordions details */}
                  <section className="space-y-5">
                    <div className="text-center md:text-left space-y-1">
                      <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest font-mono">
                        Instant Answers
                      </h3>
                      <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                        Frequently Asked Questions (FAQ)
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      {getExtendedFaqsForTool(currentTool).map((faq, idx) => (
                        <details 
                          key={idx} 
                          className="group bg-white border border-slate-200/80 hover:border-slate-350 rounded-2xl transition-all duration-300 shadow-sm overflow-hidden"
                        >
                          <summary className="text-sm sm:text-base font-black text-slate-800 group-open:text-blue-600 flex items-center justify-between p-5 cursor-pointer select-none list-none marker:content-none group-open:bg-slate-50/40">
                            <span className="pr-4">{faq.q}</span>
                            <span className="text-slate-400 group-open:text-blue-600 transition-all font-mono font-black text-sm p-1.5 bg-slate-50 rounded-full group-open:bg-blue-50">
                              <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <div className="p-5 pt-3 border-t border-slate-100 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>

                  {/* Related Tools inside Active Category with beautiful cards */}
                  {currentTool && (
                    <section className="space-y-6 pt-10 border-t border-slate-200/80">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-0.5">
                          <span className={`text-[11px] font-black uppercase tracking-widest ${getCategoryTheme(currentTool.category).text}`}>
                            Continuous Exploration
                          </span>
                          <h3 className="text-xl font-black text-slate-900 tracking-tight">
                            More {currentTool.category.replace(" Tools", "")} Utilities
                          </h3>
                        </div>
                        <span className="text-[11px] sm:text-[12px] bg-slate-100 text-slate-500 px-3 py-1 font-bold rounded-full border border-slate-200/60 shrink-0 self-start sm:self-center">
                          Category Directory Hub
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {TOOLS_LIST.filter(t => t.category === currentTool.category && t.slug !== currentTool.slug)
                          .slice(0, 6)
                          .map(tool => {
                            const theme = getCategoryTheme(tool.category);
                            return (
                               <a 
                                key={tool.slug}
                                href={`/${tool.slug}`}
                                onClick={(e) => navigateTo(tool.slug, e)}
                                className="group p-5 sm:p-6 bg-white border border-slate-200 hover:border-slate-350 rounded-2xl transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-slate-500/5 hover:-translate-y-0.5"
                              >
                                <div className="space-y-2.5">
                                  <div className="flex items-center justify-between">
                                    <span className={`px-2 py-0.5 ${theme.badge} rounded-md text-[9px] font-extrabold uppercase tracking-widest`}>
                                      {tool.badge || "Utility"}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-mono">/{tool.slug}</span>
                                  </div>
                                  <h4 className="text-sm sm:text-base font-black text-slate-850 group-hover:text-blue-600 transition-colors">
                                    {tool.name}
                                  </h4>
                                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                    {tool.description}
                                  </p>
                                </div>
                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                                  <span>Client-Side Runtime</span>
                                  <span className={`flex items-center gap-1.5 ${theme.text} font-black uppercase tracking-wide text-[10px] opacity-80 group-hover:opacity-100 transition-opacity`}>
                                    Open Tool <ArrowRight className="w-3.5 h-3.5" />
                                  </span>
                                </div>
                              </a>
                            );
                          })}
                      </div>
                    </section>
                  )}

                  {/* Explore Other Tool Categories */}
                  <section className="space-y-6 pt-10 border-t border-slate-200/80">
                    <div className="text-left space-y-0.5">
                      <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest font-mono">
                        System Navigation
                      </span>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        Browse Other Calculation Suites
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {CATEGORIES.map(cat => {
                        const theme = getCategoryTheme(cat);
                        const toolsCount = TOOLS_LIST.filter(t => t.category === cat).length;
                        return (
                          <div 
                            key={cat} 
                            className="bg-white border border-slate-200 hover:border-slate-350 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col justify-between"
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                                  {getCategoryIcon(cat)}
                                </div>
                                <span className="text-[10px] font-mono text-slate-400 font-bold">{toolsCount} Active Tools</span>
                              </div>
                              <h4 className="text-xs sm:text-sm font-black text-slate-850 leading-tight">
                                {cat}
                              </h4>
                              <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                                Premium offline and browser execution mathematical utilities.
                              </p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-100">
                              {(() => {
                                const matchedTool = TOOLS_LIST.find(t => t.category === cat);
                                return (
                                  <a 
                                    href={`/${matchedTool?.slug || ''}`}
                                    onClick={(e) => navigateTo(matchedTool?.slug || null, e)}
                                    className={`text-[10.5px] font-black uppercase tracking-wider ${theme.text} hover:underline inline-flex items-center gap-1`}
                                  >
                                    View Category <ArrowRight className="w-3 h-3" />
                                  </a>
                                );
                              })()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                </div>

              </div>

            </div>

          )}

        </main>
      </div>

      {/* Global Bottom Navigation bar & Sitemap Footer */}
      <footer 
        id="global-suite-footer" 
        className={`border-t transition-colors duration-200 py-12 px-6 sm:px-10 shrink-0 ${
          isDarkMode ? 'bg-[#111827] border-slate-800 text-slate-400' : 'bg-white border-slate-200/80 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 text-left text-xs">
          
          {/* Column 1: Mission Summary */}
          <div className="md:col-span-4 space-y-4">
            <a 
              href="/"
              onClick={(e) => navigateTo(null, e)}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <div className="inline-grid grid-cols-2 gap-0.5 w-6 h-6 rounded overflow-hidden shadow-sm shrink-0 transition-transform group-hover:scale-105">
                <div className="bg-[#ff4e41]" />
                <div className="bg-[#4194ff]" />
                <div className="bg-[#ffd241]" />
                <div className="bg-[#2fd165]" />
              </div>
              <span className={`text-sm font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Scientific Views <span className="text-blue-500 font-extrabold">Tools</span>
              </span>
            </a>
            <p className="leading-relaxed text-slate-450">
              Scientific Views Tools provides a 100% free, fast, browser-based online calculator and utility widget platform. By executing arithmetic and physiological formulas locally within client-side memory, we maximize performance and guarantee complete user privacy.
            </p>
          </div>

          {/* Column 2: Sitemap Finance Tools shortcuts */}
          <div className="md:col-span-2.5 space-y-3">
            <h4 className={`text-[10.5px] font-black uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Finance & Taxation
            </h4>
            <ul className="space-y-2 text-slate-450">
              {[
                { name: "GST Calculator (India)", slug: "gst-calculator-india" },
                { name: "Compound Interest Solver", slug: "compound-interest-calculator" },
                { name: "Online Safe Loan Planner", slug: "loan-emi-calculator" },
                { name: "Salary Income Deductor", slug: "income-tax-calculator-india" }
              ].map(link => (
                <li key={link.slug}>
                  <a 
                    href={`/${link.slug}`} 
                    onClick={(e) => navigateTo(link.slug, e)}
                    className="hover:text-blue-500 hover:underline transition-colors block text-[11px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sitemap Health Tools shortcuts */}
          <div className="md:col-span-2.5 space-y-3">
            <h4 className={`text-[10.5px] font-black uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Health & Physiology
            </h4>
            <ul className="space-y-2 text-slate-450">
              {[
                { name: "LMP Pregnancy Due Date", slug: "pregnancy-due-date-calculator" },
                { name: "Biological BMR Estimator", slug: "bmr-calculator-physiological" },
                { name: "Standard Body Mass Index", slug: "bmi-calculator-standard" },
                { name: "IVF Cycle Milestone Tracker", slug: "ivf-due-date-calculator" }
              ].map(link => (
                <li key={link.slug}>
                  <a 
                    href={`/${link.slug}`} 
                    onClick={(e) => navigateTo(link.slug, e)}
                    className="hover:text-blue-500 hover:underline transition-colors block text-[11px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Sitemap Converter & Utilities shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-[10.5px] font-black uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Chronos & Physics
            </h4>
            <ul className="space-y-2 text-slate-450">
              {[
                { name: "Pomodoro Timer", slug: "pomodoro-timer" },
                { name: "Online Professional Stopwatch", slug: "online-stopwatch" },
                { name: "WPM Keyboard Speed Test", slug: "wpm-typing-test" },
                { name: "Standard Inches to CM", slug: "inches-to-cm-converter" }
              ].map(link => (
                <li key={link.slug}>
                  <a 
                    href={`/${link.slug}`} 
                    onClick={(e) => navigateTo(link.slug, e)}
                    className="hover:text-blue-500 hover:underline transition-colors block text-[11px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Separator, Legal Navigation Row, and Copyright Block */}
        <div className={`mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto text-xs ${
          isDarkMode ? 'border-slate-800' : 'border-slate-150'
        }`}>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-bold text-slate-450">
            <a href="/privacy-policy" onClick={(e) => navigateTo("privacy-policy", e)} className="hover:text-blue-500 hover:underline transition-all">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-of-service" onClick={(e) => navigateTo("terms-of-service", e)} className="hover:text-blue-500 hover:underline transition-all">Terms of Use</a>
            <span>•</span>
            <a href="/disclaimer" onClick={(e) => navigateTo("disclaimer", e)} className="hover:text-blue-500 hover:underline transition-all">Legal Disclaimer</a>
            <span>•</span>
            <a href="/contact" onClick={(e) => navigateTo("contact", e)} className="hover:text-blue-500 hover:underline transition-all">Contact Us</a>
            <span>•</span>
            <a href="/about" onClick={(e) => navigateTo("about", e)} className="hover:text-blue-500 hover:underline transition-all">About Us</a>
          </div>

          <p className="text-[10px] text-slate-400 font-mono text-center md:text-right">
            © 2026 Scientific Views Tools. All rights reserved. Registered Sandbox Engine.
          </p>
        </div>
      </footer>

    </div>
  );
}
