import { BASE_ASSET_URL } from '../config';

/**
 * Category groups:
 * featured, individual, business, estatesAndTrusts, retirementPlanning, independentContractors
 */

// { file: 'test C2', image: '', alt:'', displayName: '',  group: 'estatesAndTrusts' },
// { file: 'test D1', image: '', alt:'', displayName: '',  group: 'retirementPlanning' },
// { file: 'test D2', image: '', alt:'', displayName: '',  group: 'retirementPlanning' }
// { file: 'test E1', image: '', alt:'', displayName: '',  group: 'independentContractors' },
// { file: 'test E2', image: '', alt:'', displayName: '',  group: 'independentContractors' }

const files = {
   2022: [
      {
         file: `${BASE_ASSET_URL}/articles/2022/inflationReductionAct2022.pdf`,
         image: `${BASE_ASSET_URL}/images/inflation.jpeg`,
         alt: 'Generic tax image',
         displayName: 'Inflation Reduction Act of 2022',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/taxGuide2022.pdf`,
         image: `${BASE_ASSET_URL}/images/bookkeeping.jpeg`,
         alt: 'Tax Guide',
         displayName: '2022 Tax Guide',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/sCorpAndCcorpRetirementPlans2022.pdf`,
         image: `${BASE_ASSET_URL}/images/retirement.png`,
         alt: 'Tax Guide',
         displayName: 'S Corp and C Corp Retirement Plans 2022',
         group: 'retirementPlanning'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/soleProprietorshipAndPartnershipRetirementPlans2022.pdf`,
         image: `${BASE_ASSET_URL}/images/retirement.png`,
         alt: 'Tax Guide',
         displayName: 'Sole Proprietorship and Partnership Retirement Plans 2022',
         group: 'retirementPlanning'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/estateAndTrustTaxGuide2022.pdf`,
         image: `${BASE_ASSET_URL}/images/glassesAndEstate.png`,
         alt: 'Tax Guide',
         displayName: 'Estate and Trust Tax Guide 2022',
         group: 'estatesAndTrusts'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/identityTheft2022.pdf`,
         image: `${BASE_ASSET_URL}/images/identity.png`,
         alt: 'identity Theft',
         displayName: 'Identity Theft And Your Taxes',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/traditionalIra2022.pdf`,
         image: `${BASE_ASSET_URL}/images/traditionalIRAs.png`,
         alt: 'Traditional IRA',
         displayName: 'Traditional IRAs',
         group: 'retirementPlanning'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/taxpayerDeath2022.pdf`,
         image: `${BASE_ASSET_URL}/images/taxPayerDeath.png`,
         alt: 'asset',
         displayName: 'Taxpayer Death 2022',
         group: 'estatesAndTrusts'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/foreignFinancialAccounts2022.pdf`,
         image: `${BASE_ASSET_URL}/images/foreignBank.png`,
         alt: 'asset',
         displayName: 'Foreign Financial Accounts 2022',
         group: 'individual'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/startingBusiness2022.pdf`,
         image: `${BASE_ASSET_URL}/images/startBusiness.png`,
         alt: 'Starting a Business 2022',
         displayName: 'Starting a Business 2022',
         group: 'business'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/highIncomeTaxes2022.pdf`,
         image: `${BASE_ASSET_URL}/images/highIncome.png`,
         alt: 'High Income Taxes 2022',
         displayName: 'High Income Taxes 2022',
         group: 'individual'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/giftTax2022.pdf`,
         image: `${BASE_ASSET_URL}/images/giftTax.png`,
         alt: 'Gift Tax 2022',
         displayName: 'Gift Tax 2022',
         group: 'individual'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/divorce2022.pdf`,
         image: `${BASE_ASSET_URL}/images/divorce.png`,
         alt: 'Divorce 2022',
         displayName: 'Divorce 2022',
         group: 'individual'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/audits2022.pdf`,
         image: `${BASE_ASSET_URL}/images/audits.png`,
         alt: 'Audits 2022',
         displayName: 'Audits 2022',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/estimatedTaxes2022.pdf`,
         image: `${BASE_ASSET_URL}/images/estimatedTaxes.png`,
         alt: 'Estimated Taxes 2022',
         displayName: 'Estimated Taxes 2022',
         group: 'business'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/taxFacts2022.pdf`,
         image: `${BASE_ASSET_URL}/images/taxFacts2022Img.png`,
         alt: 'Tax Facts 2022',
         displayName: 'Tax Facts 2022',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/employeeOrContractor2022.pdf`,
         image: `${BASE_ASSET_URL}/images/employeeOrContractor2022Img.png`,
         alt: 'Employee Or Contractor 2022',
         displayName: 'Employee Or Contractor 2022',
         group: 'independentContractors'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/sCorporations2022.pdf`,
         image: `${BASE_ASSET_URL}/images/sCorporations2022Img.png`,
         alt: 'S Corporations 2022',
         displayName: 'S Corporations 2022',
         group: 'business'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/principalResidenceSale2022.pdf`,
         image: `${BASE_ASSET_URL}/images/principalResidenceSale2022Img.png`,
         alt: 'Sale of a Principal Residence 2022',
         displayName: 'Sale of a Principal Residence 2022',
         group: 'individual'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/estatePlanning2022.pdf`,
         image: `${BASE_ASSET_URL}/images/estatePlanningImg.png`,
         alt: 'Estate Planning, Wills, Probate, and Transfer of Assets 2022',
         displayName: 'Estate Planning, Wills, Probate, and Transfer of Assets 2022',
         group: 'retirementPlanning'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/businessOwners2022.pdf`,
         image: `${BASE_ASSET_URL}/images/businessOwners2022Img.png`,
         alt: 'Business Owners—Taking Money Out of a Business 2022',
         displayName: 'Business Owners—Taking Money Out of a Business 2022',
         group: 'business'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/individualIncomeTaxExtension2022.pdf`,
         image: `${BASE_ASSET_URL}/images/individualIncomeTaxExtension2022Img.png`,
         alt: 'Extending Your Individual Income Tax Return 2022',
         displayName: 'Extending Your Individual Income Tax Return 2022',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/familiesAndChildren2022.pdf`,
         image: `${BASE_ASSET_URL}/images/familiesAndChildren2022Img.png`,
         alt: 'Families With Children 2022',
         displayName: 'Families With Children 2022',
         group: 'individual'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/businessEntityComparison2022.pdf`,
         image: `${BASE_ASSET_URL}/images/businessEntityComparison2022Img.png`,
         alt: 'Business Entity Comparison Chart 2022',
         displayName: 'Business Entity Comparison Chart 2022',
         group: 'business'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/irsNotice2022.pdf`,
         image: `${BASE_ASSET_URL}/images/irsNotice2022Img.png`,
         alt: 'Taxpayers Who Receive an IRS Notice 2022',
         displayName: 'Taxpayers Who Receive an IRS Notice 2022',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/cantPayTaxes2022.pdf`,
         image: `${BASE_ASSET_URL}/images/cantPayTaxes2022Img.png`,
         alt: 'What To Do if You Can’t Pay Your Taxes 2022',
         displayName: 'What To Do if You Can’t Pay Your Taxes 2022',
         group: 'featured'
      },
      {
         file: `${BASE_ASSET_URL}/articles/2022/reverseMortgages2022.pdf`,
         image: `${BASE_ASSET_URL}/images/reverseMortgages2022Img.png`,
         alt: 'Reverse Mortgages 2022',
         displayName: 'Reverse Mortgages 2022',
         group: 'individual'
      }
   ],
   2023: []
};

export default files;
