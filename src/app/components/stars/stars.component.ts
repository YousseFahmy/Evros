import { Component, computed, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {

  starCount = input<number>(200);
  flickerSpeed = input<number>(0.2);
  minBrightness = input<number>(0.1);

  canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('starCanvas');
  canvasContext = computed(() => this.canvas()!.nativeElement.getContext('2d')!);

  stars: Star[] = [];
  shootingStars: ShootingStar[] = [];
  isTabActive = true;
  visibilityHandler!: () => void;

  ngOnInit(){
    this.visibilityHandler = () => {
      this.isTabActive = !window.document.hidden;
    };

    window.document.addEventListener('visibilitychange', this.visibilityHandler);
  }

  ngOnDestroy(){
    window.document.removeEventListener('visibilitychange', this.visibilityHandler);
  }

  ngAfterViewInit() {
    const canvas = this.canvas()!.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate random stars
    this.stars = Array.from({ length: this.starCount() }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random()
    }));

    this.animate();
    setInterval(() => { if(this.isTabActive) this.spawnShootingStar()}, 2000 + Math.random() * 4000 );
  }

  private animate(): void {
    if (!this.isTabActive) return;

    this.canvasContext().clearRect(0, 0, this.canvas().nativeElement.width, this.canvas().nativeElement.height);

    this.stars.forEach(star => {
      star.alpha += (Math.random() - 0.5) * this.flickerSpeed(); // flicker
      star.alpha = Math.min(Math.max(star.alpha, this.minBrightness()), 1);

      this.drawStar(star);
    });

    this.shootingStars.forEach((shootingStar, i) => {
      shootingStar.x += shootingStar.dx;
      shootingStar.y += shootingStar.dy;
      shootingStar.life--;
      shootingStar.alpha = shootingStar.life / 30;

      this.drawShootingStar(shootingStar);

      if (shootingStar.life <= 0) {
        this.shootingStars.splice(i, 1);
      }
    });

    requestAnimationFrame(() => this.animate());
  }

  private drawStar(star: Star) {
    this.canvasContext().beginPath();
    this.canvasContext().arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    this.canvasContext().fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    this.canvasContext().fill();
  }

  private spawnShootingStar() {
    if(!this.isTabActive) return;

    const canvasWidth = this.canvas().nativeElement.width;

    const x = (canvasWidth * 0.2) + (Math.random() * canvasWidth * 0.6);
    const y = 0;

    const angle = (1/2 * Math.PI) + ((Math.random() - 0.5) * 2 * 1/6 * Math.PI)
    const speed = 5 + Math.random() * 5;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;

    const length = 30 + Math.random() * 50;
    const life = 50 + Math.random() * 30

    this.shootingStars.push({ x, y, length, dx, dy, angle, life, alpha: 1 });
  }

  private drawShootingStar(star: ShootingStar) {
    this.canvasContext().beginPath();

    const trailX = star.x - star.dx * star.length;
    const trailY = star.y - star.dy * star.length;
    const gradient = this.canvasContext().createLinearGradient(star.x, star.y, trailX, trailY);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`);
    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

    this.canvasContext().strokeStyle = gradient;
    this.canvasContext().lineWidth = 2;
    this.canvasContext().moveTo(star.x, star.y);
    this.canvasContext().lineTo(trailX, trailY);
    this.canvasContext().stroke();
  }
}

type Star = { x: number; y: number; radius: number; alpha: number }
type ShootingStar = { x: number; y: number; dx: number; dy: number; length: number; angle: number; life: number; alpha: number }