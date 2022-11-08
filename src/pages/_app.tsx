// Styling 
import "tailwindcss/tailwind.css"; 
import "../styles/main.css";

import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <AnimatePresence>
		<motion.div
			key={router.route}
			initial="initial"
			animate="animate"
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
			variants={{
			  initial: {
				opacity: 0,
		  	},
		  	animate: {
				opacity: 1,
		  	}}}
			transition={{ delay: 0.4 }}>
        <div className="px-4 md:px-16 space-y-24 py-24 max-w-7xl">
          <Head>
            <title>research</title>
          </Head>

          <Component {...pageProps} />

          <footer className="space-y-2">
            <div className="text-[#D1C9BC] text-sm">
              Copyright © 2022 Akhil Vanka | All rights reserved
            </div>
            <a
              className="text-neutral-700 hover:text-[#D1C9BC] text-sm"
              href="https://privacy.akhilv.me"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-700 text-sm"> | </span>
            <a
              className="text-neutral-700 hover:text-[#D1C9BC] text-sm"
              href="https://akhilv.me"
            >
              Homepage
            </a>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
    </div>
  );
}
