import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User(); //Create new random user
const company = new Company(); //Create new random company
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
