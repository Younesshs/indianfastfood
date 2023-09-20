import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  device!: string;
  orientation!: string;
  screenWidth!: number; // Nouvelle propriété pour la largeur de l'écran
  screenHeight!: number; // Nouvelle propriété pour la hauteur de l'écran

  constructor() {
    this.deviceDetection();
    this.detectOrientation();
    this.updateScreenSize(); // Appel initial pour obtenir les dimensions de l'écran
    window.addEventListener('resize', () => {
      this.deviceDetection();
      this.detectOrientation();
      this.updateScreenSize(); // Mettre à jour les dimensions de l'écran lors de la redimension
    });
  }

  //TODO: FAIRE LES TESTS POUR LES FORMATS D'ECRAN REMPLACER LES '00' par les valeurs

  isMobile(): boolean {
    return this.screenWidth >= 390 && this.screenHeight <= 840;
  }

  isTablet(): boolean {
    return /iPad|Android|Tablet|Silk|Kindle/i.test(navigator.userAgent);
  }

  isDesktop(): boolean {
    return !this.isMobile() && !this.isTablet();
  }

  isTV(): boolean {
    return /TV|television/i.test(navigator.userAgent);
  }

  deviceDetection() {
    if (this.isMobile()) {
      this.device = 'mobile';
    } else if (this.isTablet()) {
      this.device = 'tablet';
    } else if (this.isDesktop()) {
      this.device = 'desktop';
    } else if (this.isTV()) {
      this.device = 'tv';
    } else {
      this.device = 'device not found';
    }
  }

  detectOrientation() {
    if (window.innerWidth < window.innerHeight) {
      this.orientation = 'portrait';
    } else {
      this.orientation = 'landscape';
    }
  }

  updateScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
