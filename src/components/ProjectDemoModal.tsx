import React, { useState } from 'react';
import {
  X,
  Smartphone,
  Send,
  Heart,
  ShoppingCart,
  Volume2,
  RefreshCw,
  Check,
  CreditCard,
  Plus,
  Play
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>{project.title}</span>
                <span className="text-[10px] font-mono text-cyan-400 border border-cyan-500/30 px-1.5 py-0.5 rounded">
                  Interactive Sandbox
                </span>
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Body */}
        <div className="p-6 overflow-y-auto">
          {project.id === 'apexpay-fintech' && <ApexPayDemo />}
          {project.id === 'pulsewave-social' && <PulseWaveDemo />}
          {project.id === 'velocity-storefront' && <VelocityDemo />}
          {project.id === 'sync-agile-flow' && <SyncAgileDemo />}
          {project.id === 'inspirix-quote-studio' && <InspirixDemo />}
          {project.id === 'jimmy-portfolio' && <PortfolioSelfDemo />}
        </div>
      </div>
    </div>
  );
};

/* Mini Demo 1: ApexPay Mobile Wallet */
const ApexPayDemo: React.FC = () => {
  const [balance, setBalance] = useState(12489.3);
  const [transferStatus, setTransferStatus] = useState<string | null>(null);

  const handleSendMoney = () => {
    setTransferStatus('Authorizing biometric...');
    setTimeout(() => {
      setBalance((prev) => prev - 150);
      setTransferStatus('Sent $150.00 to Sarah Louise (Transaction Confirmed)');
      setTimeout(() => setTransferStatus(null), 3500);
    }, 700);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-cyan-400">APEXPAY MOBILE APP</span>
        <span className="text-xs text-emerald-400 font-mono">Live Ledger: Online</span>
      </div>

      <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/40 via-slate-900 to-teal-900/30 border border-cyan-500/30 mb-6">
        <p className="text-xs text-slate-400 font-mono">PRIMARY WALLET</p>
        <p className="text-3xl font-extrabold text-white font-mono mt-1">
          ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-[11px] text-cyan-300 mt-2 font-mono">•••• 4567 (Virtual Mastercard Active)</p>
      </div>

      {transferStatus && (
        <div className="mb-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs text-center font-mono animate-in fade-in">
          {transferStatus}
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={handleSendMoney}
          className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:brightness-105 transition-all flex items-center justify-center gap-2"
        >
          <CreditCard className="w-4 h-4" />
          <span>Simulate Quick Transfer ($150.00)</span>
        </button>

        <button
          onClick={() => setBalance(12489.3)}
          className="w-full py-2 px-3 rounded-lg text-xs text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 transition-colors"
        >
          Reset Wallet Balance
        </button>
      </div>
    </div>
  );
};

/* Mini Demo 2: PulseWave Social */
const PulseWaveDemo: React.FC = () => {
  const [likes, setLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    'Incredible UI design Jimmy!',
    'The WebSocket speed is insane on this.'
  ]);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([commentText, ...comments]);
    setCommentText('');
  };

  return (
    <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center font-bold text-xs text-cyan-300">
          JN
        </div>
        <div>
          <p className="text-xs font-bold text-white">Jimmy Nathan</p>
          <p className="text-[10px] text-slate-400">@iamjimmynathan · Just now</p>
        </div>
      </div>

      <p className="text-xs text-slate-300 mb-4 leading-relaxed">
        Just shipped the new WebSockets clustering layer for PulseWave! Direct message latency dropped down to sub-30ms globally.
      </p>

      <div className="flex items-center gap-4 py-2 border-y border-slate-800 text-xs text-slate-400 mb-3">
        <button
          onClick={() => {
            setLikes(isLiked ? likes - 1 : likes + 1);
            setIsLiked(!isLiked);
          }}
          className={`flex items-center gap-1.5 transition-colors ${
            isLiked ? 'text-rose-400 font-bold' : 'hover:text-slate-200'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span>{likes} Likes</span>
        </button>
        <span>·</span>
        <span>{comments.length} Comments</span>
      </div>

      <form onSubmit={handlePostComment} className="flex gap-2 mb-3">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Leave a comment..."
          className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold hover:bg-cyan-300"
        >
          Post
        </button>
      </form>

      <div className="space-y-2 max-h-32 overflow-y-auto">
        {comments.map((c, i) => (
          <div key={i} className="text-[11px] p-2 rounded bg-slate-900/60 text-slate-300">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

/* Mini Demo 3: Velocity Storefront */
const VelocityDemo: React.FC = () => {
  const [cartCount, setCartCount] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="max-w-lg mx-auto p-5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <span className="text-xs font-bold text-white font-mono">VELOCITY STOREFRONT</span>
        <button
          onClick={() => setShowCheckout(!showCheckout)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300 hover:border-cyan-500/40"
        >
          <ShoppingCart className="w-3.5 h-3.5 text-cyan-400" />
          <span>Cart ({cartCount})</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <p className="text-xs font-bold text-white">Nile Runner Pro</p>
          <p className="text-xs font-mono text-cyan-400 my-1">$120.00</p>
          <button
            onClick={() => setCartCount(cartCount + 1)}
            className="w-full py-1 px-2 rounded bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 text-[11px] font-bold transition-all"
          >
            Add to Cart
          </button>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <p className="text-xs font-bold text-white">Aero Studio Pods</p>
          <p className="text-xs font-mono text-cyan-400 my-1">$75.00</p>
          <button
            onClick={() => setCartCount(cartCount + 1)}
            className="w-full py-1 px-2 rounded bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 text-[11px] font-bold transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {showCheckout && (
        <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs space-y-2 animate-in fade-in">
          <p className="font-bold text-white">Paystack Gateway Reconciliation</p>
          <p className="text-slate-300">Total items: {cartCount} | Order Total: ${cartCount * 75}.00</p>
          <button
            onClick={() => alert('Paystack integration sandbox verified successfully!')}
            className="w-full py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
          >
            Verify Paystack Checkout Webhook
          </button>
        </div>
      )}
    </div>
  );
};

/* Mini Demo 4: Sync Agile Flow */
const SyncAgileDemo: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up JWT Session Tokens', col: 'done' },
    { id: 2, title: 'Optimize Postgres Query Indices', col: 'progress' },
    { id: 3, title: 'Deploy React Native App to TestFlight', col: 'backlog' }
  ]);

  const moveTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const next = t.col === 'backlog' ? 'progress' : t.col === 'progress' ? 'done' : 'backlog';
          return { ...t, col: next };
        }
        return t;
      })
    );
  };

  return (
    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100">
      <div className="text-xs font-mono text-cyan-400 mb-3">SPRINT 24 KANBAN BOARD</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {['backlog', 'progress', 'done'].map((column) => (
          <div key={column} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              {column === 'backlog' ? 'Backlog' : column === 'progress' ? 'In Progress' : 'Completed'}
            </div>
            <div className="space-y-2">
              {tasks
                .filter((t) => t.col === column)
                .map((t) => (
                  <div
                    key={t.id}
                    onClick={() => moveTask(t.id)}
                    className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-400 cursor-pointer text-xs transition-colors"
                  >
                    <p className="font-medium text-white">{t.title}</p>
                    <span className="text-[10px] text-cyan-400 mt-1 block">Click to advance column</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Mini Demo 5: Inspirix Quote Studio */
const InspirixDemo: React.FC = () => {
  const quotes = [
    { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Software is a great combination between artistry & engineering.", author: "Bill Gates" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" }
  ];

  const [index, setIndex] = useState(0);

  const speakQuote = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(quotes[index].text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-cyan-950/30 border border-cyan-500/30 text-center">
      <p className="text-xs font-mono text-cyan-400 mb-4">INSPIRIX AUDIO & POSTER STUDIO</p>
      <blockquote className="text-base sm:text-lg font-serif italic text-white mb-3">
        "{quotes[index].text}"
      </blockquote>
      <p className="text-xs font-mono text-cyan-300 mb-6">— {quotes[index].author}</p>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setIndex((index + 1) % quotes.length)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Next Quote</span>
        </button>
        <button
          onClick={speakQuote}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded-lg transition-colors"
        >
          <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Speech Audio</span>
        </button>
      </div>
    </div>
  );
};

/* Mini Demo 6: Self Portfolio */
const PortfolioSelfDemo: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center">
      <p className="text-xs font-mono text-cyan-400 mb-2">FLAGSHIP ARCHITECTURE</p>
      <h4 className="text-lg font-bold text-white mb-2">Jimmy Nathan Portfolio</h4>
      <p className="text-xs text-slate-300 mb-4">
        You are currently experiencing this flagship portfolio live! Built with Vite, React, Tailwind CSS, and Framer Motion micro-interactions.
      </p>
      <div className="flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
        <Check className="w-4 h-4" />
        <span>100% Performance Audit Score Verified</span>
      </div>
    </div>
  );
};
