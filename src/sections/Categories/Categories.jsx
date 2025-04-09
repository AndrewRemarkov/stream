import './Categories.scss'
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from "@/sections/Categories/categoryItems";

const Categories = () => {
  const slidernavigationId = 'categories-slider-navigation'

  return (
    <Section
      title="Explore our wide variety of categories"
      sectionId={'categories-title'}
      description={'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new'}
      actions={(
        <SliderNavigation
          mode={'tile'}
          id={slidernavigationId}
        />
      )}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={slidernavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories