import Plans from "@/sections/Plans";
import PlansComparison from "@/sections/PlansComparison/PlansComparison";

export const metadata = {
  title: 'Subscriptions'
}

export default () => {
  return (
    <>
      <Plans/>
      <PlansComparison />
    </>
  )
}