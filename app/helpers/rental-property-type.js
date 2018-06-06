import { helper } from '@ember/component/helper';
const communityPropertyTypes = [
    'Condo','Townhouse','Apartmen'
];
export function rentalPropertyType([propertyType]) {
    if(communityPropertyTypes.includes(propertyType)){
        return 'Community';
    }
    return "Standalone";
}

export default helper(rentalPropertyType);
