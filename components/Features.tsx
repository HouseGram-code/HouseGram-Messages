import React, { useState, useEffect, useRef } from 'react';
import { Send, MoreVertical, Phone, Video, ArrowLeft } from 'lucide-react';
import { Content } from '../types';

interface FeaturesProps {
  content: Content['features'];
}

interface MessageBubbleProps {
  text: string;
  isUser: boolean;
  index: number;
}

const MessageBubble = ({ text, isUser, index }: MessageBubbleProps) => (
  <div 
    className={`flex w-full mb-4 animate-pop-in ${isUser ? 'justify-end' : 'justify-start'}`}
    style={{ animationDelay: '0.1s' }}
  >
    <div 
      className={`max-w-[80%] px-5 py-3 text-sm md:text-base leading-relaxed shadow-lg
      ${isUser 
        ? 'bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl rounded-tr-sm' 
        : 'bg-zinc-800/80 backdrop-blur-md text-zinc-100 border border-zinc-700/50 rounded-2xl rounded-tl-sm'
      }`}
    >
      {text}
    </div>
  </div>
);

export default function Features({ content }: FeaturesProps) {
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([]);
  const [inputText, setInputText] = useState("");
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false); // Controls plane animation

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Reset when content changes (language switch)
  useEffect(() => {
    setMessages([]);
    setStep(0);
    setInputText("");
    setIsTyping(false);
  }, [content]);

  // Main Demo Logic Loop
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const script = content.demo.script;
    
    const processStep = () => {
      // Step: Finished all messages, pause then reset
      if (step >= script.length) {
        timeout = setTimeout(() => {
          setMessages([]);
          setStep(0);
        }, 4000);
        return;
      }

      const currentText = script[step];
      const isUserTurn = step % 2 === 0; // Alternating turns

      if (isUserTurn) {
        // Simulating User Typing into Input
        if (inputText.length < currentText.length) {
          timeout = setTimeout(() => {
            setInputText(currentText.slice(0, inputText.length + 1));
          }, 30 + Math.random() * 30); // Typing speed
        } else {
          // Finished typing, wait then send
          timeout = setTimeout(() => {
            setIsSending(true); // Trigger plane animation
            
            setTimeout(() => {
              setMessages(prev => [...prev, { text: currentText, isUser: true }]);
              setInputText("");
              setIsSending(false); // Reset plane
              setStep(prev => prev + 1);
            }, 600); // Wait for animation
          }, 600);
        }
      } else {
        // Simulating Other Person Typing (show indicator)
        setIsTyping(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, { text: currentText, isUser: false }]);
          setStep(prev => prev + 1);
        }, 1500);
      }
    };

    timeout = setTimeout(processStep, 100);
    return () => clearTimeout(timeout);
  }, [step, inputText, content.demo.script]);


  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      
      {/* Background Ambience Removed for cleaner look */}

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {content.title}
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-10">
            {content.subtitle}
          </p>

          <a 
            href="https://house-gram-web.vercel.app"
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg tracking-wide overflow-hidden transition-all hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/30 hover:-translate-y-1"
          >
            <span className="relative z-10">{content.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* The Messenger Demo */}
        <div className="max-w-sm md:max-w-md mx-auto relative mt-12">
          
          {/* Phone Frame */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] shadow-2xl shadow-red-900/20 overflow-hidden h-[700px] flex flex-col">
            
            {/* Dynamic Island / Notch Area */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20"></div>

            {/* App Header */}
            <div className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 p-4 pt-10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <ArrowLeft className="text-zinc-400 w-5 h-5" />
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-500 flex items-center justify-center text-xs font-bold text-white">
                    {content.demo.contactName[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white leading-none">{content.demo.contactName}</h3>
                    <p className="text-xs text-red-500 font-medium h-3">
                      {isTyping ? content.demo.typing : 'Online'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-zinc-400">
                <Video size={20} />
                <Phone size={20} />
              </div>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 bg-zinc-950 p-4 overflow-y-auto no-scrollbar space-y-2"
              style={{ backgroundImage: 'radial-gradient(#27272a 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            >
              {/* Timestamp */}
              <div className="text-center text-xs text-zinc-600 my-4 font-medium uppercase tracking-wider">
                Today 10:42 AM
              </div>

              {messages.map((msg, idx) => (
                <MessageBubble key={idx} index={idx} {...msg} />
              ))}
              
              {isTyping && (
                <div className="flex justify-start animate-fade-in-up">
                  <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center border border-zinc-700/50">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}/>
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}/>
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}/>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800">
              <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2 transition-all focus-within:border-red-900/50 focus-within:ring-1 focus-within:ring-red-900/30">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 cursor-pointer hover:bg-zinc-700 transition-colors">
                  <span className="text-lg leading-none pb-1">+</span>
                </div>
                
                <input 
                  type="text" 
                  value={inputText}
                  readOnly
                  placeholder={content.demo.placeholder}
                  className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none text-sm py-2"
                />
                
                <button 
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
                    ${inputText || isSending ? 'bg-red-600 shadow-lg shadow-red-600/30' : 'bg-zinc-800 text-zinc-500'}
                  `}
                >
                  <Send 
                    size={16} 
                    className={`text-white transition-transform ${isSending ? 'animate-fly-away' : ''}`} 
                    fill={inputText || isSending ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-700 rounded-full opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}