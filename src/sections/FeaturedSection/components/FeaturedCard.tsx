import { motion } from "framer-motion";
import { GrainGradient } from "@paper-design/shaders-react";

export type FeaturedCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  linkUrl: string;
  reverse?: boolean;
  gradientFrom: string;
  gradientTo: string;
};

export const FeaturedCard = (props: FeaturedCardProps) => {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px] ${props.reverse ? "" : ""}`}>
        <div className={`overflow-hidden ${props.reverse ? "md:order-2" : ""}`}>
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className={`relative flex flex-col justify-center overflow-hidden ${props.reverse ? "md:order-1" : ""}`}>
          <div className="absolute inset-0">
            <GrainGradient
              colors={[props.gradientFrom, props.gradientTo, props.gradientFrom]}
              colorBack={props.gradientFrom}
              softness={0.6}
              intensity={0.4}
              noise={0.15}
              shape="corners"
              speed={0.8}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col gap-6">
            <motion.span
              className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-body font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {props.subtitle ? `${props.title} ${props.subtitle}` : "Réalisation"}
            </motion.span>
            <motion.h2
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.12em] text-white leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {props.title}
              {props.subtitle && (
                <span className="block font-light text-white/40 text-lg md:text-xl mt-3 tracking-normal normal-case">
                  {props.subtitle}
                </span>
              )}
            </motion.h2>
            <motion.div
              className="w-12 h-[2px] bg-white/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ originX: 0 }}
            />
            <motion.p
              className="text-white/50 text-sm md:text-base leading-relaxed max-w-[42ch]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {props.description}
            </motion.p>
            <motion.a
              href={props.linkUrl}
              className="group/btn inline-flex items-center gap-3 w-fit mt-2 text-white text-xs uppercase tracking-[0.15em] font-body font-medium transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <span className="border-b border-white/30 pb-1 group-hover/btn:border-white transition-colors duration-300">
                Découvrir
              </span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
