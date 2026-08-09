import { motion } from "framer-motion";

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C120D] via-[#4A1F1F] to-[#2C120D]"
    >
      {/* ================= Background Glow ================= */}

      <div className="absolute h-[550px] w-[550px] rounded-full bg-amber-400/10 blur-[140px]" />

      {/* ================= Om Watermark ================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="absolute select-none text-[420px] md:text-[520px] font-bold text-amber-200/5"
      >
        ॐ
      </motion.div>

      {/* ================= Rotating Rings ================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute h-72 w-72 rounded-full border-2 border-dashed border-amber-300/30"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute h-60 w-60 rounded-full border border-amber-300/20"
      />

      {/* ================= Main Content ================= */}

      <div className="relative z-10 flex flex-col items-center">

        {/* Logo Glow */}

        <div className="absolute h-44 w-44 rounded-full bg-amber-400/20 blur-3xl"></div>

        {/* Logo */}

        <motion.img
          src="/images/logo.png"
          alt="Temple Logo"
          className="
            relative
            h-44
            w-44
            md:h-52
            md:w-52
            object-contain
            drop-shadow-[0_0_40px_rgba(255,193,7,0.8)]
          "
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
          }}
        />

        {/* Temple Name */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            mt-8
            text-center
            text-4xl
            font-extrabold
            tracking-wider
            text-amber-300
            drop-shadow-[0_4px_15px_rgba(255,193,7,0.35)]
            md:text-5xl
          "
        >
          Shri Khatu Shyam Ji
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-4 text-lg tracking-[4px] text-white"
        >
          🙏 जय श्री श्याम 🙏
        </motion.p>

        {/* Loading Dots */}

        <div className="mt-12 flex gap-4">

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="
                h-4
                w-4
                rounded-full
                bg-gradient-to-br
                from-amber-300
                to-yellow-500
                shadow-lg
              "
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.2,
              }}
            />
          ))}

        </div>

      </div>
    </motion.div>
  );
}