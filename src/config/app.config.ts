interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Business',
  applicationName: 'Entrepreneur operating system',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read business information',
    'Read user information',
    'View accountability scorecard',
    'Attend regular meetings',
  ],
  ownerAbilities: [
    'Manage vision and strategy',
    'Manage user performance',
    'Manage business improvement',
    'Manage regular meetings',
    'Manage accountability scorecard',
    'Manage user',
    'Manage business',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1414b87b-72c6-4386-a6e2-850462dbdaf9',
};
