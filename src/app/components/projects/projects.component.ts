import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Build a Spotify Connected App',
      link: 'https://www.newline.co/courses/build-a-spotify-connected-app',
      description:
        'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
      image:
        'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75',
      alt: 'Build a Spotify Connected App Newline course marketing card',
    },
    {
      title: 'Spotify Profile',
      link: 'https://www.spotify.com',
      description:
        'Web app for visualizing personalized Spotify data. View your top artists, top tracks, and recently played tracks.',
      image:
        'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75',
      alt: 'Spotify Profile web app preview',
    },
    {
      title: 'Halcyon Theme',
      link: 'https://marketplace.visualstudio.com/',
      description:
        'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
      image:
        'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75',
      alt: 'Halcyon theme for text editors',
    },
  ];
}
