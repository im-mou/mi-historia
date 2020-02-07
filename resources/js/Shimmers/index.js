import React from "react";
import { Shimmer, ShimmerElementType } from "office-ui-fabric-react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
const shimmerStyle = mergeStyles({
    padding: 2,
    selectors: {
        "& > .ms-Shimmer-container": {
            margin: "10px 0"
        }
    }
});

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

export const UserDataShimmer = () => {
    const line = { type: ShimmerElementType.line, height: 30, width: "45%" };
    const gap = { type: ShimmerElementType.gap, width: "5%" };
    return (
        <Fabric className={shimmerStyle}>
            <Shimmer shimmerElements={[line, gap, line]} />
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
