export type PartnerCategory = 'insurance' | 'banks' | 'saccos' | 'mfb';

export interface PartnerGroup {
  key: PartnerCategory;
  label: string;
  pillClass: 'pill--orange' | 'pill--green' | 'pill--blue' | 'pill--purple';
  partners: string[];
  /** Names shown in the curated homepage subset, in order. */
  featured: string[];
}

export const partnerGroups: PartnerGroup[] = [
  {
    key: 'insurance',
    label: 'Insurance Companies',
    pillClass: 'pill--orange',
    partners: [
      'Africa Merchant Assurance Co.',
      'Britam Insurance',
      'Cannon Assurance Ltd',
      'CIC Insurance Group',
      'Definite Assurance Co. Ltd',
      'Fidelity Shield Insurance Co. Ltd',
      'First Assurance Kenya Ltd',
      'GA Insurance Company Ltd',
      'Geminia Insurance Company Ltd',
      'Heritage Insurance Company',
      'ICEA Lion Group',
      'Intra-Africa Insurance Company Ltd',
      'Jubilee Insurance',
      'Kenindia Assurance Co. Ltd',
      'Kenya Orient Insurance Co. Ltd',
      'Kenyan Alliance Insurance Co. Ltd',
      'Madison Insurance Company Ltd',
      'MUA Insurance Company',
      'NCBA Insurance Company',
      'Old Mutual Insurance Company',
      'Pacis Insurance Company Ltd',
      'Pioneer Insurance Company',
      'Sanlam Allianz Kenya',
      'Star Discover Insurance Ltd',
      'Takaful Insurance of Africa Ltd'
    ],
    featured: [
      'CIC Insurance Group',
      'ICEA Lion Group',
      'Heritage Insurance Company',
      'Britam Insurance',
      'Jubilee Insurance',
      'Madison Insurance Company Ltd',
      'Sanlam Allianz Kenya',
      'GA Insurance Company Ltd',
      'Pacis Insurance Company Ltd',
      'Takaful Insurance of Africa Ltd'
    ]
  },
  {
    key: 'banks',
    label: 'Banks',
    pillClass: 'pill--green',
    partners: [
      'Access Bank',
      'Bank of Africa',
      'Co-operative Bank',
      'Credit Bank',
      'Equity Bank',
      'Family Bank',
      'HFC Bank',
      'I&M Bank',
      'KCB Bank',
      'Kingdom Bank',
      'National Bank of Kenya',
      'NCBA Bank',
      'Rafiki Bank',
      'SBM Bank',
      'Stanbic Bank'
    ],
    featured: [
      'Equity Bank',
      'Co-operative Bank',
      'KCB Bank',
      'NCBA Bank',
      'Family Bank',
      'I&M Bank',
      'Stanbic Bank',
      'National Bank of Kenya',
      'SBM Bank',
      'Kingdom Bank'
    ]
  },
  {
    key: 'saccos',
    label: 'SACCOs',
    pillClass: 'pill--blue',
    partners: [
      '2NK DT Sacco',
      'Dandora Sacco',
      'Dimkes Sacco',
      'Karura Sacco',
      'Kimisitu Sacco',
      'KUSCCO',
      'NRS Sacco',
      'Police SACCO',
      'Ruai Endelea Sacco',
      'Stima SACCO',
      'Trans-Elite Sacco',
      'United Winner Sacco',
      'Wananchi Sacco'
    ],
    featured: [
      'Kimisitu Sacco',
      'Karura Sacco',
      'Stima SACCO',
      'KUSCCO',
      'United Winner Sacco',
      'Wananchi Sacco',
      'Trans-Elite Sacco',
      'Dimkes Sacco',
      'NRS Sacco',
      'Ruai Endelea Sacco',
      'Police SACCO'
    ]
  },
  {
    key: 'mfb',
    label: 'Micro-Finance Banks',
    pillClass: 'pill--purple',
    partners: [
      'Baraka Credit Ltd',
      'Busam Capital',
      'Cash and Go Credit',
      'Decimal Capital',
      'Eclof',
      'ED Partners',
      'EPA',
      'Faulu Microfinance Bank',
      'Fincorp Credit',
      'Jackfruit Microfinance',
      'Jefigs Credit',
      'Kamuthi Savings & Credit',
      'Kapematt Capital',
      'Karibu Credit',
      'Letshego Microfinance',
      'Marble Capital',
      'On It Microfinance',
      'Onepay Credit',
      'Rockland Credit',
      'Royal Conclave Credit',
      'Shalev Capital',
      'Situ Credit',
      'SMP Capital',
      'Spring Board Capital',
      'Sumac Microfinance',
      'Watu Gari Ltd',
      'Yetu Credit'
    ],
    featured: [
      'Faulu Microfinance Bank',
      'Letshego Microfinance',
      'Sumac Microfinance',
      'Eclof',
      'Decimal Capital',
      'Watu Gari Ltd',
      'Fincorp Credit'
    ]
  }
];

