import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// ABOUT PAGE //
export const fetchTimelineCardsData = async () =>
{
    const {data, error} = await supabase
    .from('timeline')
    .select('*')
    .order('id', {ascending: true})

    return data || []
}





// Artist Cards Data
export async function fetchArtistsData() {
  const { data: artists, error } = await supabase
  .from('artists')
  .select('*')
  .order('id', {ascending: true})

  
  return artists || []
}



// Music Data
export const fetchMusicData = async (id) => {
    const { data, error } = await supabase
        .from('music')
        .select('*')
        .order('id', {ascending: true})

    return data;
};
fetchMusicData()


export const fetchSong = async (id) => {
  // Validate the ID to ensure it’s a positive number
  if (typeof id !== 'number' || id < 0) {
    console.error("Invalid ID:", id);
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('music')
      .select('*')
      .eq('id', id) // Filter for the specific ID
      .order('id', { ascending: true });

    if (error) {
      console.error("Error fetching song:", error.message);
      return null;
    }

    return data[0] || []; // Return the first song or null if not found
  } catch (err) {
    console.error("Unexpected error while fetching song:", err.message);
    return null;
  }
};



// Concert Data
export const fetchConcertData = async () => {
  const { data, error } = await supabase
    .from('concerts')
    .select('*')
    .order('id', {ascending: true})

  return data || []
};



document.addEventListener('DOMContentLoaded', () =>
{
  fetchTimelineCardsData()
  fetchArtistsData()
  fetchSong(0)
  fetchConcertData()
})