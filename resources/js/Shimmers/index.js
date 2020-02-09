import React from "react";
import { Shimmer, ShimmerElementType, Stack } from "office-ui-fabric-react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Spinner as SP, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

const shimmerStyle = mergeStyles({
    padding: 2,
    selectors: {
        "& > .ms-Shimmer-container": {
            margin: "10px 0"
        }
    }
});

const spinnerStyles = {
    root: {
        minHeight: 500,
        width: "50%"
    }
};
const spinnerItemStyles = {
    root: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    }
};

export const StoryShimmer = () => {
    return (
        <Fabric className={shimmerStyle}>
            <Shimmer
                shimmerElements={[
                    { type: ShimmerElementType.line, width: "15%" },
                    { type: ShimmerElementType.gap, width: "51%" },
                    { type: ShimmerElementType.line, height: 24, width: "10%" },
                    { type: ShimmerElementType.gap, width: "1%" },
                    { type: ShimmerElementType.line, height: 24, width: "18%" },
                    { type: ShimmerElementType.gap, width: "1%" },
                    { type: ShimmerElementType.line, height: 24, width: "5%" }
                ]}
            />
            <Shimmer
                shimmerElements={[
                    { type: ShimmerElementType.line, height: 45 }
                ]}
            />
            <Shimmer
                shimmerElements={[
                    { type: ShimmerElementType.line, height: 200 }
                ]}
            />
        </Fabric>
    );
};

export const SettingsShimmer = () => {
    const line = { type: ShimmerElementType.line, height: 40, width: "45%" };
    const gap = { type: ShimmerElementType.gap, width: "5%" };
    return (
        <Fabric className={shimmerStyle}>
            <Shimmer shimmerElements={[line, gap, line]} />
            <Shimmer shimmerElements={[line, gap, line]} />
            <Shimmer shimmerElements={[line, gap, line]} />
            <Shimmer
                shimmerElements={[
                    { type: ShimmerElementType.line, height: 30, width: "20%" },
                    { type: ShimmerElementType.gap, width: "80%" }
                ]}
            />
        </Fabric>
    );
};

export const Spinner = () => {
    return (
        <Stack
            styles={spinnerStyles}
            horizontalAlign="center"
            verticalAlign="center"
        >
            <Stack.Item styles={spinnerItemStyles}>
                <SP size={SpinnerSize.large} />
            </Stack.Item>
        </Stack>
    );
};

export const MyPostsShimmer = () => {
    const line = { type: ShimmerElementType.line, height: 250, width: "100%" };
    return (
        <Fabric className={shimmerStyle}>
            <Shimmer shimmerElements={[line]} />
            <Shimmer shimmerElements={[line]} />
            <Shimmer shimmerElements={[line]} />
        </Fabric>
    );
};