import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cieemefuicxpvlvxujfh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZWVtZWZ1aWN4cHZsdnh1amZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTA4NTYsImV4cCI6MjA2Mzg2Njg1Nn0.uEBEdqwalTKZZl16FoAjCDWoU3ZrdyF2mF5vYWRNX74";
const supabase = createClient(supabaseUrl, supabaseKey);
const fetchTimelineCardsData = async () => {
  const { data, error } = await supabase.from("timeline").select("*").order("id", { ascending: true });
  return data || [];
};
fetchTimelineCardsData();
async function fetchArtistsData() {
  const { data: artists, error } = await supabase.from("artists").select("*").order("id", { descending: true });
  return artists || [];
}
fetchArtistsData();
const fetchMusicData = async (id) => {
  const { data, error } = await supabase.from("music").select("*").order("id", { ascending: true });
  return data;
};
fetchMusicData();
let currentSongId = 0;
const fetchSong = async (songNumber) => {
  try {
    const { data, error } = await supabase.from("music").select("*").eq("song_number", songNumber).single();
    if (error || !data) {
      console.error("Error fetching song:", error?.message || "Song not found");
      return null;
    }
    return data;
  } catch (err) {
    console.error("Unexpected error while fetching song:", err.message);
    return null;
  }
};
fetchSong(currentSongId);
const fetchConcertData = async () => {
  const { data, error } = await supabase.from("concerts").select("*").order("id", { ascending: true });
  return data || [];
};
fetchConcertData();
const fetchGalleryData = async () => {
  const { data, error } = await supabase.from("gallery_images").select("*").order("id", { ascending: true });
  return data || [];
};

export { fetchTimelineCardsData as a, fetchConcertData as b, fetchGalleryData as c, fetchMusicData as d, fetchArtistsData as f, supabase as s };
