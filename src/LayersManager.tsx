import { type ReactNode, Component, type RefObject, createRef } from "react";

import { Provider } from "./context";


interface LayersManagerProps {
    children?: ReactNode;
}


interface LayersManagerState {
    root: HTMLDivElement | null;
    host: HTMLDivElement | null;
}


class LayersManager extends Component<LayersManagerProps, LayersManagerState> {
    private readonly root: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement>();
    private readonly host: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement>();

    constructor(props: LayersManagerProps) {
        super(props);

        this.state = {
            root: this.root.current,
            host: this.host.current,
        };
    }

    public componentDidMount(): void {
        this.setState({
            root: this.root.current,
            host: this.host.current,
        });
    }

    public render(): ReactNode {
        return (
            <Provider value={this.state}>
                <div ref={this.root} style={{ opacity: 0.9999999 }}>
                    {this.props.children}
                </div>
                <div ref={this.host} style={{ opacity: 0.9999999 }} />
            </Provider>
        );
    }
}


export default LayersManager;
