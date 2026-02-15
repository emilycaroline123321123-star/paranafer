
import React from 'react';
import { WhatsappIcon } from './Icons';

interface CTAButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, variant = 'primary', fullWidth = false }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-extrabold uppercase tracking-wider transition-all duration-300 rounded-lg transform hover:scale-105 active:scale-95 shadow-xl";
  
  const variants = {
    primary: "bg-amber-500 text-slate-900 hover:bg-amber-400",
    secondary: "bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E]"
  };

  return (
    <a 
      href="#contato" 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      {variant === 'whatsapp' && <span className="mr-3"><WhatsappIcon /></span>}
      {text}
    </a>
  );
};

export default CTAButton;
