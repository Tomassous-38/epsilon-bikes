import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import mlcontour from "maplibre-contour";

export const IntroSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const demSource = new mlcontour.DemSource({
      url: "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
      encoding: "terrarium",
      maxzoom: 13,
    });
    demSource.setupMaplibre(maplibregl);

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          contours: {
            type: "vector",
            tiles: [demSource.contourProtocolUrl({ overzoom: 1, thresholds: { 11: [50, 200], 12: [25, 100], 13: [10, 50] } })],
            maxzoom: 15,
          },
        },
        layers: [
          {
            id: "background",
            type: "background",
            paint: { "background-color": "#eaedee" },
          },
          {
            id: "contour-lines",
            type: "line",
            source: "contours",
            "source-layer": "contours",
            paint: {
              "line-color": "#464748",
              "line-opacity": ["match", ["get", "level"], 1, 0.18, 0.08],
              "line-width": ["match", ["get", "level"], 1, 0.8, 0.4],
            },
          },
        ],
      },
      center: [6.8652, 45.8326],
      zoom: 11.5,
      interactive: false,
      attributionControl: false,
      fadeDuration: 0,
    });

    map.on("load", () => {
      map.resize();
    });

    return () => map.remove();
  }, []);

  return (
    <section className="bg-[#eaedee] relative overflow-hidden min-h-[400px]">
      {/* Ligne rouge animee de connexion */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-10 flex justify-center"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ originX: 0 }}
      >
        <div className="w-full h-[2px] bg-[#ea4b33]" />
      </motion.div>
      <div
        ref={mapContainer}
        className="!absolute !inset-0 pointer-events-none"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%" }}
      />
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-28 md:py-40 relative">
        <div className="max-w-3xl">
          <motion.span
            className="text-[#ea4b33] text-xs uppercase tracking-[0.25em] font-body font-semibold mb-6 block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Epsilon-Bikes : Vélos Sur Mesure
          </motion.span>
          <motion.p
            className="font-display font-light text-lg md:text-2xl md:leading-[1.4] text-[#464748] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Des vélos conçus sur-mesure aux vélos montés à la carte, nous mettons notre savoir-faire artisanal à votre service pour donner vie au vélo qui vous ressemble.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
