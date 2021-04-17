import React from 'react';
import OpportunityCard from '../cards/opportunity/OpportunityCard.jsx';
import CardsCarousel from '../cards/carousel/CardsCarousel.jsx';
import OrganizationCard from '../cards/organization/OrganizationCard.jsx';
import PersonCard from '../cards/person/PersonCard.jsx';
import NoResultsCard from '../cards/noResults/NoResultsCard.jsx';

export function getCard(result, index) {
    switch (result["type"]) {
        case "opportunity":
            return <OpportunityCard key={index} opportunity={(result["result"])}/>

        case "people":
            if (result["result"].length > 0) {
                return (
                    <CardsCarousel type="people" key={index} >
                        {(result["result"].map( (person) => 
                            <PersonCard
                                key={person.id + index}
                                picture={person.picture}
                                name={person.name}
                            />
                        ))}
                    </CardsCarousel>
                )
            }
            else {
                return <React.Fragment key={index}></React.Fragment>
            }
            
        case "organization":
            if (result["result"].length > 0) {
                return (
                    <CardsCarousel type="organization" key={index}>

                        {(result["result"].map( (organization) => 
                            <OrganizationCard
                                key={organization.id + index}
                                id={organization.id + index}
                                picture={organization.picture}
                                name={organization.name}
                                members={organization.members}
                            />
                        ))}

                    </CardsCarousel>
                )
            }
            else {
                return <NoResultsCard key={index}></NoResultsCard>
            }
            

        default:
            return <NoResultsCard key={index}></NoResultsCard>
        

    }
}