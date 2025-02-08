import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExperienceComponent {
  experiences = [
    {
      timeline: 'Jan 2024 — Jan 2025',
      title: 'Developer',
      company: 'LEAP LLC',
      link: '', // Add the appropriate company website link if available
      description:
        'Worked as a Full-time Developer, responsible for building and maintaining full-stack web applications. Gained valuable experience in developing scalable and robust systems using modern frameworks and tools.',
      location: 'Ho Chi Minh City, Vietnam',
      type: 'On-site',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    },
    {
      timeline: 'Sep 2022 — Feb 2023',
      title: 'AI Engineer Intern',
      company: 'MiTek',
      link: '', // Add the appropriate company website link if available
      description:
        'Interned as an AI Engineer, focusing on developing AI models and applications. Contributed to projects involving data processing and creating intelligent solutions to automate business processes.',
      location: 'Ho Chi Minh City, Vietnam',
      type: 'On-site',
      technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Docker'],
    },
  ];
}
