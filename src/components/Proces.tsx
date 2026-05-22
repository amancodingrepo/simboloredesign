'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand goals and audience.',
    color: '#86efac', // light green
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Create strategy roadmap.',
    color: '#7dd3fc', // light blue
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Craft engaging visuals.',
    color: '#c4b5fd', // light purple
  },
  {
    num: '04',
    title: 'Develop',
    desc: 'Build and optimize experience.',
    color: '#fdba74', // light orange
  },
  {
    num: '05',
    title: 'Deliver & Grow',
    desc: 'Launch and scale consistently.',
    color: '#86efac', // light green again
  },
];

export default function Proces() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      ref={containerRef}
      className="py-32 bg-soft-white relative overflow-visible"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="mb-32 text-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-black/40 block mb-5">
            The Process
          </span>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-black leading-none">
            A Simple 5-Step
            <br />
            Journey to Success
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Base Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/10 -translate-x-1/2" />

          {/* Animated Gradient Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-[3px] -translate-x-1/2 origin-top z-10 rounded-full"
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `
                  linear-gradient(
                    to bottom,
                    #86efac 0%,
                    #86efac 20%,
                    #7dd3fc 20%,
                    #7dd3fc 40%,
                    #c4b5fd 40%,
                    #c4b5fd 60%,
                    #fdba74 60%,
                    #fdba74 80%,
                    #86efac 80%,
                    #86efac 100%
                  )
                `,
              }}
            />
          </motion.div>

          {/* Steps */}
          <div className="space-y-36">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  ease: 'easeOut',
                }}
                className={`relative flex ${
                  index % 2 === 0
                    ? 'justify-start'
                    : 'justify-end'
                }`}
              >

                {/* Dot */}
                <div
                  className="absolute left-6 md:left-1/2 top-5 w-5 h-5 rounded-full bg-soft-white border-[3px] -translate-x-1/2 z-20"
                  style={{
                    borderColor: step.color,
                  }}
                />

                {/* Content */}
                <div
                  className={`w-full md:w-[42%] ${
                    index % 2 === 0
                      ? 'md:pr-10 text-right'
                      : 'md:pl-10 text-left'
                  }`}
                >

                  {/* Number */}
                  <div
                    className="text-4xl md:text-5xl font-black mb-3"
                    style={{
                      color: step.color,
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-black text-black mb-4 leading-none">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-black/50 leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}