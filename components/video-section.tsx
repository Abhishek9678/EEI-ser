"use client"

export default function VideoSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden shadow-xl h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster="https://res.cloudinary.com/dvbx2tqcg/video/upload/v1762595655/VIDEO-2024-09-17-19-29-25_yntwbh.jpg"
          >
            <source
              src="https://res.cloudinary.com/dvbx2tqcg/video/upload/v1762595655/VIDEO-2024-09-17-19-29-25_yntwbh.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
