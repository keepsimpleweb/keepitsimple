import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "@pages/NotFound";
import { Register } from "@pages/Register";
import { Features } from "@pages/Features";
import { Pricing } from "@pages/Pricing";
import { Layout } from "@containers/Layout";
import { Thanks } from "@pages/Thanks";
import { About } from "@pages/About";
import { Home } from "@pages/Home";
import { AnimatePresence } from "framer-motion";

if (typeof window !== 'undefined') {
	window.history.scrollRestoration = 'manual'
}

const App =()=> { return (
<BrowserRouter> 
	<Layout>
		<AnimatePresence exitBeforeEnter
			initial={true} onExitComplete={()=> {
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 0 })
			}}}
		> <Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pricing" element={<Pricing />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/features" element={<Features />} />
				<Route  path="/thanks" element={<Thanks />} />
				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	</Layout>
</BrowserRouter> ); }; export { App };
