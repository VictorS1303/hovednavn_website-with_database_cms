export function fetchGalleryData()
{
    const galleryData = [
        {
            galleryFile: '/recordings/covers/doev.webp',
            galleryFileText: 'Studiesession til vores sang "Døv"',
            text: 'Studiesession til "Døv"',
        },
        {
            galleryFile: '/videos/doev.mp4',
            galleryFileText: 'Studiesession til vores sang "Døv"',
            text: 'Studiesession til "Døv 2"',
        },
    ]

    return galleryData || []
}
