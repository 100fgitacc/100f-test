"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";

export default function HoverEffect() {
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    if (!hoveredElement) return;

    const handleMouseMove = (event) => {
      if (!hoveredElement) return;

      const { clientX, clientY, currentTarget } = event;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();

      const deltaX = clientX - (left + width / 2);
      const deltaY = clientY - (top + height / 2);
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      const maxOffset = 50; 
      const factor = Math.min(maxOffset / distance, 1);

      currentTarget.style.transition = "transform 0.7s ease-out";
      currentTarget.style.transform = `translate(${-deltaX * factor}px, ${-deltaY * factor}px)`;
    };

    const handleMouseLeave = () => {
      if (!hoveredElement) return;

      hoveredElement.style.transition = "transform 0.3s ease-out";
      hoveredElement.style.transform = "translate(0, 0)";
      setTimeout(() => setHoveredElement(null), 300);
    };

    hoveredElement.addEventListener("mousemove", handleMouseMove);
    hoveredElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hoveredElement.removeEventListener("mousemove", handleMouseMove);
      hoveredElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hoveredElement]);

  return (
    <div className={styles["ecosystem"]}>
      <h3 className={styles["third-title"]}>Ecosystem</h3>
      <div className={styles["container"]}>
        <div className={styles["mail-elem"]}>
          <Image src="/assets/img/ecosystem-logo.png" width={175} height={54} alt="Ecosystem Logo" />
          <p>The Next-Gen <br /> Crypto Launchpad</p>
          <p>with Long-term profit <br /> and support</p>
        </div>
        {[
          { className: "modeling", text: "AI <br/> Modeling" },
          { className: "defi", text: "DeFi" },
          { className: "investments", text: "Early-Stage Investments" },
          { className: "network", text: "Social Network" },
          { className: "rating", text: "Investor <br/> Rating" },
          { className: "analysis", text: "Blockchain Analysis" },
          { className: "education", text: "Education" },
          { className: "airdrops", text: "Crypto Airdrops" },
        ].map(({ className, text }) => (
          <div
            key={className}
            className={styles[className]}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              setTimeout(() => {
                if (target) {
                  target.style.transition = "transform 0.7s ease-out";
                }
              }, 50);
              setHoveredElement(target);
            }}
            dangerouslySetInnerHTML={{ __html: `<p>${text}</p>` }} 
          />
        ))}
      </div>
    </div>
  );
}
