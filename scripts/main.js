import {getParks,useParks} from './parks/ParkProvider.js'
import {ParkSelect} from './parks/ParksSelect.js'
import {weatherDays} from './weather/WeatherList.js'
import { EaterySelect } from "./eateries/EaterySelect.js"
import { postedEatery } from "./eateries/Eatery.js"
import { attractionSelect } from './attractions/AttractionSelect.js'
import {postedAttraction} from './attractions/Attraction.js'
import {checkElements} from "./itineraries/Itinerary.js"
import "./itineraries/ItineraryList.js"
import {initalizeList} from "./itineraries/ItineraryList.js"
import {selectRuner} from './states/StateSelect.js'

//getParks();
//ParkSelect();
EaterySelect();
attractionSelect();
initalizeList()
selectRuner()