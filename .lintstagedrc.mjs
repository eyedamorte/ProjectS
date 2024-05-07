/*
 * This script creates object with files matches for lint-staged
 * docs: https://github.com/okonet/lint-staged#using-js-configuration-files
 */

const packages = {
  client: 'client',
  server: 'server',
};

const matches = {};

for (const [packageName, packagePath] of Object.entries(packages)) {
  const globPattern = `${packagePath}/src/**/*.{js,jsx,ts,tsx}`;

  matches[globPattern] = filenames => {
    let commands = [];

    if (filenames.length === 0) return commands;

    const files = filenames.join(' ');

    commands = [
      `prettier --write ${files}`,
      `turbo run lint --filter=@lookingforaband/${packageName}`,
      `turbo run typecheck --filter=@lookingforaband/${packageName}`,
    ];

    return commands;
  };
}

export default matches;
