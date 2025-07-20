import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// ABOUT PAGE //
export const fetchTimelineCardsData = async () =>
{
    const {data, error} = await supabase
    .from('timeline')
    .select('*')
    .order('id', {ascending: true})

    return data || []
}

fetchTimelineCardsData()



// Artist Cards Data
export async function fetchArtistsData() {
  const { data: artists, error } = await supabase
  .from('artists')
  .select('*')
  .order('id', {descending: true})

  
  return artists || []
}

fetchArtistsData()

// Fetch single artist
export async function fetchArtistBySlug(slug) {
  const { data, error } = await supabase
    .from('artists') 
    .select('*')
    .eq('artist_slug', slug)
    .single()


  return data || []
}



// Music Data
export const fetchMusicData = async (id) => {
    const { data, error } = await supabase
        .from('music')
        .select('*')
        .order('id', {ascending: true})

    return data
}
fetchMusicData()

let currentSongId = 0
export const fetchSong = async (songNumber) => {
  try {
    const { data, error } = await supabase
      .from("music")
      .select("*")
      .eq("song_number", songNumber)
      .single()

    if (error || !data) {
      console.error("Error fetching song:", error?.message || "Song not found")
      return null
    }

    return data
  } catch (err) {
    console.error("Unexpected error while fetching song:", err.message)
    return null
  }
}

// Call fetchSong with currentSongId directly (no +1)
fetchSong(currentSongId)


// Concert Data
export const fetchConcertData = async () => {
  const { data, error } = await supabase
    .from('concerts')
    .select('*')
    .order('id', {ascending: true})

  return data || []
}

fetchConcertData()

// Fetch gallery data
export const fetchGalleryData = async () => {
  const {data, error} = await supabase
    .from('gallery_images')
    .select("*")
    .order("id", { ascending: true })
    
  return data || []
}