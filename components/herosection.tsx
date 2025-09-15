export default function HeroSection() {
    return (
        <section className="relative ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center py-24 sm:py-32">
                <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">
                    Welcome to <span className="text-neutral-400  text-shadow-2xl text-shadow-neutral-600">OwnGallery</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-neutral-300">
                    Upload, save, and share your favorite moments in one place.  
                    Your personal gallery, built just for you.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/api/auth/signin" className="rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-gray-400  hover:bg-gray-950 border-1 border-neutral-600 shadow-xs shadow-neutral-800">
                    Get Started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-gray-400">
                    Learn more →
                    </a>
                </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <img src="https://placehold.co/600x400/1f2937/e5e7eb" alt="Gallery preview" className="rounded-xl shadow-lg ring-1 ring-gray-700" />
                </div>
            </div>
        </section>

    )
}