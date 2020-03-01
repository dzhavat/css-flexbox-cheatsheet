export const displayFlex = /display:\s*?flex;?/gi;
export const displayInlineFlex = /display:\s*?inline-flex;?/gi;

export const flexDirectionRow = /flex-direction:\s*?row;?/gi;
export const flexDirectionRowReverse = /flex-direction:\s*?row-reverse;?/gi;
export const flexDirectionColumn = /flex-direction:\s*?column;?/gi;
export const flexDirectionColumnReverse = /flex-direction:\s*?column-reverse;?/gi; 

export const flexRowNowrap = /flex-wrap:\s*?nowrap;?/gi;
export const flexRowWrap = /flex-wrap:\s*?wrap;?/gi;
export const flexRowWrapReverse = /flex-wrap:\s*?wrap-reverse;?/gi;

export const justifyContentFlexStart = /justify-content:\s*?flex-start;?/gi;
export const justifyContentCenter = /justify-content:\s*?center;?/gi;
export const justifyContentFlexEnd = /justify-content:\s*?flex-end;?/gi;
export const justifyContentSpaceBetween = /justify-content:\s*?space-between;?/gi;
export const justifyContentSpaceAround = /justify-content:\s*?space-around;?/gi;
export const justifyContentSpaceEvenly = /justify-content:\s*?space-evenly;?/gi;

export const alignItemsStretch = /align-items:\s*?stretch;?/gi;
export const alignItemsFlexStart = /align-items:\s*?flex-start;?/gi;
export const alignItemsCenter = /align-items:\s*?center;?/gi;
export const alignItemsFlexEnd = /align-items:\s*?flex-end;?/gi;
export const alignItemsBaseline = /align-items:\s*?baseline;?/gi;

export const alignContentStretch = /align-content:\s*?stretch;?/gi;
export const alignContentFlexStart = /align-content:\s*?flex-start;?/gi;
export const alignContentCenter = /align-content:\s*?center;?/gi;
export const alignContentFlexEnd = /align-content:\s*?flex-end;?/gi;
export const alignContentSpaceBetween = /align-content:\s*?baseline;?/gi;
export const alignContentSpaceAround = /align-content:\s*?space-around;?/gi;

export const order = /order:\s*?-?\d+;?/gi;

export const flexGrowZero = /flex-grow:\s*?0;?/gi;
export const flexGrow = /flex-grow:\s*?(?!0)\d+;?/gi;

export const flexShrinkZero = /flex-shrink:\s*?0;?/gi;
export const flexShrink = /flex-shrink:\s*?(?!0)\d+;?/gi;

export const alignSelfAuto = /align-self:(\s+)?auto[;|\s]/gi;
export const alignSelfFlexStart = /align-self:\s*?flex-start;?/gi;
export const alignSelfCenter = /align-self:\s*?center;?/gi;
export const alignSelfFlexEnd = /align-self:\s*?flex-end;?/gi;
export const alignSelfBaseline = /align-self:\s*?baseline;?/gi;
export const alignSelfStretch = /align-self:\s*?stretch;?/gi;
