import ParsePropsForTable from './ParsePropsForTable';
import propsData from '../../temp-tabular-props';

describe('ParsePropsForTable', () => {
  it('should return correct value for prop type', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.type)).toEqual({
      type: 'enum',
      allowedValues: 'Object.values(FormControlType)',
      defaultValue: 'FormControlType.TEXT',
      required: false,
    });
  });

  it('should return correct value for prop type', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.name)).toEqual({
      type: 'string',
      allowedValues: '-',
      defaultValue: '-',
      required: true,
    });
  });

  it('should return correct value for prop name', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.name)).toEqual({
      type: 'string',
      allowedValues: '-',
      defaultValue: '-',
      required: true,
    });
  });

  it('should return correct value for prop options', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.options)).toEqual({
      type: 'arrayOf',
      allowedValues: '{label, value, secondary}',
      defaultValue: '[]',
      required: false,
    });
  });

  it('should return correct value for prop mode', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.mode)).toEqual({
      type: 'enum',
      allowedValues: ['DateMode.DAY_MONTH_YEAR', 'DateMode.MONTH_YEAR'],
      defaultValue: 'DateMode.DAY_MONTH_YEAR',
      required: false,
    });
  });

  it('should return correct value for prop value', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.value)).toEqual({
      type: 'union',
      allowedValues: ['string', 'number', 'bool', 'object'],
      defaultValue: 'null',
      required: false,
    });
  });

  it('should return correct value for prop uploadProps', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.uploadProps)).toEqual({
      type: 'shape',
      allowedValues:
        '[{"animationDelay":"number"},{"csButtonText":"string"},{"csFailureText":"string"},{"csSuccessText":"string"},{"csTooLargeMessage":"string"},{"csWrongTypeMessage":"string"},{"httpOptions":"shape"},{"maxSize":"number"},{"onCancel":"func"},{"onFailure":"func"},{"onStart":"func"},{"onSuccess":"func"},{"psButtonText":"string"},{"psFailureText":"string"},{"psProcessingText":"string"},{"psSuccessText":"string"},{"size":"string"},{"usAccept":"enum"},{"usButtonText":"string"},{"usDisabled":"bool"},{"usDropMessage":"string"},{"usHelpImage":"string"},{"usLabel":"string"},{"usPlaceholder":"string"}]',
      defaultValue: '{}',
      required: false,
    });
  });

  it('should return correct value for prop Box', () => {
    expect(ParsePropsForTable(propsData.Box.props.children)).toEqual({
      type: 'union',
      allowedValues: ['arrayOf', 'node'],
      defaultValue: 'null',
      required: false,
    });
  });

  it('should return correct value for prop Box', () => {
    expect(ParsePropsForTable(propsData.Box.props.customMediaQueries)).toEqual({
      type: 'arrayOf',
      allowedValues: '{name}',
      defaultValue: 'mediaQueries',
      required: false,
    });
  });
});
