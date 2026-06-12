'use client';

import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Stars
    const stars: { x: number; y: number; size: number; speed: number; opacity: number; twinkle: number }[] = [];
    const STAR_COUNT = 300;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    // Nebulas
    const nebulas: { x: number; y: number; radius: number; color: string; opacity: number; drift: number }[] = [];
    const NEBULA_COLORS = [
      'rgba(138, 43, 226,', // purple
      'rgba(75, 0, 130,',    // indigo
      'rgba(0, 191, 255,',   // deep sky blue
      'rgba(255, 105, 180,', // hot pink
      'rgba(72, 61, 139,',   // dark slate blue
    ];
    for (let i = 0; i < 6; i++) {
      nebulas.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 400 + 200,
        color: NEBULA_COLORS[Math.floor(Math.random() * NEBULA_COLORS.length)],
        opacity: Math.random() * 0.15 + 0.05,
        drift: Math.random() * 0.2 - 0.1,
      });
    }

    // Shooting stars
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; active: boolean }[] = [];
    for (let i = 0; i < 3; i++) {
      shootingStars.push({ x: 0, y: 0, length: 0, speed: 0, opacity: 0, active: false });
    }
    let shootTimer = 0;

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 20, 0.15)';
      ctx.fillRect(0, 0, width, height);

      // Draw nebulas
      for (const n of nebulas) {
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
        gradient.addColorStop(0, `${n.color}${n.opacity})`);
        gradient.addColorStop(0.5, `${n.color}${n.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
        n.x += n.drift;
        if (n.x < -n.radius) n.x = width + n.radius;
        if (n.x > width + n.radius) n.x = -n.radius;
      }

      // Draw stars
      for (const star of stars) {
        star.twinkle += 0.02;
        const opacity = star.opacity * (0.6 + 0.4 * Math.sin(star.twinkle));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      }

      // Shooting stars
      shootTimer++;
      if (shootTimer > 150 + Math.random() * 200) {
        const ss = shootingStars.find(s => !s.active);
        if (ss) {
          ss.active = true;
          ss.x = Math.random() * width * 0.8;
          ss.y = Math.random() * height * 0.5;
          ss.length = Math.random() * 120 + 60;
          ss.speed = Math.random() * 8 + 6;
          ss.opacity = 1;
          shootTimer = 0;
        }
      }

      for (const ss of shootingStars) {
        if (!ss.active) continue;
        const gradient = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - ss.length, ss.y + ss.length * 0.3
        );
        gradient.addColorStop(0, `rgba(255,255,255,${ss.opacity})`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.length, ss.y + ss.length * 0.3);
        ctx.stroke();
        ss.x -= ss.speed;
        ss.y += ss.speed * 0.3;
        ss.opacity -= 0.02;
        if (ss.opacity <= 0) ss.active = false;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
