import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ArticlesComponent {
  articles = [
    {
      year: '2024',
      title: '5 Common Accessibility Pitfalls and How to Avoid Them',
      link: 'https://example.com/accessibility-pitfalls',
      image:
        'https://brittanychiang.com/_next/image?url=%2Fimages%2Fwriting%2Fa11y.png&w=256&q=75',
      alt: 'Accessibility pitfalls illustration',
    },
    {
      year: '2020',
      title: 'Integrating Algolia Search with WordPress Multisite',
      link: 'https://example.com/algolia-wordpress',
      image:
        'https://brittanychiang.com/_next/image?url=%2Fimages%2Fwriting%2Fa11y.png&w=256&q=75',
      alt: 'Algolia search integration',
    },
    {
      year: '2019',
      title: 'Building a Headless Mobile App CMS From Scratch',
      link: 'https://example.com/headless-cms',
      image:
        'https://brittanychiang.com/_next/image?url=%2Fimages%2Fwriting%2Fa11y.png&w=256&q=75',
      alt: 'Headless CMS development',
    },
  ];
}
