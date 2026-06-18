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
      'First Assurance Kenya Ltd',
      'Madison Insurance Company Ltd',
      'Sanlam Allianz Kenya',
      'GA Insurance Company Ltd',
      'Old Mutual Insurance Company'
    ]
  },
  {
    key: 'banks',
    label: 'Banks',
    pillClass: 'pill--green',
    partners: ['Access Bank', 'Bank of Africa', 'Co-operative Bank', 'Equity Bank', 'HFC Bank', 'Kingdom Bank', 'Rafiki Bank', 'SBM Bank'],
    featured: ['Equity Bank', 'Co-operative Bank', 'Access Bank', 'Bank of Africa', 'HFC Bank', 'Kingdom Bank', 'Rafiki Bank', 'SBM Bank']
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
      'NRS Sacco',
      'Ruai Endelea Sacco',
      'Trans-Elite Sacco',
      'United Winner Sacco',
      'Wananchi Sacco'
    ],
    featured: [
      '2NK DT Sacco',
      'Kimisitu Sacco',
      'Karura Sacco',
      'United Winner Sacco',
      'Wananchi Sacco',
      'Trans-Elite Sacco',
      'Dandora Sacco',
      'Dimkes Sacco',
      'NRS Sacco',
      'Ruai Endelea Sacco'
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
      'Royal Conclave Credit',
      'Fincorp Credit'
    ]
  }
];

export const totalPartners = partnerGroups.reduce((sum, g) => sum + g.partners.length, 0);
