import MovieBanner from "@/sections/MovieBanner"
import MovieDetails from "@/sections/MovieDetails"

export const metadata = {
  title: 'Film - Kantara'
}

export default () => {
  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}
