import { Component } from 'react';
import { Animated } from 'react-native';
import { IContentLoaderProps } from './';
declare type RequiredIContentLoaderProps = IContentLoaderProps & Pick<Required<IContentLoaderProps>, 'animate' | 'height' | 'preserveAspectRatio' | 'primaryColor' | 'rtl' | 'secondaryColor' | 'speed' | 'style' | 'width'>;
interface State {
    offset: number;
}
declare class NativeSvg extends Component<RequiredIContentLoaderProps, State> {
    state: {
        offset: number;
    };
    animatedValue: Animated.Value;
    idClip: string;
    idGradient: string;
    setAnimation: () => void;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    render(): JSX.Element;
}
export default NativeSvg;
//# sourceMappingURL=Svg.d.ts.map