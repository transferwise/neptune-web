const Placement = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  LEFT_TOP: 'left-top',
  RIGHT_TOP: 'right-top',
};

const PlacementValues = Object.keys(Placement).map(key => Placement[key]);

export default Placement;
export { PlacementValues };
