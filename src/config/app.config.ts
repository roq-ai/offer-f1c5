interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Store Manager'],
  tenantName: 'Vendor',
  applicationName: 'Offer',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
