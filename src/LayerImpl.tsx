import { Component, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { type LayerProps } from "./Layer";


interface LayerImplProps extends LayerProps{
    host: HTMLDivElement;
    root: HTMLDivElement;
}


interface LayerImplState {
    container: HTMLDivElement | null;
}


class LayerImpl extends Component<LayerImplProps, LayerImplState> {
    constructor(props: LayerImplProps) {
        super(props);

        this.state = {
            container: null
        };
    }

    public componentDidMount(): void {
        const { host, index, onMount, root } = this.props;
        const container: HTMLDivElement = host.ownerDocument.createElement("div");
        const sibling: Element | null = typeof index === "number" && host.children[index] ? host.children[index] : null;

        if (sibling) {
            host.insertBefore(container, sibling);
        } else {
            host.appendChild(container);
        }

        this.setState({container}, (): void => {
            if (root && onMount) {
                onMount(root);
            }
        });
    }

    public componentWillUnmount(): void {
        const { container } = this.state;
        const { root, host, onUnmount } = this.props;

        if (root && onUnmount) {
            onUnmount(root);
        }

        if (host && container) {
            host.removeChild(container);
        }
    }

    public render(): ReactNode {
        const { container } = this.state;

        return container && createPortal(this.props.children, container);
    }
}


export default LayerImpl;
