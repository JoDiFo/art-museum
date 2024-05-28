export interface IArtwork {
  id: number;
  title: string;
  artist_id: number;
  artist_title: string;
  thumbnail: {
    alt_text: string;
  };
  is_public_domain: boolean;
  image_id: string;
  date_end: number;
}

export interface IDetailedArtwork {
  id: number;
  title: string;
  artist_id: number;
  thumbnail: {
    alt_text: string;
  };
  is_public_domain: boolean;
  image_id: string;
  credit_line: string;
  dimensions: string;
  gallery_title: string;
}

export interface IArtist {
  id: number;
  title: string;
  birth_date: number;
  death_date: number;
}
