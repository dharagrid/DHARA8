import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #000, #111)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(to right, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center' }}>
        Dharagrid
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#d1d5db', maxWidth: '600px', textAlign: 'center' }}>
        Building India’s largest on-ground drone data grid for agriculture, environment, and infrastructure.
      </motion.p>

      <motion.a initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} href="#" style={{ marginTop: '2rem', backgroundColor: '#10b981', padding: '0.75rem 1.5rem', borderRadius: '1rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
        Join the Waitlist <ArrowRight style={{ marginLeft: '0.5rem' }} />
      </motion.a>
    </div>
  );
}
