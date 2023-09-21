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
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelancer profile', 'Apply for jobs', 'Submit worklogs', 'Manage applications'],
  ownerAbilities: [
    'Manage the hiring process',
    'Manage freelancer profiles',
    'Manage worklogs',
    'Manage user accounts',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/51ab8516-f058-4c56-9477-8460451ddde5',
};
