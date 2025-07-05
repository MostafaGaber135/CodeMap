export interface VideoResource {
    id: number;
    title: string;
    link: string;
    language: string;
    is_free: boolean;
    section: string;
  }
  
  export interface SectionGroup {
    section: string;
    videos: VideoResource[];
  }