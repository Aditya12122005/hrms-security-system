import { FaTwitter, FaGithub, FaLinkedin, FaDiscord, FaArrowRight } from "react-icons/fa"

function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#0B1120] border-t border-[#1E293B] pt-20 pb-10">
            {/* GLOW EFFECTS */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[200px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* TOP SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
                    
                    {/* BRAND & NEWSLETTER */}
                    <div className="md:col-span-12 lg:col-span-4">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                            <span className="text-white">HRMS</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 ml-1">Pro</span>
                        </h2>
                        <p className="text-[#94A3B8] leading-relaxed text-sm mb-8 pr-4">
                            Centralized workforce management software designed for modern HR and operations teams to scale efficiently.
                        </p>
                        
                        {/* NEWSLETTER */}
                        <div className="flex items-center bg-[#111827] border border-[#334155] rounded-xl overflow-hidden focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all duration-300">
                            <input 
                                type="email" 
                                placeholder="Subscribe to newsletter..." 
                                className="w-full bg-transparent border-none outline-none px-4 text-sm text-white placeholder:text-[#64748B]"
                            />
                            <button className="px-4 h-11 bg-indigo-500 hover:bg-indigo-400 text-white flex items-center justify-center transition-colors">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    {/* LINKS GRIDS */}
                    <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* PRODUCT */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Product</h3>
                            <ul className="flex flex-col gap-4 text-[#94A3B8] text-sm font-medium">
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Features</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Security</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Analytics</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Pricing</a></li>
                            </ul>
                        </div>

                        {/* COMPANY */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Company</h3>
                            <ul className="flex flex-col gap-4 text-[#94A3B8] text-sm font-medium">
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">About Us</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Careers</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Blog</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Contact</a></li>
                            </ul>
                        </div>

                        {/* RESOURCES */}
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Resources</h3>
                            <ul className="flex flex-col gap-4 text-[#94A3B8] text-sm font-medium">
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Documentation</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">API Reference</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Community</a></li>
                                <li><a href="#" className="hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="border-t border-[#1E293B] mt-16 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <p className="text-[#64748B] text-sm font-medium">
                        © 2026 HRMS Pro. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-[#94A3B8] font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#111827] border border-[#334155] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:-translate-y-1 transition-all duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#111827] border border-[#334155] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-gray-800 hover:border-gray-800 hover:-translate-y-1 transition-all duration-300">
                            <FaGithub />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#111827] border border-[#334155] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#111827] border border-[#334155] flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#5865F2] hover:border-[#5865F2] hover:-translate-y-1 transition-all duration-300">
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer