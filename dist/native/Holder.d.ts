/// <reference types="react" />
import { Circle, Rect } from 'react-native-svg';
import { IContentLoaderProps } from './';
declare type DefaultProps = Pick<Required<IContentLoaderProps>, 'animate' | 'height' | 'preserveAspectRatio' | 'primaryColor' | 'rtl' | 'secondaryColor' | 'speed' | 'style' | 'width'>;
export declare const defaultProps: DefaultProps;
declare const ContentLoader: (props: IContentLoaderProps) => JSX.Element;
export { Circle, Rect };
export default ContentLoader;
//# sourceMappingURL=Holder.d.ts.map