export const findByDataAtribute = (component,attr) => {
    return component.find(`[data-test='${attr}']`);
};
