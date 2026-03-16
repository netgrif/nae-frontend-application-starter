export const environment = {
    production: true,
    apiUrl: window['env']['apiUrl'] || location.origin,
    prefix: window['env']['prefix'] || '',
};
