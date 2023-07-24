export const buildLabelFoto = (label) => {
  let newLabel;
  for (let index = 0; index < label.length; index++) {
    const character = label.charAt(index);
    if (character === character.toUpperCase()) {
      newLabel = `${label.slice(0, index)} ${label.slice(index)}`;
    }
  }
  newLabel = newLabel[0].toUpperCase() + newLabel.slice(1);
  return newLabel;
};
