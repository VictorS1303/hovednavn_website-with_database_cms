export function fetchGalleryData()
{
    const galleryData = [
        {
            src: '/recordings/covers/doev.webp',
            galleryFileText: 'Studiesession til vores sang "Døv"',
            text: 'Studiesession til "Døv"',
        },
        {
            src: '/videos/doev_two.mp4',
            galleryFileText: 'Studiesession til vores sang "Døv"',
            text: 'Studiesession til "Døv 2"',
        },
    ]

    return galleryData || []
}
