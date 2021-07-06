// TODO: make pass
// // @flow

// // https://github.com/magicmark/composerize/blob/master/packages/composerize/src/index.js

// import 'core-js/fn/object/entries';

// import { getComposeJson, maybeGetComposeEntry } from './logic';

// import deepmerge from 'deepmerge';
// import parser from 'yargs-parser';
// import yamljs from 'yamljs';

// export type RawValue = string | number | boolean | [string | number | boolean];

// const getServiceName = (image: string): string => {
//     let name = image.includes('/') ? image.split('/')[1] : image;
//     name = name.includes(':') ? name.split(':')[0] : name;

//     return name;
// };

// export default (input: string): ?string => {
//     const formattedInput = input.replace(/(\s)+/g, ' ').trim();
//     const parsedInput: {
//         +_: Array<string>,
//         +[flag: string]: RawValue,
//     } = parser(formattedInput);
//     const { _: command, ...params } = parsedInput;

//     if (command[0] !== 'docker' || (command[1] !== 'run' && command[1] !== 'create')) {
//         throw new SyntaxError('must be a valid docker run/create command');
//     }

//     // The service object that we'll update
//     let service = {};

//     // Loop through the tokens and append to the service object
//     Object.entries(params).forEach(
//         // https://github.com/facebook/flow/issues/2174
//         // $FlowFixMe: Object.entries wipes out types ATOW
//         ([key, value]: [string, RawValue]) => {
//             const result = maybeGetComposeEntry(key, value);
//             if (result) {
//                 const entries = Array.isArray(result) ? result : [result];
//                 entries.forEach(entry => {
//                     // Store whatever the next entry will be
//                     const json = getComposeJson(entry);
//                     service = deepmerge(service, json);
//                 });
//             }
//         },
//     );

//     const image = command.slice(-1)[0];
//     service.image = image;

//     const serviceName = getServiceName(image);

//     // Outer template
//     const result = {
//         version: '3.3',
//         services: {
//             [serviceName]: service,
//         },
//     };

//     return yamljs.stringify(result, 9, 4).trim();
// };
