import {getParks,useParks} from './parks/ParkProvider.js'
import {ParkSelect} from './parks/ParksSelect.js'
import {weatherDays} from './weather/WeatherList.js'
import { EaterySelect } from "./eateries/EaterySelect.js"
import { postedEatery } from "./eateries/Eatery.js"
import { attractionSelect } from './attractions/AttractionSelect.js'


getParks();
ParkSelect();
EaterySelect();
attractionSelect();