import { type ReactNode, Component } from "react";

import { Consumer, type ContextValue } from "./context";
import LayerImpl from "./LayerImpl";


export interface LayerProps {
    children?: ReactNode;
    index?: number;
    onMount?: (root: HTMLDivElement) => void;
    onUnmount?: (root: HTMLDivElement) => void;
}


class Layer extends Component<LayerProps, {}> {
    constructor(props: LayerProps) {
        super(props);
    }

    public render(): ReactNode {
        return (
            <Consumer>
                {(contextValue: ContextValue): ReactNode => contextValue.host && contextValue.root && (
                    <LayerImpl
                        {...this.props}
                        host={contextValue.host}
                        root={contextValue.root}
                    />
                )}
            </Consumer>
        );
    }
}


export default Layer;
