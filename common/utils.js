const utils = {};

utils.printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = utils.formatPercent(count / max);

  process.stdout.write(`${count}/${max} (${percent})`);
};

utils.formatPercent = (n) => {
  return (n * 100).toFixed(2) + "%";
};

if (typeof module != "undefined") {
  module.exports = utils;
}