export const totalPartners = partnerGroups.reduce((sum, g) => sum + g.partners.length, 0);

/** Local logo paths for all partners with logos in public/logo/ */
export const LOGO_MAP: Record<string, string> = {
  // Insurance
  'Britam Insurance':                    '/logo/britam.png',
  'CIC Insurance Group':                 '/logo/cic.png',
  'Fidelity Shield Insurance Co. Ltd':   '/logo/fidelity.png',
  'GA Insurance Company Ltd':            '/logo/ga-insurance.jpg',
  'Heritage Insurance Company':          '/logo/heritage.jpg',
  'ICEA Lion Group':                     '/logo/icea.png',
  'Jubilee Insurance':                   '/logo/jubilee.jpg',
  'Kenya Orient Insurance Co. Ltd':      '/logo/orient.jpg',
  'Madison Insurance Company Ltd':       '/logo/madison.png',
  'Pacis Insurance Company Ltd':         '/logo/pacis.jpg',
  'Pioneer Insurance Company':           '/logo/pioneer.png',
  'Sanlam Allianz Kenya':                '/logo/sanlam.jpg',
  'Takaful Insurance of Africa Ltd':     '/logo/takaful.png',
  // Banks
  'Co-operative Bank':                   '/logo/coop-bank.png',
  'Credit Bank':                         '/logo/credit-bank.png',
  'Equity Bank':                         '/logo/equity-bank.png',
  'Family Bank':                         '/logo/family-bank.png',
  'I&M Bank':                            '/logo/inm-bank.png',
  'KCB Bank':                            '/logo/kcb-bank.png',
  'Kingdom Bank':                        '/logo/kingdom-bank.png',
  'National Bank of Kenya':              '/logo/national-bank.png',
  'NCBA Bank':                           '/logo/ncba-bank.png',
  'SBM Bank':                            '/logo/sbm-bank.png',
  'Stanbic Bank':                        '/logo/stanbic-bank.png',
  // SACCOs
  'Dimkes Sacco':                        '/logo/dimkes-sacco.png',
  'Karura Sacco':                        '/logo/karura-sacco.png',
  'Kimisitu Sacco':                      '/logo/kimisitu-sacco.png',
  'KUSCCO':                              '/logo/kuscco-sacco.png',
  'NRS Sacco':                           '/logo/nrs-sacco.png',
  'Police SACCO':                        '/logo/police-sacco.jpg',
  'Ruai Endelea Sacco':                  '/logo/ruai-sacco.jpg',
  'Stima SACCO':                         '/logo/stima-sacco.png',
  'Trans-Elite Sacco':                   '/logo/transelite-sacco.jpg',
  'United Winner Sacco':                 '/logo/united-sacco.png',
  'Wananchi Sacco':                      '/logo/wananchi.jpg',
  // MFBs
  'Decimal Capital':                     '/logo/decimal-micro.jpg',
  'Eclof':                               '/logo/eclof-micro.png',
  'Faulu Microfinance Bank':             '/logo/faulu-micro.jpg',
  'Fincorp Credit':                      '/logo/fincorp-micro.png',
  'Letshego Microfinance':               '/logo/letshego-micro.png',
  'Sumac Microfinance':                  '/logo/sumac-micro.png',
  'Watu Gari Ltd':                       '/logo/watu-micro.png',
};

/** Curated logos for the homepage infinite ticker */
export const TICKER_LOGOS = [
  { name: 'Equity Bank',          src: '/logo/equity-bank.png' },
  { name: 'Co-operative Bank',    src: '/logo/coop-bank.png' },
  { name: 'KCB Bank',             src: '/logo/kcb-bank.png' },
  { name: 'CIC Insurance',        src: '/logo/cic.png' },
  { name: 'ICEA Lion Group',      src: '/logo/icea.png' },
  { name: 'Heritage Insurance',   src: '/logo/heritage.jpg' },
  { name: 'Britam Insurance',     src: '/logo/britam.png' },
  { name: 'Jubilee Insurance',    src: '/logo/jubilee.jpg' },
  { name: 'Sanlam Allianz',       src: '/logo/sanlam.jpg' },
  { name: 'GA Insurance',         src: '/logo/ga-insurance.jpg' },
  { name: 'Madison Insurance',    src: '/logo/madison.png' },
  { name: 'Faulu Microfinance',   src: '/logo/faulu-micro.jpg' },
  { name: 'Letshego',             src: '/logo/letshego-micro.png' },
  { name: 'SBM Bank',             src: '/logo/sbm-bank.png' },
  { name: 'Stanbic Bank',         src: '/logo/stanbic-bank.png' },
  { name: 'Family Bank',          src: '/logo/family-bank.png' },
  { name: 'NCBA Bank',            src: '/logo/ncba-bank.png' },
  { name: 'Pacis Insurance',      src: '/logo/pacis.jpg' },
  { name: 'Kimisitu Sacco',       src: '/logo/kimisitu-sacco.png' },
  { name: 'Stima SACCO',          src: '/logo/stima-sacco.png' },
];
