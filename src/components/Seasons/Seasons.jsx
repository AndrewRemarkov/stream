import './Seasons.scss'
import AccordionGroup from "@/components/AccordionGroup";
import seasonItems from "@/components/Seasons/seasonItems";
import Accordion from "@/components/Accordion";
import EpisodeCard from "@/components/EpisodeCard";

const Seasons = () => {
  return  (
    <AccordionGroup
      className="seasons"
      mode='dark'
      isOrderedList={false}
    >
      {seasonItems.map(({title, subtitle, episodes}, index) => (
        <Accordion
          title={title}
          subtitle={subtitle}
          titleLevelClassName='h4'
          id={`seasons-${index}`}
          name='seasons'
          isOpen={index === 1}
          key={index}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episod, index) => (
              <li className='seasons__item' key={index}>
                <EpisodeCard {...episod} />
               </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons