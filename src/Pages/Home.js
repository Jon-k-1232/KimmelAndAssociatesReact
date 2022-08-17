import Seo from '../Components/Seo/Seo';
import TopView from '../Components/TopView/TopView';
import ServiceItem from '../Components/ServiceItem/ServiceItem';
import mainHome from '../images/mainHome.jpg';
import bookkeeping from '../images/bookkeeping.jpeg';
import business from '../images/business.jpeg';
import irs from '../images/irs.jpeg';
import multi_state from '../images/multi_state.jpeg';
import trust from '../images/trust.jpeg';
import table from '../images/table.jpg';

export default function Home() {
  return (
    <div className='main'>
      <Seo />
      <TopView image={mainHome} imageAlt='Every Cent Counts.' SayingLineOne='Every Cent Counts.' />
      <div className='mainBottom'>
        <main className='contentContainer'>
          <div className='mainQoute'>
            <h2>Expert Accounting and Tax Service</h2>
            <p id='qouteHead'>
              Top rated tax specialist with over <br />
              40 years of experience
            </p>
          </div>

          <div className='serviceItemWrapper'>
            {serviceItems.map((item, key) => (
              <ServiceItem
                image={item.image}
                imageAlt={item.imageAlt}
                label={item.label}
                labelDetail={item.labelDetail}
                key={key}
                // link={item.link}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

const serviceItems = [
  {
    image: table,
    imageAlt: 'Planning outcomes together.',
    label: 'Taxes',
    labelDetail:
      'Licensed enrolled agent for all 50 states. Specializing in individual, s-corp, llc, c-corp,non-profit, and fiduciary returns.',
    link: '/about'
  },
  {
    image: irs,
    imageAlt: 'A picture of the IRS building with words IRS on building.',
    label: 'IRS Notices',
    labelDetail: 'Receive an IRS notice and have questions? We can help!',
    link: '/about'
  },
  {
    image: bookkeeping,
    imageAlt: 'A stack of binders containing invoices, and receipts.',
    label: 'Bookkeeping',
    labelDetail: 'Quickbooks, financial statements, bank financial statements, and mortgage financial statements.',
    link: '/about'
  },
  {
    image: trust,
    imageAlt: 'A piece of paper with trust written on it.',
    label: 'Trust and Estate Tax Planning',
    labelDetail: "Whether its your estate or a loved one's, we have your best interests in mind.",
    link: '/about'
  },
  {
    image: multi_state,
    imageAlt: 'A family at a travel destination.',
    label: 'Multi-State Tax Preparation',
    labelDetail: 'Whether you own a business, a vacation home, or are a US citizen abroad; we have you covered.',
    link: '/about'
  },
  {
    image: business,
    imageAlt: 'A piece of paper with a pie chart and people around it planning.',
    label: 'EIN & Business Planning',
    labelDetail: 'Not only can we help obtain an employer identification number, but we can also help setup your business for success.',
    link: '/about'
  }
];

/*
 ** To deploy to cloudflare from command line:
 ** gatsby build
 ** wrangler publish
 */
