import { Text, TextProps } from './Themed';

export function Inter(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Inter' }]} />;
}
