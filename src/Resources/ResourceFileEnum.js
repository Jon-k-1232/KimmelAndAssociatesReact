import inflationReductionAct from './ResourceFiles/Inflation_Reduction_Act.pdf';
import taxGuide from './ResourceFiles/2022_Tax_Guide.pdf';
import sCorpAndCcorpRetirementPlans2022 from './ResourceFiles/S_Corp_and_C_Corp Retirement_Plans.pdf';
import soleProprietorshipAndPartnershipRetirementPlans2022 from './ResourceFiles/Sole_Proprietorship_and_Partnership_Retirement_Plans.pdf';
import estateAndTrustTaxGuide2022 from './ResourceFiles/estate_And_Trust_Tax_Guide_2022.pdf';
import identityTheftAndTaxes from './ResourceFiles/IdentityTheft.pdf';
import traditionalIra from './ResourceFiles/traditionalIRAs.pdf';
import taxpayerDeath2022 from './ResourceFiles/taxpayerDeath2022.pdf';
import foreignFinancialAccounts2022 from './ResourceFiles/foreignFinancialAccounts2022.pdf';
import startingBusiness2022 from './ResourceFiles/startingBusiness2022.pdf';
import highIncomeTaxes2022 from './ResourceFiles/highIncomeTaxes2022.pdf';
import giftTax2022 from './ResourceFiles/giftTax2022.pdf';
import divorce2022 from './ResourceFiles/divorce2022.pdf';
import audits2022 from './ResourceFiles/audits2022.pdf';
import estimatedTaxes2022 from './ResourceFiles/estimatedTaxes2022.pdf';
import highIncome from '../images/highIncome.png';
import giftTax from '../images/giftTax.png';
import divorce from '../images/divorce.png';
import audits from '../images/audits.png';
import estimatedTaxes from '../images/estimatedTaxes.png';
import startBusiness from '../images/startBusiness.png';
import foreignBank from '../images/foreignBank.png';
import taxPayerDeath from '../images/taxPayerDeath.png';
import inflation from '../images/inflation.jpeg';
import bookKeep from '../images/bookkeeping.jpeg';
import glassesAndEstate from '../images/glassesAndEstate.png';
import retirement from '../images/retirement.png';
import identity from '../images/identity.png';
import traditionalIRAs from '../images/traditionalIRAs.png';

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
  },
  {
    file: identityTheftAndTaxes,
    image: identity,
    alt: 'identity Theft',
    displayName: 'Identity Theft And Your Taxes',
    group: 'individual'
  },
  { file: traditionalIra, image: traditionalIRAs, alt: 'Traditional IRA', displayName: 'Traditional IRAs', group: 'retirementPlanning' },
  { file: taxpayerDeath2022, image: taxPayerDeath, alt: 'asset', displayName: 'Taxpayer Death 2022', group: 'estatesAndTrusts' },
  {
    file: foreignFinancialAccounts2022,
    image: foreignBank,
    alt: 'asset',
    displayName: 'Foreign Financial Accounts 2022',
    group: 'individual'
  },
  {
    file: startingBusiness2022,
    image: startBusiness,
    alt: 'Starting a Business 2022',
    displayName: 'Starting a Business 2022',
    group: 'business'
  },
  {
    file: highIncomeTaxes2022,
    image: highIncome,
    alt: 'High Income Taxes 2022',
    displayName: 'High Income Taxes 2022',
    group: 'individual'
  },
  { file: giftTax2022, image: giftTax, alt: 'Gift Tax 2022', displayName: 'Gift Tax 2022', group: 'individual' },
  { file: divorce2022, image: divorce, alt: 'Divorce 2022', displayName: 'Divorce 2022', group: 'individual' },
  { file: audits2022, image: audits, alt: 'Audits 2022', displayName: 'Audits 2022', group: 'individual' },
  { file: estimatedTaxes2022, image: estimatedTaxes, alt: 'Estimated Taxes 2022', displayName: 'Estimated Taxes 2022', group: 'individual' }

  // { file: 'test C2', image: '', alt:'', displayName: '',  group: 'EstatesAndTrusts' },
  // { file: 'test D1', image: '', alt:'', displayName: '',  group: 'RetirementPlanning' },
  // { file: 'test D2', image: '', alt:'', displayName: '',  group: 'RetirementPlanning' }
  // { file: 'test E1', image: '', alt:'', displayName: '',  group: 'IndependentContractors' },
  // { file: 'test E2', image: '', alt:'', displayName: '',  group: 'IndependentContractors' }
];

export default files;
