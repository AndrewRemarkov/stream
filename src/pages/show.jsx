import ShowBanner from "@/sections/ShowBanner";
import MovieDetails from "@/sections/MovieDetails";
import Seasons from "@/components/Seasons";

export const metadata = {
  title: 'Stranger Things'
}

export default () => {
  return (
    <>
      <ShowBanner />
      <MovieDetails
        seasons={<Seasons />}
      />
    </>
  )
}
