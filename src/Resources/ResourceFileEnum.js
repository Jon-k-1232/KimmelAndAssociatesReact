import inflationReductionAct from './ResourceFiles/Inflation_Reduction_Act.pdf';
import taxGuide from './ResourceFiles/2022_Tax_Guide.pdf';
import sCorpAndCcorpRetirementPlans2022 from './ResourceFiles/S_Corp_and_C_Corp Retirement_Plans.pdf';
import soleProprietorshipAndPartnershipRetirementPlans2022 from './ResourceFiles/Sole_Proprietorship_and_Partnership_Retirement_Plans.pdf';
import estateAndTrustTaxGuide2022 from './ResourceFiles/estate_And_Trust_Tax_Guide_2022.pdf';
import inflation from '../images/inflation.jpeg';
import bookKeep from '../images/bookkeeping.jpeg';
import glassesAndEstate from '../images/glassesAndEstate.png';
import retirement from '../images/retirement.png';

/**
 * Catagories:
 * featured, individual, business, estatesAndTrusts, retirementPlanning, independentContractors
 */
const files = [
  {
    file: inflationReductionAct,
    image: inflation,
    alt: 'Generic tax image',
    displayName: 'Inflation Reduction Act of 2022',
    group: 'featured'
  },
  { file: taxGuide, image: bookKeep, alt: 'Tax Guide', displayName: '2022 Tax Guide', group: 'featured' },
  {
    file: sCorpAndCcorpRetirementPlans2022,
    image: retirement,
    alt: 'Tax Guide',
    displayName: 'S Corp and C Corp Retirement Plans 2022',
    group: 'retirementPlanning'
  },
  {
    file: soleProprietorshipAndPartnershipRetirementPlans2022,
    image: retirement,
    alt: 'Tax Guide',
    displayName: 'Sole Proprietorship and Partnership Retirement Plans 2022',
    group: 'retirementPlanning'
  },
  {
    file: estateAndTrustTaxGuide2022,
    image: glassesAndEstate,
    alt: 'Tax Guide',
    displayName: 'Estate and Trust Tax Guide 2022',
    group: 'estatesAndTrusts'
  }
  // { file: 'test C2', image: '', alt:'', displayName: '',  group: 'EstatesAndTrusts' },
  // { file: 'test D1', image: '', alt:'', displayName: '',  group: 'RetirementPlanning' },
  // { file: 'test D2', image: '', alt:'', displayName: '',  group: 'RetirementPlanning' }
  // { file: 'test E1', image: '', alt:'', displayName: '',  group: 'IndependentContractors' },
  // { file: 'test E2', image: '', alt:'', displayName: '',  group: 'IndependentContractors' }
];

export default files;
