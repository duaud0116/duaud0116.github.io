const canvas = document.getElementById('galaxy');
    const ctx = canvas.getContext('2d');
    let w, h, cx, cy, bgGradient;

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cx = w/2;
      cy = h/2;
      bgGradient = ctx.createLinearGradient(0, 0, w, h);
      bgGradient.addColorStop(0, '#7C8199');
      bgGradient.addColorStop(1, '#B391BF');
    }
    window.addEventListener('resize', resize);
    resize();

    // 별 객체
    class Star {
      constructor(){
        this.reset();
      }
      reset(){
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * Math.min(w,h) * 0.6;
        this.size = Math.random() * 2;
        this.speed = 0.0005 + Math.random() * 0.0015;
        this.twinkle = Math.random() * Math.PI * 2;
        const colors = ['255,255,255','173,216,230','221,160,221'];
        this.color = colors[Math.floor(Math.random()*colors.length)];
      }
      update(){
        this.angle += this.speed;
        this.twinkle += 0.05;
      }
      draw(){
        const x = cx + Math.cos(this.angle) * this.radius;
        const y = cy + Math.sin(this.angle) * this.radius;
        const alpha = 0.6 + Math.sin(this.twinkle) * 0.4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${this.color},${alpha})`;
        ctx.arc(x,y,this.size,0,Math.PI*2);
        ctx.fill();
      }
    }

    const stars = Array.from({length:400}, () => new Star());

    // 성운 객체
    class Nebula {
      constructor(){
        this.x = Math.random()*w;
        this.y = Math.random()*h;
        this.radius = 300 + Math.random()*400;
        this.color = this.randomColor();
        this.alpha = 0.2002 + Math.random()*0.1;
      }
      randomColor(){
        const palette = [
          'rgba(124,129,153,100', // BlueViolet
          'rgba(21,30,69,100',   // Indigo
          'rgba(83,56,117,100',  // DarkSlateBlue
          /* 'rgba(123,104,238,'  */// MediumSlateBlue
        ];
        return palette[Math.floor(Math.random()*palette.length)];
      }
      draw(){
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color + this.alpha + ')');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
      }
    }

    const nebulas = Array.from({length:6}, () => new Nebula());

    function animate(){
      // 배경 그라데이션
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0,0,w,h);

      // 성운 그리기 (먼저 그려서 뒤에 깔림)
      nebulas.forEach(n => n.draw());

      // 별 그리기
      for(const s of stars){
        s.update();
        s.draw();
      }
      requestAnimationFrame(animate);
    }
    animate();