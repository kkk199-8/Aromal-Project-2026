import { forwardRef, useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", type = "text", error, icon, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password";

        return (
            <div className="w-full">
                {props.label && (
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 ml-1">
                        {props.label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        type={isPassword && showPassword ? "text" : type}
                        className={`w-full px-5 py-4 rounded-xl bg-white border text-charcoal placeholder:text-muted/60 focus:outline-none transition-all
                            ${error
                                ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                                : "border-border-subtle focus:border-orange focus:ring-4 focus:ring-orange/10"
                            }
                            ${icon ? "pl-12" : ""}
                            ${isPassword ? "pr-12" : ""}
                            ${className}
                        `}
                        {...props}
                    />
                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal transition-colors focus:outline-none p-1 rounded-md hover:bg-black/5"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    )}
                </div>
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -4, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -4, height: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1.5 font-bold ml-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {error}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }
);

Input.displayName = "Input";
