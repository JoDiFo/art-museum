export interface IArtwork {
  id: number;
  title: string;
  artist_title: string;
  thumbnail: {
    alt_text: string;
    lqip: string;
  };
  is_public_domain: boolean;
  image_id: string;
}
