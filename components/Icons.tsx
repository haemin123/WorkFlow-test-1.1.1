import React from 'react';
import {
  LayoutDashboard,
  Plus,
  Search,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  AlertTriangle,
  MoreHorizontal,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  BrainCircuit,
  ListTodo,
  X,
  Send,
  Loader2,
  ArrowRight,
  FileText,
  Filter,
  SlidersHorizontal,
  ArrowUpDown,
  XCircle,
  Wand2,
  PenLine,
  Keyboard,
  Mic,
  ImageIcon,
  Code,
  Share2,
  RotateCcw,
  Bot,
  Compass,
  Lightbulb,
  Menu,
  ChevronDown,
  Check,
  Trash2,
  GitCommit,
  BarChart3,
  TrendingUp,
  Users,
  PieChart,
  Zap,
  Timer,
  Target,
  Settings,
  Download,
  Database,
  BookOpen,
  Code2,
  ExternalLink,
  CheckSquare,
  FileCode,
  Square,
  LogOut,
  Archive,
  // --- ICONS ADDED FOR KNOWLEDGE HUB ---
  Tag,
  Info,
  Youtube,
  Building,
  PlusCircle, // For better UI in KnowledgeHub
} from 'lucide-react';

// Re-export all lucide-react icons for general use
export {
  LayoutDashboard,
  Plus,
  Search,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  AlertTriangle,
  MoreHorizontal,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  BrainCircuit,
  ListTodo,
  X,
  Send,
  Loader2,
  ArrowRight,
  FileText,
  Filter,
  SlidersHorizontal,
  ArrowUpDown,
  XCircle,
  Wand2,
  PenLine,
  Keyboard,
  Mic,
  ImageIcon,
  Code,
  Share2,
  RotateCcw,
  Bot,
  Compass,
  Lightbulb,
  Menu,
  ChevronDown,
  Check,
  Trash2,
  GitCommit,
  BarChart3,
  TrendingUp,
  Users,
  PieChart,
  Zap,
  Timer,
  Target,
  Settings,
  Download,
  Database,
  BookOpen,
  Code2,
  ExternalLink,
  CheckSquare,
  FileCode,
  Square,
  LogOut,
  Archive,
  // --- ICONS ADDED FOR KNOWLEDGE HUB ---
  Tag,
  Info,
  Youtube,
  Building,
  PlusCircle,
};

// --- CUSTOM SVG ICONS ---
// For icons not available in Lucide, we define them here.
export const Icons = {
  // Gemini Logo Icon
  gemini: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.68 5.414A5.992 5.992 0 0 1 12 5a6 6 0 0 1 5.414 8.32l-3.094-3.094A1.5 1.5 0 0 0 12 9a1.5 1.5 0 0 0-1.06.438L10.68 9.176V5.414z"
        fill="#4285F4"
      />
      <path
        d="M9.176 10.68 5.414 10.68A5.992 5.992 0 0 1 5 12a6 6 0 0 1 8.32 5.414l-3.094-3.094A1.5 1.5 0 0 0 9 12a1.5 1.5 0 0 0-.438-1.06z"
        fill="#EA4335"
      />
      <path
        d="m13.32 18.586.256.256A5.992 5.992 0 0 1 12 19a6 6 0 0 1-5.414-8.32l3.094 3.094A1.5 1.5 0 0 0 9 15a1.5 1.5 0 0 0 1.06.438l.256.256 3.004 3.004z"
        fill="#FBBC04"
      />
      <path
        d="m14.824 13.32-.256-.256-3.004-3.004-.256-.256V5.414A5.992 5.992 0 0 1 19 12a6 6 0 0 1-2.68 4.938L13.316 14.82A1.5 1.5 0 0 0 12 15a1.5 1.5 0 0 0 1.06-.438l1.764-1.764z"
        fill="#34A853"
      />
      <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="#1967D2" />
    </svg>
  ),
  // Language Icon
  language: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="M14 18h6" />
    </svg>
  ),
};
