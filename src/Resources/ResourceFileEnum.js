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
import taxFacts2022 from './ResourceFiles/taxFacts2022.pdf';
import employeeOrContractor2022 from './ResourceFiles/employeeOrContractor2022.pdf';
import sCorporations2022 from './ResourceFiles/sCorporations2022.pdf';
import principalResidenceSale2022 from './ResourceFiles/principalResidenceSale2022.pdf';
import estatePlanning from './ResourceFiles/estatePlanning.pdf';
import businessOwners2022 from './ResourceFiles/businessOwners2022.pdf';
import individualIncomeTaxExtension2022 from './ResourceFiles/individualIncomeTaxExtension2022.pdf';
import familiesAndChildren2022 from './ResourceFiles/familiesAndChildren2022.pdf';
import businessEntityComparison2022 from './ResourceFiles/businessEntityComparison2022.pdf';
import irsNotice2022 from './ResourceFiles/irsNotice2022.pdf';
import cantPayTaxes2022 from './ResourceFiles/cantPayTaxes2022.pdf';
import reverseMortgages2022 from './ResourceFiles/reverseMortgages2022.pdf';
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
import taxFacts2022Img from '../images/taxFacts2022Img.png';
import employeeOrContractor2022Img from '../images/employeeOrContractor2022Img.png';
import sCorporations2022Img from '../images/sCorporations2022Img.png';
import principalResidenceSale2022Img from '../images/principalResidenceSale2022Img.png';
import estatePlanningImg from '../images/estatePlanningImg.png';
import businessOwners2022Img from '../images/businessOwners2022Img.png';
import individualIncomeTaxExtension2022Img from '../images/individualIncomeTaxExtension2022Img.png';
import familiesAndChildren2022Img from '../images/familiesAndChildren2022Img.png';
import businessEntityComparison2022Img from '../images/businessEntityComparison2022Img.png';
import irsNotice2022Img from '../images/irsNotice2022Img.png';
import cantPayTaxes2022Img from '../images/cantPayTaxes2022Img.png';
import reverseMortgages2022Img from '../images/reverseMortgages2022Img.png';

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
    group: 'featured'
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
  { file: audits2022, image: audits, alt: 'Audits 2022', displayName: 'Audits 2022', group: 'featured' },
  {
    file: estimatedTaxes2022,
    image: estimatedTaxes,
    alt: 'Estimated Taxes 2022',
    displayName: 'Estimated Taxes 2022',
    group: 'business'
  },
  //TODO
  {
    file: taxFacts2022,
    image: taxFacts2022Img,
    alt: 'Tax Facts 2022',
    displayName: 'Tax Facts 2022',
    group: 'featured'
  },
  {
    file: employeeOrContractor2022,
    image: employeeOrContractor2022Img,
    alt: 'Employee Or Contractor 2022',
    displayName: 'Employee Or Contractor 2022',
    group: 'independentContractors'
  },
  {
    file: sCorporations2022,
    image: sCorporations2022Img,
    alt: 'S Corporations 2022',
    displayName: 'S Corporations 2022',
    group: 'business'
  },
  {
    file: principalResidenceSale2022,
    image: principalResidenceSale2022Img,
    alt: 'Sale of a Principal Residence 2022',
    displayName: 'Sale of a Principal Residence 2022',
    group: 'individual'
  },
  {
    file: estatePlanning,
    image: estatePlanningImg,
    alt: 'Estate Planning, Wills, Probate, and Transfer of Assets 2022',
    displayName: 'Estate Planning, Wills, Probate, and Transfer of Assets 2022',
    group: 'retirementPlanning'
  },
  {
    file: businessOwners2022,
    image: businessOwners2022Img,
    alt: 'Business Owners—Taking Money Out of a Business 2022',
    displayName: 'Business Owners—Taking Money Out of a Business 2022',
    group: 'business'
  },
  {
    file: individualIncomeTaxExtension2022,
    image: individualIncomeTaxExtension2022Img,
    alt: 'Extending Your Individual Income Tax Return 2022',
    displayName: 'Extending Your Individual Income Tax Return 2022',
    group: 'featured'
  },
  {
    file: familiesAndChildren2022,
    image: familiesAndChildren2022Img,
    alt: 'Families With Children 2022',
    displayName: 'Families With Children 2022',
    group: 'individual'
  },
  {
    file: businessEntityComparison2022,
    image: businessEntityComparison2022Img,
    alt: 'Business Entity Comparison Chart 2022',
    displayName: 'Business Entity Comparison Chart 2022',
    group: 'business'
  },
  {
    file: irsNotice2022,
    image: irsNotice2022Img,
    alt: 'Taxpayers Who Receive an IRS Notice 2022',
    displayName: 'Taxpayers Who Receive an IRS Notice 2022',
    group: 'featured'
  },
  {
    file: cantPayTaxes2022,
    image: cantPayTaxes2022Img,
    alt: 'What To Do if You Can’t Pay Your Taxes 2022',
    displayName: 'What To Do if You Can’t Pay Your Taxes 2022',
    group: 'featured'
  },
  {
    file: reverseMortgages2022,
    image: reverseMortgages2022Img,
    alt: 'Reverse Mortgages 2022',
    displayName: 'Reverse Mortgages 2022',
    group: 'individual'
  }

  // { file: 'test C2', image: '', alt:'', displayName: '',  group: 'estatesAndTrusts' },
  // { file: 'test D1', image: '', alt:'', displayName: '',  group: 'retirementPlanning' },
  // { file: 'test D2', image: '', alt:'', displayName: '',  group: 'retirementPlanning' }
  // { file: 'test E1', image: '', alt:'', displayName: '',  group: 'independentContractors' },
  // { file: 'test E2', image: '', alt:'', displayName: '',  group: 'independentContractors' }
];

export default files;
