import inflationReductionAct from './ResourceFiles/Inflation_Reduction_Act.pdf';
import taxGuide from './ResourceFiles/2022_Tax_Guide.pdf';
import inflation from '../images/inflation.jpeg';
import bookKeep from '../images/bookkeeping.jpeg';

const files = [
  {
    file: inflationReductionAct,
    image: inflation,
    alt: 'Generic tax image',
    displayName: 'Inflation Reduction Act of 2022',
    group: 'featured'
  },
  { file: taxGuide, image: bookKeep, alt: 'Tax Guide', displayName: '2022 Tax Guide', group: 'featured' }
  // { file: 'test B1', image: '', alt:'', displayName: '',  group: 'Business' },
  // { file: 'test B2', image: '', alt:'', displayName: '',  group: 'Business' },
  // { file: 'test C1', image: '', alt:'', displayName: '',  group: 'EstatesAndTrusts' },
  // { file: 'test C2', image: '', alt:'', displayName: '',  group: 'EstatesAndTrusts' },
  // { file: 'test D1', image: '', alt:'', displayName: '',  group: 'RetirementPlanning' },
  // { file: 'test D2', image: '', alt:'', displayName: '',  group: 'RetirementPlanning' }
  // { file: 'test E1', image: '', alt:'', displayName: '',  group: 'IndependentContractors' },
  // { file: 'test E2', image: '', alt:'', displayName: '',  group: 'IndependentContractors' }
];

export default files;
